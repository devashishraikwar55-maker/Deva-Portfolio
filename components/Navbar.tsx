import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigateToGenAI?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToGenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // Projects is handled manually
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Remove the '#' to get the ID
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // Fallback for updating URL without jumping
      window.history.pushState(null, '', href);
    }
  };

  const handleGenAIClick = () => {
    setMobileMenuOpen(false);
    if (onNavigateToGenAI) {
      onNavigateToGenAI();
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-6 px-4 pointer-events-none`}
    >
      <div className={`
        relative flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 w-full max-w-7xl pointer-events-auto
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border border-white/40 mt-2' : 'bg-transparent'}
      `}>
        
        <div className="font-bold text-xl tracking-tight text-gray-900 flex items-center gap-2">
          {/* Star/Spark icon like DUNA */}
          <span className="text-gray-900">✶</span>
          DEVAA
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          
          <a 
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-800/80 hover:text-gray-900'}`}
          >
            About
          </a>

          <a 
            href="#skills"
            onClick={(e) => handleNavClick(e, '#skills')}
            className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-800/80 hover:text-gray-900'}`}
          >
            Skills
          </a>

          {/* PORTFOLIO DROPDOWN */}
          <div className="relative group">
            <a 
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-2 ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-800/80 hover:text-gray-900'}`}
            >
              Portfolio
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </a>
            
            {/* Invisible bridge to prevent hover loss */}
            <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>

            {/* Dropdown Menu */}
            <div className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden p-1">
                <a 
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-center"
                >
                  Web Dev
                </a>
                <button 
                  onClick={handleGenAIClick}
                  className="block w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-center"
                >
                  Generative AI
                </button>
            </div>
          </div>

          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`text-sm font-medium transition-colors cursor-pointer ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-800/80 hover:text-gray-900'}`}
          >
            Contact
          </a>

        </div>

        <div className="hidden md:block">
           <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10 cursor-pointer"
          >
            Schedule a demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 p-1 cursor-pointer">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-up z-50 pointer-events-auto">
           <a 
              href="#about"
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => handleNavClick(e, '#about')}
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => handleNavClick(e, '#skills')}
            >
              Skills
            </a>
            
            {/* Mobile Portfolio Sub-menu */}
            <div className="flex flex-col gap-3 border-l-2 border-gray-100 pl-4 py-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Portfolio</span>
                <a 
                  href="#projects"
                  className="text-lg font-medium text-gray-700 hover:text-gray-900"
                  onClick={(e) => handleNavClick(e, '#projects')}
                >
                  Web Dev
                </a>
                <button 
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 text-left"
                  onClick={handleGenAIClick}
                >
                  Generative AI
                </button>
            </div>

            <a 
              href="#contact"
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>

          <a 
            href="#contact"
            className="mt-2 text-center px-5 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};