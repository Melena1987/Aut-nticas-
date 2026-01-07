
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
    <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[110] md:max-w-md animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="bg-white magazine-border rounded-[3rem] shadow-2xl p-6 md:p-8 flex flex-col gap-4 relative">
        
        {/* Contenido de texto */}
        <div className="pr-4">
          <p className="text-[13px] md:text-sm font-medium text-brand-black leading-snug">
            <span className="font-bold uppercase tracking-tighter text-brand-pink block mb-1 text-[11px]">¿COOKIES CON CRITERIO?</span> 
            Las nuestras tienen menos grasa que las del súper y más estilo que tu ex.
          </p>
        </div>

        {/* Acciones inferiores */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <button 
            onClick={() => {
              setView('legal');
              setIsVisible(false);
            }}
            className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-brand-black transition-colors"
          >
            INFO
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={acceptCookies}
              className="px-8 py-2.5 bg-brand-black text-white rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-brand-pink transition-all active:scale-95 whitespace-nowrap"
            >
              ADELANTE
            </button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-brand-black transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Efecto de sombra sutil inferior */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-brand-black/5 blur-xl -z-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default CookieBanner;
