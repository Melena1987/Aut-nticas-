
import React from 'react';
import { Users, Eye, TrendingUp } from 'lucide-react';

interface WhatHappensProps {
  setView: (view: string) => void;
}

const WhatHappens: React.FC<WhatHappensProps> = ({ setView }) => {
  return (
    <section className="py-24 bg-brand-cream border-y-2 border-brand-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-20 text-center leading-[0.9]">
          LO QUE <br /> PASA <span className="text-brand-pink">AQUÍ</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BLOQUE 1: COMUNIDAD */}
          <div className="bg-white p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand-pink/20 flex items-center justify-center text-brand-pink mb-8 group-hover:bg-brand-pink group-hover:text-white transition-all">
                <Users size={32} />
              </div>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">COMUNIDAD</h3>
              <div className="space-y-6 text-gray-700 text-base font-medium leading-snug">
                <p>Aquí se comparten reels con sorna y frases que se convierten en bandera.</p>
                <p>Aquí te ríes sola, pero sabes que otras también lo están viendo.</p>
                <p>Aquí se habla en código Auténticas: <span className="text-brand-pink">humor, criterio y un poco de escándalo.</span></p>
                <p className="italic">Si algo te pica, probablemente es verdad.</p>
              </div>
            </div>
            <a 
              href="https://www.instagram.com/autenticas.es/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-12 text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-brand-black border-b border-brand-pink pb-1 self-start transition-colors"
            >
              SÍGUENOS EN REDES
            </a>
          </div>

          {/* BLOQUE 2: CREADORAS +40 */}
          <div className="bg-brand-black p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between text-white hover:scale-[1.02] transition-all relative">
            <div className="absolute top-8 right-8 text-brand-pink animate-pulse">
               <div className="w-3 h-3 rounded-full bg-brand-pink"></div>
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand-pink flex items-center justify-center text-white mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">CREADORAS +40</h3>
              <div className="space-y-4 text-gray-300 text-base font-medium leading-snug">
                <p>Si tienes algo que decir, grabar o contar…</p>
                <p>Si te apetece salir en campañas que no den vergüenza ajena…</p>
                <p>Si estás más viva que nunca y no necesitas aprobación…</p>
                <p className="text-white font-bold">Queremos verte, escucharte, compartirte.</p>
                <p className="text-brand-pink">Apúntate. Queremos campañas que tengan tu cara, tu voz, tu estilo.</p>
              </div>
            </div>
            <button onClick={() => setView('contacto')} className="mt-12 text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-white border-b border-brand-pink pb-1 self-start transition-colors">QUIERO PARTICIPAR EN CAMPAÑAS</button>
          </div>

          {/* BLOQUE 3: MARCAS */}
          <div className="bg-white p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group border-orange-500/20">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">¿ERES UNA MARCA?</h3>
              <div className="space-y-6 text-gray-700 text-base font-medium leading-snug">
                <p className="font-bold italic">¿Seguro que le estás hablando a quien te compra… o solo a quien queda bien en la campaña?</p>
                <p>Tus clientas tienen +40, criterio y el móvil en la mano. Si no estás conectando con ellas, igual quien se ha perdido eres tú.</p>
                <p>Aquí las campañas conectan. Y también convierten. Porque sí: <span className="text-orange-600">se puede emocionar sin sonar cursi y vender sin sonar vacía.</span></p>
                <p className="font-bold">¿Te interesa? Te leemos.</p>
              </div>
            </div>
            <button onClick={() => setView('contacto')} className="mt-12 text-[10px] font-bold tracking-widest uppercase text-orange-600 hover:text-brand-black border-b border-orange-600 pb-1 self-start transition-colors">SOY UNA MARCA</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatHappens;
