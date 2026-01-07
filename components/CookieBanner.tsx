
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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
    <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[110] md:w-auto md:max-w-[80vw] animate-in fade-in slide-in-from-right-10 duration-700">
      <div className="bg-white magazine-border rounded-[2.5rem] md:rounded-full shadow-2xl p-6 md:py-2.5 md:px-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 relative">
        
        {/* Contenido de texto */}
        <div className="flex-grow">
          <p className="text-[13px] md:text-[13px] font-medium text-brand-black leading-snug flex flex-col md:flex-row md:items-center md:gap-3">
            <span className="font-bold uppercase tracking-tighter text-brand-pink text-[11px] md:text-[11px] whitespace-nowrap">¿COOKIES CON CRITERIO?</span> 
            <span className="md:inline hidden opacity-20 text-brand-black">|</span>
            <span className="md:max-w-md lg:max-w-none">Las nuestras tienen menos grasa que las del súper y más estilo que tu ex.</span>
          </p>
        </div>

        {/* Acciones */}
        <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0 shrink-0">
          <button 
            onClick={() => {
              setView('legal');
              setIsVisible(false);
            }}
            className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-black transition-colors whitespace-nowrap"
          >
            INFO
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={acceptCookies}
              className="px-8 md:px-10 py-2.5 md:py-2 bg-brand-black text-white rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-brand-pink transition-all active:scale-95 whitespace-nowrap"
            >
              ADELANTE
            </button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-brand-black transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Efecto de sombra sutil inferior para móvil */}
        <div className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-brand-black/5 blur-xl -z-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default CookieBanner;
