/**
 * CONFIGURAÇÃO DA OFERTA E LINKS DE CHECKOUT
 * 
 * Cole as URLs dos seus checkouts nas constantes abaixo:
 * Exemplo Kiwify/Hotmart:
 * export const CHECKOUT_BASICO_URL: string = "https://pay.kiwify.com.br/exemplo-basico";
 * export const CHECKOUT_COMPLETO_URL: string = "https://pay.kiwify.com.br/exemplo-completo";
 */

// Insira aqui a URL de checkout do Pacote Básico (R$ 10,00)
export const CHECKOUT_BASICO_URL: string = "https://pay.wiapy.com/l3DIF0SVxuWK";

// Insira aqui a URL de checkout do Pacote Completo (R$ 29,90)
export const CHECKOUT_COMPLETO_URL: string = "https://pay.wiapy.com/x_IUtIGfXpu6";

// Nome da marca para rodapé e direitos autorais
export const NOME_DA_MARCA: string = "";

// Preços de ancoragem e oferta
export const PRECOS = {
  basicoDe: "R$ 47,00",
  basicoPor: "R$ 10,00",
  completoDe: "R$ 97,00",
  completoPor: "R$ 29,90",
};

// Nomes e valores dos bônus conforme definido pelo produtor
export const BONUS_CONFIG = {
  bonus1Title: "Manual de Montagem Passo a Passo",
  bonus1Price: "R$ 15,90",
  bonus2Title: "Checklist de Compras da Festa",
  bonus2Price: "R$ 15,90",
  bonus3Title: "Cronograma da Festa Sem Correria",
  bonus3Price: "R$ 19,90",
  bonus4Title: "Guia Prático de Balões",
  bonus4Price: "R$ 19,90",
  bonus5Title: "50 Ideias de Lembrancinhas Econômicas",
  bonus5Price: "R$ 29,90",
  // Soma total: 15.90 + 15.90 + 19.90 + 19.90 + 29.90 = R$ 101,50
  valorTotalDosBonus: "R$ 101,50",
};
