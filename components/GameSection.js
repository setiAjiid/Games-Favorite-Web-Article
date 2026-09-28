import Image from "next/image";
import { bartleTypes } from "@/data/bartle";
import BartleChart from "./BartleChart";
import EvidenceGallery from "./EvidenceGallery";
import SteamStats from "./SteamStats";

// Mencari data tipe Bartle (nama dan warna) berdasarkan key-nya.
function findType(key) {
  return bartleTypes.find((type) => type.key === key);
}

// Satu bagian artikel untuk satu game.
// Isinya: cover, info singkat, alasan, analisis Bartle, dan bukti bermain.
export default function GameSection({ game }) {
  return (
    <section
      id={game.id}
      className="section game"
      // Warna aksen tiap game disimpan sebagai variabel CSS
      // supaya bisa dipakai oleh elemen di dalamnya.
      style={{ "--accent": game.accent }}
    >
      {/* Banner cover game dengan judul di atasnya */}
      <header className="game-banner">
        <Image
          src={game.cover}
          alt={`Cover game ${game.title}`}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="game-banner-image"
        />
        <div className="game-banner-text">
          <span className="game-number">{game.number}</span>
          <h2>{game.title}</h2>
          <p className="game-tagline">{game.tagline}</p>
        </div>
      </header>

      <dl className="game-info">
        {game.info.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <p className="lead">{game.intro}</p>

      <h3>Kenapa game ini jadi favorit</h3>
      <ol className="reason-list">
        {game.reasons.map((reason) => (
          <li key={reason.title}>
            <h4>{reason.title}</h4>
            <p>{reason.text}</p>
          </li>
        ))}
      </ol>

      <h3>Dilihat dari Bartle Taxonomy</h3>
      <div className="bartle-analysis">
        <BartleChart scores={game.bartle} />

        <ul className="bartle-notes">
          {game.bartleNotes.map((note) => {
            const type = findType(note.type);

            return (
              <li key={note.type} style={{ borderLeftColor: type.color }}>
                <strong style={{ color: type.color }}>{type.name}</strong>
                <p>{note.text}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <h3>Bukti bermain</h3>
      <dl className="stat-list">
        {game.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>

      {/* Kartu Steam hanya muncul untuk game yang punya steamAppId */}
      {game.steamAppId && <SteamStats appId={game.steamAppId} />}

      <EvidenceGallery items={game.evidence} />
    </section>
  );
}
