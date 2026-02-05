import React from 'react';
import { PROFILE_DATA } from '../constants';
import { Cpu, Palette, Code, Search, Zap, Lightbulb, Terminal, Video } from 'lucide-react';

const SkillCard: React.FC<{ title: string; items: string[]; icon: React.ReactNode; colorClass: string }> = ({ title, items, icon, colorClass }) => (
  <div className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
    <div className={`mb-6 p-3 rounded-2xl w-fit ${colorClass}`}>
        {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span 
          key={item} 
          className="px-3 py-1.5 text-xs font-semibold text-gray-600 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-gray-100 transition-colors"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">Expertise</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Toolkit</h2>
            <p className="text-gray-500 text-lg">Leveraging state-of-the-art AI models and development environments.</p>
        </div>

        {/* Core Skills */}
        <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-6 pl-2 border-l-4 border-blue-500">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard 
                    title="Generative AI" 
                    items={PROFILE_DATA.skills.generative_ai}
                    icon={<Zap size={24} className="text-amber-600" />}
                    colorClass="bg-amber-50"
                />
                <SkillCard 
                    title="Product & Development" 
                    items={PROFILE_DATA.skills.product_and_development}
                    icon={<Code size={24} className="text-blue-600" />}
                    colorClass="bg-blue-50"
                />
                <SkillCard 
                    title="Creative & Problem Solving" 
                    items={PROFILE_DATA.skills.creative_and_problem_solving}
                    icon={<Lightbulb size={24} className="text-purple-600" />}
                    colorClass="bg-purple-50"
                />
            </div>
        </div>

        {/* Tools */}
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6 pl-2 border-l-4 border-green-500">Tools & Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkillCard 
                    title="AI Image & Video" 
                    items={PROFILE_DATA.tools_and_platforms.ai_image_and_video}
                    icon={<Video size={24} className="text-pink-600" />}
                    colorClass="bg-pink-50"
                />
                <SkillCard 
                    title="Dev & Prototyping" 
                    items={PROFILE_DATA.tools_and_platforms.ai_development_and_prototyping}
                    icon={<Terminal size={24} className="text-slate-600" />}
                    colorClass="bg-slate-100"
                />
                <SkillCard 
                    title="Research & Intelligence" 
                    items={PROFILE_DATA.tools_and_platforms.research_and_intelligence}
                    icon={<Search size={24} className="text-emerald-600" />}
                    colorClass="bg-emerald-50"
                />
            </div>
        </div>

      </div>
    </section>
  );
};