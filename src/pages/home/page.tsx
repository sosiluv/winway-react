
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Solutions from './components/Solutions';
import CTA from './components/CTA';
import Footer from '../../components/feature/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Mission />
      <Solutions />
      <CTA />
      <Footer />
    </div>
  );
}

