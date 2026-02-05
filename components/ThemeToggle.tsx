import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={toggleTheme}
        className={`relative w-20 h-10 rounded-full p-1 transition-all duration-300 focus:outline-none shadow-xl border ${
          isDark 
            ? 'bg-gray-800 border-gray-700 shadow-gray-900/50' 
            : 'bg-white border-beige-200 shadow-beige-200/50'
        }`}
        aria-label="Toggle Theme"
      >
        <span className="sr-only">Toggle Theme</span>
        
        {/* Track Icons */}
        <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
            <Sun size={14} className={`${isDark ? 'text-gray-600' : 'text-amber-500'} transition-colors`} />
            <Moon size={14} className={`${isDark ? 'text-blue-200' : 'text-gray-300'} transition-colors`} />
        </div>

        {/* Sliding Circle */}
        <div
          className={`absolute top-1 left-1 w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center z-10 ${
            isDark 
              ? 'translate-x-10 bg-black text-white' 
              : 'translate-x-0 bg-gray-900 text-yellow-400'
          }`}
        >
          {isDark ? <Moon size={16} className="text-white" /> : <Sun size={16} className="text-white" />}
        </div>
      </button>
    </div>
  );
};