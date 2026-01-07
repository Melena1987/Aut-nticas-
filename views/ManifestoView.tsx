
import React from 'react';

const ManifestoView: React.FC = () => {
  return (
    <section className="pt-40 pb-32 bg-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-16 leading-none animate-in fade-in slide-in-from-bottom-8 duration-700">
          EL <br /> <span className="text-brand-pink">MANIFIESTO</span>
        </h1>
        <div className="space-y-12 text-2xl lg:text-3xl font-medium leading-tight">
          <p className="border-l-4 border-brand-pink pl-8">"No estamos esperando nuestro turno. Estamos construyendo el escenario entero."</p>
          <p>La invisibilidad es un mito que otros intentaron vendernos. La realidad es que nunca hemos tenido tanta luz propia como ahora.</p>
          <p className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-brand-black py-8">
            Si molesta, probablemente hacía falta.
          </p>
          <p>No pedimos permiso para opinar, ni disculpas por existir. Nuestra experiencia no es un lastre, es nuestra ventaja competitiva y nuestra fuente de alegría.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="bg-white p-8 rounded-3xl magazine-border shadow-sm">
              <h4 className="font-bold text-brand-pink uppercase text-sm mb-4 tracking-widest">01. EVOLUCIÓN</h4>
              <p className="text-lg text-gray-700">No buscamos la fuente de la eterna juventud, sino el manantial de la eterna curiosidad.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl magazine-border shadow-sm">
              <h4 className="font-bold text-brand-pink uppercase text-sm mb-4 tracking-widest">02. VISIBILIDAD</h4>
              <p className="text-lg text-gray-700">Ocupamos espacio. En la calle, en los negocios, en las redes. Nuestra voz es nítida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoView;
