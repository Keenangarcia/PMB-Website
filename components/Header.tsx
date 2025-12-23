
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Zap, Phone } from 'lucide-react';
import { PRIMARY_NAV } from '../constants';

interface HeaderProps {
  onCtaClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Zap className="text-yellow-400 w-7 h-7 fill-yellow-400" />
              </div>
              <div className="absolute -inset-1 bg-yellow-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity"></div>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white block leading-tight">
                PMB<span className="text-blue-500">™</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400/80 block -mt-1">
                Power My Business
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {PRIMARY_NAV.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1.5 font-bold text-sm text-slate-300 hover:text-white transition-all uppercase tracking-wider">
                  {item.label}
                  {item.type === 'dropdown' && <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />}
                </button>
                {item.type === 'dropdown' && (
                  <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="w-64 glass-dark rounded-2xl shadow-2xl border border-white/10 p-2">
                      {item.items?.map((sub) => (
                        <a key={sub.label} href={sub.href} className="flex flex-col px-4 py-3 rounded-xl hover:bg-blue-600/20 group/item transition-colors">
                          <span className="text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:972-972-9931" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-bold tracking-tighter">972-972-9931</span>
            </a>
            <button 
              onClick={onCtaClick}
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-3 rounded-xl text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 shimmer"
            >
              Free Audit
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-[90] p-8 pt-24 animate-in slide-in-from-right duration-500">
          <div className="space-y-8">
            {PRIMARY_NAV.map((item) => (
              <div key={item.label}>
                <div className="text-2xl font-black text-white mb-4">{item.label}</div>
                <div className="grid gap-4 pl-4 border-l border-blue-500/30">
                  {item.items?.map((sub) => (
                    <a key={sub.label} href={sub.href} className="text-slate-400 hover:text-blue-400 text-lg font-medium">{sub.label}</a>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={onCtaClick} className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-xl uppercase tracking-widest">
              Run Free Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
