import React from 'react';
import { PROFILE_DATA } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
                <h3 className="text-sm font-semibold text-indigo-600 tracking-wider uppercase mb-2">Portfolio</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="text-gray-500 text-sm max-w-md text-right md:text-left">
                A selection of AI tools and prototypes built to solve real-world problems.
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROFILE_DATA.projects.map((project, index) => (
                <div 
                    key={index} 
                    className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                    {/* Abstract Header Image Placeholder */}
                    <div className="h-56 w-full bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-indigo-500 group-hover:shadow-md transition-all">
                                <Zap className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 block">{project.project_type}</span>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors">{project.project_title}</h3>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                {project.focus_areas.map(area => (
                                    <span key={area} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-200">
                                        {area}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="pt-6 border-t border-gray-100 flex gap-4">
                                <button className="text-sm font-semibold text-gray-900 flex items-center gap-2 hover:text-indigo-600 transition-colors">
                                    View Project <ExternalLink size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </section>
  );
};