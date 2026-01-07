
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const LuciaAI: React.FC = () => {
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
    
    const apiKey = process.env.API_KEY;
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
          Si te preguntan por las secciones: Tenemos Home, Manifiesto, Blog, Podcast (pronto) y Contacto (para marcas, creadoras y prensa).
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
        <div className="w-80 sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border-2 border-brand-black overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-brand-black p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-pink border border-white flex items-center justify-center font-bold text-xl text-brand-black">L</div>
              <div>
                <p className="font-bold text-lg tracking-wider uppercase">LUCÍA AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X className="w-5 h-5" /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-cream/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-brand-black text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-brand-black border border-gray-200 rounded-tl-none shadow-sm'
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
              <button onClick={handleSend} className="text-brand-pink hover:text-brand-pinkDark transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-brand-pink transition-all border-4 border-white group"
        >
          <Sparkles className="w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default LuciaAI;
