import Image from "next/image";

// Menampilkan kumpulan screenshot sebagai bukti bermain.
// Kalau gambar belum diisi (src bernilai null), yang tampil adalah
// kotak kosong berisi keterangan screenshot apa yang perlu ditaruh di sana.
export default function EvidenceGallery({ items }) {
  return (
    <div className="evidence-grid">
      {items.map((item, index) => (
        <figure key={index} className="evidence-item">
          <div className="evidence-frame">
            {item.src ? (
              // Pakai "fill" agar gambar menyesuaikan ukuran kotak,
              // jadi kita tidak perlu tahu ukuran asli screenshot-nya.
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
                className="evidence-image"
              />
            ) : (
              <div className="evidence-empty">
                <span>Screenshot belum ditambahkan</span>
              </div>
            )}
          </div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
