
import React from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d1425] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-4">Industry Credentials</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Mastering Commercial Electricity <span className="text-blue-500">For Over A Decade.</span>
            </h3>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Our certifications aren't just badges; they're promises. We adhere to the highest global standards for energy management and client transparency.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Certified Energy Professionals",
                "ISO 50001:2018 Standards",
                "BBB Accredited Business",
                "Top Commercial Provider Award 2024"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-blue-600/10 transition-colors cursor-default border border-white/5">
               <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10 text-yellow-400" />
               </div>
               <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Certified</div>
               <div className="text-lg font-black text-white">Energy Pro</div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-blue-600/10 transition-colors cursor-default border border-white/5">
               <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-10 h-10 text-blue-400" />
               </div>
               <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">ISO Standard</div>
               <div className="text-lg font-black text-white">50001:2018</div>
            </div>

            <div className="col-span-2 glass p-8 rounded-3xl flex items-center justify-between border-blue-500/20">
               <div>
                  <div className="text-3xl font-black text-white mb-1 tracking-tighter uppercase italic">BBB Accredited</div>
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">Highest Rating Possible</div>
               </div>
               <div className="text-5xl font-black text-blue-500">A+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
