'use client';

import { Sun, Droplets, Maximize } from 'lucide-react';
import Image from 'next/image';

export function TechnologySection() {
  const techs = [
    {
      id: 'uv',
      icon: <Sun size={32} className="text-amber-500" />,
      title: 'Anti-UV & Tahan Cuaca',
      desc: 'Diformulasikan khusus untuk iklim tropis. Warna tidak mudah pudar meski terpapar terik matahari bertahun-tahun.',
      img: 'https://picsum.photos/seed/tech1/400/300'
    },
    {
      id: 'wash',
      icon: <Droplets size={32} className="text-blue-500" />,
      title: 'Washable Formula',
      desc: 'Noda dan kotoran pada dinding interior dapat dibersihkan dengan mudah tanpa merusak lapisan cat.',
      img: 'https://picsum.photos/seed/tech2/400/300'
    },
    {
      id: 'elastomeric',
      icon: <Maximize size={32} className="text-emerald-500" />,
      title: 'Elastomeric Sealant',
      desc: 'Teknologi polimer elastis yang mampu menutup retak rambut dan mencegah rembesan air hujan.',
      img: 'https://picsum.photos/seed/tech3/400/300'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 tracking-tight">
          Inovasi di Setiap Tetesan
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Topnas Paint dikembangkan di laboratorium mutakhir untuk menghasilkan cat yang tidak hanya indah, tapi juga sangat tangguh menahan kerasnya cuaca Indonesia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techs.map((tech) => (
          <div key={tech.id} className="group relative bg-white rounded-[2rem] border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col">
            
            {/* Image Banner */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image src={tech.img} alt={tech.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
            </div>

            {/* Content Content */}
            <div className="flex flex-col flex-grow p-8 pt-0 relative z-10 -mt-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center mb-6 mx-auto group-hover:-translate-y-2 transition-transform duration-500">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 text-center mb-4">{tech.title}</h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {tech.desc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
