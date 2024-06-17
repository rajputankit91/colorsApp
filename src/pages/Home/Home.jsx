import React from 'react';
import "./Home.css";
import Hero from './hero-section/Hero';
import Palette from './home-palette/Palette';

function Home() {
  return (
    <div className='home'>
        <Hero />
        <Palette />
    </div>
  );
}

export default Home;