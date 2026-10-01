import React from 'react';
import { CheckCircle, ExternalLink, FolderOpen, Sparkles, ArrowRight } from 'lucide-react';

interface ThankYouPageProps {
  driveUrl?: string;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({
  driveUrl = 'https://drive.google.com/drive/folders/1rVAr-XPpjImzovqpxzWK8VPAWUCOVPEY?usp=drive_link',
}) => {
  return (
    <div className="min-h-screen bg-[#F8F7F4] flex flex-col justify-between text-[#0F172A]">
      {/* Top Notification Bar */}
      <div className="bg-[#15803D] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
        <span>Pagamento confirmado! Seu acesso exclusivo já está liberado.</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="max-w-2xl w-full bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-10 text-center relative overflow-hidden">
          {/* Subtle Top Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-600" />

          {/* Icon badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center ring-8 ring-emerald-50/60">
            <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2]" />
          </div>

          {/* Heading */}
          <span className="text-emerald-700 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-2 inline-block">
            COMPRA CONCLUÍDA COM SUCESSO
          </span>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
            Muito obrigado pela sua compra!
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Estamos muito felizes em ter você conosco! Seu material foi preparado com muito carinho para que você monte uma festa inesquecível e prática.
          </p>

          {/* Access Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-7 mb-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <FolderOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-base sm:text-lg text-slate-900">
                  Acesso Imediato ao Google Drive
                </h2>
                <p className="text-sm text-slate-600 mt-1 leading-normal">
                  Clique no botão abaixo para abrir a pasta com todo o conteúdo digital, guias e bônus prontos para download ou consulta online.
                </p>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="mt-6">
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 w-full py-4 sm:py-5 px-6 sm:px-8 bg-[#16A34A] hover:bg-[#15803D] active:scale-[0.98] text-white font-black text-lg sm:text-xl rounded-xl shadow-lg shadow-green-700/25 transition-all duration-200 cursor-pointer"
              >
                <span>ACESSAR CONTEÚDO AGORA</span>
                <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Quick instructions / tips */}
          <div className="text-left bg-blue-50/70 border border-blue-100 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-blue-900 space-y-2">
            <p className="font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              Dica importante para o seu acesso:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 text-xs sm:text-[13px]">
              <li>Salve o link nos favoritos do seu navegador para consultar sempre que precisar.</li>
              <li>Você pode baixar os arquivos no celular, tablet ou computador.</li>
              <li>Qualquer dúvida, conte com a garantia incondicional de 7 dias.</li>
            </ul>
          </div>

          {/* Back link */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500">
            <span>Deseja voltar para a página inicial?</span>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 hover:underline"
            >
              <span>Ir para o início</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Guia Festas de Dia das Crianças. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};
