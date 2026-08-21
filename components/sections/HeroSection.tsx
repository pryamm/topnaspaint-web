import { Carousel } from "../ui/Carousel";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const promos = [
    {
      title: "Segarkan Rumah Anda",
      desc: "Dapatkan diskon 20% untuk semua cat interior musim panas ini.",
      bg: "bg-emerald-500/20",
      image: "https://picsum.photos/seed/promo1/800/400",
    },
    {
      title: "WeatherShield Pro",
      desc: "Perlindungan maksimal terhadap hujan. Beli 2 gratis 1.",
      bg: "bg-blue-500/20",
      image: "https://picsum.photos/seed/promo2/800/400",
    },
    {
      title: "Bermitra Bersama Kami",
      desc: "Bergabunglah dengan jaringan distributor Topnas Paint yang terus berkembang.",
      bg: "bg-amber-500/20",
      image: "https://picsum.photos/seed/promo3/800/400",
    },
  ];

  return (
    <section
      id='home'
      className='relative pt-24 pb-16 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden'
    >
      {/* Background Orbs for Premium Glassmorphism Vibe */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none opacity-40 z-0'>
        <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse'></div>
        <div className='absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-70'></div>
        <div className='absolute bottom-[-10%] left-[20%] w-[30rem] h-[30rem] bg-cyan-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-60'></div>
      </div>

      <div className='relative z-10 mb-20 flex flex-col items-center text-center max-w-4xl mx-auto'>
        {/* Brand Logo */}
        <div className='mb-8'>
          <Image
            src='/logo-nobg.webp'
            alt='Topnas Paint Logo'
            width={200}
            height={200}
            style={{ width: 'auto', height: 'auto' }}
            className='drop-shadow-xl'
            priority
          />
        </div>

        {/* Brand Intro Pill Badge */}
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm text-sm font-semibold text-emerald-800 mb-8 hover:scale-105 transition-transform cursor-default'>
          <Sparkles size={16} className='text-emerald-500' />
          <span>
            Topnas Paint: Pabrikan Cat Kualitas Premium Bersertifikat SNI
          </span>
        </div>

        {/* Huge Centered Typography */}
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6 drop-shadow-sm'>
          Kembangkan Bisnis Anda <br className='hidden md:block' /> Bersama{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500'>
            Brand Terpercaya.
          </span>
        </h1>

        {/* Elegant Description */}
        <p className='text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed'>
          Tingkatkan margin keuntungan toko bangunan Anda dengan produk cat
          berdaya tutup tinggi, dukungan pemasaran penuh, dan suplai yang
          konsisten.
        </p>

        {/* Centered Actions */}
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='https://wa.me/6285221268938?text=Halo%20Topnas%20Paint,%20saya%20tertarik%20menjadi%20mitra%20distributor.'
            target='_blank'
            rel='noopener noreferrer'
            className='px-8 py-4 bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all text-white font-bold rounded-full shadow-xl shadow-slate-900/20 flex items-center gap-2 group'
          >
            Daftar Jadi Mitra
            <ArrowRight
              size={18}
              className='group-hover:translate-x-1 transition-transform'
            />
          </a>
          <a
            href='/products'
            className='px-8 py-4 bg-white/80 hover:bg-white backdrop-blur-md border border-white/50 active:scale-95 transition-all text-slate-800 font-bold rounded-full shadow-lg shadow-black/5 flex items-center gap-2'
          >
            Lihat Katalog Produk
          </a>
        </div>
      </div>

      {/* Redesigned Promo Carousel (App Store Style) */}
      <div className='relative z-10 mt-16'>
        <h3 className='text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6'>
          Program & Promo Spesial
        </h3>
        <Carousel>
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className='relative rounded-[2.5rem] overflow-hidden h-[22rem] md:h-[28rem] shadow-[0_20px_40px_rgb(0,0,0,0.08)] group hover:-translate-y-1 transition-all duration-500 border border-white/40 bg-white'
            >
              {/* Image Container */}
              <div className='absolute inset-0 z-0'>
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  priority={idx === 0}
                  className='object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                />
                {/* Lighter, softer gradient overlay for a premium look instead of harsh black */}
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent mix-blend-multiply opacity-80'></div>
              </div>

              {/* Frosted Glass Text Container at Bottom */}
              <div className='absolute bottom-4 left-4 right-4 z-20'>
                <div className='bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl'>
                  <span className='inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full backdrop-blur-md mb-3 border border-white/10'>
                    FEATURED
                  </span>
                  <h3 className='text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight drop-shadow-md'>
                    {promo.title}
                  </h3>
                  <p className='text-white/90 text-sm md:text-base leading-relaxed drop-shadow-sm max-w-sm'>
                    {promo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
