"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";
import { Product } from "@/lib/data/products";
import { GlassCard } from "../ui/GlassCard";

interface ProductShowcaseProps {
  product: Product;
  index: number;
}

export function ProductShowcase({ product, index }: ProductShowcaseProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0]?.hex || "#10b981",
  );
  const [colorName, setColorName] = useState(product.colors?.[0]?.name || "");
  const [sliderPosition, setSliderPosition] = useState(0); // Start at 0 for animation
  const [isDragging, setIsDragging] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (product.colors && product.colors.length > 0) {
        const randomIndex = Math.floor(Math.random() * product.colors.length);
        setSelectedColor(product.colors[randomIndex].hex);
        setColorName(product.colors[randomIndex].name);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [product.colors]);

  // Intersection Observer for auto-play animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => setSliderPosition(Math.floor(Math.random() * 21) + 40), 300);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Reverse layout alternatingly based on index for variety
  const isEven = index % 2 === 0;

  return (
    <section ref={sectionRef} className='relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-slate-200/50'>
      {/* --- BACKGROUND SLIDER --- */}

      {/* 1. Base Before Layer (Neutral/Unpainted) */}
      <div className='absolute inset-0 bg-slate-200 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]'>
        {/* Right side is unpainted */}
        <div className='absolute top-8 right-8 md:top-12 md:right-12 bg-white/40 backdrop-blur-xl border border-white/60 text-slate-700 px-6 py-2 rounded-full font-extrabold text-sm shadow-xl flex items-center gap-2 transition-opacity duration-300'>
          BELUM DICAT
        </div>
      </div>

      {/* 2. After Layer (Colored with Selected Color) */}
      <div
        className={`absolute inset-0 ease-out ${isDragging ? "transition-none" : "transition-[clip-path,background-color] duration-[1500ms]"}`}
        style={{
          backgroundColor: selectedColor,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <div className='absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]'></div>
        {/* Left side is painted */}
        <div className='absolute top-8 left-8 md:top-12 md:left-12 bg-black/20 backdrop-blur-xl border border-white/20 text-white px-6 py-2 rounded-full font-extrabold text-sm shadow-xl flex items-center gap-2'>
          SUDAH DICAT
        </div>
      </div>

      {/* 3. Slider Input Overlay (Invisible but functional) */}
      <style>{`
        .slider-full-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 100px;
          height: 200vh;
          background: transparent;
          cursor: ew-resize;
        }
        .slider-full-thumb::-moz-range-thumb {
          width: 100px;
          height: 200vh;
          background: transparent;
          cursor: ew-resize;
          border: none;
        }
      `}</style>
      <input
        type='range'
        min='0'
        max='100'
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        onPointerCancel={() => setIsDragging(false)}
        className='absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 slider-full-thumb'
        aria-label='Geser untuk mengubah area warna'
      />

      {/* 4. Visual Slider Line & Handle (Behind Card) */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10 pointer-events-none ease-out ${isDragging ? "transition-none" : "transition-all duration-[1500ms]"}`}
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl text-slate-800'>
          <ArrowLeftRight size={24} />
        </div>
      </div>

      {/* CONTENT LAYER (Floating Glassmorphism) */}
      <div
        className={`relative z-30 container mx-auto px-4 md:px-12 pointer-events-none flex justify-center transition-opacity duration-300 ${isDragging ? "opacity-0" : "opacity-100"}`}
      >
        <GlassCard className='pointer-events-none p-6 md:p-10 max-w-5xl w-full flex flex-col md:flex-row gap-10 items-center shadow-2xl bg-white/95 backdrop-blur-xl border-white rounded-[2rem]'>
          {/* Image Side */}
          <div
            className={`relative w-full aspect-square md:w-80 md:h-80 shrink-0 ${isEven ? "md:order-1" : "md:order-2"}`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              priority={true}
              className='object-cover shadow-md pointer-events-none'
            />
          </div>

          {/* Text Side */}
          <div className={`w-full md:w-auto flex-1 min-w-0 flex flex-col items-start ${isEven ? "md:order-2" : "md:order-1"}`}>
            <span className='text-[10px] font-black text-slate-800 uppercase tracking-widest mb-3 block bg-slate-100 px-3 py-1 rounded-full'>
              {product.category}
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight'>
              {product.name}
            </h2>
            <p className='text-base text-slate-700 font-medium mb-6 leading-relaxed max-w-lg'>
              {product.description}
            </p>

            {/* Features Tags */}
            <div className='flex flex-wrap gap-2 mb-8 max-w-lg'>
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className='text-[11px] font-bold px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md'
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Color Picker */}
            {product.colors && product.colors.length > 0 && (
              <div className='bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] w-full max-w-lg pointer-events-auto'>
                <div className="flex items-start sm:items-center justify-between mb-4 gap-2">
                  <p className='text-xs font-bold text-slate-700 leading-tight'>
                    Pilih Warna & Geser Slider di Latar Belakang:
                  </p>
                  <span className='text-[10px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md shrink-0 border border-slate-200/60'>
                    {product.colors.length} Varian
                  </span>
                </div>
                <div className="relative group/scroll mb-4">
                  {/* Left Fade Mask */}
                  <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none rounded-l-xl"></div>
                  
                  {/* Right Fade Mask */}
                  <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none rounded-r-xl"></div>
                  
                  <div className="flex gap-3 overflow-x-auto scrollbar-hide py-3 px-1 snap-x scroll-smooth">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedColor(color.hex);
                          setColorName(color.name);
                          // Auto-play effect: snap to 0, then sweep to random 40-60%
                          setIsDragging(true);
                          setSliderPosition(0);
                          setTimeout(() => {
                            setIsDragging(false);
                            setSliderPosition(Math.floor(Math.random() * 21) + 40);
                          }, 50);
                        }}
                        className={`shrink-0 snap-center w-9 h-9 rounded-full shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none ${
                          selectedColor === color.hex
                            ? "ring-4 ring-offset-2 ring-slate-800 scale-110"
                            : "ring-1 ring-slate-200"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        aria-label={`Pilih warna ${color.name}`}
                      />
                    ))}
                  </div>
                </div>
                <p className='text-xs text-slate-800 font-bold'>
                  {colorName}
                </p>
              </div>
            )}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
