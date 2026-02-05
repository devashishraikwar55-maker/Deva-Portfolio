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
import { ThemeToggle } from './components/ThemeToggle';

type View = 'home' | 'generative-ai';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showIntro, setShowIntro] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on preference or system
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Prevent body scroll when intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showIntro]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {showIntro && <IntroOverlay onComplete={() => setShowIntro(false)} />}
      
      <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />

      {currentView === 'generative-ai' ? (
        <div className="min-h-screen bg-beige-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden transition-colors duration-300">
          <GridBackground imageUrl="https://i.ibb.co/gpgPKHn/Gemini-Generated-Image-oxk07joxk07joxk0-1.png" />
          <GenerativeAIPage onBack={() => setCurrentView('home')} />
        </div>
      ) : (
        <div className="min-h-screen bg-beige-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden transition-colors duration-300">
          <GridBackground />
          <Navbar onNavigateToGenAI={() => setCurrentView('generative-ai')} />
          
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
    </div>
  );
}

export default App;