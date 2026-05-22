import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';
import { animationConfig, animationDelays } from '@/lib/animations';
import Logo from './Logo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCarImage}
          alt="Luxury car"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
 
        {/* Logo */}
        <motion.div {...animationConfig.scaleIn} className="mb-8">
          <Logo size="lg" className="mx-auto" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 {...animationConfig.slideUp} transition={{ duration: 0.6, delay: animationDelays.short }} className="section-title text-5xl md:text-7xl lg:text-8xl mb-4 text-foreground">
          NO DETALHE
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...animationConfig.slideUpSmall} transition={{ duration: 0.6, delay: animationDelays.medium }} className="section-subtitle text-primary mb-8">
          ESTÉTICA AUTOMOTIVA
        </motion.p>

        {/* Catalog Title */}
        <motion.h2 {...animationConfig.slideUpSmall} transition={{ duration: 0.6, delay: animationDelays.long }} className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 text-foreground">
          Catálogo Digital
        </motion.h2>

        {/* Year Badge */}
        <motion.p {...animationConfig.slideUpSmall} transition={{ duration: 0.6, delay: animationDelays.long + 0.1 }} className="text-primary font-medium mb-6">
          Serviços Premium 2026
        </motion.p>

        {/* Decorative Dots */}
        <motion.div {...animationConfig.fadeIn} transition={{ duration: 0.8, delay: animationDelays.extraLong }} className="flex items-center justify-center gap-1 mb-8">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-primary opacity-60"
            />
          ))}
        </motion.div>

        {/* Description */}
        <motion.p {...animationConfig.slideUpSmall} transition={{ duration: 0.6, delay: animationDelays.extraLong + 0.1 }} className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
          Descubra os serviços exclusivos de detalhamento, polimento e proteção 
          de veículos de luxo. Qualidade premium em cada detalhe.
        </motion.p>

        {/* CTA Button */}
        <motion.div {...animationConfig.slideUpSmall} transition={{ duration: 0.6, delay: animationDelays.max }}>
          <a
            href="#services"
            className="btn-primary rounded-md text-sm font-semibold uppercase tracking-wider"
          >
            Explorar Serviços
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div {...animationConfig.fadeIn} transition={{ duration: 0.6, delay: animationDelays.max + 0.2 }} className="absolute bottom-25 left-1/2 -translate-x-1/2">
          <a href="#services" className="text-primary animate-bounce-slow block">
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
