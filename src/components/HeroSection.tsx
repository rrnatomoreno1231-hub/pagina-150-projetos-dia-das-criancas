import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroSectionProps {
  onScrollToPlans: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPlans }) => {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 bg-[#F8F7F4]">
      {/* Subtle soft backdrop accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none -z-10" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 text-center reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-[#0F172A] max-w-3xl mx-auto mb-5 text-balance transition-transform duration-300">
          <span className="text-[#1D4ED8] block sm:inline">+150 Festas de Dia das Crianças</span>{' '}
          <span className="text-[#0F172A]">Prontas, Mesmo Pra Quem Nunca Decorou Nada</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
          Escolha o tema, siga a lista de compras e monte tudo sem improviso. Seja a festa do seu filho ou a do seu melhor amigo.
        </p>

        {/* Big Product Bundle Mockup */}
        <div className="relative max-w-2xl mx-auto mb-9 group">
          <div className="relative rounded-2xl overflow-hidden bg-white/60 p-2 sm:p-4 shadow-xl shadow-blue-950/5 border border-slate-200/60 transition-transform duration-300 group-hover:scale-[1.015]">
            <img
              src="/hero_bundle_mockup_1790528115563.jpg"
              alt="Mockup do Guia Digital de +150 Festas de Dia das Crianças Prontas para Copiar"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded-xl max-h-[460px] mx-auto filter drop-shadow-md transition-all duration-300"
              loading="eager"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-green-700/25 transition-all duration-200 cursor-pointer animate-pulse-subtle animate-shimmer"
          >
            <span>QUERO AS 150 FESTAS AGORA</span>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1" />
          </button>

          {/* Delivery Note */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 mt-4 font-medium">
            <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Você recebe tudo na hora, direto no seu e-mail</span>
          </div>
        </div>
      </div>
    </section>
  );
};
