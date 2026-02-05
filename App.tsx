import React, { useState } from 'react';
import { GridBackground } from './components/GridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { GenerativeAICta } from './components/GenerativeAICta';
import { GenerativeAIPage } from './components/GenerativeAIPage';

type View = 'home' | 'generative-ai';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');

  if (currentView === 'generative-ai') {
    return (
      <>
        <GridBackground />
        <GenerativeAIPage onBack={() => setCurrentView('home')} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      <GridBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GenerativeAICta onNavigate={() => setCurrentView('generative-ai')} />
        <Contact />
      </main>
    </div>
  );
}

export default App;