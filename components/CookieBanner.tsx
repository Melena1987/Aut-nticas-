
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

interface CookieBannerProps {
  setView: (view: string) => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ setView }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('autenticas_cookies_accepted');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('autenticas_cookies_accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 right-6 left-6 md:left-auto md:right-8 z-[110] md:max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="bg-brand-cream magazine-border rounded-full shadow-2xl flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-4 relative overflow-hidden">
        
        {/* Lado Izquierdo: Icono + Texto */}
        <div className="flex items-center gap-4 flex-1">
          <div className="hidden sm:flex w-8 h-8 bg-brand-pink rounded-full items-center justify-center text-white shrink-0">
            <Cookie size={16} />
          </div>
          <p className="text-[11px] md:text-xs font-medium text-brand-black leading-tight">
            <span className="font-bold uppercase tracking-tighter text-brand-pink mr-1">¿Cookies con criterio?</span> 
            Las nuestras tienen menos grasa que las del súper y más estilo que tu ex. <span className="hidden lg:inline italic font-serif">Acepta para una experiencia Prime Time.</span>
          </p>
        </div>

        {/* Lado Derecho: Acciones */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => {
              setView('legal');
              setIsVisible(false);
            }}
            className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-black transition-colors"
          >
            Info
          </button>
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 bg-brand-black text-white rounded-full font-bold text-[9px] tracking-widest uppercase hover:bg-brand-pink transition-all active:scale-95 whitespace-nowrap"
          >
            ADELANTE
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-2 text-brand-black/20 hover:text-brand-black transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Detalle decorativo fino */}
        <div className="absolute bottom-0 left-0 h-1 bg-brand-pink/20 w-full"></div>
      </div>
    </div>
  );
};

export default CookieBanner;
