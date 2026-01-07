
import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

// Views
import HomeView from './views/HomeView';
import ManifestoView from './views/ManifestoView';
import BlogView from './views/BlogView';
import PodcastView from './views/PodcastView';
import ContactView from './views/ContactView';
import LegalView from './views/LegalView';

const App: React.FC = () => {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const renderView = () => {
    switch (view) {
      case 'home':
        return <HomeView setView={setView} />;
      case 'manifiesto':
        return <ManifestoView />;
      case 'blog':
        return <BlogView />;
      case 'podcast':
        return <PodcastView />;
      case 'contacto':
        return <ContactView />;
      case 'legal':
        return <LegalView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-pink selection:text-white">
      <Navbar setView={setView} view={view} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <CookieBanner setView={setView} />
      <Footer setView={setView} />
    </div>
  );
};

export default App;
