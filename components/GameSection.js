import { bartleTypes } from "@/data/bartle";
import BartleChart from "./BartleChart";
import EvidenceGallery from "./EvidenceGallery";

// Mencari data tipe Bartle (nama dan warna) berdasarkan key-nya.
function findType(key) {
  return bartleTypes.find((type) => type.key === key);
}

// Satu bagian artikel untuk satu game.
// Isinya: judul, info singkat, alasan, analisis Bartle, dan bukti screenshot.
export default function GameSection({ game }) {
  return (
    <section
      id={game.id}
      className="section game"
      // Warna aksen tiap game disimpan sebagai variabel CSS
      // supaya bisa dipakai oleh elemen di dalamnya.
      style={{ "--accent": game.accent }}
    >
      <header className="game-header">
        <span className="game-number">{game.number}</span>
        <div>
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
              <li key={note.type}>
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
      <EvidenceGallery items={game.evidence} />
    </section>
  );
}
