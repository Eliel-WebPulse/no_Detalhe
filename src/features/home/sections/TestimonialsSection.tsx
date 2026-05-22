import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sectionReveal } from "../components/motion-variants";
import { testimonials } from "../model/content";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToNext = () => {
    setActiveIndex((previous) => (previous + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setActiveIndex((previous) => (previous - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <motion.section
      id="depoimentos"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-background py-24"
    >
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={`${activeTestimonial.name}-${activeIndex}-quote`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            className="relative mx-auto mb-12 max-w-3xl text-center font-heading text-3xl font-bold uppercase leading-tight text-foreground md:text-5xl"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-6 font-heading text-8xl leading-none text-primary opacity-30"
            >
              "
            </span>
            "{activeTestimonial.text}"
          </motion.blockquote>
        </AnimatePresence>

        <div className="mx-auto max-w-3xl rounded-xl bg-card/50 p-6">
          <AnimatePresence mode="wait">
            <motion.article
              key={`${activeTestimonial.name}-${activeIndex}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-sm text-amber-300">{"★".repeat(activeTestimonial.rating)}</p>
              <p className="mt-4 text-base text-muted-foreground">"{activeTestimonial.text}"</p>
              <p className="mt-5 text-sm font-semibold text-foreground">{activeTestimonial.name}</p>
              <p className="text-xs text-foreground/70">{activeTestimonial.vehicle}</p>
              <span className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                Plano {activeTestimonial.plan}
              </span>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <motion.button
              type="button"
              aria-label="Depoimento anterior"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground/70 hover:text-foreground"
            >
              <ChevronLeft className="h-4 w-4" /> Anterior
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Depoimento ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-primary" : "w-2.5 bg-muted"}`}
                />
              ))}
            </div>
            <motion.button
              type="button"
              aria-label="Próximo depoimento"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-foreground/70 hover:text-foreground"
            >
              Proximo <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
