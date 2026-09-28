import Image from "next/image";

// Menampilkan kumpulan screenshot sebagai bukti bermain.
// Kalau gambar belum diisi (src bernilai null), yang tampil adalah
// kotak kosong berisi keterangan screenshot apa yang perlu ditaruh di sana.
export default function EvidenceGallery({ items }) {
  // Tidak perlu menampilkan apa pun kalau belum ada bukti.
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="evidence-grid">
      {items.map((item, index) => (
        // Screenshot lanskap diberi class "wide" supaya tampil selebar halaman.
        <figure
          key={index}
          className={item.wide ? "evidence-item wide" : "evidence-item"}
        >
          {item.src ? (
            // Screenshot bisa diklik untuk dibuka dalam ukuran penuh di tab baru.
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="evidence-frame"
            >
              {/* "contain" menjaga seluruh screenshot tetap terlihat,
                  baik yang berbentuk potret (HP) maupun lanskap (PC). */}
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes={
                  item.wide
                    ? "(max-width: 900px) 100vw, 880px"
                    : "(max-width: 700px) 100vw, 33vw"
                }
                className="evidence-image"
              />
            </a>
          ) : (
            <div className="evidence-frame evidence-empty">
              <span>Screenshot belum ditambahkan</span>
            </div>
          )}
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
