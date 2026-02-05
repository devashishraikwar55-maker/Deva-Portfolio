import React from 'react';

interface GridBackgroundProps {
  imageUrl?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ imageUrl }) => {
  const bgImage = imageUrl || "https://i.ibb.co/Hfr3BPv4/Gemini-Generated-Image-cdbo26cdbo26cdbo.png";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-beige-50 dark:bg-gray-950 transition-colors duration-300">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-40 transition-opacity duration-300"
        style={{ 
          backgroundImage: `url("${bgImage}")`
        }} 
      >
      </div>
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-beige-50 via-beige-50/50 to-transparent dark:from-gray-950 dark:via-gray-950/50"></div>
      
      {/* Mist/Fade to background at Bottom to seamlessly blend with content */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-beige-50 via-beige-50/90 to-transparent dark:from-gray-950 dark:via-gray-950/90"></div>

    </div>
  );
};