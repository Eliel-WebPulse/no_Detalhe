import { motion } from "framer-motion";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";

const ContactSection = () => {
  return (
    <motion.section
      id="contato"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionReveal}
      className="bg-primary py-28 md:py-36"
    >
      <motion.div className="container mx-auto px-6 text-center" variants={staggerContainer(0.04, 0.08)}>
        <motion.h2
          variants={staggerItem}
          className="mb-4 font-heading text-5xl font-bold uppercase text-primary-foreground md:text-7xl"
        >
          Pronto para Agendar?
        </motion.h2>
        <motion.p variants={staggerItem} className="mb-8 text-primary-foreground">
          Fale com a equipe, tire dúvidas e reserve seu horário com atendimento rápido via WhatsApp.
        </motion.p>
        <motion.a
          href="https://wa.me/5518936180780?text=Olá!%20Vi%20o%20site%20e%20quero%20agendar%20um%20serviço."
          target="_blank"
          rel="noopener noreferrer"
          variants={staggerItem}
          whileHover={{ scale: 1.03, filter: "brightness(1.06)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.12em] text-primary transition hover:bg-primary-foreground/90"
        >
          Agendar Agora
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
