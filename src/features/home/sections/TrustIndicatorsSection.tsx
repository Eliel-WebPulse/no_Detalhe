import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { sectionReveal } from "../components/motion-variants";
import { trustIndicators } from "../model/content";
import AnimatedCount from "../components/AnimatedCount";

/* ────────────────────────────────────────────────
   TrustIndicators v2 — faixa narrativa horizontal
   Cada indicador tem:
   - Número animado grande
   - Barra de progresso que preenche ao entrar na tela
   - Contexto visual abaixo
   ──────────────────────────────────────────────── */

const barTargets: Record<string, number> = {
  "carros atendidos": 500 / 600, // frente a uma meta de 600
  "avaliação média": 4.9 / 5.0,
  "anos de experiência": 5 / 10,
};

const barLabels: Record<string, string> = {
  "carros atendidos": "de +600 atendimentos previstos em 2025",
  "avaliação média": "nota máxima no Google",
  "anos de experiência": "desde 2019 no mercado",
};

interface BarProps {
  fillRatio: number;
  delay?: number;
}

const AnimatedBar = ({ fillRatio, delay = 0 }: BarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <div ref={ref} className="mt-4 h-1 w-full rounded-full bg-border overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-primary"
        initial={{ width: 0 }}
        animate={inView ? { width: `${fillRatio * 100}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const TrustIndicatorsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionReveal}
      className="bg-background py-16"
      aria-label="Indicadores de confiança"
    >
      <div className="container mx-auto px-6">
        {/* Faixa principal — sem card genérico, layout full-width com separadores */}
        <div className="relative grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0 rounded-xl border border-border bg-card overflow-hidden">

          {/* Detalhe decorativo de canto */}
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, hsl(4 80% 52%) 0%, transparent 70%)" }}
          />

          {trustIndicators.map((indicator, i) => {
            const ratio = barTargets[indicator.label] ?? 0.8;
            const context = barLabels[indicator.label] ?? "";

            return (
              <motion.div
                key={indicator.label}
                className="relative flex flex-col justify-between px-8 py-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Número animado */}
                <div>
                  <p className="font-heading text-5xl font-bold uppercase leading-none tracking-tight text-foreground md:text-6xl">
                    <AnimatedCount
                      value={indicator.numericValue}
                      prefix={indicator.prefix}
                      suffix={indicator.suffix}
                      decimals={indicator.decimals}
                      duration={1.4}
                    />
                  </p>

                  {/* Label */}
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {indicator.label}
                  </p>
                </div>

                {/* Contexto + barra */}
                <div className="mt-6">
                  <p className="text-xs leading-relaxed text-foreground/70">{context}</p>
                  <AnimatedBar fillRatio={ratio} delay={0.3 + i * 0.1} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TrustIndicatorsSection;
