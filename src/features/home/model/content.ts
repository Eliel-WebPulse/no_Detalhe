import lavagemSimplesAntes from "@/assets/lavagem-simples-antes.png";
import lavagemSimplesDepois from "@/assets/lavagem-simples-depois.png";
import detalhadaAntes from "@/assets/detalhada-antes.png";
import detalhadaDepois from "@/assets/detalhada-depois.png";
import vitrificacaoAntes from "@/assets/Vitrificação Externa-antes.png";
import vitrificacaoDepois from "@/assets/Vitrificação Externa-depois.png";
import type { FaqItem, Hotspot, PlanId, ServicePlan, Testimonial, TrustIndicator } from "./types";

export const sectionOrder = [
  "hero",
  "serviços",
  "explorar",
  "comparativo",
  "galeria",
  "depoimentos",
  "faq",
  "onde-nos-encontrar",
  "contato",
] as const;

export const navLinks = [
  { id: "hero", label: "Inicio" },
  { id: "serviços", label: "Serviços" },
  { id: "explorar", label: "Explorar" },
  { id: "comparativo", label: "Comparativo" },
  { id: "galeria", label: "Galeria" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export const servicePlans: ServicePlan[] = [
  {
    id: "simples",
    name: "Lavagem Automotiva Simples",
    price: "R$ 70,00",
    priceValue: 70,
    duration: "~1h",
    recommendedFrequency: "A cada 30 dias",
    items: [
      { label: "Lavagem Externa", detail: "Shampoo automotivo pH neutro e secagem com microfibra." },
      { label: "Lavagem Interna", detail: "Aspiração completa e limpeza de paineis." },
      { label: "Vidros", detail: "Limpeza interna e externa para melhor visibilidade." },
      { label: "Plasticos", detail: "Limpeza básica de plasticos internos e externos." },
      { label: "Proteção", detail: "Camada inicial de proteção para acabamento limpo." },
    ],
  },
  {
    id: "detalhada",
    name: "Lavagem Automotiva Detalhada",
    price: "R$ 180,00",
    priceValue: 180,
    duration: "~2h30",
    recommendedFrequency: "A cada 45 dias",
    isPopular: true,
    items: [
      { label: "Lavagem Externa", detail: "Inclui descontaminação química para remover particulas." },
      { label: "Lavagem Interna", detail: "Limpeza detalhada em trilhos, cantos e acabamentos." },
      { label: "Vidros", detail: "Tratamento para marcas minerais e acabamento tecnico." },
      { label: "Plasticos", detail: "Revitalizacao com acabamento acetinado." },
      { label: "Proteção", detail: "Selante de manutencao com duracao estendida." },
    ],
  },
  {
    id: "master",
    name: "Lavagem Automotiva Master",
    price: "R$ 275,00",
    priceValue: 275,
    duration: "~4h",
    recommendedFrequency: "A cada 60 dias",
    items: [
      { label: "Lavagem Externa", detail: "Descontaminação química e física com refinamento final." },
      { label: "Lavagem Interna", detail: "Higienização premium com foco em acabamento detalhado." },
      { label: "Vidros", detail: "Remoção de chuva ácida + cristalização de para-brisa." },
      { label: "Plasticos", detail: "Revitalizacao + vitrificacao de plasticos externos." },
      { label: "Proteção", detail: "Proteção de pintura com durabilidade de até 1 ano." },
    ],
  },
];

export const planMatrix: Array<{ feature: string; simples: string; detalhada: string; master: string; detail: string }> = [
  { feature: "Lavagem Externa", simples: "✓", detalhada: "✓✓", master: "✓✓✓", detail: "Nivel de detalhamento por plano." },
  { feature: "Descontaminação", simples: "-", detalhada: "✓", master: "✓", detail: "Remove resíduos presos na pintura." },
  { feature: "Remoção de Piche", simples: "-", detalhada: "✓", master: "✓", detail: "Elimina contaminantes pesados." },
  { feature: "Aspiracao", simples: "✓", detalhada: "✓", master: "✓", detail: "Limpeza interna de cabine e porta-malas." },
  { feature: "Trilhos de Banco", simples: "-", detalhada: "✓", master: "✓", detail: "Limpeza de pontos de dificil acesso." },
  { feature: "Vidros", simples: "✓", detalhada: "✓", master: "✓", detail: "Melhora visibilidade e acabamento." },
  { feature: "Chuva Acida", simples: "-", detalhada: "-", master: "✓", detail: "Remove marcas e mineralizacao severa." },
  { feature: "Cristalizacao", simples: "-", detalhada: "-", master: "✓", detail: "Camada hidrorrepelente no para-brisa." },
  { feature: "Plásticos — Limpeza", simples: "✓", detalhada: "✓", master: "✓", detail: "Acabamento limpo e uniforme." },
  { feature: "Plásticos — Revitalização", simples: "-", detalhada: "✓", master: "✓", detail: "Recupera aspecto de novo." },
  { feature: "Vitrificação Externa", simples: "-", detalhada: "-", master: "✓", detail: "Proteção premium para acabamento externo." },
  { feature: "Proteção Pintura", simples: "4 meses", detalhada: "6 meses", master: "1 ano", detail: "Duracao estimada por plano." },
  { feature: "Revitalização de Pneus", simples: "✓", detalhada: "✓", master: "✓", detail: "Finalizacao com escurecimento uniforme." },
];

export const quizQuestions = [
  {
    key: "last_wash",
    question: "Há quanto tempo você não lava seu carro?",
    options: [
      { label: "Menos de 1 mes", score: { simples: 2, detalhada: 1, master: 0 } },
      { label: "1-3 meses", score: { simples: 1, detalhada: 2, master: 1 } },
      { label: "Mais de 3 meses", score: { simples: 0, detalhada: 2, master: 3 } },
      { label: "Nao sei", score: { simples: 0, detalhada: 1, master: 2 } },
    ],
  },
  {
    key: "concern",
    question: "O que mais te preocupa no seu carro?",
    options: [
      { label: "Pintura opaca", score: { simples: 0, detalhada: 2, master: 3 } },
      { label: "Interior sujo", score: { simples: 1, detalhada: 2, master: 2 } },
      { label: "Vidros embaçados", score: { simples: 1, detalhada: 2, master: 3 } },
      { label: "Tudo", score: { simples: 0, detalhada: 1, master: 3 } },
    ],
  },
  {
    key: "goal",
    question: "Qual e seu objetivo?",
    options: [
      { label: "Limpeza básica", score: { simples: 3, detalhada: 1, master: 0 } },
      { label: "Manutencao", score: { simples: 1, detalhada: 3, master: 1 } },
      { label: "Renovacao completa", score: { simples: 0, detalhada: 1, master: 4 } },
    ],
  },
] as const;

export const planById: Record<PlanId, { title: string; cta: string }> = {
  simples: { title: "Lavagem Automotiva Simples", cta: "Ver plano Simples" },
  detalhada: { title: "Lavagem Automotiva Detalhada", cta: "Ver plano Detalhada" },
  master: { title: "Lavagem Automotiva Master", cta: "Ver plano Master" },
};

export const vehicleHotspots: Record<"carro" | "moto", Hotspot[]> = {
  carro: [
    {
      id: "lataria",
      zone: "Lataria/Carroceria",
      left: "30%",
      top: "42%",
      services: ["Lavagem externa", "Descontaminação", "Proteção de pintura"],
      plans: ["simples", "detalhada", "master"],
    },
    {
      id: "rodas",
      zone: "Rodas/Pneus",
      left: "16%",
      top: "70%",
      services: ["Limpeza de rodas", "Caixas de roda", "Revitalizador de pneus"],
      plans: ["simples", "detalhada", "master"],
    },
    {
      id: "vidros",
      zone: "Vidros",
      left: "52%",
      top: "35%",
      services: ["Limpeza técnica", "Remoção de chuva ácida", "Cristalizacao"],
      plans: ["simples", "master"],
    },
    {
      id: "interior",
      zone: "Interior/Bancos",
      left: "58%",
      top: "55%",
      services: ["Aspiracao", "Limpeza de trilhos", "Limpeza sob bancos"],
      plans: ["simples", "detalhada", "master"],
    },
    {
      id: "plasticos",
      zone: "Para-choque/Plasticos",
      left: "76%",
      top: "58%",
      services: ["Limpeza de plasticos", "Revitalizacao", "Vitrificacao"],
      plans: ["simples", "detalhada", "master"],
    },
  ],
  moto: [
    {
      id: "tanque",
      zone: "Tanque/Carenagem",
      left: "42%",
      top: "45%",
      services: ["Lavagem externa", "Polimento", "Proteção"],
      plans: ["simples", "detalhada", "master"],
    },
    {
      id: "rodas-corrente",
      zone: "Rodas/Corrente",
      left: "24%",
      top: "70%",
      services: ["Limpeza de rodas", "Desengordurante de corrente"],
      plans: ["simples", "detalhada"],
    },
    {
      id: "motor",
      zone: "Motor/Chassi",
      left: "54%",
      top: "62%",
      services: ["Limpeza de motor", "Proteção anticorrosao"],
      plans: ["detalhada", "master"],
    },
    {
      id: "banco",
      zone: "Banco/Selim",
      left: "63%",
      top: "44%",
      services: ["Limpeza", "Impermeabilizacao"],
      plans: ["simples", "detalhada", "master"],
    },
    {
      id: "painel",
      zone: "Painel/Instrumentos",
      left: "71%",
      top: "32%",
      services: ["Limpeza delicada", "Acabamento anti-poeira"],
      plans: ["detalhada", "master"],
    },
  ],
};

export const beforeAfterItems = [
  {
    id: "simples",
    category: "Lavagem Simples",
    service: "Lavagem Simples",
    duration: "1h",
    before: lavagemSimplesAntes,
    after: lavagemSimplesDepois,
  },
  {
    id: "detalhada",
    category: "Detalhada",
    service: "Lavagem Detalhada",
    duration: "2h30",
    before: detalhadaAntes,
    after: detalhadaDepois,
  },
  {
    id: "master",
    category: "Vitrificação",
    service: "Vitrificação Externa",
    duration: "4h",
    before: vitrificacaoAntes,
    after: vitrificacaoDepois,
  },
];

export const trustIndicators = [
  { label: "carros atendidos", value: "+500", numericValue: 500, prefix: "+", decimals: 0 },
  { label: "avaliacao media", value: "4.9/5.0", numericValue: 4.9, suffix: "/5.0", decimals: 1 },
  { label: "anos de experiencia", value: "5 anos", numericValue: 5, suffix: " anos", decimals: 0 },
] satisfies TrustIndicator[];

export const testimonials: Testimonial[] = [
  {
    name: "Rafael M.",
    vehicle: "Honda Civic",
    rating: 5,
    text: "Meu carro voltou melhor que quando saiu da concessionaria.",
    plan: "Master",
  },
  {
    name: "Camila S.",
    vehicle: "Jeep Compass",
    rating: 5,
    text: "Atendimento impecável e explicação clara do que foi feito.",
    plan: "Detalhada",
  },
  {
    name: "Diego A.",
    vehicle: "Yamaha MT-03",
    rating: 5,
    text: "A moto ficou nova, inclusive em pontos que eu nem percebia.",
    plan: "Detalhada",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Quanto tempo leva cada serviço?",
    answer: "A lavagem simples leva cerca de 1h. A detalhada leva entre 2h e 3h. A Master pode levar entre 3h e 5h conforme o estado do veículo.",
  },
  {
    question: "Preciso agendar, ou pode ser sem hora marcada?",
    answer: "Recomendamos agendar para garantir disponibilidade. Sem agendamento, o atendimento depende da fila do dia.",
  },
  {
    question: "Os produtos usados sao seguros para a pintura?",
    answer: "Sim. Usamos produtos profissionais certificados e seguros para pintura, PPF e envelopamento.",
  },
  {
    question: "Qual a diferença entre descontaminação química e fisica?",
    answer: "A quimica dissolve particulas e poluentes. A fisica remove resíduos que persistem, usando clay bar técnica.",
  },
  {
    question: "O que e cristalização de para-brisa?",
    answer: "E um tratamento hidrorrepelente que melhora a visibilidade na chuva e pode durar ate 6 meses.",
  },
  {
    question: "Vocês fazem serviço em motos também?",
    answer: "Sim. Temos atendimento para motos com pacotes adaptados para cada tipo de uso.",
  },
  {
    question: "Como funciona a proteção de pintura?",
    answer: "Aplicamos selante ou cera profissional para proteger verniz contra sol, chuva e contaminantes.",
  },
  {
    question: "Posso ficar no local durante o serviço?",
    answer: "Sim. Temos area de espera com Wi-Fi e cafe.",
  },
  {
    question: "Aceitam todos os tipos de pagamento?",
    answer: "Aceitamos Pix, debito, crédito em até 3x sem juros e dinheiro.",
  },
  {
    question: "Qual plano recomendam para carro sem lavagem há mais de 3 meses?",
    answer: "Normalmente indicamos Detalhada ou Master para recuperar o acabamento com descontaminação completa.",
  },
];
