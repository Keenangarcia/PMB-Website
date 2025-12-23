
import React from 'react';
import { X, ShieldAlert, Sparkles, TrendingDown, ClipboardList } from 'lucide-react';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in fade-in duration-300">
        {/* Header */}
        <div className="bg-blue-900 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-yellow-400 w-5 h-5 fill-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">AI Bill Insight Report</span>
          </div>
          <h2 className="text-3xl font-black">{data.business_name}</h2>
          <p className="text-blue-300 mt-1">Analysis generated for {data.contact_name}</p>
        </div>

        {/* Results */}
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <TrendingDown className="w-5 h-5" />
                <span className="font-bold text-sm uppercase">Potential Savings</span>
              </div>
              <div className="text-4xl font-black text-blue-900">{data.savings}</div>
              <p className="text-xs text-blue-500 mt-2">Annualized Projection</p>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 text-slate-600 mb-2">
                <ClipboardList className="w-5 h-5" />
                <span className="font-bold text-sm uppercase">Anomalies Detected</span>
              </div>
              <div className="text-xl font-bold text-slate-900">3 Major Factors</div>
              <p className="text-xs text-slate-500 mt-2">Based on current ERCOT pricing</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-5 bg-red-50 rounded-2xl border border-red-100">
              <ShieldAlert className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <h4 className="font-black text-red-900 mb-1">Contract Risk Alert</h4>
                <p className="text-red-800 text-sm">{data.riskAlert}</p>
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
               <h4 className="font-black text-slate-900 mb-1">Hidden Charge Analysis</h4>
               <p className="text-slate-600 text-sm">Found: <span className="font-bold text-slate-900">{data.fee}</span></p>
            </div>

            <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
               <h4 className="font-black text-green-900 mb-1">Expert Recommendation</h4>
               <p className="text-green-800 text-sm">{data.recommendation}</p>
            </div>
          </div>

          <button 
            onClick={() => alert("Advisor notified. We will call you within 15 minutes.")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/20 transition-all flex items-center justify-center gap-3"
          >
            Review Full Analysis With Advisor
            <ClipboardList className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;
