import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

// Reusing the hook for consistency
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
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

interface Props {
  onNavigate: () => void;
}

export const GenerativeAICta: React.FC<Props> = ({ onNavigate }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
      <div 
        className={`max-w-7xl mx-auto px-6 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button 
          onClick={onNavigate}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg shadow-xl hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
          Generative AI Portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-white" />
        </button>
        <p className="mt-4 text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
          AI Images & Videos
        </p>
      </div>
    </section>
  );
};