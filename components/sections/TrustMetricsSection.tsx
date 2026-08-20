'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Award, ShieldCheck, PaintBucket } from 'lucide-react';

export function TrustMetricsSection() {
  const data = [
    { year: '2020', partners: 120 },
    { year: '2021', partners: 200 },
    { year: '2022', partners: 310 },
    { year: '2023', partners: 450 },
    { year: '2024', partners: 580 },
  ];

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Left Side: Metrics Bento Box */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-emerald-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-emerald-100">
            <Award className="text-emerald-500 mb-4" size={40} />
            <h4 className="text-4xl font-extrabold text-slate-800 mb-2">15+</h4>
            <p className="text-sm text-slate-600 font-medium">Tahun Pengalaman</p>
          </div>
          <div className="bg-teal-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-teal-100">
            <Users className="text-teal-500 mb-4" size={40} />
            <h4 className="text-4xl font-extrabold text-slate-800 mb-2">500+</h4>
            <p className="text-sm text-slate-600 font-medium">Mitra Toko Aktif</p>
          </div>
          <div className="bg-blue-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-blue-100">
            <ShieldCheck className="text-blue-500 mb-4" size={40} />
            <h4 className="text-4xl font-extrabold text-slate-800 mb-2">100%</h4>
            <p className="text-sm text-slate-600 font-medium">Sertifikasi SNI</p>
          </div>
          <div className="bg-indigo-50 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-sm border border-indigo-100">
            <PaintBucket className="text-indigo-500 mb-4" size={40} />
            <h4 className="text-4xl font-extrabold text-slate-800 mb-2">5 Thn</h4>
            <p className="text-sm text-slate-600 font-medium">Garansi Warna</p>
          </div>
        </div>

        {/* Right Side: Growth Chart */}
        <div className="flex-[1.5] bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col">
          {/* Subtle gradient background inside dark card */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900 z-0 pointer-events-none"></div>
          
          <div className="relative z-10 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Pertumbuhan Jaringan Mitra</h3>
            <p className="text-slate-400">Kepercayaan toko bangunan terus meningkat pesat dari tahun ke tahun.</p>
          </div>

          <div className="relative z-10 flex-grow w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPartners" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                  itemStyle={{ color: '#10b981', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="partners" 
                  stroke="#10b981" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorPartners)" 
                  activeDot={{ r: 8, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </section>
  );
}
