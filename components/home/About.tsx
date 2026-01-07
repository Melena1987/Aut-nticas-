
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  setView: (view: string) => void;
}

const About: React.FC<AboutProps> = ({ setView }) => {
  return (
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
          <p className="text-brand-black font-bold">
            Y sí, muchas somos +40. <br />
            Y estamos en nuestro punto exacto. <br />
            Por dentro y por fuera.
          </p>
        </div>
        <button onClick={() => setView('manifiesto')} className="mt-12 flex items-center space-x-3 group mx-auto">
          <div className="w-12 h-12 rounded-full border border-brand-black flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase">LEE NUESTRO MANIFIESTO</span>
        </button>
      </div>
    </section>
  );
};

export default About;
