'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageUrl = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=2000"; // A nice living room interior

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">Bukti Kualitas Kami</h2>
        <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-lg">
          Geser garis di bawah ini untuk melihat transformasi luar biasa sebelum dan sesudah menggunakan Topnas Paint.
        </p>
      </div>

      <GlassCard className="p-0 border-0 overflow-hidden mx-auto max-w-5xl rounded-[2.5rem]">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-slate-200">
          
          {/* AFTER Image (Bottom layer) - Bright & Colored */}
          <div className="absolute inset-0">
            <Image 
              src={imageUrl}
              alt="Sesudah dicat"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
            {/* Overlay a subtle vibrant tint to make it look freshly painted */}
            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-color"></div>
            <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
              SESUDAH
            </div>
          </div>

          {/* BEFORE Image (Top layer, clipped) - Dull & Grayscale */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src={imageUrl}
              alt="Sebelum dicat"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover grayscale sepia-[0.3] brightness-90 contrast-75"
            />
            <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10">
              SEBELUM
            </div>
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
            aria-label="Geser untuk membandingkan foto sebelum dan sesudah"
          />

          {/* Visual Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-slate-800">
              <ArrowLeftRight size={20} />
            </div>
          </div>

        </div>
      </GlassCard>
    </section>
  );
}
