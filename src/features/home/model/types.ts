export type PlanId = "simples" | "detalhada" | "master";

export interface PlanItem {
  label: string;
  detail: string;
}

export interface ServicePlan {
  id: PlanId;
  name: string;
  price: string;
  priceValue: number;
  priceSuffix?: string;
  duration: string;
  recommendedFrequency: string;
  isPopular?: boolean;
  items: PlanItem[];
}

export interface Hotspot {
  id: string;
  zone: string;
  left: string;
  top: string;
  services: string[];
  plans: PlanId[];
}

export interface Testimonial {
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  plan: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TrustIndicator {
  label: string;
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}
