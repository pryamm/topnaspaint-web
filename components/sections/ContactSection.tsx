"use client";

import { useState } from "react";
import { GlassCard } from "../ui/GlassCard";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox='0 0 24 24' fill='currentColor' height='20' width='20'>
    <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    height='20'
    width='20'
  >
    <rect x='2' y='2' width='20' height='20' rx='5' ry='5'></rect>
    <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
    <line x1='17.5' y1='6.5' x2='17.51' y2='6.5'></line>
  </svg>
);

export function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Pesan Kemitraan dari ${formData.company}`,
    );
    const body = encodeURIComponent(
      `Nama Perusahaan: ${formData.company}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
    );

    window.location.href = `mailto:info@araing.id?subject=${subject}&body=${body}`;
  };
  return (
    <section id='contact' className='py-16 px-4 md:px-12 max-w-7xl mx-auto'>
      <GlassCard className='overflow-hidden p-0 border-0'>
        <div className='grid md:grid-cols-2'>
          <div className='bg-gradient-to-br from-primary to-emerald-600 p-8 md:p-12 text-white'>
            <h2 className='text-3xl font-bold mb-4'>Kontak Kemitraan</h2>
            <p className='text-primary-50 mb-8 max-w-sm'>
              Tertarik menjadi distributor Topnas Paint? Hubungi tim kemitraan
              khusus kami.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                  <Phone size={20} />
                </div>
                <div>
                  <div className='text-sm text-primary-100'>Telepon</div>
                  <div className='font-medium'>+62 811-1234-5678</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                  <Mail size={20} />
                </div>
                <div>
                  <div className='text-sm text-primary-100'>Email</div>
                  <div className='font-medium'>info@araing.id</div>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className='text-sm text-primary-100'>Kantor Pusat</div>
                  <div className='font-medium'>
                    Jl. Industri Raya No. 88, Bandung
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='text-sm font-bold text-primary-100 uppercase tracking-widest mb-4'>
                Sosial Media Kami
              </h3>
              <div className='flex gap-4'>
                <a
                  href='https://wa.me/6281112345678?text=Halo%20Topnas%20Paint,%20saya%20ingin%20bertanya%20seputar%20kemitraan.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all group shadow-sm border border-white/10'
                >
                  <MessageCircle
                    size={24}
                    className='group-hover:scale-110 transition-transform'
                  />
                </a>
                <a
                  href='https://instagram.com/topnaspaint'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all group shadow-sm border border-white/10'
                >
                  <span className='group-hover:scale-110 transition-transform flex items-center justify-center'>
                    <InstagramIcon />
                  </span>
                </a>
                <a
                  href='https://tiktok.com/@topnaspaint'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all group shadow-sm border border-white/10'
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          <div className='p-8 md:p-12 bg-white/50'>
            <h3 className='text-2xl font-bold text-slate-800 mb-6'>
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-1'>
                  Nama Perusahaan
                </label>
                <input
                  type='text'
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className='w-full bg-white border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-1'>
                  Alamat Email
                </label>
                <input
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full bg-white border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-slate-700 mb-1'>
                  Pesan
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className='w-full bg-white border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-medium py-3 rounded-lg transition-all mt-2'
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
