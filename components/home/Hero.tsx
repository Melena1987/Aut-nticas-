
import React from 'react';
import { Instagram } from 'lucide-react';

interface HeroProps {
  setView: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative min-h-[95vh] flex items-start lg:items-center pt-24 md:pt-40 lg:pt-28 overflow-hidden bg-brand-cream">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        <div className="lg:col-span-8 z-10">
          <div className="flex items-center space-x-3 mb-6 md:mb-12">
            <div className="w-12 md:w-20 h-[2px] bg-brand-black"></div>
            <span className="text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase">MÁS QUE UNA EDAD</span>
          </div>
          
          <div className="flex flex-col items-start mb-8 md:mb-12 lg:mb-8">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767814153687_HORIZONTAL_ROSA_LABIO.png?alt=media&token=70531bd3-0a32-4b30-94c2-02eb42864c92" 
              alt="Auténticas Logo" 
              className="w-[90vw] md:w-[75vw] lg:w-[48vw] h-auto object-contain mb-4 md:mb-6 -ml-2 md:-ml-4 scale-105 origin-left"
            />
            <h1 className="font-bold text-[13vw] md:text-[11vw] lg:text-[6.5vw] leading-[0.9] lg:leading-[0.82] text-brand-black uppercase">
              MUJERES +40 <br />
              <span className="text-brand-pink italic lowercase tracking-tight font-serif text-[8.5vw] md:text-[7vw] lg:text-[4vw] ml-1">en nuestro punto.</span>
            </h1>
          </div>

          <p className="text-xl md:text-3xl lg:text-2xl italic text-gray-800 leading-[1.1] mb-12 md:mb-16 lg:mb-12 max-w-2xl lg:max-w-xl font-serif">
            Cero ganas de pasar desapercibidas. Y con una comunidad que vive en voz alta y no se deja traducir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
            <a 
              href="https://www.instagram.com/autenticas.es/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 md:px-14 py-5 md:py-7 bg-brand-black text-white rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-brand-pink transition-all flex items-center justify-center gap-3"
            >
              <span className="bg-white/10 p-2 rounded-full"><Instagram size={18} /></span> 
              SÍGUENOS EN INSTAGRAM
            </a>
            <button 
              onClick={() => setView('contacto')} 
              className="px-8 md:px-14 py-5 md:py-7 border-2 border-brand-black text-brand-black rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all"
            >
              SÚMATE A LA COMUNIDAD
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 relative hidden lg:block">
           <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden magazine-border rotate-3 scale-110">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767809818842_LABIO_ROSA.png?alt=media&token=df54a20a-9638-4e12-baf0-cf11ccf5643d" 
                className="w-full h-full object-cover"
                alt="Mujer auténtica"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
