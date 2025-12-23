
import React from 'react';
import { ArrowRight, Star, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

interface HeroProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0f1e]/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Dallas Skyline Office View" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <style>{`
          @keyframes slow-zoom {
            0% { transform: scale(1.0); }
            100% { transform: scale(1.1); }
          }
          .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        `}</style>
        
        {/* Glowing accents */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 z-[5]"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] z-[5]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            Trusted by 500+ Texas Businesses
          </div>
          
          <h1 className="text-6xl md:text-8xl font-[900] text-white leading-[0.95] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Outsmart Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-400">Competition.</span>
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-black text-white/90 mb-8 leading-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
            Engineer a Strategy <br />
            <span className="underline decoration-blue-500 decoration-8 underline-offset-12">That Pays You Back.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            At Power My Business, we analyze, forecast, and execute data-driven strategies designed to fit your growth goals—not just today's trends.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-14 duration-1000 delay-500">
            <button 
              onClick={onPrimaryClick}
              className="group relative bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-12 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-4 transition-all transform hover:scale-105 active:scale-95 shimmer text-lg"
            >
              Run Your Free Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button 
              onClick={onSecondaryClick}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 font-black py-6 px-12 rounded-2xl transition-all flex items-center gap-3 text-lg"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12 animate-in fade-in duration-1000 delay-700">
            <div>
              <div className="text-4xl font-black text-white mb-1">$17.2M+</div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Client Revenue Generated</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">4.9★</div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Client Satisfaction Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">11+</div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Years Expertise</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-widest">Transparent Advisory</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating UI Elements for Depth */}
      <div className="hidden xl:block absolute top-1/2 right-12 -translate-y-1/2 space-y-8 animate-in fade-in slide-in-from-right duration-1000 delay-1000">
        <div className="glass p-6 rounded-[2rem] w-80 shadow-2xl border border-blue-500/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
              <TrendingUp className="text-green-400 w-5 h-5" />
            </div>
            <div className="text-sm font-black text-white">ROI Improvement</div>
          </div>
          <div className="text-5xl font-black text-white">+32%</div>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Average First Year</div>
        </div>

        <div className="glass p-6 rounded-[2rem] w-80 shadow-2xl border border-blue-500/20 translate-x-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Cpu className="text-blue-400 w-5 h-5" />
            </div>
            <div className="text-sm font-black text-white">AI Engine Active</div>
          </div>
          <div className="h-2 bg-blue-900 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-4/5 animate-pulse"></div>
          </div>
          <div className="text-[10px] text-slate-400 font-mono tracking-tighter mt-2 uppercase">processing_ercot_realtime_node_103...</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
