'use client';

import { useState, useEffect } from 'react';
import { Home, MapPin, Phone, MessageCircle, Package, Handshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const [activeState, setActiveState] = useState('');
  
  let defaultActive = 'home';
  if (pathname === '/map') defaultActive = 'location';
  if (pathname === '/products') defaultActive = 'products';
  
  const active = activeState || defaultActive;

  const setActive = (id: string) => setActiveState(id);

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveState(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is in the top/middle of the viewport
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const navItems = [
    { id: 'home', icon: Home, label: 'Beranda', href: pathname === '/' ? '#home' : '/' },
    { id: 'products', icon: Package, label: 'Produk', href: '/products' },
    { id: 'partnership', icon: Handshake, label: 'Kemitraan', href: pathname === '/' ? '#partnership' : '/#partnership' },
    { id: 'location', icon: MapPin, label: 'Lokasi', href: '/map' },
    { id: 'contact', icon: Phone, label: 'Kontak', href: pathname === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <>
      {/* Mobile Bottom Bar (Safari Light Style) */}
      <nav className="fixed bottom-6 left-0 right-0 z-50 md:hidden pointer-events-none flex justify-center px-4">
        <div className="pointer-events-auto h-16 bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl flex justify-around items-center px-4 rounded-full w-full max-w-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={cn(
                  'flex flex-col items-center justify-center gap-1 p-2 rounded-xl transition-all duration-200 active:scale-90 active:bg-slate-50',
                  isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-700'
                )}
              >
                <Icon size={22} className={isActive ? 'scale-110 transition-transform' : ''} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop Right Pill Navbar (Safari Light Style) */}
      <nav className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <div className="pointer-events-auto bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl flex flex-col gap-6 py-6 px-3 rounded-[2rem]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                title={item.label}
                className={cn(
                  'p-3 rounded-2xl transition-all duration-200 flex items-center justify-center active:scale-90',
                  isActive 
                    ? 'bg-white/80 text-blue-600 shadow-lg shadow-black/5' 
                    : 'text-slate-600 hover:bg-white/50 hover:text-slate-800 active:bg-white/70'
                )}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
