import React from 'react';
import { NOME_DA_MARCA } from '../config/offerConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#060D1E] text-slate-400 text-xs sm:text-sm border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-slate-400">
          Compra 100% segura com garantia incondicional de 7 dias protegida pelo Código de Defesa do Consumidor.
        </p>
        <p className="font-semibold text-slate-300">
          © 2026 {NOME_DA_MARCA ? `${NOME_DA_MARCA}. ` : ''}Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
