
import React from 'react';
import { Star, TrendingUp, MessageSquare, Mail, Smartphone } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <section className="pt-40 pb-32 bg-brand-cream min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-20 animate-in fade-in slide-in-from-left duration-700">CONTACTO</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] magazine-border hover:shadow-2xl transition-all group">
            <h3 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3">
              <Star className="text-brand-pink group-hover:rotate-45 transition-transform" /> SOY UNA MUJER AUTÉNTICA
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-snug font-medium">Quiero participar en campañas, contar mi historia o unirme como creadora.</p>
            <button className="w-full py-5 bg-brand-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-pink transition-all shadow-md">RELLENAR FORMULARIO</button>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] magazine-border hover:shadow-2xl transition-all group">
            <h3 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3">
              <TrendingUp className="text-brand-pink group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> SOY UNA MARCA
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-snug font-medium">Busco campañas reales, UGC con alma o colaborar con Auténticas.</p>
            <a href="mailto:hola@autenticas.agency" className="block w-full text-center py-5 border-2 border-brand-black text-brand-black rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-sm">ESCRÍBENOS AQUÍ</a>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] magazine-border hover:shadow-2xl transition-all group">
            <h3 className="text-3xl font-bold uppercase mb-6 flex items-center gap-3">
              <MessageSquare className="text-brand-pink group-hover:scale-110 transition-transform" /> SOY PRENSA
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-snug font-medium">Quiero entrevistar, compartir, o difundir esta revolución.</p>
            <button className="w-full py-5 border-2 border-brand-black bg-brand-cream text-brand-black rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-white transition-all shadow-sm">DESCARGAR DOSSIER</button>
          </div>
        </div>

        <div className="mt-24 text-center border-t-2 border-brand-black pt-20">
           <p className="text-4xl font-bold uppercase tracking-tighter mb-8">¿O prefieres algo más directo?</p>
           <div className="flex flex-col md:flex-row justify-center items-center gap-12">
             <a href="mailto:hola@autenticas.es" className="flex items-center gap-3 text-2xl font-bold hover:text-brand-pink transition-colors">
               <Mail /> hola@autenticas.es
             </a>
             <button className="flex items-center gap-3 text-2xl font-bold hover:text-brand-pink transition-colors">
               <Smartphone /> WhatsApp Directo
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
