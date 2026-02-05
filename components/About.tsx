import React from 'react';
import { PROFILE_DATA } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-3">About Me</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bridging Creativity & Artificial Intelligence</h2>
             {/* Experience section removed */}
          </div>

          <div className="md:col-span-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              {PROFILE_DATA.professional_summary.portfolio_about_me}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
                Background in animation provides strong visual thinking, creativity, and rapid experimentation skills. I leverage tools like Gemini, Veo, and various LLMs to prototype fast and build functional MVPs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {/* Certifications - First Item (Left Side) & Bolder Style */}
                <div className="p-8 rounded-3xl bg-white border-2 border-gray-900 shadow-xl relative overflow-hidden">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Certifications</h4>
                    <ul className="space-y-3">
                        {PROFILE_DATA.certifications.map((c, index) => (
                            <li key={index} className="text-base font-semibold text-gray-800 flex items-center gap-3">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                <a 
                                  href={c.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="hover:text-orange-600 hover:underline transition-colors"
                                >
                                  {c.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Education - Second Item (Right Side) */}
                {PROFILE_DATA.education.highest_qualification && (
                    <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-center">
                        <h4 className="text-gray-900 font-semibold mb-2">Education</h4>
                        <p className="text-lg text-gray-800 font-medium">{PROFILE_DATA.education.highest_qualification}</p>
                        <p className="text-sm text-gray-500 mt-1">{PROFILE_DATA.education.details}</p>
                    </div>
                )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};