import React from 'react';
import { getFormattedToday } from '../utils/date';

export const TopUrgencyBar: React.FC = () => {
  const today = getFormattedToday();

  return (
    <aside aria-label="Aviso de promoção" className="sticky top-0 z-40 w-full bg-[#E11D48] text-white py-2.5 px-4 text-center shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-black tracking-wide uppercase">
        <span className="inline-block animate-pulse text-base">⏰</span>
        <span>PROMOÇÃO ACABA HOJE, <span className="underline decoration-yellow-300 underline-offset-2">{today}</span></span>
      </div>
    </aside>
  );
};
