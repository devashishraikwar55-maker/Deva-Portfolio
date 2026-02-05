import React, { useState, useEffect } from 'react';
import { GridBackground } from './components/GridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { GenerativeAICta } from './components/GenerativeAICta';
import { GenerativeAIPage } from './components/GenerativeAIPage';
import { IntroOverlay } from './components/IntroOverlay';

type View = 'home' | 'generative-ai';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showIntro, setShowIntro] = useState(true);

  // Prevent body scroll when intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showIntro]);

  return (
    <>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      {currentView === 'generative-ai' ? (
        <div className="min-h-screen bg-transparent text-gray-900 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
          <GridBackground imageUrl="https://i.ibb.co/gpgPKHn/Gemini-Generated-Image-oxk07joxk07joxk0-1.png" />
          <GenerativeAIPage onBack={() => setCurrentView('home')} />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;