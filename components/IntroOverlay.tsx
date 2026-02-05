import React, { useState } from 'react';

interface Props {
  onComplete: () => void;
}

export const IntroOverlay: React.FC<Props> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleClick = () => {
    setIsExiting(true);
    // Wait for slide-up animation to finish before unmounting (1s duration)
    setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 1000); 
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-beige-50 dark:bg-gray-950 flex flex-col items-center justify-center cursor-pointer transition-all duration-1000 cubic-bezier(0.77, 0, 0.175, 1) ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
      onClick={handleClick}
    >
      <div className={`flex items-center gap-3 md:gap-5 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        {/* Star Icon */}
        <span className="text-3xl md:text-6xl text-gray-900 dark:text-white animate-pulse pb-1">✶</span>
        
        {/* Full Name */}
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white uppercase font-sans">
          Devashish Raikwar
        </h1>
      </div>
      
      <div className={`absolute bottom-12 text-gray-400 dark:text-gray-500 text-xs md:text-sm uppercase tracking-[0.3em] animate-bounce transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        Click to Enter
      </div>
    </div>
  );
};