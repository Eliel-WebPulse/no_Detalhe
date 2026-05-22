import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import AnimatedCount from "../components/AnimatedCount";
import SectionIntro from "../components/SectionIntro";
import { sectionReveal, staggerContainer, staggerItem } from "../components/motion-variants";
import { planById, planMatrix, quizQuestions } from "../model/content";
import type { PlanId } from "../model/types";

const quizStartScore: Record<PlanId, number> = {
  simples: 0,
  detalhada: 0,
  master: 0,
};

const PlansComparisonSection = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState<Record<PlanId, number>>(quizStartScore);
  const [result, setResult] = useState<PlanId | null>(null);

  const question = quizQuestions[step];
  const isQuizDone = result !== null;

  const handleOption = (optionScore: Record<PlanId, number>) => {
    const nextScore = {
      simples: score.simples + optionScore.simples,
      detalhada: score.detalhada + optionScore.detalhada,
      master: score.master + optionScore.master,
    };

    if (step === quizQuestions.length - 1) {
      const ranked = Object.entries(nextScore).sort((a, b) => b[1] - a[1]);
      setResult(ranked[0][0] as PlanId);
      setScore(nextScore);
      return;
    }

    setScore(nextScore);
    setStep((prev) => prev + 1);
  };

  const recommendation = useMemo(() => {
    if (!result) return null;
    return planById[result];
  }, [result]);

  return (
    <motion.section
      id="comparativo"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionReveal}
      className="bg-background py-24"
    >
      <div className="container mx-auto px-6">
        <SectionIntro
          eyebrow="DECISAO"
          title="Comparativo de Planos"
          description="Visualize em segundos o que muda entre Simples, Detalhada e Master."
        />

        <motion.div
          className="overflow-hidden rounded-xl border border-border bg-card"
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Serviço</TableHead>
                <TableHead className="text-center font-heading text-lg uppercase">
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                    Simples
                  </motion.span>
                </TableHead>
                <TableHead className="text-center font-heading text-lg uppercase">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 }}
                  >
                    Detalhada
                  </motion.span>
                </TableHead>
                <TableHead className="text-center font-heading text-lg uppercase text-amber-300">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 }}
                  >
                    Master
                  </motion.span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {planMatrix.map((row, rowIndex) => (
                <TableRow key={row.feature}>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button type="button" className="text-left underline decoration-dotted underline-offset-4">
                          {row.feature}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>{row.detail}</TooltipContent>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="text-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.72 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: rowIndex * 0.015 }}
                    >
                      {row.simples}
                    </motion.span>
                  </TableCell>
                  <TableCell className="text-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.72 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.06 + rowIndex * 0.015 }}
                    >
                      {row.detalhada}
                    </motion.span>
                  </TableCell>
                  <TableCell className="text-center">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.72 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + rowIndex * 0.015 }}
                    >
                      {row.master}
                    </motion.span>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-semibold">Preço</TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  R$ <AnimatedCount value={70} />
                </TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  R$ <AnimatedCount value={180} />
                </TableCell>
                <TableCell className="text-center font-semibold text-primary">
                  R$ <AnimatedCount value={275} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>

        <motion.div
          className="mt-10 rounded-xl border border-border bg-card p-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08, 0.08)}
        >
          <p className="section-subtitle mb-2">Ajuda para escolher</p>
          <AnimatePresence mode="wait">
            {!isQuizDone ? (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="mb-4 text-2xl font-heading text-foreground">{question.question}</h3>
                <motion.div className="grid gap-3 sm:grid-cols-2" variants={staggerContainer(0, 0.08)}>
                  {question.options.map((option) => (
                    <motion.button
                      key={option.label}
                      type="button"
                      onClick={() => handleOption(option.score as Record<PlanId, number>)}
                      variants={staggerItem}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-md border border-border px-4 py-3 text-left text-sm transition hover:border-primary/50 hover:bg-primary/10"
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </motion.div>
                <p className="mt-4 text-xs text-foreground/70">Pergunta {step + 1} de {quizQuestions.length}</p>
              </motion.div>
            ) : (
              <motion.div
                key="quiz-result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-heading text-foreground">Recomendamos: {recommendation?.title}</h3>
                <p className="text-sm text-foreground/70">
                  Resultado com base no seu perfil de uso e objetivo de acabamento.
                </p>
                <motion.a
                  href="#servicos"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex rounded-md border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
                >
                  {recommendation?.cta}
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlansComparisonSection;
