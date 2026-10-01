import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const GuaranteeSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 text-center reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* 3D Guarantee Seal */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6 relative transition-transform duration-300 hover:scale-105 hover:rotate-1">
          <img
            src="/guarantee_7_badge_1790648323058.jpg"
            alt="Selo Oficial de Garantia de 7 Dias"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
          Sem risco para você
        </h2>

        {/* Body Text */}
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 font-normal">
          Seu acesso é 100% protegido pela garantia incondicional de 7 dias. Você poderá acessar todo o material, conhecer as festas e guias e, caso sinta que não fez sentido para você, basta solicitar o reembolso integral dentro de 7 dias.
        </p>

        {/* Badge / Pill */}
        <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-extrabold uppercase tracking-widest px-6 py-3 rounded-full shadow-xs transition-transform duration-200 hover:scale-105">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>GARANTIA INCONDICIONAL DE 7 DIAS</span>
        </div>
      </div>
    </section>
  );
};
