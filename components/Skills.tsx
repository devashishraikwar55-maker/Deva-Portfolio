import React, { useState, useEffect, useRef } from 'react';
import { PROFILE_DATA } from '../constants';
import { Cpu, Palette, Code, Search, Zap, Lightbulb, Terminal, Video } from 'lucide-react';

// Hook to detect when element enters viewport
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Toggle visibility based on intersection status to repeat animations
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible] as const;
};

const SkillCard: React.FC<{ 
  title: string; 
  items: string[]; 
  icon: React.ReactNode; 
  colorClass: string;
  darkColorClass: string;
  index: number;
  isVisible: boolean;
}> = ({ title, items, icon, colorClass, darkColorClass, index, isVisible }) => (
  // Wrapper for the entrance animation (Flip effect)
  <div 
    className="h-full perspective-1000"
    style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(90deg)',
      transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy effect
      transitionDelay: `${index * 150}ms`,
      transformOrigin: 'center center'
    }}
  >
    {/* Inner card for hover effects */}
    <div className="group p-8 rounded-[2rem] bg-white dark:bg-gray-800 border border-beige-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-default">
      <div className={`mb-6 p-3 rounded-2xl w-fit ${colorClass} ${darkColorClass} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg border border-beige-200 dark:border-gray-700 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const [coreRef, coreVisible] = useOnScreen({ threshold: 0.2 });
  const [toolsRef, toolsVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="skills" className="py-24 relative bg-beige-100 dark:bg-gray-900 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2">Expertise</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Toolkit</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Leveraging state-of-the-art AI models and development environments.</p>
        </div>

        {/* Core Skills */}
        <div className="mb-12" ref={coreRef}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 pl-2 border-l-4 border-blue-500">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard 
                    title="Generative AI" 
                    items={PROFILE_DATA.skills.generative_ai}
                    icon={<Zap size={24} className="text-amber-600 dark:text-amber-400" />}
                    colorClass="bg-amber-50"
                    darkColorClass="dark:bg-amber-900/30"
                    index={0}
                    isVisible={coreVisible}
                />
                <SkillCard 
                    title="Product & Development" 
                    items={PROFILE_DATA.skills.product_and_development}
                    icon={<Code size={24} className="text-blue-600 dark:text-blue-400" />}
                    colorClass="bg-blue-50"
                    darkColorClass="dark:bg-blue-900/30"
                    index={1}
                    isVisible={coreVisible}
                />
                <SkillCard 
                    title="Creative & Problem Solving" 
                    items={PROFILE_DATA.skills.creative_and_problem_solving}
                    icon={<Lightbulb size={24} className="text-purple-600 dark:text-purple-400" />}
                    colorClass="bg-purple-50"
                    darkColorClass="dark:bg-purple-900/30"
                    index={2}
                    isVisible={coreVisible}
                />
            </div>
        </div>

        {/* Tools */}
        <div ref={toolsRef}>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 pl-2 border-l-4 border-green-500">Tools & Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard 
                    title="AI Image & Video" 
                    items={PROFILE_DATA.tools_and_platforms.ai_image_and_video}
                    icon={<Video size={24} className="text-pink-600 dark:text-pink-400" />}
                    colorClass="bg-pink-50"
                    darkColorClass="dark:bg-pink-900/30"
                    index={0}
                    isVisible={toolsVisible}
                />
                <SkillCard 
                    title="Dev & Prototyping" 
                    items={PROFILE_DATA.tools_and_platforms.ai_development_and_prototyping}
                    icon={<Terminal size={24} className="text-slate-600 dark:text-slate-400" />}
                    colorClass="bg-slate-100"
                    darkColorClass="dark:bg-slate-800"
                    index={1}
                    isVisible={toolsVisible}
                />
                <SkillCard 
                    title="Research & Intelligence" 
                    items={PROFILE_DATA.tools_and_platforms.research_and_intelligence}
                    icon={<Search size={24} className="text-emerald-600 dark:text-emerald-400" />}
                    colorClass="bg-emerald-50"
                    darkColorClass="dark:bg-emerald-900/30"
                    index={2}
                    isVisible={toolsVisible}
                />
            </div>
        </div>

      </div>
    </section>
  );
};