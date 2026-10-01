import React, { useState } from 'react';
import { BookOpen, CheckSquare, Palette, Calendar, Sparkles } from 'lucide-react';

interface BonusCoverVisualProps {
  bonusNumber: number;
  title: string;
}

export const BonusCoverVisual: React.FC<BonusCoverVisualProps> = ({ bonusNumber, title }) => {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/bonus%20${bonusNumber}.jpg`;

  const themes = [
    { icon: BookOpen },
    { icon: CheckSquare },
    { icon: Palette },
    { icon: Calendar },
    { icon: Sparkles },
  ];

  const IconComponent = themes[(bonusNumber - 1) % themes.length].icon;

  return (
    <div className="relative mx-auto w-48 sm:w-56 h-64 sm:h-72 my-2 transition-transform duration-300 group-hover:scale-105 select-none flex items-center justify-center">
      {/* 3D Drop Shadow */}
      <div className="absolute inset-x-4 bottom-0 h-6 bg-slate-900/25 blur-md rounded-full transform translate-y-3" />

      {!imgError ? (
        <img
          src={imageSrc}
          alt={`Capa do Bônus #${bonusNumber}: ${title}`}
          onError={() => setImgError(true)}
          className="relative z-10 w-full h-full object-contain filter drop-shadow-xl rounded-lg"
          loading="lazy"
        />
      ) : (
        /* Fallback if image fails to render */
        <div
          className="relative w-full h-full rounded-r-xl rounded-l-xs overflow-hidden shadow-xl border-t border-r border-b border-white/40 flex flex-col justify-between p-4 text-white group-hover:shadow-2xl transition-shadow"
          style={{
            background: `linear-gradient(135deg, ${
              bonusNumber === 1
                ? '#D97706, #EA580C'
                : bonusNumber === 2
                ? '#2563EB, #1D4ED8'
                : bonusNumber === 3
                ? '#0D9488, #059669'
                : bonusNumber === 4
                ? '#7C3AED, #DB2777'
                : '#EA580C, #E11D48'
            })`,
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-3.5 bg-black/20 border-r border-white/20" />
          <div className="pl-4 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-sm backdrop-blur-xs">
              MATERIAL DIGITAL
            </span>
            <span className="text-[10px] font-extrabold bg-amber-300 text-slate-900 px-1.5 py-0.5 rounded-sm">
              #{bonusNumber}
            </span>
          </div>

          <div className="pl-4 my-auto text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 shadow-inner border border-white/30">
              <IconComponent className="w-7 h-7 text-white" />
            </div>
            <span className="text-[11px] font-bold text-amber-200 tracking-wider uppercase mb-1">
              DIA DAS CRIANÇAS
            </span>
            <p className="font-display font-black text-sm sm:text-base leading-tight text-white max-w-[160px] line-clamp-2">
              {title || `BÔNUS #${bonusNumber}`}
            </p>
          </div>

          <div className="pl-4 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-white/90 font-semibold">
            <span>GUIA PRÁTICO</span>
            <span className="text-amber-200 font-bold">100% EXCLUSIVO</span>
          </div>
        </div>
      )}
    </div>
  );
};
