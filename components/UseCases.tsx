
import React from 'react';
import { USE_CASES } from '../constants';
import { AlertTriangle, MapPin, Factory, Store } from 'lucide-react';

const icons = [<Store />, <Factory />, <MapPin />];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-20">Who Uses Power My Business™</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {USE_CASES.map((useCase, idx) => (
            <div key={useCase.segment} className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  {React.cloneElement(icons[idx] as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-2xl font-black text-slate-900">{useCase.segment}</h3>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-auto">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <div className="text-red-900 font-bold mb-1 uppercase text-xs tracking-tighter">The Pain Point</div>
                    <p className="text-red-800 font-medium">
                      {useCase.pain}
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                See Case Study
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
