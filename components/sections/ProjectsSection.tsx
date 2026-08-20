'use client';

import Image from 'next/image';
import { Building2, Home, Landmark } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Dipercaya oleh Proyek Skala Besar
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tidak hanya perumahan, Topnas Paint telah menjadi standar spesifikasi teknis untuk berbagai fasilitas komersial dan publik yang membutuhkan daya tahan cat ekstrem.
          </p>
        </div>
        <div className="shrink-0">
          <span className="px-5 py-2 bg-slate-100 text-slate-700 font-bold rounded-full shadow-inner border border-slate-200 text-sm">
            Portofolio Terpilih
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
        {/* Large Main Feature */}
        <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
          <Image src="https://picsum.photos/seed/project1/800/600" alt="RSUD Provinsi" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Building2 size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">Fasilitas Publik</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-2">RSUD Provinsi Jawa Tengah</h3>
            <p className="text-white/80 max-w-md">Menggunakan Topnas WeatherShield untuk proteksi maksimal gedung bertingkat dari cuaca ekstrem.</p>
          </div>
        </div>

        {/* Vertical Stack */}
        <div className="flex flex-col gap-6">
          <div className="relative flex-1 rounded-[2rem] overflow-hidden group min-h-[240px]">
            <Image src="https://picsum.photos/seed/project2/400/300" alt="Perumahan Elite" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Home size={16} />
                <span className="font-bold text-xs uppercase tracking-widest">Residensial</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Grand Residence City</h3>
              <p className="text-white/80 text-sm">Topnas Super White (Interior)</p>
            </div>
          </div>

          <div className="relative flex-1 rounded-[2rem] overflow-hidden group min-h-[240px]">
            <Image src="https://picsum.photos/seed/project3/400/300" alt="Gedung Kampus" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Landmark size={16} />
                <span className="font-bold text-xs uppercase tracking-widest">Edukasi</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Kampus Terpadu UNAS</h3>
              <p className="text-white/80 text-sm">Topnas Wood & Metal Gloss</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
