// Kumpulan fungsi untuk mengambil data dari Steam Web API.
// API key dan SteamID dibaca dari file .env.local supaya tidak ikut
// tersimpan di GitHub. Contoh isinya bisa dilihat di file .env.example.

const STEAM_API = "https://api.steampowered.com";

// Memanggil satu endpoint Steam dan mengembalikan hasilnya dalam bentuk JSON.
// Data disimpan (cache) selama 1 jam supaya tidak memanggil Steam terus-menerus.
async function steamFetch(path, params) {
  const url = new URL(STEAM_API + path);
  url.searchParams.set("key", process.env.STEAM_API_KEY);

  Object.entries(params).forEach(([name, value]) => {
    url.searchParams.set(name, value);
  });

  const response = await fetch(url, { next: { revalidate: 3600 } });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

// Mengambil data bermain satu game di Steam: nama akun, jam main, dan achievement.
// Kalau API key belum diisi atau Steam sedang bermasalah, fungsi ini mengembalikan null.
export async function getSteamGameStats(appId) {
  const steamId = process.env.STEAM_ID;

  if (!process.env.STEAM_API_KEY || !steamId) {
    return null;
  }

  try {
    // Tiga permintaan ini tidak saling bergantung, jadi dijalankan bersamaan.
    const [summaryData, ownedData, achievementData] = await Promise.all([
      steamFetch("/ISteamUser/GetPlayerSummaries/v2/", { steamids: steamId }),
      steamFetch("/IPlayerService/GetOwnedGames/v1/", {
        steamid: steamId,
        include_appinfo: "true",
      }),
      steamFetch("/ISteamUserStats/GetPlayerAchievements/v1/", {
        steamid: steamId,
        appid: appId,
        l: "english",
      }),
    ]);

    const player = summaryData?.response?.players?.[0];
    const game = ownedData?.response?.games?.find((item) => item.appid === appId);
    const achievements = achievementData?.playerstats?.achievements ?? [];

    // Tanpa data game, tidak ada yang bisa ditampilkan.
    if (!game) {
      return null;
    }

    const unlocked = achievements.filter((item) => item.achieved === 1);

    // Tiga achievement yang paling baru didapat.
    const recentAchievements = [...unlocked]
      .sort((a, b) => b.unlocktime - a.unlocktime)
      .slice(0, 3)
      .map((item) => ({
        name: item.name ?? item.apiname,
        unlockedAt: new Date(item.unlocktime * 1000),
      }));

    return {
      playerName: player?.personaname ?? "Pemain Steam",
      avatar: player?.avatarfull ?? null,
      profileUrl: player?.profileurl ?? null,
      // playtime_forever dari Steam dihitung dalam menit, jadi diubah ke jam.
      hoursPlayed: Math.round((game.playtime_forever / 60) * 10) / 10,
      lastPlayed: game.rtime_last_played
        ? new Date(game.rtime_last_played * 1000)
        : null,
      achievedCount: unlocked.length,
      totalAchievements: achievements.length,
      recentAchievements,
    };
  } catch {
    return null;
  }
}
