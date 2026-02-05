import React, { useState, useEffect, useRef } from 'react';
import { PROFILE_DATA } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

// Hook to detect when element enters viewport (duplicated here for component independence)
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
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

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-4">
            <div>
                <h3 className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-2">Portfolio</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="text-gray-500 text-sm max-w-md text-right md:text-left">
                A selection of AI tools and prototypes built to solve real-world problems.
            </div>
         </div>

         <div className="space-y-32">
            {PROFILE_DATA.projects.map((project, index) => {
                // Determine layout direction: Even = Image Left, Odd = Image Right
                const isEven = index % 2 === 0;
                const [ref, isVisible] = useOnScreen({ threshold: 0.2 });

                return (
                    <div 
                        key={index}
                        ref={ref}
                        className={`flex flex-col gap-12 lg:gap-24 items-center transition-all duration-1000 ease-out transform
                            ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}
                            ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}
                        `}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group aspect-[4/3] bg-gray-50 transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
                                {project.image_url ? (
                                <div 
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${project.image_url}')` }}
                                />
                                ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                                    <Zap className="w-20 h-20 text-gray-300" />
                                </div>
                                )}
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
                                    {project.project_type}
                                </span>
                                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {project.project_title}
                                </h3>
                            </div>
                            
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="mb-10">
                                <h4 className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest">Focus Areas</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.focus_areas.map(area => (
                                        <span key={area} className="px-4 py-2 rounded-full bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors cursor-default">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex">
                                {project.link ? (
                                    <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:bg-indigo-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200"
                                    >
                                        View Project 
                                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                ) : (
                                    <span className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed">
                                        View Project <ExternalLink size={18} />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
         </div>
      </div>
    </section>
  );
};