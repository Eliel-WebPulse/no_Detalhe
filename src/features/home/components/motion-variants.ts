import type { Variants } from "framer-motion";

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = (delayChildren = 0, staggerChildren = 0.12): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

