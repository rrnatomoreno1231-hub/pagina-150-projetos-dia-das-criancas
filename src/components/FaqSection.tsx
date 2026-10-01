import React, { useState } from 'react';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FaqSectionProps {
  onScrollToPlans: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToPlans }) => {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Preciso saber decorar?',
      answer:
        'Não, você não precisa ter nenhuma experiência prévia. O material foi desenvolvido especialmente mesmo para quem nunca decorou nada antes. Basta escolher o tema, conferir a lista de compras e seguir a montagem sem improviso.',
    },
    {
      question: 'Existem festas econômicas?',
      answer:
        'Sim! Uma das principais propostas é justamente trocar o alto orçamento cobrado por decoradores por uma montagem prática em casa, com ideias acessíveis que não custam uma fortuna.',
    },
    {
      question: 'É material físico? Como recebo?',
      answer:
        'Não, trata-se de um guia 100% digital. Você recebe todo o acesso imediatamente no seu e-mail logo após a aprovação da compra, podendo consultar no celular, tablet ou computador a qualquer momento.',
    },
    {
      question: 'Qual a diferença entre o Básico e o Completo?',
      answer:
        'O Pacote Básico (R$10,00) entrega 50 Festas de Dia das Crianças Prontas para você acessar e decorar. Já o Pacote Completo (R$29,90) é a versão mais recomendada: inclui +150 projetos + os 5 bônus exclusivos, referências de materiais, paletas de cores, sugestões de montagem e acesso vitalício.',
    },
    {
      question: 'Como funciona a garantia de 7 dias?',
      answer:
        'Você conta com 7 dias de garantia incondicional. Após a aprovação da compra, você pode acessar e avaliar todo o conteúdo. Se achar que o material não atendeu suas expectativas, basta solicitar o reembolso dentro desse prazo de 7 dias para receber 100% do seu dinheiro de volta.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F7F4] border-t border-slate-200">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-700 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-2 inline-block">
            TIRE SUAS DÚVIDAS
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight text-balance">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-300 shadow-2xs hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#0F172A] hover:text-blue-700 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-blue-600 text-sm">▾</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-base sm:text-lg rounded-xl shadow-lg shadow-green-700/25 transition-all duration-200 cursor-pointer animate-shimmer"
          >
            <span>QUERO COMEÇAR MINHA FESTA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
