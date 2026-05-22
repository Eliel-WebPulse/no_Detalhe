import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import heroCarImage from "@/assets/hero-car.jpg";
import { staggerContainer, staggerItem } from "../components/motion-variants";

const heroTitleParts = ["Seu carro", "merece o", "melhor cuidado"];

const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      initial="hidden"
      animate="show"
      variants={staggerContainer(0.08, 0.12)}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <img src={heroCarImage} alt="Carro em detalhamento" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/70" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.p variants={staggerItem} className="section-subtitle mb-6">
          ESTÉTICA AUTOMOTIVA PROFISSIONAL
        </motion.p>

        <motion.h1 className="max-w-4xl font-heading text-5xl font-extrabold uppercase tracking-[0.04em] leading-tight text-foreground md:text-7xl">
          {heroTitleParts.map((part, index) => (
            <motion.span
              key={part}
              className="block"
              initial={{ opacity: 0, y: 22, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.6, delay: 0.12 * index + 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {part}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p variants={staggerItem} className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Estética automotiva profissional com produtos premium, acabamento técnico e foco total em resultado.
        </motion.p>

        <motion.div variants={staggerItem} className="mt-10 flex flex-wrap gap-4">
          <motion.a
            href="#servicos"
            whileHover={{ scale: 1.03, filter: "brightness(1.06)" }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary rounded-md text-sm uppercase tracking-[0.15em]"
          >
            Ver Serviços
          </motion.a>
          <motion.a
            href="https://wa.me/5518936180780?text=Olá!%20Vi%20o%20site%20e%20quero%20agendar%20um%20serviço."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-md border border-foreground/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-primary hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#servicos"
        aria-label="Descer para serviços"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
        animate={{ y: [0, 8, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </motion.section>
  );
};

export default HeroSection;

