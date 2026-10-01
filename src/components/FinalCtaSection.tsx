import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCtaSectionProps {
  onScrollToPlans: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onScrollToPlans }) => {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section className="py-16 sm:py-24 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Title */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5 text-balance max-w-2xl mx-auto">
          O Dia das Crianças do seu filho{' '}
          <span className="text-[#FBBF24] block sm:inline">pode ser lindo sem custar uma fortuna</span>
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
          Escolha entre 150 projetos, encontre uma festa que combine com seu filho e use um plano pronto para começar.
        </p>

        {/* Highlight Offer Box */}
        <div className="max-w-md mx-auto bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl mb-8 backdrop-blur-md transition-transform duration-300 hover:scale-105">
          <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 mb-2">
            150 PROJETOS + 5 BÔNUS NO COMPLETO
          </p>
          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
            R$29,90
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
            PAGAMENTO ÚNICO
          </span>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-14 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-xl shadow-green-950/40 transition-all duration-200 cursor-pointer animate-pulse-subtle animate-shimmer"
          >
            <span>QUERO GARANTIR MEU ACESSO</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Trust Subtext */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400 mt-5 font-medium">
            <span>Acesso imediato</span>
            <span aria-hidden="true">·</span>
            <span>Pagamento único</span>
            <span aria-hidden="true">·</span>
            <span>Garantia de 7 dias</span>
            <span aria-hidden="true">·</span>
            <span>Sem mensalidade</span>
          </div>
        </div>
      </div>
    </section>
  );
};
