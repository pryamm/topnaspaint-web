import { GlassCard } from '../ui/GlassCard';
import { ShieldCheck, Paintbrush, Leaf, Droplets } from 'lucide-react';

export function WhyChooseUsSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Kualitas Terjamin',
      desc: 'Setiap kaleng cat melalui proses kontrol kualitas yang ketat untuk memastikan hasil terbaik.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: Paintbrush,
      title: 'Warna Cemerlang',
      desc: 'Formulasi pigmen khusus yang memberikan warna cerah, tajam, dan tidak mudah pudar.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Leaf,
      title: 'Ramah Lingkungan',
      desc: 'Rendah VOC dan bebas dari bahan kimia berbahaya, aman untuk keluarga dan lingkungan.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-600/10'
    },
    {
      icon: Droplets,
      title: 'Anti Jamur & Lumut',
      desc: 'Melindungi dinding Anda dari kelembapan ekstrem dan mencegah pertumbuhan jamur.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Mengapa Memilih Kami?</h2>
        <p className="text-slate-500 mt-2">Keunggulan Topnas Paint dibandingkan yang lain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <GlassCard key={idx} className="hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg} ${feature.color}`}>
                <Icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
