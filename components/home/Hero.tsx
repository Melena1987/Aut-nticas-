
import React from 'react';
import { Instagram } from 'lucide-react';

interface HeroProps {
  setView: (view: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-cream">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8 z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-black"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">MÁS QUE UNA EDAD</span>
          </div>
          
          <div className="flex flex-col items-start mb-10">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767814153687_HORIZONTAL_ROSA_LABIO.png?alt=media&token=70531bd3-0a32-4b30-94c2-02eb42864c92" 
              alt="Auténticas Logo" 
              className="w-[75vw] lg:w-[42vw] h-auto object-contain -mb-4 lg:-mb-8 -ml-2"
            />
            <h1 className="font-bold text-[10vw] lg:text-[6.5vw] leading-[0.8] text-brand-black uppercase">
              MUJERES +40 <br />
              <span className="text-brand-pink italic lowercase tracking-normal font-serif">en nuestro punto.</span>
            </h1>
          </div>

          <p className="text-xl lg:text-3xl italic text-gray-700 leading-relaxed mb-10 max-w-2xl font-serif">
            Cero ganas de pasar desapercibidas. Y con una comunidad que vive en voz alta y no se deja traducir.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://www.instagram.com/autenticas.es/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-12 py-5 bg-brand-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-pink transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <Instagram size={18} /> SÍGUENOS EN INSTAGRAM
            </a>
            <button onClick={() => setView('contacto')} className="px-12 py-5 border-2 border-brand-black text-brand-black rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-lg">
              SÚMATE A LA COMUNIDAD
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 relative hidden lg:block">
           <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden magazine-border shadow-2xl rotate-2">
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
