# Dua Game Terbaik yang Pernah Aku Mainkan

Web artikel tentang Free Fire dan It Takes Two, lengkap dengan alasan, bukti bermain, dan analisis tipe pemain berdasarkan Bartle Taxonomy. Dibuat dengan Next.js.

## Cara menjalankan

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000 di browser.

## Struktur folder

```
app/
  layout.js        Layout utama (font, judul tab browser)
  page.js          Halaman artikel
  globals.css      Semua styling web
components/
  BartleSection.js    Penjelasan empat tipe pemain Bartle
  GameSection.js      Satu bagian artikel untuk satu game
  GameAutopsy.js      Bedah game: core loop, mekanik, MDA, kekurangan
  BartleChart.js      Grafik batang skor Bartle
  EvidenceGallery.js  Galeri screenshot bukti
data/
  site.js          Judul, nama penulis, tanggal, referensi
  bartle.js        Penjelasan tipe pemain Bartle
  games.js         Isi artikel untuk setiap game
public/bukti/      Tempat menyimpan screenshot bukti
```

## Mengisi data pribadi

1. Ganti nama penulis di `data/site.js`.
2. Isi bagian `stats` di `data/games.js` (rank, jam main, dan lainnya).
3. Simpan screenshot di `public/bukti`, lalu isi `src` pada bagian `evidence` di `data/games.js`, contohnya `src: "/bukti/ff-profil.jpg"`.
