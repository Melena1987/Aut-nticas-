
import React from 'react';
import { Instagram, ArrowRight, Users, Eye, TrendingUp, Mic, FileText, Mail, Smartphone } from 'lucide-react';

interface HomeViewProps {
  setView: (view: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-brand-cream">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-8 z-10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-black"></div>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase">MÁS QUE UNA EDAD</span>
            </div>
            <h1 className="font-bold text-[13vw] lg:text-[8vw] leading-[0.85] text-brand-black uppercase mb-10">
              AUTÉNTICAS™ <br />
              MUJERES +40 <br />
              <span className="text-brand-pink italic lowercase tracking-normal font-serif">en nuestro punto.</span>
            </h1>
            <p className="text-xl lg:text-3xl italic text-gray-700 leading-relaxed mb-10 max-w-2xl font-serif">
              Cero ganas de pasar desapercibidas. Y con una comunidad que vive en voz alta y no se deja traducir.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#" className="px-12 py-5 bg-brand-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-pink transition-all shadow-xl flex items-center justify-center gap-3">
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
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover"
                  alt="Mujer auténtica"
                />
                <div className="absolute bottom-6 right-6 bg-brand-pink text-white p-4 rounded-full font-bold text-xs rotate-[-15deg]">
                  PRIME TIME
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-pink mb-8">¿QUÉ ES AUTÉNTICAS?</h2>
          <p className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none mb-12">
            Es una voz que suena a ti. <br />
            Y a muchas otras como tú. <br />
            <span className="italic font-serif lowercase text-brand-pink">Pero con altavoz.</span>
          </p>
          <div className="text-lg text-gray-600 leading-relaxed space-y-6 max-w-2xl mx-auto font-medium">
            <p>Mujeres que han pasado los 40 y están justo donde quieren estar: creando, opinando, gozando, decidiendo.</p>
            <p>Auténticas es lo que pasa cuando dejas de mirar fuera y empiezas a mirar dentro. Con humor. Con criterio. Y, si hace falta, con un poco de escándalo.</p>
            <p>Es un punto de encuentro. Una energía. Un lugar donde ser tú misma suma, conecta, arrasa.</p>
          </div>
          <button onClick={() => setView('manifiesto')} className="mt-12 flex items-center space-x-3 group mx-auto">
            <div className="w-12 h-12 rounded-full border border-brand-black flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase">LEE NUESTRO MANIFIESTO</span>
          </button>
        </div>
      </section>

      <section className="py-24 bg-brand-cream border-y-2 border-brand-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-7xl lg:text-9xl font-bold uppercase tracking-tighter mb-20 text-center">LO QUE <br /> PASA <span className="outline-text">AQUÍ</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-pink/20 flex items-center justify-center text-brand-pink mb-8 group-hover:bg-brand-pink group-hover:text-white transition-all">
                  <Users size={32} />
                </div>
                <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">COMUNIDAD</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium">
                  <li>• Reels con sorna y frases bandera.</li>
                  <li>• Te ríes sola, pero acompañada.</li>
                  <li>• Humor, criterio y escándalo.</li>
                  <li>• Si algo te pica, es verdad.</li>
                </ul>
              </div>
              <button className="mt-12 text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-brand-black border-b border-brand-pink pb-1 self-start transition-colors">SÍGUENOS EN REDES</button>
            </div>

            <div className="bg-brand-black p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between text-white hover:scale-[1.02] transition-all">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-brand-pink flex items-center justify-center text-white mb-8">
                  <Eye size={32} />
                </div>
                <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">CREADORAS +40</h3>
                <ul className="space-y-4 text-gray-300 text-sm font-medium">
                  <li>• Si tienes algo que decir o contar.</li>
                  <li>• Campañas que no den vergüenza ajena.</li>
                  <li>• Más viva que nunca, sin aprobación.</li>
                  <li>• Tu cara, tu voz, tu estilo.</li>
                </ul>
              </div>
              <button onClick={() => setView('contacto')} className="mt-12 text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-white border-b border-brand-pink pb-1 self-start transition-colors">QUIERO PARTICIPAR EN CAMPAÑAS</button>
            </div>

            <div className="bg-white p-12 magazine-border rounded-[2.5rem] flex flex-col justify-between hover:shadow-2xl transition-all group">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-4xl font-bold uppercase mb-6 tracking-tighter">¿ERES UNA MARCA?</h3>
                <ul className="space-y-4 text-gray-600 text-sm font-medium">
                  <li>• ¿Hablas a quien te compra de verdad?</li>
                  <li>• Tus clientas tienen +40 y criterio.</li>
                  <li>• Conecta sin sonar cursi.</li>
                  <li>• Vende sin sonar vacía.</li>
                </ul>
              </div>
              <button onClick={() => setView('contacto')} className="mt-12 text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-brand-black border-b border-brand-pink pb-1 self-start transition-colors">SOY UNA MARCA</button>
            </div>
          </div>
        </div>
      </section>

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

      <div className="bg-brand-black py-16 overflow-hidden border-y-4 border-brand-pink">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center font-bold text-6xl text-white tracking-tighter px-10">
              <span className="mx-10 uppercase italic">No rejuvenecemos. Evolucionamos.</span>
              <span className="mx-10">•</span>
              <span className="mx-10 uppercase outline-text">No tenemos filtro. Tenemos voz.</span>
              <span className="mx-10">•</span>
              <span className="mx-10 uppercase italic">Las arrugas no se tapan. Se escuchan.</span>
              <span className="mx-10">•</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeView;
