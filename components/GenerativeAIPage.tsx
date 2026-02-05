import React, { useRef } from 'react';
import { ArrowLeft, ChevronRight, ChevronLeft, Play, Image as ImageIcon } from 'lucide-react';

interface Props {
  onBack: () => void;
}

// Updated with the requested video
const VIDEO_ITEMS = [
  {
    id: 'portfolio-main',
    title: 'Generative AI Portfolio Showcase',
    duration: '0:22', 
    thumbnail: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
    link: 'https://drive.google.com/file/d/1HEDYAv_60fSIhAMGYeS2iSrYiAvC5K2Y/view?usp=sharing'
  },
  ...Array(6).fill(null).map((_, i) => ({
    id: i,
    title: `Cinematic Sequence ${i + 1}`,
    duration: '0:15',
    thumbnail: `https://picsum.photos/seed/video_gen_${i}/600/340`,
    link: '#'
  }))
];

const IMAGE_ITEMS = Array(8).fill(null).map((_, i) => ({
  id: i,
  title: `Visual Concept ${i + 1}`,
  category: 'Character Design',
  src: `https://picsum.photos/seed/img_gen_${i}/400/500`
}));

export const GenerativeAIPage: React.FC<Props> = ({ onBack }) => {
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const imageScrollRef = useRef<HTMLDivElement>(null);

  // Simple scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = current.clientWidth * 0.75; // Scroll 75% of view width
      current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-transparent pb-24">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-beige-50/80 backdrop-blur-md border-b border-beige-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-beige-100"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </button>
            <div className="text-lg font-bold text-gray-900">
                Generative AI Portfolio
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-[95rem] mx-auto space-y-24">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Visual Synthesis</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              A curated collection of high-fidelity AI-generated media, exploring the boundaries of Veo, Midjourney, and Flux.
            </p>
        </div>

        {/* 
            SECTION 1: VIDEOS 
            Layout: Left Title (25%) | Right Scroller (75%)
        */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            
            {/* Left Side: Title & Info */}
            <div className="w-full lg:w-1/4 lg:sticky lg:top-32 lg:pt-4 z-10">
                <div className="flex items-center gap-3 mb-3 text-red-600">
                   <div className="p-2 bg-red-100 rounded-lg">
                      <Play size={20} fill="currentColor" />
                   </div>
                   <span className="font-bold tracking-wider uppercase text-xs">Motion</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Generative AI Videos
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    Explorations in temporal consistency, motion dynamics, and narrative sequences using Veo and comparable models.
                </p>
                
                {/* Custom Navigation Controls (Visible on Desktop) */}
                <div className="hidden lg:flex gap-2 mt-4">
                    <button 
                        onClick={() => scroll(videoScrollRef, 'left')}
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={() => scroll(videoScrollRef, 'right')}
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Side: Scroller */}
            <div className="w-full lg:w-3/4 relative group">
                {/* Mobile Arrows Overlay */}
                <button 
                    onClick={() => scroll(videoScrollRef, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 lg:hidden"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={() => scroll(videoScrollRef, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity lg:hidden"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Scroll Container */}
                <div 
                    ref={videoScrollRef}
                    className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 lg:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {VIDEO_ITEMS.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-none w-[85vw] md:w-[400px] snap-center block group/card"
                        >
                            <div className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer border border-white/20 transition-all">
                                <img 
                                    src={item.thumbnail} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/30 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover/card:scale-110 transition-transform">
                                        <Play size={20} className="text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-white text-xs font-medium">
                                    {item.duration}
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="font-bold text-gray-900 text-lg group-hover/card:text-indigo-600 transition-colors">{item.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>


        {/* 
            SECTION 2: IMAGES 
            Layout: Left Title (25%) | Right Scroller (75%)
        */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start border-t border-gray-200/30 pt-16">
            
            {/* Left Side: Title & Info */}
            <div className="w-full lg:w-1/4 lg:sticky lg:top-32 lg:pt-4 z-10">
                <div className="flex items-center gap-3 mb-3 text-indigo-600">
                   <div className="p-2 bg-indigo-100 rounded-lg">
                      <ImageIcon size={20} />
                   </div>
                   <span className="font-bold tracking-wider uppercase text-xs">Stills</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Generative AI Images
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                    High-resolution compositions demonstrating advanced prompt engineering and style transfer capabilities.
                </p>

                {/* Custom Navigation Controls (Visible on Desktop) */}
                <div className="hidden lg:flex gap-2 mt-4">
                    <button 
                        onClick={() => scroll(imageScrollRef, 'left')}
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={() => scroll(imageScrollRef, 'right')}
                        className="p-3 rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all active:scale-95"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Side: Scroller */}
            <div className="w-full lg:w-3/4 relative group">
                {/* Mobile Arrows Overlay */}
                <button 
                    onClick={() => scroll(imageScrollRef, 'left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 lg:hidden"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={() => scroll(imageScrollRef, 'right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity lg:hidden"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Scroll Container */}
                <div 
                    ref={imageScrollRef}
                    className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4 lg:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {IMAGE_ITEMS.map((item) => (
                        <div 
                            key={item.id} 
                            className="flex-none w-[70vw] md:w-[300px] snap-center group/card"
                        >
                            <div className="relative aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-white/20">
                                <img 
                                    src={item.src} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-medium text-sm">{item.category}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};