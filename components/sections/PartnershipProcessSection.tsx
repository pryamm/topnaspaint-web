import { GlassCard } from '../ui/GlassCard';
import { ClipboardList, CheckCircle2, PackageCheck } from 'lucide-react';

export function PartnershipProcessSection() {
  const steps = [
    {
      icon: ClipboardList,
      title: '1. Daftar Online',
      desc: 'Isi formulir pendaftaran singkat atau hubungi tim kami via WhatsApp untuk menyatakan minat Anda.'
    },
    {
      icon: CheckCircle2,
      title: '2. Verifikasi & Konsultasi',
      desc: 'Tim kami akan melakukan verifikasi lokasi dan memberikan konsultasi mengenai paket stok awal yang ideal.'
    },
    {
      icon: PackageCheck,
      title: '3. Pengiriman & Display',
      desc: 'Stok perdana dan seluruh materi promosi (banner, katalog warna) dikirim dan siap dipajang di toko Anda.'
    }
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-12 max-w-7xl mx-auto bg-slate-50/50 rounded-[3rem] my-12 border border-slate-100">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Cara Mudah Bergabung</h2>
        <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-lg">
          Mulai langkah kesuksesan Anda menjadi agen resmi Topnas Paint dalam 3 langkah sederhana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-200 z-0"></div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={40} />
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-sm">{step.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16">
        <GlassCard className="p-8 md:p-10 border-emerald-100 bg-emerald-50/30">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Syarat Utama Kemitraan</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
              <span>Memiliki lokasi usaha (toko bangunan) yang strategis dan aktif.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
              <span>Bersedia melakukan pembelanjaan stok awal sesuai kesepakatan paket.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
              <span>Fotokopi KTP pemilik dan dokumen legalitas usaha dasar (opsional).</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
              <span>Berkomitmen untuk memajang dan merekomendasikan produk Topnas Paint.</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
