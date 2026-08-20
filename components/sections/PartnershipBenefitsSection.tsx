import { GlassCard } from '../ui/GlassCard';
import { BadgeDollarSign, Megaphone, ShieldCheck, Truck } from 'lucide-react';

export function PartnershipBenefitsSection() {
  const benefits = [
    {
      icon: BadgeDollarSign,
      title: 'Profit & Margin Menarik',
      desc: 'Dapatkan harga khusus agen yang memberikan margin keuntungan maksimal untuk setiap penjualan cat di toko Anda.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10'
    },
    {
      icon: Megaphone,
      title: 'Dukungan Pemasaran',
      desc: 'Gratis materi promosi seperti spanduk, buku warna (color card), display toko, hingga eksposur iklan digital dari pusat.',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: ShieldCheck,
      title: 'Garansi & Retur',
      desc: 'Kebijakan retur yang jelas dan aman jika terdapat cacat pabrik pada produk. Kami meminimalisasi risiko bisnis Anda.',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10'
    },
    {
      icon: Truck,
      title: 'Kemudahan Logistik',
      desc: 'Sistem pengiriman stok yang cepat, aman, dan tepat waktu langsung ke gudang atau lokasi toko Anda.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10'
    }
  ];

  return (
    <section id="partnership" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Keuntungan Menjadi Mitra</h2>
        <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-lg">
          Kami tidak hanya menjual produk, tetapi membangun kemitraan strategis yang saling menguntungkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <GlassCard key={idx} className="hover:-translate-y-2 transition-transform duration-300 flex flex-col items-start p-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${benefit.bg} ${benefit.color}`}>
                <Icon size={28} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{benefit.desc}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
