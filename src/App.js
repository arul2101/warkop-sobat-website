import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Kontak from './components/kontak/Kontak';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Kontak />
      <Footer />
    </>
  )
}
