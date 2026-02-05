import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const GenerativeAIPage: React.FC<Props> = ({ onBack }) => {
  // Simple scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 rounded-full hover:bg-gray-100"
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

      <main className="pt-32 px-6 pb-12">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Visual Synthesis</h1>
            <p className="text-xl text-gray-500 mb-12">Curated AI-generated imagery and video productions.</p>
            
            <div className="p-12 border-2 border-dashed border-gray-200 rounded-3xl bg-white/50 backdrop-blur-sm">
                <p className="text-gray-400 font-medium">Content will be added here based on further instructions.</p>
            </div>
        </div>
      </main>
    </div>
  );
};