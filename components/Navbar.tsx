
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  setView: (view: string) => void;
  view: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, view }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HOME', id: 'home' },
    { label: 'MANIFIESTO', id: 'manifiesto' },
    { label: 'BLOG', id: 'blog' },
    { label: 'PODCAST', id: 'podcast' },
    { label: 'CONTACTO', id: 'contacto' },
  ];

  const handleNavClick = (id: string) => {
    setView(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black py-3 shadow-xl' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <button onClick={() => setView('home')} className={`font-bold text-3xl md:text-4xl tracking-tighter uppercase transition-colors ${scrolled ? 'text-white' : 'text-brand-black'}`}>
            AUTÉNTICAS<span className="text-brand-pink">.</span>
          </button>
          
          <div className="hidden md:flex space-x-10 items-center">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => setView(item.id)} 
                className={`text-[10px] font-bold tracking-widest uppercase hover:text-brand-pink transition-colors ${view === item.id ? 'text-brand-pink' : (scrolled ? 'text-white' : 'text-brand-black')}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => setView('contacto')}
              className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase hover:bg-brand-pinkDark transition-all"
            >
              ÚNETE
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(true)}>
            <Menu className={scrolled ? 'text-white' : 'text-brand-black'} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-black flex flex-col p-8 text-white animate-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-16">
            <span className="font-bold text-3xl tracking-tighter uppercase">AUTÉNTICAS<span className="text-brand-pink">.</span></span>
            <button onClick={() => setMobileOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {menuItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-4xl font-bold uppercase tracking-tighter text-left ${view === item.id ? 'text-brand-pink' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
