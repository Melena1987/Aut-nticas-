
import React from 'react';

const BlogView: React.FC = () => {
  const articles = [
    { title: "El arte de decir NO a los 40", date: "MARZO 2024", category: "ACTITUD", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" },
    { title: "Marcas que sí entienden nuestro Prime Time", date: "FEBRERO 2024", category: "NEGOCIOS", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { title: "Criterio vs Tendencia: ¿Quién gana?", date: "ENERO 2024", category: "ESTILO", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <section className="pt-40 pb-32 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-20 text-center animate-in fade-in duration-700">EL <span className="text-brand-pink">BLOG</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] magazine-border mb-6">
                <img src={art.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" alt={art.title} />
              </div>
              <p className="text-[10px] font-bold tracking-widest text-brand-pink mb-2">{art.category} • {art.date}</p>
              <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none group-hover:text-brand-pink transition-colors">{art.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogView;
