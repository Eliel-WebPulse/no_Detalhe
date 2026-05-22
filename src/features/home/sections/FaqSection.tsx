import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";
import { faqItems } from "../model/content";

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-secondary/20 py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="DÚVIDAS"
          title="Perguntas Frequentes"
          description="Respostas objetivas para as perguntas mais comuns antes do agendamento."
        />

        <motion.div
          className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.04, 0.07)}
        >
          <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem}>
            {faqItems.map((item, index) => (
              <motion.div key={item.question} layout variants={staggerItem} transition={{ duration: 0.25 }}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="border-l-0 text-left text-foreground hover:no-underline [&>svg]:hidden">
                    <span className="font-heading text-lg uppercase tracking-wide">{item.question}</span>
                    <motion.div
                      animate={{ rotate: openItem === `item-${index}` ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={openItem === `item-${index}` ? "text-primary" : "text-foreground"}
                    >
                      {openItem === `item-${index}` ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </motion.div>
                  </AccordionTrigger>
                  <AccordionContent className={openItem === `item-${index}` ? "text-foreground/75" : "text-foreground/70"}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
        <div className="mt-16 flex items-center gap-4 opacity-30">
          <div className="h-px flex-1 bg-border" />
          <span className="text-primary text-xs">◆</span>
          <div className="h-px flex-1 bg-border" />
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
