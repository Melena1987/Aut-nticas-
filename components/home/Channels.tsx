
import React from 'react';
import { Mic, FileText, Mail, Smartphone } from 'lucide-react';

interface ChannelsProps {
  setView: (view: string) => void;
}

const Channels: React.FC<ChannelsProps> = ({ setView }) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-pink mb-16 text-center">NUESTROS CANALES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button onClick={() => setView('podcast')} className="aspect-square bg-brand-cream flex flex-col items-center justify-center rounded-[2rem] hover:bg-brand-pink hover:text-white transition-all group relative overflow-hidden">
             <Mic size={48} className="mb-4 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-xl uppercase tracking-tighter">PODCAST</span>
             <span className="absolute top-4 right-4 bg-brand-black text-white px-3 py-1 text-[8px] font-bold rounded-full">PRONTO</span>
          </button>
          <button onClick={() => setView('blog')} className="aspect-square bg-brand-cream flex flex-col items-center justify-center rounded-[2rem] hover:bg-brand-pink hover:text-white transition-all group">
             <FileText size={48} className="mb-4 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-xl uppercase tracking-tighter">BLOG</span>
          </button>
          <button onClick={() => setView('contacto')} className="aspect-square bg-brand-cream flex flex-col items-center justify-center rounded-[2rem] hover:bg-brand-pink hover:text-white transition-all group">
             <Mail size={48} className="mb-4 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-xl uppercase tracking-tighter">NEWSLETTER</span>
          </button>
          <button onClick={() => {}} className="aspect-square bg-brand-cream flex flex-col items-center justify-center rounded-[2rem] hover:bg-brand-pink hover:text-white transition-all group">
             <Smartphone size={48} className="mb-4 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-xl uppercase tracking-tighter">REDES</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Channels;
