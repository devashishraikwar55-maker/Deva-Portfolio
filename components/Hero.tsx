import React from 'react';
import { PROFILE_DATA } from '../constants';
import { Sparkles, Code, Terminal, Zap, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end items-center px-4 pb-12 pt-32 overflow-hidden">
      
      {/* 
        MAIN TYPOGRAPHY & INTRO 
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-8 animate-fade-in-up mb-8">
        
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          
          {/* Badge - Centered & Smaller */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 backdrop-blur-sm text-orange-900 text-sm font-bold mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new projects
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            AI Generalist <span className="font-light text-gray-400">&</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
              AI-Assisted Web Developer
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-600 text-xl leading-relaxed font-light">
             Bridging the gap between creative vision and technical execution.
          </p>
        </div>

        {/* 
           SUBSECTIONS / SPECIALTIES 
           Glassmorphic cards displaying key skills
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            
            {/* Card 1: AI Generative Creator */}
            <div className="group bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] text-left hover:bg-white/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                  <Sparkles size={20} />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Generative Creator</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                 Expertise in Veo, Midjourney, and Flux for high-fidelity image and video synthesis.
               </p>
            </div>

            {/* Card 2: AI Generalist */}
            <div className="group bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] text-left hover:bg-white/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                  <Terminal size={20} />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">AI Generalist</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                 Seamlessly integrating LLMs, automation tools, and prompt engineering into workflows.
               </p>
            </div>

            {/* Card 3: Prototype Developer */}
            <div className="group bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] text-left hover:bg-white/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 group-hover:scale-110 transition-transform">
                  <Code size={20} />
               </div>
               <h3 className="text-lg font-bold text-gray-900 mb-2">Prototype Dev</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                 Rapidly building functional web apps and MVPs using AI-assisted coding environments.
               </p>
            </div>

        </div>

        <div className="pt-6 text-center">
           <a href="#projects" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors animate-bounce">
              Scroll to explore <ArrowDown size={14} />
           </a>
        </div>

      </div>
    </section>
  );
};