
import React from 'react';
import { METRICS } from '../constants';

const MetricsStrip: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <div className="text-5xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-blue-400 font-semibold uppercase tracking-widest text-xs">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;
