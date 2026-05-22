import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCountProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

const AnimatedCount = ({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.1,
  className,
}: AnimatedCountProps) => {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.7, initial: true });
  const animatedValue = useCountUp(value, { start: isInView, duration, decimals });

  return (
    <motion.span ref={elementRef} className={className} initial={{ opacity: 0.7 }} animate={{ opacity: 1 }}>
      {prefix}
      {animatedValue.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCount;
