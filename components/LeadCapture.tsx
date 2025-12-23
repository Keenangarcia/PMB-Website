
import React, { useState } from 'react';
import { Upload, CheckCircle, Loader2, Sparkles, TrendingDown } from 'lucide-react';
import { analyzeElectricityBill } from '../services/geminiService';

interface LeadCaptureProps {
  onAnalysisComplete: (data: any) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onAnalysisComplete }) => {
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const analysis = await analyzeElectricityBill(file?.name || 'bill_sample.pdf', formData.business_name);
    setTimeout(() => {
      setLoading(false);
      onAnalysisComplete({ ...analysis, ...formData });
    }, 2000);
  };

  return (
    <div className="space-y-20">
      {/* High-Impact Promo Banner */}
      <div className="relative glass overflow-hidden rounded-[3rem] p-12 md:p-16 border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-yellow-400/5"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
              Reduce Electricity <br />
              <span className="text-blue-400 underline italic">Costs By 20-40%</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium">Secure your 2026 budget now, before the year-end rush.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-28 h-28 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-blue-950 shadow-2xl transform rotate-12">
               <span className="text-[10px] font-black uppercase tracking-tighter">Free</span>
               <span className="text-lg font-black leading-none uppercase">Consult</span>
               <TrendingDown className="w-5 h-5 mt-1" />
            </div>
            <div className="text-blue-400 font-mono text-sm tracking-widest animate-pulse">LOCKED_IN_SAVINGS_V2</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 bg-blue-600 opacity-5 blur-[100px] pointer-events-none"></div>
        <div className="relative glass-dark border border-white/10 shadow-2xl rounded-[4rem] p-10 md:p-20 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">AI Audit Ready</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">Close The Year <br /> With Certainty.</h3>
              <p className="text-xl text-slate-400 font-medium">Your free AI-powered electricity analysis takes less than 60 seconds.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Business Name*</label>
                  <input 
                    type="text" required
                    value={formData.business_name}
                    onChange={(e) => setFormData({...formData, business_name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 focus:bg-white/10 outline-none transition-all font-bold text-white placeholder-slate-600"
                    placeholder="ACME Industrial"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Full Name*</label>
                  <input 
                    type="text" required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({...formData, contact_name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 focus:bg-white/10 outline-none transition-all font-bold text-white placeholder-slate-600"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Corporate Email*</label>
                  <input 
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-blue-500 focus:bg-white/10 outline-none transition-all font-bold text-white placeholder-slate-600"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs font-black text-slate-500 mb-3 uppercase tracking-[0.2em]">Upload Recent Bill</label>
                <div className="flex-grow flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-[2.5rem] p-10 text-center bg-white/[0.02] hover:bg-blue-500/[0.03] hover:border-blue-500/50 transition-all group relative cursor-pointer">
                  <input 
                    type="file" 
                    onChange={(e) => e.target.files && setFile(e.target.files[0])}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {file ? (
                    <div className="animate-in zoom-in duration-300">
                      <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="font-black text-white text-lg">{file.name}</p>
                      <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-2">Ready for Analysis</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-lg">
                        <Upload className="w-10 h-10" />
                      </div>
                      <p className="text-2xl font-black text-white mb-2">Drag & Drop Bill</p>
                      <p className="text-slate-500 font-medium">Or click to browse files</p>
                    </>
                  )}
                </div>
                
                <button 
                  type="submit" disabled={loading}
                  className="mt-10 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white font-black py-7 rounded-[2rem] text-2xl shadow-[0_20px_40px_rgba(37,99,235,0.3)] flex items-center justify-center gap-4 transition-all transform hover:-translate-y-1 active:scale-95 shimmer"
                >
                  {loading ? <><Loader2 className="w-8 h-8 animate-spin" /> AI Auditing...</> : 'Get Free Quote'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;
