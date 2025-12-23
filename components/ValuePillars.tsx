
import React from 'react';
import { PILLARS } from '../constants';
import { Search, ShieldAlert, TrendingDown } from 'lucide-react';

const icons = [<Search />, <ShieldAlert />, <TrendingDown />];

const ValuePillars: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Our Core Intelligence</div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
            We Give You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">X-Ray Vision</span> <br />
            Into Your Energy Bills.
          </h2>
          <p className="text-2xl text-slate-400 leading-relaxed font-medium">
            Most brokers sell rates. We uncover the truth. Our AI platform audits every cent, protecting your bottom line from silent overcharges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.title} 
              className="group relative bg-[#0d1425] p-12 rounded-[3.5rem] border border-white/5 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-4 shadow-2xl"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-400/10 rounded-[3.5rem] transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blue-900 rounded-[2rem] flex items-center justify-center text-blue-400 mb-10 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 shadow-lg">
                  {React.cloneElement(icons[idx] as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h4 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  {pillar.description}
                </p>
                <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-3 text-blue-500 font-black text-sm uppercase tracking-widest group-hover:gap-5 transition-all">
                  Deep Dive <span className="text-2xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
