
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.title} className="relative group flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-800 border-4 border-blue-900 flex items-center justify-center text-4xl font-black text-yellow-400 mb-8 z-10 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                {step.step}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
