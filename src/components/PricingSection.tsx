import React from 'react';
import { Check, Star, ShieldCheck, Zap, Infinity, ArrowDown, ExternalLink } from 'lucide-react';
import { CHECKOUT_BASICO_URL, CHECKOUT_COMPLETO_URL, BONUS_CONFIG, PRECOS } from '../config/offerConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const PricingSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#F8F7F4] border-t border-slate-200 scroll-mt-12">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-2 inline-block">
            ESCOLHA SEU ACESSO
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-3 text-balance">
            Escolha a opção <span className="text-[#1D4ED8]">ideal para você</span>
          </h2>
        </div>

        {/* Plan 1: Pacote Básico (White Card) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm mb-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-2xl font-black text-[#0F172A]">Pacote Básico</h3>
              <p className="text-slate-600 text-sm mt-1">Para quem quer começar com 50 projetos</p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-slate-500 font-medium block">
                De <span className="line-through text-slate-400">{PRECOS.basicoDe}</span> por
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">{PRECOS.basicoPor}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mb-6">
            <a
              href={CHECKOUT_BASICO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="checkout-btn w-full py-4 px-6 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-extrabold text-lg rounded-xl shadow-md shadow-green-700/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
              data-checkout="true"
            >
              <span>QUERO O BÁSICO</span>
              <ExternalLink className="w-4 h-4 opacity-85 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Features Checkmark list */}
          <ul className="space-y-3 pt-2 pb-6 border-b border-slate-100 text-sm text-slate-700 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>50 Festas de Dia das Crianças Prontas pra Copiar</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Material em guia digital pra acessar e decorar</span>
            </li>
          </ul>

          {/* Attention Banner pointing to complete */}
          <div className="mt-5 bg-rose-50 border border-rose-100 rounded-xl p-3.5 text-center text-xs sm:text-sm font-bold text-rose-800 flex items-center justify-center gap-2">
            <span>Espera: há uma opção muito mais completa logo abaixo</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>

        {/* Plan 2: Pacote Completo (Navy Blue Card with Gold Border) */}
        <div>
          <div className="bg-[#0B132B] rounded-3xl border-3 border-[#F59E0B] p-6 sm:p-9 text-white shadow-2xl shadow-blue-950/30 overflow-hidden relative transition-all duration-300 hover:shadow-blue-900/40">
            {/* Combo Discount Banner inside Card */}
            <div className="bg-[#DC2626] -mx-6 sm:-mx-9 -mt-6 sm:-mt-9 py-2.5 px-4 text-center text-xs sm:text-sm font-black uppercase tracking-wide text-white mb-6">
              COMBO COMPLETO COM TODOS OS 5 BÔNUS INCLUSOS
            </div>

            <div className="text-center sm:text-left mb-6">
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white">Pacote Completo</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-1">
                150 projetos + todos os materiais pra facilitar sua festa.
              </p>
            </div>

            {/* Bundle Visual Mockup inside complete plan */}
            <div className="max-w-md mx-auto my-6 bg-slate-900/60 p-3 rounded-2xl border border-slate-800 group overflow-hidden">
              <img
                src="/hero_bundle_mockup_1790528115563.jpg"
                alt="Combo Completo 150 Festas de Dia das Crianças + 5 Bônus"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain max-h-56 mx-auto filter drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Price Box */}
            <div className="text-center my-6">
              <span className="text-xs sm:text-sm text-slate-400 font-medium block">
                De <span className="line-through text-slate-400">{PRECOS.completoDe}</span> por apenas
              </span>
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#FCD34D] tracking-tight mt-1">
                {PRECOS.completoPor}
              </div>
            </div>

            {/* Complete Purchase Button */}
            <div className="mb-8">
              <a
                href={CHECKOUT_COMPLETO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="checkout-btn w-full py-4 sm:py-5 px-6 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-green-950/50 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 animate-pulse-subtle animate-shimmer group"
                data-checkout="true"
              >
                <span>QUERO O COMPLETO</span>
                <ExternalLink className="w-5 h-5 opacity-85 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* 5 Bonuses List Callout Inside Card */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-700/80 mb-6">
              <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <span>🎁 5 bônus inclusos</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📖</span>
                  <span>{BONUS_CONFIG.bonus1Title}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📖</span>
                  <span>{BONUS_CONFIG.bonus2Title}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📖</span>
                  <span>{BONUS_CONFIG.bonus3Title}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📖</span>
                  <span>{BONUS_CONFIG.bonus4Title}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">📖</span>
                  <span>{BONUS_CONFIG.bonus5Title}</span>
                </li>
              </ul>
            </div>

            {/* Features Checkmark list */}
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-medium pb-4">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                <span>+150 Festas de Dia das Crianças Prontas</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                <span>Diversos temas e estilos</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                <span>Referências de materiais</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                <span>Paletas de cores</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[3]" />
                <span>Sugestões de montagem</span>
              </li>
            </ul>

            {/* Bundle Note */}
            <div className="text-center pt-4 border-t border-slate-800 text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
              PACOTE DIGITAL COMPLETO COM ACESSO VITALÍCIO
            </div>
          </div>
        </div>

        {/* Trust Ribbon (Vitalício, Garantia 7 dias, Imediato) */}
        <div className="mt-8 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs sm:text-sm font-bold text-slate-700">
            <div className="flex items-center justify-center gap-2 py-1">
              <Infinity className="w-4 h-4 text-blue-600" />
              <span>Acesso vitalício</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-1 sm:border-x sm:border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-1">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Acesso imediato após a compra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
