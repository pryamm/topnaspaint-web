export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'Interior' | 'Eksterior' | 'Kayu & Besi' | 'Anti Bocor';
  features: string[];
  image: string;
  colors: { name: string; hex: string }[];
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Topnas Super White',
    description: 'Cat interior premium yang memberikan hasil putih cemerlang dengan daya tutup tinggi dan mudah dibersihkan.',
    category: 'Interior',
    features: ['Putih Cemerlang', 'Daya Tutup Tinggi', 'Mudah Dicuci', 'Anti Jamur'],
    image: 'https://picsum.photos/seed/paint1/400/400',
    colors: [
      { name: 'Brilliant White', hex: '#F9FAFB' },
      { name: 'Pearl', hex: '#F3F4F6' },
      { name: 'Broken White', hex: '#FEFCE8' },
      { name: 'Soft Cream', hex: '#FEF3C7' },
    ],
  },
  {
    id: 'p2',
    name: 'Topnas WeatherShield',
    description: 'Perlindungan eksterior maksimal terhadap cuaca ekstrem, sinar UV, dan hujan. Menjaga dinding Anda tetap terlihat baru.',
    category: 'Eksterior',
    features: ['Perlindungan UV', 'Tahan Air', 'Anti Lumut', 'Warna Tahan Lama'],
    image: 'https://picsum.photos/seed/paint2/400/400',
    colors: [
      { name: 'Slate Grey', hex: '#64748B' },
      { name: 'Earth Brown', hex: '#78350F' },
      { name: 'Ocean Blue', hex: '#0284C7' },
      { name: 'Forest Green', hex: '#166534' },
    ],
  },
  {
    id: 'p3',
    name: 'Topnas Wood & Metal Gloss',
    description: 'Cat enamel kilap tinggi untuk permukaan kayu dan besi, memberikan perlindungan tahan lama dan hasil yang mengkilap.',
    category: 'Kayu & Besi',
    features: ['Kilap Tinggi', 'Tahan Karat', 'Cepat Kering', 'Tahan Lama'],
    image: 'https://picsum.photos/seed/paint3/400/400',
    colors: [
      { name: 'Jet Black', hex: '#0F172A' },
      { name: 'Signal Red', hex: '#DC2626' },
      { name: 'Leaf Green', hex: '#15803D' },
      { name: 'Golden Yellow', hex: '#EAB308' },
    ],
  },
  {
    id: 'p4',
    name: 'Topnas AquaProof',
    description: 'Cat pelapis anti bocor elastomerik canggih yang menutup retakan dan mencegah rembesan air.',
    category: 'Anti Bocor',
    features: ['Elastomerik', 'Menutup Retak', 'Kedap Air', 'Tahan Alkali'],
    image: 'https://picsum.photos/seed/paint4/400/400',
    colors: [
      { name: 'Light Grey', hex: '#94A3B8' },
      { name: 'Terracotta', hex: '#991B1B' },
      { name: 'Clear', hex: '#F1F5F9' },
      { name: 'Pure White', hex: '#FFFFFF' },
    ],
  }
];
