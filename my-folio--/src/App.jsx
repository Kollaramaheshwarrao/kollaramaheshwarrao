import React, { useState } from 'react';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import MyWork from './sections/Mywork';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [toggleOn, setToggleOn] = useState(false); // Toggle state

  return (
    <div className="relative min-h-screen">
      <div className="background-radial"></div>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo with image */}
          <div className="flex items-center">
            <img
              src="/MAH.png"
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-full object-cover" // <-- Added rounded-full and object-cover
            />
            <span className="text-xl font-bold">Mahigenix</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Toggle navigation"
            >
              <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black mb-1 transition-all ${navOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-all ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#mywork" className="hover:text-blue-600">Mywork</a>
            <a href="#achievements" className="hover:text-blue-600">Achievements</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
        {/* Mobile Nav */}
        {navOpen && (
          <nav className="md:hidden bg-white shadow-md px-4 py-2 flex flex-col space-y-2">
            <a href="#home" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Home</a>
            <a href="#about" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>About</a>
            <a href="#skills" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Skills</a>
            <a href="#mywork" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Mywork</a>
            <a href="#achievements" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Achievements</a>
            <a href="#contact" className="hover:text-blue-600" onClick={() => setNavOpen(false)}>Contact</a>
          </nav>
        )}
      </header>
      <main className="pt-24">
        <Home />
        <About />
        <Skills />
        <MyWork />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
