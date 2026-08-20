'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { GlassCard } from '../ui/GlassCard';

interface ProductShowcaseProps {
  product: Product;
  index: number;
}

export function ProductShowcase({ product, index }: ProductShowcaseProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.hex || '#10b981');
  const [colorName, setColorName] = useState(product.colors?.[0]?.name || '');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Reverse layout alternatingly based on index for variety
  const isEven = index % 2 === 0;

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-200/50">
      
      {/* --- BACKGROUND SLIDER --- */}
      
      {/* 1. Base Before Layer (Neutral/Unpainted) */}
      <div className="absolute inset-0 bg-slate-200 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]">
        {/* Right side is unpainted */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 px-6 py-2 rounded-full font-extrabold text-sm shadow-xl z-10 flex items-center gap-2 transition-opacity duration-300">
          BELUM DICAT
        </div>
      </div>

      {/* 2. After Layer (Colored with Selected Color) */}
      <div 
        className="absolute inset-0 transition-colors duration-500 ease-in-out"
        style={{ 
          backgroundColor: selectedColor,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        {/* Left side is painted */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-black/20 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full font-extrabold text-sm shadow-xl z-10 flex items-center gap-2">
          SUDAH DICAT
        </div>
      </div>

      {/* 3. Slider Input Overlay (Invisible but functional) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerCancel={() => setIsDragging(false)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
        aria-label="Geser untuk mengubah area warna"
      />

      {/* 4. Visual Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-slate-800">
          <ArrowLeftRight size={24} />
        </div>
      </div>


      {/* CONTENT LAYER (Floating Glassmorphism) */}
      <div className={`relative z-30 container mx-auto px-4 md:px-12 pointer-events-none flex justify-center transition-opacity duration-300 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
        <GlassCard className="pointer-events-none p-8 md:p-12 max-w-4xl w-full flex flex-col md:flex-row gap-10 items-center shadow-2xl backdrop-blur-xl bg-white/60">
          
          {/* Image Side */}
          <div className={`relative w-48 h-48 md:w-72 md:h-72 shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl"></div>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
              className="object-contain drop-shadow-2xl mix-blend-multiply transition-transform duration-500 hover:scale-105 hover:-translate-y-2 pointer-events-none" 
            />
          </div>

          {/* Text Side */}
          <div className={`flex-grow ${isEven ? 'md:order-2' : 'md:order-1'}`}>
            <span className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-2 block bg-white/50 w-max px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight drop-shadow-sm">{product.name}</h2>
            <p className="text-lg text-slate-800 font-medium mb-8 leading-relaxed max-w-lg drop-shadow-sm">{product.description}</p>
            
            {/* Features Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.features.map((feature, idx) => (
                <span key={idx} className="text-xs font-bold px-3 py-1.5 bg-slate-900/10 text-slate-900 rounded-md backdrop-blur-md">
                  {feature}
                </span>
              ))}
            </div>

            {/* Color Picker */}
            {product.colors && product.colors.length > 0 && (
              <div className="bg-white/80 p-5 rounded-2xl shadow-sm border border-white/50 backdrop-blur-md pointer-events-auto">
                <p className="text-sm font-bold text-slate-700 mb-3">Pilih Warna & Geser Slider di Latar Belakang:</p>
                <div className="flex flex-wrap gap-3 mb-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedColor(color.hex);
                        setColorName(color.name);
                        // Optional: slightly move slider to encourage interaction if it's at 0
                        if(sliderPosition < 10) setSliderPosition(50);
                      }}
                      className={`w-10 h-10 rounded-full shadow-md transition-all duration-300 hover:scale-125 focus:outline-none ${
                        selectedColor === color.hex ? 'ring-4 ring-offset-2 ring-slate-800 scale-110' : 'ring-2 ring-white/50 hover:ring-slate-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={`Pilih warna ${color.name}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-800 font-bold h-5">{colorName}</p>
              </div>
            )}
          </div>
          
        </GlassCard>
      </div>
    </section>
  );
}
