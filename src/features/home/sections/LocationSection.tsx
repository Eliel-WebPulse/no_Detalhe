import { motion } from "framer-motion";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";

const LocationSection = () => {
  return (
    <motion.section
      id="onde-nos-encontrar"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-background py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="LOCALIZACAO"
          title="Onde Nos Encontrar"
          description="Atendimento presencial com facil acesso e link direto para rota no Google Maps."
        />

        <motion.div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]" variants={staggerContainer(0.04, 0.08)}>
          <motion.div variants={staggerItem} className="rounded-3xl border border-border bg-card p-6">
            <motion.ul className="space-y-4 text-sm" variants={staggerContainer(0, 0.06)}>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>R. Eloi Moimaz, 397, Birigui - SP, 16201-586</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href="https://wa.me/5518936180780" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  +55 18 93618-0780
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Segunda a Sexta: 08h - 18h | Sabado: 08h - 16h | Domingo: Fechado</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href="https://maps.google.com/?q=R.+Eloi+Moimaz,+397,+Birigui+-+SP,+16201-586,+Brasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Abrir no Google Maps
                </a>
              </li>
            </motion.ul>
          </motion.div>

          <motion.div variants={staggerItem} className="overflow-hidden rounded-[24px] border border-border shadow-lg">
            <iframe
              title="Mapa No Detalhe"
              src="https://www.google.com/maps?q=R.+Eloi+Moimaz,+397,+Birigui+-+SP,+16201-586,+Brasil&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LocationSection;
