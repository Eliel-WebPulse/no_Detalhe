import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "./motion-variants";

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionIntro = ({ eyebrow, title, description }: SectionIntroProps) => {
  return (
    <motion.div
      variants={staggerContainer(0, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow ? (
        <motion.p variants={staggerItem} className="section-subtitle mb-4">
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2 variants={staggerItem} className="section-title mb-5 text-4xl text-foreground md:text-5xl">
        {title}
      </motion.h2>
      {description ? (
        <motion.p variants={staggerItem} className="text-muted-foreground">
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default SectionIntro;
