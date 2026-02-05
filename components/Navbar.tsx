import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
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
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-6 px-4`}
    >
      <div className={`
        flex items-center justify-between px-8 py-3 rounded-full transition-all duration-300 w-full max-w-7xl
        ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border border-white/40 mt-2' : 'bg-transparent'}
      `}>
        
        <div className="font-bold text-xl tracking-tight text-gray-900 flex items-center gap-2">
          {/* Star/Spark icon like DUNA */}
          <span className="text-gray-900">✶</span>
          DEVAA
        </div>

        {/* Desktop Nav - Centered like Reference */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-800/80 hover:text-gray-900'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
           <a 
            href="#contact"
            className="px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
          >
            Schedule a demo
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-900 p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-up z-50">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-2 text-center px-5 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};
