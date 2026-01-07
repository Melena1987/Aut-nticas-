
import React from 'react';

const Marquee: React.FC = () => {
  const phrases = [
    "No rejuvenecemos. Evolucionamos.",
    "No tenemos filtro. Tenemos voz.",
    "Las arrugas no se tapan. Se escuchan.",
    "La edad no se elige. El silencio, tampoco.",
    "Si molesta, probablemente hacía falta.",
    "Prime time no es una hora. Es una actitud.",
    "Vive en voz alta. No te traduzcas."
  ];

  const MarqueeContent = () => (
    <div className="flex items-center">
      {phrases.map((phrase, idx) => (
        <div key={idx} className="flex items-center">
          <span className={`text-sm md:text-lg font-bold uppercase tracking-[0.2em] px-4 md:px-8 whitespace-nowrap transition-all ${
            idx % 2 === 0 ? 'text-white italic' : 'outline-text text-white'
          }`}>
            {phrase}
          </span>
          <span className="text-brand-pink text-xs md:text-sm select-none opacity-50">•</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-brand-black py-4 md:py-6 overflow-hidden border-y border-brand-pink/30 relative group">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Bloques duplicados para el scroll infinito */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
      
      {/* Overlays de desvanecimiento para suavizar los bordes */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
