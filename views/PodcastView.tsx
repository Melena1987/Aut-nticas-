
import React from 'react';
import { Mic } from 'lucide-react';

const PodcastView: React.FC = () => {
  return (
    <section className="pt-40 pb-32 bg-brand-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block p-6 rounded-full bg-brand-pink text-white mb-12 animate-bounce-slow">
          <Mic size={64} />
        </div>
        <h1 className="text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-8 leading-none">PODCAST <br /><span className="text-brand-pink">PRÓXIMAMENTE</span></h1>
        <p className="text-2xl font-serif italic text-gray-400">Estamos afinando las voces. El ruido empieza pronto.</p>
        <div className="mt-16 flex justify-center space-x-4">
           <div className="w-4 h-4 rounded-full bg-brand-pink animate-pulse"></div>
           <div className="w-4 h-4 rounded-full bg-brand-pink/50"></div>
           <div className="w-4 h-4 rounded-full bg-brand-pink/20"></div>
        </div>
      </div>
    </section>
  );
};

export default PodcastView;
