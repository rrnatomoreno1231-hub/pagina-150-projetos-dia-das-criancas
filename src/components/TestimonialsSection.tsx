import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialsSectionProps {
  onScrollToPlans: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onScrollToPlans }) => {
  const { ref, isVisible } = useScrollReveal(0.08);

  const testimonials = [
    { id: 1, src: '/1%20insta.jpg', alt: 'Depoimento e resultado de festa de Dia das Crianças no Instagram' },
    { id: 2, src: '/2%20insta.jpg', alt: 'Depoimento e resultado de festa de Dia das Crianças no Instagram' },
    { id: 3, src: '/depoimento%202.jpg', alt: 'Exemplo ilustrativo de montagem de festa de Dia das Crianças' },
    { id: 4, src: '/depoimento%203.jpg', alt: 'Exemplo ilustrativo de montagem de festa de Dia das Crianças' },
    { id: 5, src: '/depoimento%204.jpg', alt: 'Exemplo ilustrativo de montagem de festa de Dia das Crianças' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F1EFE9] border-t border-slate-200/70 overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 reveal-fade-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-4 text-balance">
            Veja exemplos de como é{' '}
            <span className="text-[#1D4ED8] block sm:inline">fazer a festa de Dia das Crianças em casa</span>
          </h2>
        </div>

        {/* Carousel Container with side preview peeking and NO card borders/frames */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento anterior"
            className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo depoimento"
            className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Carousel Stage - shows previous and next photo previews on sides */}
          <div className="relative w-full overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-out items-center"
              style={{
                /* Calculates offset to center the active slide while showing peeks on both sides */
                transform: `translateX(calc(50% - (var(--slide-w, 75%) / 2) - ${currentIndex} * var(--slide-w, 75%)))`,
              }}
            >
              {testimonials.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    style={{ width: 'var(--slide-w, 75%)' }}
                    className={`shrink-0 px-2 sm:px-4 transition-all duration-500 flex justify-center cursor-pointer ${
                      isActive ? 'opacity-100 scale-100 z-10' : 'opacity-40 scale-90 hover:opacity-60'
                    }`}
                  >
                    {/* Pure photo display: NO card frame, NO white box border, NO badge header */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-auto h-auto max-h-[520px] sm:max-h-[620px] max-w-full object-contain drop-shadow-md select-none rounded-sm"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inline CSS variable for responsive slide width */}
          <style>{`
            :root {
              --slide-w: 80%;
            }
            @media (min-width: 640px) {
              :root {
                --slide-w: 55%;
              }
            }
            @media (min-width: 1024px) {
              :root {
                --slide-w: 42%;
              }
            }
          `}</style>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para depoimento ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-400/60 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button from TXT */}
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={onScrollToPlans}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-base sm:text-lg rounded-xl shadow-lg shadow-green-700/25 transition-all duration-150 cursor-pointer"
          >
            <span>QUERO FAZER A FESTA DO MEU FILHO</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
