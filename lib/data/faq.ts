export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqList: FAQ[] = [
  {
    id: 'q1',
    question: 'Di mana saya bisa membeli Cat Topnas?',
    answer: 'Anda dapat menemukan Cat Topnas di toko mitra resmi kami dan berbagai toko bangunan. Cek peta interaktif kami di bagian Lokasi untuk menemukan toko terdekat dari Anda.',
  },
  {
    id: 'q2',
    question: 'Bagaimana cara menjadi mitra resmi atau distributor?',
    answer: 'Kami selalu terbuka untuk kemitraan baru! Silakan hubungi kami melalui bagian Kontak, atau kirim email ke info@araing.id dengan detail bisnis Anda.',
  },
  {
    id: 'q3',
    question: 'Apakah Cat Topnas aman untuk penggunaan di dalam ruangan?',
    answer: 'Ya, tentu saja. Lini cat interior kami diformulasikan dengan VOC (Volatile Organic Compounds) yang rendah dan bebas dari timbal serta merkuri, sehingga aman untuk keluarga Anda.',
  },
  {
    id: 'q4',
    question: 'Berapa banyak cat yang saya butuhkan untuk ruangan saya?',
    answer: 'Umumnya, satu liter Cat Topnas dapat melapisi sekitar 10-12 meter persegi untuk satu lapisan. Kami merekomendasikan setidaknya dua lapisan untuk hasil terbaik. Anda dapat bertanya kepada mitra toko kami untuk perhitungan detail berdasarkan dimensi dinding Anda.',
  },
  {
    id: 'q5',
    question: 'Apakah Anda menawarkan pencampuran warna kustom?',
    answer: 'Ya, toko mitra terpilih yang dilengkapi dengan Mesin Tinting Topnas kami dapat mencampur ribuan warna kustom langsung di tempat.',
  }
];
