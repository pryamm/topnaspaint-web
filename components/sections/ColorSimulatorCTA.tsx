'use client';

import { Paintbrush } from 'lucide-react';
import Link from 'next/link';

export function ColorSimulatorCTA() {
  return (
    <section className="py-12 px-4 md:px-12 max-w-5xl mx-auto">
      <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600 shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 group">
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full mix-blend-overlay filter blur-2xl"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white mb-6 uppercase tracking-widest">
            <Paintbrush size={14} /> Fitur Eksklusif
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ragu Memilih Warna? <br/>Coba Simulator Kami!
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
            Pilih warna favorit Anda dan lihat perubahannya secara *real-time* di halaman katalog interaktif kami.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 shrink-0">
          <Link 
            href="/products" 
            className="inline-flex items-center justify-center px-8 py-5 bg-white hover:bg-slate-50 text-emerald-600 hover:text-emerald-700 font-extrabold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 text-lg"
          >
            Coba Simulator Sekarang
          </Link>
        </div>

      </div>
    </section>
  );
}
