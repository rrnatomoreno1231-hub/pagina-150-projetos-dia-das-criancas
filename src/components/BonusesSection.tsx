import React from 'react';
import { Gift, ArrowRight, AlertTriangle } from 'lucide-react';
import { BonusCoverVisual } from './BonusCoverVisual';
import { BONUS_CONFIG } from '../config/offerConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BonusesSectionProps {
  onScrollToPlans: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({
  onScrollToPlans,
}) => {
  const { ref, isVisible } = useScrollReveal(0.08);

  const bonuses = [
    {
      id: 1,
      numberTag: 'BÔNUS #1',
      title: BONUS_CONFIG.bonus1Title,
      oldPrice: BONUS_CONFIG.bonus1Price,
    },
    {
      id: 2,
      numberTag: 'BÔNUS #2',
      title: BONUS_CONFIG.bonus2Title,
      oldPrice: BONUS_CONFIG.bonus2Price,
    },
    {
      id: 3,
      numberTag: 'BÔNUS #3',
      title: BONUS_CONFIG.bonus3Title,
      oldPrice: BONUS_CONFIG.bonus3Price,
    },
    {
      id: 4,
      numberTag: 'BÔNUS #4',
      title: BONUS_CONFIG.bonus4Title,
      oldPrice: BONUS_CONFIG.bonus4Price,
    },
    {
      id: 5,
      numberTag: 'BÔNUS #5',
      title: BONUS_CONFIG.bonus5Title,
      oldPrice: BONUS_CONFIG.bonus5Price,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8F7F4] border-t border-slate-200/60 relative">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 sm:px-6 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Header from TXT */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 shadow-xs transition-transform duration-300 hover:scale-110">
            <Gift className="w-6 h-6" />
          </div>

          <span className="text-blue-700 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-2 inline-block">
            PRESENTES EXCLUSIVOS
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-4 text-balance">
            Leve também <span className="text-[#1D4ED8]">5 bônus</span> para facilitar sua festa de Dia das Crianças
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Materiais complementares que resolvem a parte chata: ordem de montagem, compras, prazos e lembrancinhas.
          </p>
        </div>

        {/* 5 Bonus Cards Grid (Matching reference layout: 2 cols, 5th centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {bonuses.slice(0, 4).map((bonus) => (
            <div
              key={bonus.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Badge Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-[#FBBF24] text-slate-950 font-black text-xs px-3 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                  {bonus.numberTag}
                </span>

                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-sm">
                  100% Incluso
                </span>
              </div>

              {/* 3D Visual Book Cover */}
              <BonusCoverVisual bonusNumber={bonus.id} title={bonus.title} />

              {/* Title */}
              <div className="text-center mt-5 mb-5 flex-1 flex flex-col justify-center">
                <h3 className="font-display text-lg sm:text-xl font-black text-[#0F172A] mb-1 leading-snug">
                  {bonus.title}
                </h3>
              </div>

              {/* Price Banner: De XXX por GRÁTIS */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 bg-slate-50/80 rounded-xl py-2.5 px-4 text-xs sm:text-sm">
                <span className="text-slate-500 font-medium">De</span>
                <span className="line-through text-slate-500 font-bold">{bonus.oldPrice}</span>
                <span className="text-slate-500 font-medium">por</span>
                <span className="font-black text-emerald-600 tracking-wider">GRÁTIS</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Bonus Card centered */}
        <div className="max-w-md mx-auto mb-14">
          {(() => {
            const bonus = bonuses[4];
            return (
              <div
                key={bonus.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-[#FBBF24] text-slate-950 font-black text-xs px-3 py-1 rounded-sm uppercase tracking-wider shadow-xs">
                    {bonus.numberTag}
                  </span>

                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-sm">
                    100% Incluso
                  </span>
                </div>

                <BonusCoverVisual bonusNumber={bonus.id} title={bonus.title} />

                <div className="text-center mt-5 mb-5">
                  <h3 className="font-display text-lg sm:text-xl font-black text-[#0F172A] mb-1 leading-snug">
                    {bonus.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 bg-slate-50/80 rounded-xl py-2.5 px-4 text-xs sm:text-sm">
                  <span className="text-slate-500 font-medium">De</span>
                  <span className="line-through text-slate-500 font-bold">{bonus.oldPrice}</span>
                  <span className="text-slate-500 font-medium">por</span>
                  <span className="font-black text-emerald-600 tracking-wider">GRÁTIS</span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Total Value Callout Box: Soma total calculada (R$ 101,50) */}
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 sm:p-8 text-center border border-slate-200/80 shadow-md mb-6 transition-all duration-300 hover:shadow-lg">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500 mb-2">
            VALOR TOTAL DOS 5 BÔNUS:
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#DC2626] mb-4 tracking-tight">
            {BONUS_CONFIG.valorTotalDosBonus}
          </div>

          {/* Clean Informational Badge / Tag (Not a button) */}
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-50 border border-emerald-200/90 text-emerald-800 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Incluso no Pacote Completo por <strong className="font-extrabold text-emerald-700">R$ 0,00</strong></span>
          </div>
        </div>

        {/* Note on 5 bonuses inclusion */}
        <div className="max-w-xl mx-auto bg-blue-50 border border-blue-200 rounded-xl p-4 text-center text-xs sm:text-sm font-medium text-blue-950 mb-8 flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            <strong>Informação:</strong> os 5 bônus são exclusivos do <strong>Pacote Completo</strong>.
          </span>
        </div>

        {/* Section CTA Button from TXT */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-base sm:text-lg rounded-xl shadow-lg shadow-green-700/25 transition-all duration-200 cursor-pointer animate-shimmer"
          >
            <span>QUERO OS 150 PROJETOS + 5 BÔNUS</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
