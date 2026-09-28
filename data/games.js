// Isi artikel untuk setiap game.
// Semua tulisan dikumpulkan di file ini supaya komponen tetap rapi.
// Kalau ingin mengubah isi artikel, cukup edit bagian teks di sini.
//
// Catatan untuk bagian "stats" dan "evidence":
// - stats berisi data pribadi kamu (rank, jam main, dan sebagainya).
//   Selama masih "Belum diisi", tulisan itu akan tampil apa adanya di web.
// - evidence berisi screenshot bukti. Simpan gambarnya di folder public/bukti,
//   lalu isi src dengan path-nya, misalnya "/bukti/ff-profil.jpg".
//   Kalau src masih null, web akan menampilkan kotak kosong sebagai pengingat.

export const games = [
  {
    id: "free-fire",
    number: "01",
    title: "Free Fire",
    tagline: "Sepuluh menit yang selalu bikin deg-degan.",
    accent: "#ff8a3d",
    info: [
      { label: "Developer", value: "111 Dots Studio (Garena)" },
      { label: "Rilis", value: "2017" },
      { label: "Genre", value: "Battle Royale" },
      { label: "Platform", value: "Android, iOS" },
    ],
    intro:
      "Free Fire adalah game battle royale di mana 50 pemain diterjunkan ke sebuah pulau, mencari senjata, lalu bertarung sampai tersisa satu orang atau satu tim terakhir. Satu pertandingan hanya berlangsung sekitar sepuluh menit, dan game ini tetap ringan dijalankan di HP dengan spesifikasi biasa. Karena itu Free Fire jadi game yang paling sering aku mainkan, entah sendirian atau bareng teman.",
    stats: [
      { label: "Mulai bermain", value: "Belum diisi" },
      { label: "Rank tertinggi", value: "Belum diisi" },
      { label: "Mode favorit", value: "Belum diisi" },
    ],
    reasons: [
      {
        title: "Pertandingan singkat tapi intens",
        text: "Satu match cukup sekitar sepuluh menit, jadi bisa dimainkan di sela waktu istirahat. Walaupun singkat, zona yang terus menyempit membuat setiap detik terasa menegangkan sampai akhir.",
      },
      {
        title: "Seru dimainkan bareng teman",
        text: "Mode squad membuat Free Fire jadi tempat nongkrong online. Kami bisa atur strategi lewat voice chat, saling revive, dan berbagi loot. Kemenangan yang didapat bareng tim rasanya jauh lebih memuaskan.",
      },
      {
        title: "Ada target yang terus bisa dikejar",
        text: "Sistem rank dari Bronze sampai Grandmaster selalu memberi alasan untuk main satu match lagi. Setiap season juga ada misi, event, dan hadiah baru yang bikin progres terasa jelas.",
      },
      {
        title: "Ringan dan mudah diakses",
        text: "Game ini bisa berjalan lancar di HP yang tidak terlalu mahal, jadi hampir semua teman bisa ikut main. Hal sederhana ini yang membuat komunitas Free Fire di sekitarku sangat besar.",
      },
    ],
    // Nilai 0 sampai 100, menunjukkan seberapa kuat game ini memuaskan tiap tipe pemain dalam diriku.
    bartle: {
      achiever: 80,
      explorer: 35,
      socializer: 75,
      killer: 90,
    },
    bartleNotes: [
      {
        type: "killer",
        text: "Inti Free Fire adalah mengalahkan pemain lain. Rasa puas saat menang duel jarak dekat atau mendapat Booyah! adalah bentuk paling jelas dari sisi Killer.",
      },
      {
        type: "achiever",
        text: "Naik rank, menyelesaikan misi harian, dan mengumpulkan skin adalah target yang terukur. Setiap kenaikan tier terasa seperti bukti nyata dari usaha yang sudah dilakukan.",
      },
      {
        type: "socializer",
        text: "Sebagian besar waktu bermain dihabiskan di mode squad bersama teman. Obrolan di voice chat sering sama serunya dengan pertandingan itu sendiri.",
      },
      {
        type: "explorer",
        text: "Sisi Explorer tidak terlalu dominan di sini. Peta memang bisa dijelajahi, tapi tujuan utamanya tetap bertahan hidup, bukan mencari rahasia.",
      },
    ],
    evidence: [
      {
        src: null,
        caption: "Halaman profil akun Free Fire (level dan rank).",
      },
      {
        src: null,
        caption: "Riwayat pertandingan atau layar Booyah!.",
      },
      {
        src: null,
        caption: "Free Fire di daftar aplikasi Google Play Store.",
      },
    ],
  },
  {
    id: "it-takes-two",
    number: "02",
    title: "It Takes Two",
    tagline: "Game yang memang tidak bisa dimainkan sendirian.",
    accent: "#7c9cff",
    info: [
      { label: "Developer", value: "Hazelight Studios" },
      { label: "Rilis", value: "2021" },
      { label: "Genre", value: "Co-op Action Adventure" },
      { label: "Platform", value: "PC, PlayStation, Xbox, Switch" },
    ],
    intro:
      "It Takes Two bercerita tentang Cody dan May, pasangan suami istri yang hampir bercerai. Karena sebuah kejadian aneh, mereka berubah menjadi boneka kecil dan harus bekerja sama untuk kembali ke tubuh aslinya. Game ini wajib dimainkan berdua, baik di satu layar maupun online. Game ini juga memenangkan penghargaan Game of the Year di The Game Awards 2021.",
    stats: [
      { label: "Total jam main", value: "Belum diisi" },
      { label: "Achievement", value: "Belum diisi" },
      { label: "Main bareng", value: "Belum diisi" },
    ],
    reasons: [
      {
        title: "Kerja sama yang benar-benar dibutuhkan",
        text: "Hampir setiap rintangan hanya bisa dilewati kalau kedua pemain saling membantu. Satu pemain membuka jalan, pemain lain melanjutkannya. Komunikasi jadi kunci utama, dan itu membuat pengalaman bermainnya terasa hidup.",
      },
      {
        title: "Mekanik baru di setiap chapter",
        text: "Setiap chapter memberi kemampuan yang berbeda, mulai dari paku dan palu, magnet, sampai manipulasi waktu. Rasanya seperti memainkan beberapa game berbeda dalam satu cerita, jadi tidak pernah membosankan.",
      },
      {
        title: "Minigame yang bikin saling adu",
        text: "Di sepanjang cerita tersebar minigame kecil yang bisa dimainkan untuk saling mengalahkan partner. Momen ini selalu jadi bahan tawa dan saling ejek yang seru.",
      },
      {
        title: "Cerita yang hangat",
        text: "Di balik semua keseruannya, ceritanya membahas hubungan, komunikasi, dan cara memahami orang lain. Tema itu terasa pas dengan cara game ini dimainkan, yaitu berdua.",
      },
    ],
    bartle: {
      achiever: 55,
      explorer: 85,
      socializer: 95,
      killer: 30,
    },
    bartleNotes: [
      {
        type: "socializer",
        text: "Game ini dirancang untuk dua orang, jadi interaksi dengan partner adalah inti permainannya. Ini adalah contoh paling kuat dari sisi Socializer.",
      },
      {
        type: "explorer",
        text: "Setiap level punya dunia, mekanik, dan rahasia baru untuk ditemukan. Rasa penasaran tentang apa yang ada di chapter berikutnya membuat aku terus bermain.",
      },
      {
        type: "achiever",
        text: "Menyelesaikan cerita sampai tamat dan mengumpulkan achievement di Steam memberi rasa puas tersendiri, walaupun bukan tujuan utama.",
      },
      {
        type: "killer",
        text: "Sisi kompetitif hanya muncul di minigame, saat aku dan partner saling adu. Porsinya kecil, tapi tetap seru.",
      },
    ],
    evidence: [
      {
        src: null,
        caption: "It Takes Two di library Steam beserta jumlah jam bermain.",
      },
      {
        src: null,
        caption: "Halaman achievement It Takes Two di Steam.",
      },
      {
        src: null,
        caption: "Screenshot saat bermain bersama partner.",
      },
    ],
  },
];
