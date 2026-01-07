
import React from 'react';
import { Instagram, Heart } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex flex-col items-start mb-6">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1767814153687_HORIZONTAL_ROSA_LABIO.png?alt=media&token=70531bd3-0a32-4b30-94c2-02eb42864c92" 
                alt="Auténticas Logo" 
                className="w-full max-w-[320px] h-auto object-contain -ml-2 -mb-2"
              />
              <span className="font-bold text-5xl lg:text-6xl tracking-tighter uppercase leading-none">
                MUJERES +40 <br /> <span className="text-brand-pink">EN NUESTRO PUNTO.</span>
              </span>
            </div>
            <p className="mt-8 text-gray-400 text-lg">Cero ganas de pasar desapercibidas. Una comunidad que no se rinde ante el silencio.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-brand-pink uppercase text-[10px] tracking-widest mb-6">EXPLORA</h4>
              <ul className="space-y-4 text-sm font-bold uppercase">
                <li><button onClick={() => setView('home')} className="hover:text-brand-pink">Home</button></li>
                <li><button onClick={() => setView('manifiesto')} className="hover:text-brand-pink">Manifiesto</button></li>
                <li><button onClick={() => setView('blog')} className="hover:text-brand-pink">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-brand-pink uppercase text-[10px] tracking-widest mb-6">CONECTA</h4>
              <ul className="space-y-4 text-sm font-bold uppercase">
                <li><button onClick={() => setView('contacto')} className="hover:text-brand-pink">Marcas</button></li>
                <li><button onClick={() => setView('contacto')} className="hover:text-brand-pink">Creadoras</button></li>
                <li><button onClick={() => setView('contacto')} className="hover:text-brand-pink">Prensa</button></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-brand-pink uppercase text-[10px] tracking-widest mb-6">SOCIAL</h4>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/autenticas.es/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors flex items-center gap-2 font-bold text-sm">
                  <Instagram size={24} /> @AUTENTICAS.ES
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
           <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
             <span>© 2026 AUTÉNTICAS.</span>
             <span className="flex items-center gap-1">
               WEB HECHA CON <Heart size={12} className="text-brand-pink fill-brand-pink" /> POR 
               <a 
                href="https://melenamarketing.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-brand-pink transition-colors underline underline-offset-4 decoration-brand-pink/30"
               >
                 MELENA MARKETING
               </a>
             </span>
           </div>
           <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
             <button onClick={() => setView('legal')} className="hover:text-white transition-colors">Aviso Legal</button>
             <button onClick={() => setView('legal')} className="hover:text-white transition-colors">Privacidad</button>
             <button onClick={() => setView('legal')} className="hover:text-white transition-colors">Cookies</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
