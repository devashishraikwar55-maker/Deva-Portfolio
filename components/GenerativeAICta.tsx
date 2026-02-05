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
    <section ref={ref} className="py-16 bg-gradient-to-r from-beige-100 to-beige-50 dark:from-gray-900 dark:to-gray-950 border-y border-beige-200 dark:border-gray-800 transition-colors duration-300">
      <div 
        className={`max-w-7xl mx-auto px-6 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <button 
          onClick={onNavigate}
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg shadow-xl hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 text-yellow-400 dark:text-yellow-600" />
          Generative AI Portfolio
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-gray-900" />
        </button>
        <p className="mt-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
          AI Images & Videos
        </p>
      </div>
    </section>
  );
};