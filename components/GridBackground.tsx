import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#FFFAF5]">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://i.ibb.co/Hfr3BPv4/Gemini-Generated-Image-cdbo26cdbo26cdbo.png")'
        }} 
      >
      </div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
      
      {/* Mist/Fade to White at Bottom to seamlessly blend with content */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-white via-white/90 to-transparent"></div>

    </div>
  );
};