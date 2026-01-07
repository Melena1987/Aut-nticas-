
import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';

interface WhatMovesUsProps {
  setView: (view: string) => void;
}

const WhatMovesUs: React.FC<WhatMovesUsProps> = ({ setView }) => {
  const manifestoPhrases = [
    { text: "No rejuvenecemos. Evolucionamos.", style: "solid" },
    { text: "No tenemos filtro. Tenemos voz.", style: "outline" },
    { text: "Las arrugas no se tapan. Se escuchan.", style: "solid" },
    { text: "La edad no se elige. El silencio, tampoco.", style: "outline" },
    { text: "Si molesta, probablemente hacía falta.", style: "solid" },
    { text: "Prime time no es una hora. Es una actitud.", style: "outline" },
    { text: "Vive en voz alta. No te traduzcas.", style: "solid" },
  ];

  return (
    <section className="py-24 bg-brand-cream overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-pink mb-4 italic">MICRO-MANIFIESTO</h2>
          <p className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
            LO QUE NOS <span className="text-brand-pink">MUEVE</span>
          </p>
        </div>

        {/* Cuadrícula de Moodboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {manifestoPhrases.map((phrase, idx) => (
            <div 
              key={idx} 
              className={`group relative p-6 md:p-8 magazine-border rounded-[2rem] bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[220px] ${
                idx === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <Quote className="absolute top-4 right-4 text-brand-pink/10 w-8 h-8 group-hover:text-brand-pink/30 transition-colors" />
              
              <div className="mt-auto">
                <span className="text-[8px] font-bold text-gray-300 mb-2 block tracking-widest uppercase">PUNTO {idx + 1}</span>
                <p className={`text-xl md:text-2xl font-bold uppercase tracking-tighter leading-[1.1] transition-all duration-300 ${
                  phrase.style === 'outline' 
                    ? 'outline-text !text-brand-black group-hover:text-brand-black' 
                    : 'text-brand-black'
                }`}>
                  {phrase.text}
                </p>
              </div>
            </div>
          ))}
          
          {/* Tarjeta Final CTA - Siempre al final y destacada */}
          <button 
            onClick={() => setView('manifiesto')}
            className="group relative p-6 md:p-8 magazine-border rounded-[2rem] bg-brand-black text-white transition-all duration-300 hover:bg-brand-pink flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:min-h-[220px]"
          >
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tighter leading-none mb-4">
              LEER EL <br /> MANIFIESTO <br /> COMPLETO
            </h3>
            <ArrowRight className="group-hover:translate-x-2 transition-transform text-brand-pink group-hover:text-white" />
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-brand-pink"></div>
            ))}
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 mx-2">Criterio • Humor • Escándalo</span>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-brand-pink"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default WhatMovesUs;
