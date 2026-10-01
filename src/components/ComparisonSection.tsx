import React from 'react';
import { ArrowDown, Check, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ComparisonSectionProps {
  onScrollToPlans: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onScrollToPlans }) => {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F7F4] relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Headline em duas linhas: 1ª em cor escura, 2ª em azul */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.18] text-[#0F172A]">
            Você não precisa saber decorar.
            <span className="block text-[#1D4ED8] mt-1 sm:mt-1.5">
              Só precisa de uma festa pronta.
            </span>
          </h2>
        </div>

        {/* Subtítulo centralizado em cinza */}
        <p className="text-center text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-10 sm:mb-12">
          Pare de juntar dezenas de referências soltas. Escolha uma festa de Dia das Crianças pronta e monte do zero, mesmo sem nunca ter decorado nada.
        </p>

        {/* Dois Cards: Vermelho à esquerda, Verde à direita (empilhados no mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch max-w-3xl mx-auto">
          {/* Card Vermelho Claro */}
          <div className="bg-[#FEF2F2] border border-rose-200/80 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-black text-[#DC2626] mb-5 tracking-tight">
                Montar a festa sozinha
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base font-semibold text-slate-800">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#DC2626]">
                    <X className="w-5 h-5 stroke-[2.75]" />
                  </span>
                  <span>dezenas de fotos salvas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#DC2626]">
                    <X className="w-5 h-5 stroke-[2.75]" />
                  </span>
                  <span>não sabe por onde começar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#DC2626]">
                    <X className="w-5 h-5 stroke-[2.75]" />
                  </span>
                  <span>não sabe o que comprar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#DC2626]">
                    <X className="w-5 h-5 stroke-[2.75]" />
                  </span>
                  <span>não sabe quantidade</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#DC2626]">
                    <X className="w-5 h-5 stroke-[2.75]" />
                  </span>
                  <span>medo de ficar amador</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Verde Claro */}
          <div className="bg-[#ECFDF5] border-2 border-[#10B981] rounded-2xl p-6 sm:p-7 shadow-lg shadow-emerald-500/10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-black text-[#047857] mb-5 tracking-tight">
                Escolher uma festa pronta
              </h3>
              <ul className="space-y-3.5 text-sm sm:text-base font-bold text-[#064E3B]">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#059669]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <span>tema definido</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#059669]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <span>lista de compras pronta</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#059669]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <span>paleta de cores pronta</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#059669]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <span>passo a passo de montagem</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[#059669]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </span>
                  <span>muito mais fácil de executar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button abaixo dos cards (mesmo estilo dos botões da página) */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-green-700/25 transition-all duration-200 cursor-pointer animate-pulse-subtle animate-shimmer"
          >
            <span>QUERO MINHA FESTA PRONTA AGORA</span>
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
