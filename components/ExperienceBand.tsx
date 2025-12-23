
import React from 'react';
import { CheckCircle2, Map } from 'lucide-react';
import { EXPERTISE_AREAS } from '../constants';

const ExperienceBand: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f1e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4">
              <Map className="w-4 h-4" />
              Texas Regional Experts
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-[1.1]">
              Built for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">ERCOT Market</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-12">
              Our team combines deep Texas energy expertise with AI-driven analysis to protect your business from the volatility of the deregulated market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {EXPERTISE_AREAS.map((area) => (
                <div key={area} className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{area}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-white font-black py-5 px-10 rounded-2xl transition-all">
               Our Local Advantage
            </button>
          </div>
          
          <div className="lg:w-1/2 relative group">
             <div className="absolute -inset-8 bg-blue-600/10 rounded-[4rem] blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
             
             {/* The Medical/Urgent Care boardroom style image placeholder */}
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Modern Texas Boardroom" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
             </div>

             <div className="absolute -bottom-10 -right-10 glass-dark p-10 rounded-[3rem] shadow-2xl max-w-[320px] border border-blue-500/30">
                <div className="text-yellow-400 font-black text-6xl mb-3 leading-none italic">20+ YRS</div>
                <div className="text-white text-sm font-bold leading-relaxed uppercase tracking-widest">
                  Combined Experience in <br />
                  <span className="text-blue-400">Deregulated Energy</span>
                </div>
             </div>
             
             {/* Industry Badge Floating */}
             <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl transform -rotate-12 hidden xl:block">
                <div className="text-slate-900 font-black text-xl mb-1">PMB Certified</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Efficiency Level 100</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceBand;
