import Image from "next/image";
import BartleSection from "@/components/BartleSection";
import BartleChart from "@/components/BartleChart";
import GameSection from "@/components/GameSection";
import { games } from "@/data/games";
import { site, references } from "@/data/site";

// Menghitung rata-rata skor Bartle dari semua game,
// untuk melihat gambaran tipe pemain secara keseluruhan.
function getAverageScores() {
  const keys = ["achiever", "explorer", "socializer", "killer"];
  const result = {};

  keys.forEach((key) => {
    const total = games.reduce((sum, game) => sum + game.bartle[key], 0);
    result[key] = Math.round(total / games.length);
  });

  return result;
}

// Halaman utama artikel.
export default function Home() {
  const averageScores = getAverageScores();

  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          Game Favorit
        </a>
        <div className="navbar-links">
          <a href="#bartle">Bartle</a>
          {games.map((game) => (
            <a key={game.id} href={`#${game.id}`}>
              {game.title}
            </a>
          ))}
          <a href="#kesimpulan">Kesimpulan</a>
        </div>
      </nav>

      <header className="hero">
        <p className="eyebrow">Artikel Game</p>
        <h1>{site.title}</h1>
        <p className="hero-subtitle">{site.subtitle}</p>
        <p className="hero-meta">
          Ditulis oleh {site.author} pada {site.date}
        </p>

        {/* Kartu cover kedua game, bisa diklik untuk langsung ke bagiannya */}
        <div className="hero-covers">
          {games.map((game) => (
            <a
              key={game.id}
              href={`#${game.id}`}
              className="hero-cover"
              style={{ "--accent": game.accent }}
            >
              <Image
                src={game.cover}
                alt={`Cover game ${game.title}`}
                fill
                sizes="(max-width: 640px) 100vw, 430px"
                className="hero-cover-image"
                preload
              />
              <span className="hero-cover-text">
                <span className="hero-cover-number">{game.number}</span>
                {game.title}
              </span>
            </a>
          ))}
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2>Pendahuluan</h2>
          <p>
            Setiap orang punya alasan berbeda saat memilih game favorit. Ada
            yang suka tantangan, ada yang suka cerita, ada juga yang lebih
            menikmati waktu bermain bersama teman. Di artikel ini aku akan
            membahas dua game terbaik yang pernah aku mainkan, yaitu{" "}
            <strong>Free Fire</strong> dan <strong>It Takes Two</strong>.
          </p>
          <p>
            Pembahasannya meliputi alasan kenapa kedua game ini berkesan, bedah
            mekanik yang membuatnya seru, bukti bahwa aku benar-benar
            memainkannya, dan analisis tipe pemain berdasarkan Bartle Taxonomy.
          </p>
          <p>
            Untuk membedah mekaniknya, aku memakai kerangka{" "}
            <strong>MDA</strong> (Mechanics, Dynamics, Aesthetics) dari
            Hunicke, LeBlanc, dan Zubek. Kerangka ini membaca game dalam tiga
            lapis: <em>mekanik</em> adalah aturan dan sistem yang dibuat
            developer, <em>dinamika</em> adalah apa yang terjadi saat aturan itu
            dimainkan, dan <em>estetika</em> adalah rasa yang akhirnya dialami
            pemain, seperti tantangan (Challenge), kebersamaan (Fellowship),
            penemuan (Discovery), atau cerita (Narrative). Dengan cara ini,
            alasan sebuah game jadi favorit bisa ditelusuri sampai ke mekanik
            yang menyebabkannya.
          </p>
        </section>

        <BartleSection />

        {games.map((game) => (
          <GameSection key={game.id} game={game} />
        ))}

        <section id="kesimpulan" className="section">
          <p className="eyebrow">Penutup</p>
          <h2>Kesimpulan</h2>
          <p>
            Dua game ini terlihat sangat berbeda. Free Fire adalah game
            kompetitif yang cepat, sedangkan It Takes Two adalah game
            petualangan yang santai dan penuh kerja sama. Tapi kalau dilihat
            dari Bartle Taxonomy, keduanya punya satu kesamaan: sama-sama
            paling seru saat dimainkan bersama orang lain.
          </p>
          <p>
            Hasil bedah mekaniknya juga menunjukkan hal yang sama. Free Fire
            punya mekanik knock dan revive yang membuat anggota squad saling
            bergantung, sedangkan It Takes Two memberi Cody dan May kemampuan
            berbeda yang hanya berguna kalau digabungkan. Keduanya sama-sama
            dirancang supaya pemain harus berinteraksi, dan dari sanalah rasa
            Fellowship yang paling aku sukai muncul.
          </p>

          <div className="summary-card">
            <h3>Rata-rata skor dari kedua game</h3>
            <BartleChart scores={averageScores} />
          </div>

          <p>
            Dari hasil di atas, tipe pemain yang paling menonjol dalam diriku
            adalah <strong>Socializer</strong>, lalu disusul oleh{" "}
            <strong>Achiever</strong>. Sisi Killer dan Explorer juga ada, tapi
            muncul bergantian tergantung game yang dimainkan. Aku menikmati
            kompetisi, target yang jelas, dan hal-hal baru, tetapi alasan
            terbesarku bermain game tetaplah kebersamaan dengan teman.
          </p>
        </section>

        <section className="section references">
          <h2>Referensi</h2>
          <ol>
            {references.map((ref) => (
              <li key={ref.url}>
                {ref.text}{" "}
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.url}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="footer">
        <p>
          {site.author} &middot; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
