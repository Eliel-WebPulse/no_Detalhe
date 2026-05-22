import type { ComponentType } from "react";
import { CheckCircle2, Clock3, Droplets, Eye, Layers, MessageCircle, Repeat, Shield, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import AnimatedCount from "../components/AnimatedCount";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";
import { servicePlans } from "../model/content";

const serviceIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Lavagem Externa": Droplets,
  "Lavagem Interna": Wind,
  Vidros: Eye,
  Plásticos: Layers,
  Proteção: Shield,
};

const ServicePlansSection = () => {
  return (
    <motion.section
      id="servicos"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-background py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="PACOTES"
          title="Serviços e Preços"
          description="Três planos objetivos com tudo o que seu veículo precisa, do cuidado recorrente ao acabamento premium."
        />

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.05, 0.12)}
        >
          {servicePlans.map((plan) => (
            <motion.article
              key={plan.id}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 12px 32px rgba(0,0,0,0.3)" }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-xl border bg-card p-6 shadow-sm transition ${
                plan.isPopular ? "border-primary/60" : "border-border"
              }`}
            >
              {plan.isPopular ? (
                <div className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Mais Popular
                </div>
              ) : null}

              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{plan.duration} • {plan.recommendedFrequency}</p>

              <ul className="mt-5 space-y-3">
                {plan.items.map((item) => (
                  <li key={`${plan.id}-${item.label}`} className="flex items-start gap-2 text-sm text-foreground/70">
                    {(() => {
                      const ItemIcon = serviceIconMap[item.label] ?? CheckCircle2;
                      return <ItemIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />;
                    })()}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" className="text-left underline decoration-dotted underline-offset-4 hover:text-foreground">
                          <span className="font-medium text-foreground">{item.label}:</span> {item.detail}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">{item.detail}</TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-foreground/70">
                <p className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> Tempo estimado: {plan.duration}</p>
                <p className="inline-flex items-center gap-2"><Repeat className="h-4 w-4" /> Frequência: {plan.recommendedFrequency}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="font-heading text-4xl text-primary">
                  <AnimatedCount value={plan.priceValue} prefix="R$ " decimals={0} duration={1.2} />
                  <span className="text-lg">,00</span>
                </p>
                <motion.a
                  href="https://wa.me/5518936180780?text=Olá!%20Quero%20agendar%20o%20plano%20de%20lavagem."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition hover:bg-primary/10"
                >
                  <MessageCircle className="h-4 w-4" /> Agendar
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicePlansSection;
