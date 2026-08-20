'use client';

import { useState } from 'react';
import { faqList } from '@/lib/data/faq';
import { GlassCard } from '../ui/GlassCard';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqList[0]?.id || null);

  return (
    <section id="faq" className="py-16 px-4 md:px-12 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-slate-500 mt-2">Semua yang perlu Anda ketahui tentang produk dan kemitraan kami.</p>
      </div>

      <GlassCard className="flex flex-col gap-2 p-4 md:p-8">
        {faqList.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div 
              key={faq.id} 
              className={cn(
                "border border-slate-200 rounded-xl overflow-hidden transition-all bg-white/40",
                isOpen ? "shadow-md" : ""
              )}
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={cn("text-slate-400 transition-transform flex-shrink-0", isOpen ? "rotate-180" : "")} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-4 md:p-6 pt-0 text-slate-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </GlassCard>
    </section>
  );
}
