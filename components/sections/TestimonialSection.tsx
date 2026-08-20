'use client';

import { Carousel } from '../ui/Carousel';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export function TestimonialSection() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Pemilik TB Makmur Jaya',
      quote: 'Margin keuntungan toko saya meningkat tajam setelah memajang Topnas Paint. Pelanggan suka karena kualitas setara merek ternama namun harga sangat kompetitif.',
      avatar: 'https://picsum.photos/seed/avatar1/150/150'
    },
    {
      name: 'Hendra Wijaya',
      role: 'Distributor Area Jawa Timur',
      quote: 'Dukungan pemasaran dari pusat sangat luar biasa. Suplai barang tidak pernah telat, membuat proyek-proyek perumahan yang saya suplai puas 100%.',
      avatar: 'https://picsum.photos/seed/avatar2/150/150'
    },
    {
      name: 'Siti Aminah',
      role: 'Pemilik TB Sinar Indah',
      quote: 'Awalnya ragu, tapi setelah 3 bulan berjalan, Topnas justru jadi tulang punggung penjualan cat di toko kami. Daya tutup catnya memang juara!',
      avatar: 'https://picsum.photos/seed/avatar3/150/150'
    },
    {
      name: 'Agus Pranoto',
      role: 'Kontraktor Proyek',
      quote: 'Saya selalu merekomendasikan Topnas ke klien karena kualitas warna yang sangat awet. Jarang ada keluhan cat mengelupas meskipun cuaca ekstrem.',
      avatar: 'https://picsum.photos/seed/avatar4/150/150'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto bg-slate-50 rounded-[3rem] mt-12 border border-slate-200/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Apa Kata Mitra Kami?
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Ratusan toko bangunan dan distributor telah membuktikan sendiri keuntungan bermitra dengan Topnas Paint.
        </p>
      </div>

      <Carousel>
        {testimonials.map((testi, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-slate-100 h-full flex flex-col justify-between">
            <div>
              <Quote size={40} className="text-emerald-500/30 mb-6" />
              <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic mb-8">
                &quot;{testi.quote}&quot;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image 
                src={testi.avatar} 
                alt={testi.name} 
                width={60} 
                height={60} 
                className="rounded-full object-cover border-2 border-emerald-100" 
              />
              <div>
                <h4 className="font-bold text-slate-900">{testi.name}</h4>
                <p className="text-sm text-slate-500">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
