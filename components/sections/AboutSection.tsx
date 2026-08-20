import { GlassCard } from '../ui/GlassCard';

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <GlassCard className="p-8 md:p-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Tentang Topnas Paint</h2>
        <div className="grid md:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
          <div>
            <p className="mb-4">
              Didirikan dengan hasrat akan kualitas dan ketahanan, Topnas Paint telah melayani masyarakat lokal dengan solusi pelapis kelas atas selama lebih dari satu dekade.
            </p>
            <p>
              Kami percaya bahwa cat bukan hanya tentang warna; ini tentang perlindungan, umur panjang, dan menghidupkan ruang di mana Anda tinggal dan bekerja.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">10+</div>
              <p className="font-medium">Tahun Keunggulan</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl">50rb</div>
              <p className="font-medium">Pelanggan Puas</p>
            </div>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
