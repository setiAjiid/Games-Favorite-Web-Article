import { bartleTypes } from "@/data/bartle";

// Bagian yang menjelaskan teori Bartle Taxonomy sebelum masuk ke pembahasan game.
export default function BartleSection() {
  return (
    <section id="bartle" className="section">
      <p className="eyebrow">Dasar Penilaian</p>
      <h2>Apa itu Bartle Taxonomy?</h2>
      <p className="lead">
        Bartle Taxonomy adalah cara mengelompokkan pemain game berdasarkan
        motivasinya saat bermain. Teori ini dikenalkan oleh Richard Bartle
        pada tahun 1996. Menurut Bartle, setiap pemain punya empat sisi ini
        dengan kadar yang berbeda-beda, dan biasanya ada satu atau dua yang
        paling menonjol.
      </p>

      <div className="bartle-grid">
        {bartleTypes.map((type) => (
          <article
            key={type.key}
            className="bartle-card"
            style={{ borderTopColor: type.color }}
          >
            <h3>{type.name}</h3>
            <p className="bartle-short" style={{ color: type.color }}>
              {type.short}
            </p>
            <p>{type.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
