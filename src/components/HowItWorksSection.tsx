import React from 'react';
import { ArrowDown } from 'lucide-react';
import { InsideGuideMockup } from './InsideGuideMockup';

interface HowItWorksSectionProps {
  onScrollToPlans: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onScrollToPlans }) => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#0B132B] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Section kicker */}
        <span className="text-blue-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-3 inline-block">
          COMO FUNCIONA
        </span>

        {/* Section title */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-balance">
          Veja como o material{' '}
          <span className="text-[#FBBF24] block sm:inline">funciona por dentro</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Em menos de um minuto você vê como escolher a festa, descobrir o que comprar e seguir a montagem.
        </p>

        {/* Original Portuguese In-House HTML/CSS Digital Guide Mockup */}
        <div className="mb-10 flex justify-center">
          <InsideGuideMockup />
        </div>

        {/* Green CTA */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-green-950/40 transition-all duration-150 cursor-pointer"
          >
            <span>QUERO FAZER FESTAS ASSIM</span>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
