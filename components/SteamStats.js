import Image from "next/image";
import { getSteamGameStats } from "@/lib/steam";

// Mengubah objek Date menjadi teks tanggal berbahasa Indonesia, misalnya "12 Maret 2025".
function formatDate(date) {
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Kartu yang menampilkan data bermain asli dari akun Steam.
// Komponen ini async karena harus menunggu data dari Steam lebih dulu.
export default async function SteamStats({ appId }) {
  const stats = await getSteamGameStats(appId);

  // Tampilan cadangan kalau data Steam gagal dimuat.
  if (!stats) {
    return (
      <div className="steam-card steam-card-empty">
        <p>Data Steam belum bisa dimuat.</p>
      </div>
    );
  }

  const progress =
    stats.totalAchievements > 0
      ? Math.round((stats.achievedCount / stats.totalAchievements) * 100)
      : 0;

  return (
    <div className="steam-card">
      <div className="steam-header">
        {stats.avatar && (
          <Image
            src={stats.avatar}
            alt={`Foto profil Steam ${stats.playerName}`}
            width={52}
            height={52}
            className="steam-avatar"
          />
        )}
        <div>
          <p className="steam-label">Data langsung dari Steam</p>
          <p className="steam-name">
            {stats.profileUrl ? (
              <a href={stats.profileUrl} target="_blank" rel="noopener noreferrer">
                {stats.playerName}
              </a>
            ) : (
              stats.playerName
            )}
          </p>
        </div>
      </div>

      <div className="steam-numbers">
        <div>
          <span className="steam-number">{stats.hoursPlayed}</span>
          <span className="steam-unit">jam bermain</span>
        </div>
        {/* Achievement hanya ditampilkan kalau datanya berhasil diambil dari Steam */}
        {stats.totalAchievements > 0 && (
          <div>
            <span className="steam-number">
              {stats.achievedCount}/{stats.totalAchievements}
            </span>
            <span className="steam-unit">achievement</span>
          </div>
        )}
      </div>

      {stats.totalAchievements > 0 && (
        <div className="steam-progress">
          <div className="steam-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      )}

      {stats.recentAchievements.length > 0 && (
        <div className="steam-recent">
          <p className="steam-label">Achievement terbaru</p>
          <ul>
            {stats.recentAchievements.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <span className="steam-date">{formatDate(item.unlockedAt)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {stats.lastPlayed && (
        <p className="steam-footnote">
          Terakhir dimainkan {formatDate(stats.lastPlayed)}
        </p>
      )}
    </div>
  );
}
