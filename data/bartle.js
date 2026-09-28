// Penjelasan singkat empat tipe pemain menurut Richard Bartle.
// Bartle membagi pemain berdasarkan dua hal: apakah pemain lebih suka
// berinteraksi dengan dunia game atau dengan pemain lain, dan apakah
// pemain lebih suka bertindak (acting) atau berinteraksi (interacting).

export const bartleTypes = [
  {
    key: "achiever",
    name: "Achiever",
    color: "#f5b942",
    short: "Mengejar pencapaian",
    description:
      "Senang mengumpulkan poin, naik level, membuka achievement, dan menyelesaikan target. Kepuasannya datang dari bukti bahwa dirinya sudah berhasil.",
  },
  {
    key: "explorer",
    name: "Explorer",
    color: "#4fb3f6",
    short: "Mengejar rasa penasaran",
    description:
      "Senang menjelajah dunia game, mencari rahasia, dan memahami cara kerja mekanik di dalamnya. Yang dicari adalah hal baru yang belum pernah dilihat.",
  },
  {
    key: "socializer",
    name: "Socializer",
    color: "#f06292",
    short: "Mengejar kebersamaan",
    description:
      "Bermain untuk berinteraksi dengan orang lain. Game menjadi tempat ngobrol, kerja sama, dan membangun hubungan dengan teman.",
  },
  {
    key: "killer",
    name: "Killer",
    color: "#ef5350",
    short: "Mengejar kompetisi",
    description:
      "Senang bersaing dan mengalahkan pemain lain secara langsung. Kepuasannya muncul saat berhasil unggul dari lawan yang juga manusia.",
  },
];
