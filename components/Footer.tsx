
import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <Zap className="text-yellow-400 w-5 h-5 fill-yellow-400" />
              </div>
              <span className="text-xl font-black tracking-tight">POWER MY BUSINESS™</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              The only AI-powered platform built exclusively for Texas businesses to regain control over their energy costs.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Who We Serve</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">ERCOT Insights</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2025 Power My Business™. All Rights Reserved.
          </p>
          <p className="text-slate-600 text-[10px] max-w-lg md:text-right">
            Disclaimer: Power My Business™ provides advisory and analytical services and does not guarantee savings. Market conditions fluctuate. Analysis based on historical data and current ERCOT market behavior.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
