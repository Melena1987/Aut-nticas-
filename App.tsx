
import React, { useState, useEffect, useRef } from 'react';
import { 
  Instagram, 
  Linkedin, 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Eye, 
  Users,
  Send,
  Loader2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Star,
  Quote
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- AI Assistant Logic ---

const LucíaAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Bienvenida al universo Auténticas. Soy Lucía, tu concierge digital. ¿Cómo puedo elevar tu experiencia hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    // Defensive check for API key presence
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : null;
    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error: No se ha configurado la clave de API." }]);
      return;
    }

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Eres Lucía, la asistente virtual de "Auténticas", una plataforma editorial y comunidad premium para mujeres mayores de 40 años. 
          Tu tono es sofisticado, empoderador, directo y con un toque de ironía rebelde. 
          Huyes de los términos como "madurez" o "tercera edad". Hablas de "Prime Time", "Talento Senior" y "Visibilidad Radical". 
          Respondes de forma concisa y siempre en español.`,
          temperature: 0.8,
        }
      });
      const botText = response.text || "Mi conexión se ha pausado un momento. ¿Lo intentamos de nuevo?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, parece que hay un problema técnico. ¿Me repites tu duda?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border-2 border-brand-black overflow-hidden">
          <div className="bg-brand-black p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-pink border border-white flex items-center justify-center font-bold text-xl text-brand-black">L</div>
              <div>
                <p className="font-bold text-lg tracking-wider uppercase">LUCÍA AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2"><X className="w-5 h-5" /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-brand-black text-white rounded-tr-none' 
                  : 'bg-white text-brand-black border border-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-pink" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Escribiendo...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 rounded-xl px-4 py-2 border border-gray-200">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe algo..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 outline-none"
              />
              <button onClick={handleSend} className="text-brand-pink hover:text-brand-pinkDark"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-brand-pink transition-all border-4 border-white"
        >
          <Sparkles className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

// --- Page Sections ---

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <span className={`font-bold text-4xl tracking-tighter uppercase ${scrolled ? 'text-white' : 'text-brand-black'}`}>
          AUTÉNTICAS<span className="text-brand-pink">.</span>
        </span>
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#que-es" className={`text-[10px] font-bold tracking-widest uppercase hover:text-brand-pink ${scrolled ? 'text-white' : 'text-brand-black'}`}>QUÉ ES</a>
          <a href="#comunidad" className={`text-[10px] font-bold tracking-widest uppercase hover:text-brand-pink ${scrolled ? 'text-white' : 'text-brand-black'}`}>COMUNIDAD</a>
          <a href="#newsletter" className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase">ÚNETE</a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8 z-10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-black"></div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">ISSUE NO. 1</span>
          </div>
          <h1 className="font-bold text-[15vw] lg:text-[10vw] leading-[0.85] text-brand-black uppercase mb-10">
            EL REINADO <br />
            DE LAS <br />
            <span className="text-brand-pink italic lowercase tracking-normal font-serif">imparables.</span>
          </h1>
          <p className="text-xl lg:text-3xl italic text-gray-700 leading-relaxed mb-10 max-w-2xl font-serif">
            "No estamos esperando nuestro turno. Estamos construyendo el escenario entero."
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 bg-brand-black text-white rounded-full font-bold text-xs tracking-widest uppercase hover:bg-brand-pink transition-all shadow-2xl">
              SER PARTE DEL CLUB
            </button>
            <button className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-full border border-brand-black flex items-center justify-center group-hover:bg-brand-black group-hover:text-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase">VER MÁS</span>
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden magazine-border shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale"
              alt="Protagonista"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Ticker: React.FC = () => {
  return (
    <div className="bg-brand-pink py-8 overflow-hidden border-y-2 border-brand-black transform -rotate-1 scale-105 z-10 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center font-bold text-5xl text-brand-black tracking-wider px-10">
            <span className="mx-10">• NO SOMOS INVISIBLES</span>
            <span className="mx-10 outline-text uppercase">EXPERIENCIA</span>
            <span className="mx-10">• AUTÉNTICAS</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const items = [
    { title: "NETWORKING", icon: <Users size={36} />, desc: "Círculos de confianza con directivas senior." },
    { title: "VISIBILIDAD", icon: <Eye size={36} />, desc: "Tu marca personal en el centro del escenario." },
    { title: "NEGOCIOS", icon: <TrendingUp size={36} />, desc: "Alianzas reales con impacto económico." }
  ];

  return (
    <section id="que-es" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="p-10 bg-brand-cream rounded-[2.5rem] hover:bg-brand-black hover:text-white transition-all group">
              <div className="text-brand-pink mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-bold text-3xl uppercase mb-4">{item.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter: React.FC = () => {
  return (
    <section id="newsletter" className="py-32 bg-brand-cream border-t border-brand-black/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-bold text-7xl lg:text-9xl uppercase text-brand-black mb-8 leading-none">
          ÚNETE A LA <br /><span className="text-brand-pink italic lowercase tracking-normal font-serif">tribu.</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-medium">Contenido exclusivo para mujeres que ya no piden permiso.</p>
        <div className="flex flex-col sm:flex-row gap-4 border-b-2 border-brand-black pb-4">
          <input 
            type="email" 
            placeholder="TU EMAIL AQUÍ" 
            className="flex-1 bg-transparent border-none focus:ring-0 text-3xl uppercase text-brand-black placeholder:text-gray-300 outline-none"
          />
          <button className="text-[10px] font-bold tracking-widest uppercase text-brand-pink hover:text-brand-black transition-colors">DENTRO</button>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-bold text-3xl tracking-tighter uppercase">AUTÉNTICAS<span className="text-brand-pink">.</span></div>
        <div className="flex space-x-8">
          <Instagram size={24} className="hover:text-brand-pink cursor-pointer transition-colors" />
          <Linkedin size={24} className="hover:text-brand-pink cursor-pointer transition-colors" />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">© 2024 AUTÉNTICAS. BASED IN MADRID.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Newsletter />
      <Footer />
      <LucíaAI />
    </div>
  );
};

export default App;
