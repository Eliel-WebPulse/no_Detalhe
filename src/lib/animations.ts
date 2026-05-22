// Detectar se é dispositivo móvel ou conexão lenta
const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  // Verificar preferência de movimento reduzido
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Verificar se é dispositivo móvel
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Verificar conexão lenta
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');
  
  return prefersReducedMotion || (isMobile && isSlowConnection);
};

export const animationConfig = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: isReducedMotion() ? 0.2 : 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: isReducedMotion() ? 10 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isReducedMotion() ? 0.2 : 0.6 }
  },
  slideUpSmall: {
    initial: { opacity: 0, y: isReducedMotion() ? 5 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isReducedMotion() ? 0.2 : 0.6 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: isReducedMotion() ? 0.95 : 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: isReducedMotion() ? 0.2 : 0.6 }
  },
  slideDown: {
    initial: { y: isReducedMotion() ? -20 : -100 },
    animate: { y: 0 },
    transition: { duration: isReducedMotion() ? 0.2 : 0.6 }
  }
};

export const animationDelays = {
  short: isReducedMotion() ? 0.1 : 0.2,
  medium: isReducedMotion() ? 0.2 : 0.4,
  long: isReducedMotion() ? 0.3 : 0.6,
  extraLong: isReducedMotion() ? 0.4 : 0.8,
  max: isReducedMotion() ? 0.5 : 1.1
};
