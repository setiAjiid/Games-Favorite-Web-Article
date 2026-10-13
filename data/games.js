// Isi artikel untuk setiap game.
// Semua tulisan dikumpulkan di file ini supaya komponen tetap rapi.
// Kalau ingin mengubah isi artikel, cukup edit bagian teks di sini.
//
// Catatan untuk bagian "cover", "stats", "evidence", dan "steamAppId":
// - cover adalah gambar sampul game yang disimpan di folder public/cover.
// - stats berisi data pribadi kamu (rank, jam main, dan sebagainya).
//   Selama masih "Belum diisi", tulisan itu akan tampil apa adanya di web.
// - evidence berisi screenshot bukti. Simpan gambarnya di folder public/bukti,
//   lalu isi src dengan path-nya, misalnya "/bukti/ff-profil.jpg".
//   Kalau src masih null, web akan menampilkan kotak kosong sebagai pengingat.
//   ratio adalah perbandingan lebar dan tinggi gambar (lebar / tinggi).
//   Nilai ini dipakai agar gambar dalam satu baris tingginya sama rata.
//   full (opsional) adalah gambar versi lengkap yang dibuka saat gambar diklik.
// - steamAppId (opsional) membuat web menampilkan data asli dari akun Steam.
// - autopsy berisi bedah game: core loop (loop), mekanik utama (mechanics),
//   tabel MDA (mda: mekanik -> dinamika -> rasa), dan kekurangan (flaws).

export const games = [
  {
    id: "free-fire",
    number: "01",
    title: "Free Fire",
    tagline: "Sepuluh menit yang selalu bikin deg-degan.",
    accent: "#ff8a3d",
    cover: "/cover/free-fire.jpg",
    info: [
      { label: "Developer", value: "111 Dots Studio (Garena)" },
      { label: "Rilis", value: "2017" },
      { label: "Genre", value: "Battle Royale" },
      { label: "Platform", value: "Android, iOS" },
    ],
    intro:
      "Free Fire adalah game battle royale di mana 50 pemain diterjunkan ke sebuah pulau, mencari senjata, lalu bertarung sampai tersisa satu orang atau satu tim terakhir. Satu pertandingan hanya berlangsung sekitar sepuluh menit, dan game ini tetap ringan dijalankan di HP dengan spesifikasi biasa. Karena itu Free Fire jadi game yang paling sering aku mainkan, entah sendirian atau bareng teman. Menurut catatan Google Play Games, aku sudah menghabiskan 409 jam di game ini.",
    stats: [
      { label: "Total jam main", value: "409 jam" },
      { label: "Level Google Play", value: "Prodigy" },
      { label: "Rank tertinggi", value: "Heroic (9 season)" },
      { label: "Level akun", value: "Lv 74" },
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
    autopsy: {
      summary:
        "Kalau dibedah, Free Fire sebenarnya dibangun dari aturan yang sederhana: bertahan hidup paling lama. Yang membuatnya nagih adalah cara setiap mekanik saling mendorong pemain untuk mengambil keputusan cepat, bertemu musuh, lalu bertarung. Tidak ada satu pertandingan pun yang berjalan sama persis.",
      loop: [
        "Terjun dari pesawat",
        "Cari senjata dan perlengkapan",
        "Bergerak mengikuti zona aman",
        "Bertarung dengan pemain lain",
        "Booyah! atau gugur, dapat poin rank",
      ],
      loopNote:
        "Satu putaran ini selesai dalam sekitar sepuluh menit. Hasilnya langsung terlihat di poin rank, jadi selalu ada dorongan untuk masuk ke putaran berikutnya.",
      mechanics: [
        {
          name: "Memilih titik mendarat",
          how: "Pesawat melintas di atas peta dan setiap pemain bebas menentukan kapan melompat. Titik yang ramai biasanya punya loot bagus tapi penuh musuh, sedangkan titik yang sepi lebih aman tapi perlengkapannya sedikit.",
          impact:
            "Keputusan pertama sudah berisiko sejak detik awal. Aku dan tim sering berdebat mau turun di kota yang ramai atau main aman di pinggir peta.",
        },
        {
          name: "Loot dan level perlengkapan",
          how: "Senjata, attachment, rompi, helm, tas, dan obat tersebar acak di peta. Rompi dan helm punya beberapa level, dan perlengkapan terbaik biasanya ada di airdrop yang dijatuhkan di tengah pertandingan.",
          impact:
            "Karena lootnya acak, setiap match terasa berbeda. Mengejar airdrop juga selalu jadi taruhan antara hadiah besar dan risiko diserang.",
        },
        {
          name: "Zona aman yang terus menyempit",
          how: "Area bermain mengecil secara bertahap. Pemain yang berada di luar zona akan terus kehilangan HP, sehingga semua orang dipaksa bergerak ke titik yang sama.",
          impact:
            "Mekanik ini yang membuat tempo game makin cepat menjelang akhir. Tidak bisa terus bersembunyi, jadi pertarungan pasti terjadi.",
        },
        {
          name: "Gloo Wall",
          how: "Granat khusus yang langsung memunculkan dinding es sebagai tempat berlindung. Dinding ini bisa dipasang kapan saja, misalnya saat terdesak di tempat terbuka.",
          impact:
            "Ini mekanik khas Free Fire. Duel jarak dekat jadi adu cepat memasang Gloo Wall, lalu menyerang balik. Bisa menang duel karena refleks seperti ini rasanya sangat memuaskan.",
        },
        {
          name: "Karakter dengan skill",
          how: "Setiap karakter punya skill aktif atau pasif, misalnya Alok yang bisa memulihkan HP dan menambah kecepatan, atau Chrono yang memunculkan perisai. Pemain bisa memilih kombinasi skill sesuai gaya bermainnya.",
          impact:
            "Aku bisa menyusun gaya main sendiri, mau agresif atau bertahan. Dalam satu squad, kombinasi skill antaranggota juga bisa diatur supaya saling melengkapi.",
        },
        {
          name: "Knock dan revive",
          how: "Di mode squad, pemain yang HP-nya habis tidak langsung mati tapi terjatuh (knock) dan hanya bisa merangkak. Teman satu tim bisa menolongnya berdiri lagi (revive) sebelum ia dihabisi musuh.",
          impact:
            "Mekanik ini yang membuat kerja sama terasa penting. Momen menyelamatkan teman di tengah tembakan sering jadi cerita yang dibahas lagi setelah match selesai.",
        },
        {
          name: "Rank, season, dan Clash Squad",
          how: "Poin rank didapat dari posisi akhir dan jumlah kill, lalu direset setiap season. Selain Battle Royale, ada mode Clash Squad 4 lawan 4 berbasis ronde, di mana senjata dibeli memakai koin di awal setiap ronde.",
          impact:
            "Setiap match punya taruhan yang jelas karena poin bisa naik atau turun. Clash Squad juga memberi variasi kalau sedang ingin pertarungan langsung tanpa perlu mencari loot.",
        },
      ],
      mda: [
        {
          mechanic: "Zona aman yang menyempit",
          dynamic: "Pemain dipaksa bertemu, tempo makin cepat di akhir match",
          aesthetic: "Challenge: tegang dan deg-degan",
        },
        {
          mechanic: "Gloo Wall dan skill karakter",
          dynamic: "Duel jadi adu refleks dan kreativitas",
          aesthetic: "Challenge dan Expression: merasa jago dengan gaya sendiri",
        },
        {
          mechanic: "Knock, revive, dan voice chat",
          dynamic: "Saling jaga, berbagi loot, atur strategi bareng",
          aesthetic: "Fellowship: seru karena bersama teman",
        },
        {
          mechanic: "Loot acak dan titik mendarat bebas",
          dynamic: "Setiap match punya situasi yang berbeda",
          aesthetic: "Discovery: selalu ada kejutan",
        },
        {
          mechanic: "Match singkat dan poin rank",
          dynamic: "Mudah tergoda main satu match lagi",
          aesthetic: "Submission: jadi pengisi waktu santai yang nagih",
        },
      ],
      flaws: [
        {
          title: "Cheater masih sering ditemukan",
          text: "Di rank tinggi kadang bertemu pemain yang memakai cheat, dan ini sangat merusak rasa adil dalam pertandingan.",
        },
        {
          title: "Monetisasi yang agresif",
          text: "Banyak skin, karakter, dan pet dijual lewat top-up dan sistem undian. Sebagian memberi skill yang berpengaruh ke permainan, sehingga ada kesan pay-to-win.",
        },
        {
          title: "Kurang seru kalau main sendirian",
          text: "Mode solo terasa jauh lebih sepi. Sebagian besar keseruan Free Fire buatku memang datang dari main bareng squad.",
        },
      ],
    },
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
        src: "/bukti/ff-profil.png",
        ratio: 1600 / 718,
        caption:
          "Profil akun Free Fire EVOS.AIMLESS dengan level 74 dan emblem Heroic.",
      },
      {
        src: "/bukti/ff-rank-heroic.png",
        ratio: 1069 / 480,
        caption:
          "Riwayat rank Crowned Glory 2026: sudah 9 kali mencapai Heroic, di Battle Royale (S49 sampai S53) dan Clash Squad (S35 sampai S38).",
      },
      {
        src: "/bukti/ff-prodigy.png",
        full: "/bukti/ff-jam-main-google-play.png",
        ratio: 720 / 500,
        caption:
          "Google Play Games mencatat 409 jam bermain Free Fire dengan level Prodigy.",
      },
    ],
  },
  {
    id: "it-takes-two",
    number: "02",
    title: "It Takes Two",
    tagline: "Game yang memang tidak bisa dimainkan sendirian.",
    accent: "#7c9cff",
    cover: "/cover/it-takes-two.jpg",
    // ID game di Steam, dipakai untuk mengambil jam main dan achievement secara otomatis.
    steamAppId: 1426210,
    info: [
      { label: "Developer", value: "Hazelight Studios" },
      { label: "Rilis", value: "2021" },
      { label: "Genre", value: "Co-op Action Adventure" },
      { label: "Platform", value: "PC, PlayStation, Xbox, Switch" },
    ],
    intro:
      "It Takes Two bercerita tentang Cody dan May, pasangan suami istri yang hampir bercerai. Karena sebuah kejadian aneh, mereka berubah menjadi boneka kecil dan harus bekerja sama untuk kembali ke tubuh aslinya. Game ini wajib dimainkan berdua, baik di satu layar maupun online. Game ini juga memenangkan penghargaan Game of the Year di The Game Awards 2021.",
    stats: [
      { label: "Platform main", value: "Steam (PC)" },
      { label: "Main bareng", value: "Teman (co-op online)" },
    ],
    reasons: [
      {
        title: "Kenangan main bareng teman",
        text: "Hal yang paling berkesan dari It Takes Two adalah momen memainkannya bersama teman. Puzzle di game ini dirancang supaya tidak bisa diselesaikan sendirian. Kami harus saling ngobrol, mencoba berbagai cara, kadang salah paham, lalu akhirnya berhasil bareng. Rasa senang saat satu puzzle akhirnya terpecahkan itulah yang membuat game ini terus teringat.",
      },
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
    autopsy: {
      summary:
        "Kalau dibedah, kunci It Takes Two ada pada satu aturan desain: kedua pemain selalu diberi kemampuan yang berbeda, dan rintangan hanya bisa dilewati kalau kemampuan itu digabungkan. Aturan ini diulang di setiap chapter dengan alat yang selalu baru, sehingga kerja sama tidak pernah terasa membosankan.",
      loop: [
        "Masuk chapter baru",
        "Cody dan May dapat kemampuan berbeda",
        "Coba dan gabungkan kemampuan",
        "Selesaikan puzzle dan boss",
        "Cerita berlanjut, kemampuan diganti",
      ],
      loopNote:
        "Berbeda dengan Free Fire yang mengulang hal yang sama, putaran di It Takes Two selalu membawa mekanik baru. Yang tetap sama hanyalah satu hal: harus dikerjakan berdua.",
      mechanics: [
        {
          name: "Co-op wajib dengan split screen",
          how: "Game ini hanya bisa dimainkan berdua, baik di satu layar maupun online. Layar selalu terbagi dua, jadi setiap pemain bisa melihat apa yang sedang dilakukan partnernya. Cukup satu orang yang membeli game, karena temannya bisa ikut lewat Friend's Pass.",
          impact:
            "Aku jadi selalu tahu posisi dan kesulitan temanku. Ini membuat kami lebih mudah saling memberi arahan, atau sekadar menertawakan kesalahan masing-masing.",
        },
        {
          name: "Kemampuan asimetris",
          how: "Cody dan May hampir selalu mendapat alat yang berbeda tapi saling melengkapi. Contohnya di chapter pertama, Cody melempar paku yang menancap di dinding, lalu May memakai palu untuk berayun di paku tersebut. Di chapter berikutnya, Cody menembakkan getah lengket dan May menembakkan korek api untuk meledakkannya.",
          impact:
            "Tidak ada pemain yang bisa jalan sendirian. Komunikasi seperti \"tahan dulu, aku pasang pakunya\" jadi bagian dari permainan itu sendiri.",
        },
        {
          name: "Mekanik berganti setiap chapter",
          how: "Hampir setiap chapter memberi kemampuan baru: mengubah ukuran tubuh dan sepatu gravitasi, memutar balik waktu dan membuat klon diri sendiri, magnet dengan kutub berbeda, sampai berubah menjadi tanaman.",
          impact:
            "Rasanya seperti memainkan banyak game dalam satu cerita. Begitu mulai terbiasa dengan satu mekanik, game sudah memberi mainan baru lagi.",
        },
        {
          name: "Boss yang menguji kombinasi kemampuan",
          how: "Di akhir bagian cerita biasanya ada boss, seperti kotak perkakas raksasa di chapter pertama. Boss ini hanya bisa dikalahkan dengan memakai kemampuan kedua pemain secara bergantian dan tepat waktu.",
          impact:
            "Pertarungan boss jadi ujian terakhir dari semua hal yang baru dipelajari. Saat berhasil menang setelah beberapa kali gagal, rasa puasnya terasa berdua.",
        },
        {
          name: "Minigame kompetitif",
          how: "Ada 25 minigame tersembunyi di sepanjang cerita, misalnya adu memukul tikus tanah atau adu tarik tambang. Di sini kedua pemain berubah dari partner menjadi lawan.",
          impact:
            "Setelah lama bekerja sama, minigame ini jadi tempat saling adu dan saling ejek. Hasil skornya sering diungkit lagi sepanjang permainan.",
        },
        {
          name: "Respawn yang ringan",
          how: "Kalau salah satu pemain mati, ia bisa muncul kembali dengan cepat dengan menekan tombol berulang kali. Hanya kalau keduanya mati bersamaan, permainan diulang dari checkpoint terakhir.",
          impact:
            "Gagal tidak terasa menyebalkan. Kesalahan justru sering jadi bahan tertawa, sehingga kami berani mencoba cara-cara aneh.",
        },
        {
          name: "Cerita yang menyatu dengan gameplay",
          how: "Cody dan May dipandu oleh Dr. Hakim, buku konseling cinta yang hidup, untuk belajar bekerja sama kembali. Tema cerita tentang komunikasi dalam hubungan dicerminkan langsung oleh mekanik yang mewajibkan pemain berkomunikasi.",
          impact:
            "Apa yang diceritakan dan apa yang dimainkan terasa sejalan. Tanpa sadar, aku dan temanku juga sedang belajar hal yang sama dengan karakternya.",
        },
      ],
      mda: [
        {
          mechanic: "Kemampuan asimetris dan split screen",
          dynamic: "Saling bergantung, harus terus ngobrol dan memberi arahan",
          aesthetic: "Fellowship: seru karena dikerjakan berdua",
        },
        {
          mechanic: "Mekanik baru di setiap chapter",
          dynamic: "Selalu ada alat baru untuk dicoba dan dipelajari",
          aesthetic: "Discovery: penasaran dengan chapter berikutnya",
        },
        {
          mechanic: "Puzzle dan boss berbasis kombinasi",
          dynamic: "Mencoba berbagai cara sampai muncul momen \"oh, ternyata begitu\"",
          aesthetic: "Challenge: puas saat berhasil memecahkannya",
        },
        {
          mechanic: "Minigame kompetitif",
          dynamic: "Partner berubah jadi lawan untuk sementara",
          aesthetic: "Fellowship dan Challenge: saling adu yang menghibur",
        },
        {
          mechanic: "Cerita Cody, May, dan Dr. Hakim",
          dynamic: "Pemain ikut mengikuti hubungan kedua karakter",
          aesthetic: "Narrative: cerita yang hangat dan bermakna",
        },
      ],
      flaws: [
        {
          title: "Tidak bisa dimainkan sendirian",
          text: "Kalau tidak ada teman yang bisa diajak, game ini sama sekali tidak bisa dimainkan. Jadwal main juga harus disesuaikan dengan partner.",
        },
        {
          title: "Kurang menarik dimainkan ulang",
          text: "Alur ceritanya linear, jadi setelah tamat tidak banyak hal baru yang tersisa selain mencoba minigame atau bertukar karakter.",
        },
        {
          title: "Ada adegan yang cukup gelap",
          text: "Beberapa momen cerita terasa kejam untuk ukuran game dengan tampilan yang lucu, dan bisa membuat sebagian pemain kurang nyaman.",
        },
      ],
    },
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
    // Bukti It Takes Two sudah diwakili oleh data langsung dari Steam.
    evidence: [],
  },
];
