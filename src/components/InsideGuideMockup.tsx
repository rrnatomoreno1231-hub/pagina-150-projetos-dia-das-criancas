import React from 'react';
import { Sparkles, CheckSquare, Layers, ShoppingCart, PartyPopper, Check } from 'lucide-react';

export const InsideGuideMockup: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] bg-slate-900 rounded-[2.8rem] p-3 sm:p-4 border-4 border-slate-700 shadow-2xl shadow-blue-950/70 select-none text-left">
      {/* Smartphone Top Speaker & Camera Notch */}
      <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

      {/* Screen Frame */}
      <div className="bg-[#FAF9F5] text-slate-900 rounded-3xl overflow-hidden shadow-inner border border-slate-300 flex flex-col font-sans">
        {/* App Top Bar */}
        <div className="bg-[#0B132B] text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-black tracking-wider uppercase text-amber-300">
              Guia Digital
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded-sm">
            Projeto #01
          </span>
        </div>

        {/* Content Body */}
        <div className="p-4 space-y-3.5">
          {/* Main Title Badge */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-3.5 rounded-2xl shadow-sm">
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-300 mb-1">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Especial Dia das Crianças</span>
            </div>
            <h3 className="font-display font-black text-lg leading-tight text-white">
              Tema: Cores, Balões e Alegria
            </h3>
            <p className="text-xs text-blue-100 mt-1">
              Decoração prática e econômica para montar em casa
            </p>
          </div>

          {/* Block 1: Escolha o tema */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                1
              </div>
              <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wide">
                Escolha o tema
              </h4>
            </div>
            <p className="text-[11px] text-slate-600 pl-8 leading-snug">
              Paleta com azul vivo, amarelo e toques festivos. Painel redondo com arco orgânico fácil.
            </p>
          </div>

          {/* Block 2: Lista de compras */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs shrink-0">
                2
              </div>
              <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wide flex items-center justify-between flex-1">
                <span>Lista de compras</span>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                  Sem desperdício
                </span>
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pl-8 text-[11px] text-slate-700">
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Balões 9" e 5"</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Fita para arco</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Suporte de doces</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 shrink-0 stroke-[3]" />
                <span>Toalha lisa</span>
              </div>
            </div>
          </div>

          {/* Block 3: Passo a passo da montagem */}
          <div className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-xs shrink-0">
                3
              </div>
              <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wide">
                Passo a passo da montagem
              </h4>
            </div>
            <div className="pl-8 space-y-1 text-[11px] text-slate-600 leading-snug">
              <p>• <strong>1º:</strong> Posicione o painel central no ambiente.</p>
              <p>• <strong>2º:</strong> Encaixe os clusters de balões nas laterais.</p>
              <p>• <strong>3º:</strong> Distribua suportes de alturas diferentes na mesa.</p>
            </div>
          </div>
        </div>

        {/* Bottom screen status footer */}
        <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 text-center text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Projeto 100% pronto para copiar
        </div>
      </div>
    </div>
  );
};
