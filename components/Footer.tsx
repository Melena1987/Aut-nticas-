
import React from 'react';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

interface FooterProps {
  setView: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <span className="font-bold text-6xl tracking-tighter uppercase leading-none">
              AUTÉNTICAS™ <br /> MUJERES +40 <br /> <span className="text-brand-pink">EN NUESTRO PUNTO.</span>
            </span>
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
                <a href="#" className="hover:text-brand-pink transition-colors"><Instagram size={24} /></a>
                <a href="#" className="hover:text-brand-pink transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="hover:text-brand-pink transition-colors"><ExternalLink size={24} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">© 2024 AUTÉNTICAS. BASED IN MADRID.</p>
           <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
             <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
             <a href="#" className="hover:text-white transition-colors">Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
