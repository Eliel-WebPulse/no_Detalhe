import { animate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface UseCountUpOptions {
  start?: boolean;
  duration?: number;
  delay?: number;
  decimals?: number;
}

export const useCountUp = (
  targetValue: number,
  { start = true, duration = 1.1, delay = 0, decimals = 0 }: UseCountUpOptions = {}
) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 180,
    mass: 0.6,
  });
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setCurrentValue(Number(latest.toFixed(decimals)));
    });

    return unsubscribe;
  }, [decimals, springValue]);

  useEffect(() => {
    if (!start) return;

    motionValue.set(0);
    const controls = animate(motionValue, targetValue, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [delay, duration, motionValue, start, targetValue]);

  return currentValue;
};

