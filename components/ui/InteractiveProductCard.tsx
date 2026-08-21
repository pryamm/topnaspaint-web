'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/data/products';

interface InteractiveProductCardProps {
  product: Product;
}

export function InteractiveProductCard({ product }: InteractiveProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.hex || '#f1f5f9');
  const [colorName, setColorName] = useState(product.colors?.[0]?.name || '');

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

  const getBrightness = (hex: string) => {
    let r = 0, g = 0, b = 0;
    if (hex.startsWith('#')) {
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
      }
    }
    return (r * 299 + g * 587 + b * 114) / 1000;
  };
  
  const isDark = getBrightness(selectedColor) < 128;
  const textColor = isDark ? 'text-white' : 'text-slate-800';
  const mutedColor = isDark ? 'text-white/70' : 'text-slate-600';
  const badgeBg = isDark ? 'bg-white/20' : 'bg-slate-100/80';

  return (
    <div 
      className="group relative flex flex-col h-full rounded-[2rem] border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden hover:-translate-y-1"
      style={{ backgroundColor: selectedColor }}
    >
      
      {/* 1. Top Image Section (Normal Photo) */}
      <div className="relative w-full h-56 shrink-0 overflow-hidden bg-slate-100">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* 2. Content Section (Exact Card Color) */}
      <div className="flex flex-col flex-grow p-6 pt-5 transition-colors duration-700">
        {/* Category Badge */}
        <span className={`text-[10px] font-extrabold uppercase tracking-widest mb-3 block ${isDark ? 'text-white/60' : 'text-primary'}`}>
          {product.category}
        </span>
        
        {/* Title */}
        <h3 className={`text-2xl font-extrabold mb-3 leading-tight transition-colors ${textColor}`}>
          {product.name}
        </h3>
        
        {/* Description */}
        <p className={`text-sm mb-6 flex-grow leading-relaxed ${mutedColor}`}>
          {product.description}
        </p>


        {/* Color Picker (Sleek layout) */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-auto pt-4 border-t border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs font-semibold ${mutedColor}`}>Pilihan Warna ({product.colors.length})</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${textColor} ${badgeBg} max-w-[120px] truncate`}>{colorName}</span>
            </div>
            
            {/* Scrollable Container with Fade Edges */}
            <div className="relative group/scroll">
              {/* Left Fade Mask */}
              <div className={`absolute top-0 bottom-0 left-0 w-6 z-10 bg-gradient-to-r ${isDark ? 'from-black/40' : 'from-slate-100/90'} to-transparent pointer-events-none rounded-l-md opacity-100 transition-opacity`}></div>
              
              {/* Right Fade Mask */}
              <div className={`absolute top-0 bottom-0 right-0 w-6 z-10 bg-gradient-to-l ${isDark ? 'from-black/40' : 'from-slate-100/90'} to-transparent pointer-events-none rounded-r-md opacity-100 transition-opacity`}></div>
              
              <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2 px-1 snap-x scroll-smooth">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedColor(color.hex);
                      setColorName(color.name);
                    }}
                    className={`shrink-0 snap-center w-7 h-7 rounded-full shadow-sm transition-all duration-300 focus:outline-none ${
                      selectedColor === color.hex 
                        ? 'ring-2 ring-offset-2 ring-slate-800 scale-110' 
                        : 'ring-1 ring-slate-200/50 hover:scale-110'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Pilih warna ${color.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
