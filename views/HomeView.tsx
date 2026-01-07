
import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhatHappens from '../components/home/WhatHappens';
import Channels from '../components/home/Channels';
import WhatMovesUs from '../components/home/WhatMovesUs';
import Marquee from '../components/home/Marquee';

interface HomeViewProps {
  setView: (view: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ setView }) => {
  return (
    <>
      <Hero setView={setView} />
      <Marquee />
      <About setView={setView} />
      <WhatHappens setView={setView} />
      <Channels setView={setView} />
      <WhatMovesUs setView={setView} />
      <Marquee />
    </>
  );
};

export default HomeView;
