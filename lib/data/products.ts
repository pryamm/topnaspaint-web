export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  features: string[];
  image: string;
  colors: { name: string; hex: string }[];
}

const firstColors = [
  { name: "Super White", hex: "#F8F9FA" },
  { name: "Putih Tulang", hex: "#F3E5AB" },
  { name: "Ivory Cream Muda", hex: "#F5DEB3" },
  { name: "Ivory Cream", hex: "#EADDCA" },
  { name: "Soft Yellow", hex: "#F9E076" },
  { name: "New Cream", hex: "#EEDC82" },
  { name: "Pearl Cream", hex: "#E2B67C" },
  { name: "Choco Brain", hex: "#A08A7C" },
  { name: "Choco Brown", hex: "#6E4D43" },
  { name: "Caramel", hex: "#8D7663" },
  { name: "Gray Old", hex: "#696969" },
  { name: "Platinum Old", hex: "#5A626A" },
  { name: "Platinum", hex: "#9BA3A7" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Mate Blue", hex: "#82C2E1" },
  { name: "Blue White", hex: "#9ABAE2" },
  { name: "Sky Blue", hex: "#6B93D6" },
  { name: "Ocean Blue", hex: "#1D70A2" },
  { name: "Blue Safire", hex: "#0F52BA" },
  { name: "Torquise", hex: "#2DB3A6" },
  { name: "Green Apple", hex: "#4EBA6F" },
  { name: "Neon Green", hex: "#69D645" },
  { name: "Green Stabilo", hex: "#66FF00" },
  { name: "Luxury Green", hex: "#83B72A" },
  { name: "Still Green", hex: "#9DE24D" },
  { name: "Spirit Green", hex: "#3CB371" },
  { name: "Yellow Lemon", hex: "#FCEB27" },
  { name: "Yellow Canary", hex: "#FFD700" },
  { name: "Sun Flower", hex: "#FFB300" },
  { name: "Tangerine", hex: "#F98858" },
  { name: "Orange Jeruk", hex: "#FF7F50" },
  { name: "Pink", hex: "#FFC0CB" },
  { name: "Rose Pink", hex: "#D97298" },
  { name: "Candy Pink", hex: "#FFB6C1" },
  { name: "Almound Salem", hex: "#FFDAB9" },
  { name: "Salem Muda", hex: "#FFE4C4" },
  { name: "Salem", hex: "#FFA07A" },
  { name: "Violet Fresh", hex: "#8A2BE2" },
  { name: "Violet", hex: "#64468C" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Brilliant White", hex: "#FFFFFF" },
  { name: "C. Brain Muda", hex: "#C4B9AC" },
  { name: "Dark Gray", hex: "#4A4A4A" },
  { name: "Aqua Marine", hex: "#7FFFD4" },
  { name: "Baby Pink", hex: "#F4C2C2" },
  { name: "Torquise Muda", hex: "#AFEEEE" },
  { name: "G. Apple Muda", hex: "#98FB98" },
  { name: "Stabilo Muda", hex: "#CCFF00" },
  { name: "Lemon Muda", hex: "#FFFACD" },
  { name: "Banana Cream", hex: "#FFF8DC" },
  { name: "Hijau Pandan", hex: "#B3E291" },
  { name: "Bubble Pink", hex: "#D8BFD8" },
  { name: "Flo Pink", hex: "#FF69B4" },
  { name: "Maroon Std", hex: "#8A3A41" },
  { name: "Merah Bata", hex: "#B24F4F" },
  { name: "Yellow Green", hex: "#9ACD32" },
];

const secondColors = [
  { name: "G.K. Maroon", hex: "#8A3A41" },
  { name: "G.K. Brown", hex: "#4A3533" },
  { name: "G.K. Black", hex: "#2D2D2D" },
  { name: "G.K. Blue", hex: "#2B316C" },
  { name: "G.K. Green", hex: "#274E37" },
  { name: "G.K. Cream", hex: "#D4A35B" },
  { name: "G.K. Orange", hex: "#C65D47" },
  { name: "Gloss Super White", hex: "#F8F9FA" },
];

export const products: Product[] = [
  {
    id: "top-ss",
    name: "Top SS",
    description:
      "Solusi ekonomis untuk interior rumah Anda. Hadir dengan nuansa warna lembut yang dirancang khusus untuk menghidupkan suasana ruangan tanpa kompromi pada kualitas.",
    category: "Interior (Ekonomis)",
    features: [
      "Awet hingga 1 tahun (Interior)",
      "Mudah dilarutkan (cukup 5-10% air bersih)",
      "Daya sebar efektif ± 3 m² per kilogram",
      "Pengaplikasian sangat mudah (kuas/roll)",
    ],
    image: "https://picsum.photos/seed/paint4/400/400",
    colors: firstColors,
  },
  {
    id: "top-star",
    name: "Top Star",
    description:
      "Cat serbaguna bermutu tinggi untuk interior dan eksterior. Menghasilkan spektrum warna cerah dengan daya sebar maksimal demi keindahan di setiap sudut hunian Anda.",
    category: "Interior & Eksterior",
    features: [
      "Awet hingga 2 tahun (Interior)",
      "Perlindungan 1 tahun (Eksterior)",
      "Mudah dilarutkan (10-15% air bersih)",
      "Daya sebar luas mencapai ± 6 m² per kilogram",
      "Pengaplikasian praktis (kuas/roll)",
    ],
    image: "https://picsum.photos/seed/paint2/400/400",
    colors: firstColors,
  },
  {
    id: "top-standar",
    name: "Top Standar",
    description:
      "Pilihan cerdas untuk interior dan teras rumah. Memberikan hasil akhir memukau dengan corak warna cerah mempesona, sangat ideal untuk area semi-terbuka yang teduh.",
    category: "Interior & Eksterior Ringan",
    features: [
      "Awet hingga 2 tahun (Interior)",
      "Perlindungan 1 tahun (Eksterior Ringan)",
      "Dilarutkan dengan 10-15% air bersih",
      "Daya sebar andal ± 4 m² per kilogram",
      "Sangat mudah diaplikasikan (kuas/roll)",
    ],
    image: "https://picsum.photos/seed/paint3/400/400",
    colors: firstColors,
  },
  {
    id: "top-gk",
    name: "Top GK (Genteng dan Kayu)",
    description:
      "Perlindungan premium multiguna untuk genteng, kayu, asbes, hingga seng. Menghasilkan rona semi-gloss mewah yang mudah dibersihkan, siap melindungi bangunan Anda.",
    category: "Multiguna",
    features: [
      "Tahan lama hingga 2 tahun (Interior)",
      "Tahan cuaca hingga 1 tahun (Eksterior)",
      "Cukup larutkan dengan 10-20% air bersih",
      "Sangat irit! Daya sebar luas hingga ± 8 m² per kilogram",
      "Hasil semi-gloss yang bisa dicuci dari noda kotoran",
      "Cocok untuk tembok, genteng, asbes, seng, & kayu",
    ],
    image: "https://picsum.photos/seed/paint1/400/400",
    colors: secondColors,
  },
  {
    id: "top-glass-weather-shield",
    name: "Top Glass Weather Shield",
    description:
      "Benteng pelindung dinding eksterior yang tangguh. Diformulasikan khusus menahan cuaca ekstrem, memblokir sinar UV, dan mencegah jamur agar warna fasad tetap memesona.",
    category: "Eksterior (Premium)",
    features: [
      "Perlindungan ekstra dari cuaca ekstrem & curah hujan",
      "Ketahanan optimal terhadap sengatan sinar UV",
      "Anti jamur & anti lumut yang teruji",
      "Formulasi khusus agar warna tidak mudah pudar",
      "Daya tutup maksimal dalam sekali pulasan",
    ],
    image: "https://picsum.photos/seed/paint5/400/400",
    colors: secondColors,
  },
];
