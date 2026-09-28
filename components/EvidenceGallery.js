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
      {items.map((item, index) => {
        // Kalau ratio tidak diisi, anggap gambarnya persegi.
        const ratio = item.ratio ?? 1;

        return (
          <figure
            key={index}
            className="evidence-item"
            // Lebar tiap gambar dibuat sebanding dengan ratio-nya,
            // sehingga gambar yang berada dalam satu baris tingginya sama.
            style={{ flexGrow: ratio, flexBasis: `${ratio * 220}px` }}
          >
            {item.src ? (
              // Klik gambar untuk membuka versi lengkapnya di tab baru.
              <a
                href={item.full ?? item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="evidence-frame"
                style={{ aspectRatio: ratio }}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 900px) 100vw, 880px"
                  className="evidence-image"
                />
              </a>
            ) : (
              <div
                className="evidence-frame evidence-empty"
                style={{ aspectRatio: ratio }}
              >
                <span>Screenshot belum ditambahkan</span>
              </div>
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
