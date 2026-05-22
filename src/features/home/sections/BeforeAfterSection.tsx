import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";
import { beforeAfterItems } from "../model/content";

const BeforeAfterSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(beforeAfterItems[0].category);
  const [divider, setDivider] = useState(50);
  const [showDragHint, setShowDragHint] = useState(true);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isSliderInView = useInView(sliderRef, { once: true, amount: 0.35 });

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowDragHint(false), 3000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isSliderInView) return;
    setDivider(50);
    const controls = animate(50, [30, 50], {
      duration: 1.2,
      ease: "easeInOut",
      onUpdate: (latest) => setDivider(latest),
    });
    return () => controls.stop();
  }, [isSliderInView]);

  const currentItem = useMemo(
    () => beforeAfterItems.find((item) => item.category === selectedCategory) ?? beforeAfterItems[0],
    [selectedCategory]
  );

  return (
    <motion.section
      id="galeria"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-secondary/20 py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="ANTES / DEPOIS"
          title="Resultados Visuais"
          description="Compare o estado inicial e final para entender o ganho real de cada pacote."
        />

        <motion.div
          className="mb-5 flex flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0, 0.06)}
        >
          {beforeAfterItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setSelectedCategory(item.category)}
              variants={staggerItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                selectedCategory === item.category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              {item.category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto max-w-5xl rounded-xl border border-border bg-card p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div ref={sliderRef} className="relative aspect-[16/9] touch-none overflow-hidden rounded-lg">
                <img src={currentItem.before} alt={`Antes - ${currentItem.service}`} className="h-full w-full object-cover" />
                <img
                  src={currentItem.after}
                  alt={`Depois - ${currentItem.service}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ clipPath: `inset(0 0 0 ${divider}%)` }}
                />
                <motion.div
                  className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
                  style={{ left: `${divider}%` }}
                  animate={{ boxShadow: "0 0 18px rgba(192,57,43,0.5)" }}
                />
                <div
                  className="pointer-events-none absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-foreground/30 bg-primary text-primary-foreground shadow-lg"
                  style={{ left: `${divider}%`, top: "50%" }}
                  aria-hidden="true"
                >
                  <span className="text-sm leading-none">↔</span>
                </div>
                <div className="absolute left-4 top-4 rounded bg-black/80 px-2 py-1 text-xs text-white">ANTES</div>
                <div className="absolute right-4 top-4 rounded bg-primary px-2 py-1 text-xs text-white">DEPOIS</div>
              </div>
              {showDragHint && <p className="mt-3 text-center text-xs text-foreground/70 animate-pulse">Arraste para comparar</p>}
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 space-y-2 touch-none">
            <input
              type="range"
              min={10}
              max={90}
              value={divider}
              onChange={(event) => setDivider(Number(event.target.value))}
              className="h-11 w-full cursor-grab active:cursor-grabbing"
              aria-label="Controle de comparação antes e depois"
            />
            <p className="text-sm text-foreground/70">
              {currentItem.service} • Tempo médio: {currentItem.duration}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeforeAfterSection;
