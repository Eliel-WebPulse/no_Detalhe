import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importando apenas a primeira imagem inicialmente
import andresLeal from '@/assets/andres-leal-ze_L46_GOaw-unsplash.jpg';

// Lazy loading para outras imagens
const loadImages = async () => {
  const images = await Promise.all([
    import('@/assets/car-wash-detailing-station.jpg'),
    import('@/assets/chloe-williams-vc_0qyx0bbA-unsplash.jpg'),
    import('@/assets/man-working-car-detailing-coating-car.jpg'),
    import('@/assets/zac-nielson-8k_T1EwTySs-unsplash.jpg')
  ]);
  return images.map(img => img.default);
};

const ImageGallery = () => {
  const [images, setImages] = useState([andresLeal]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Carregar imagens adicionais quando o componente estiver visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !imagesLoaded) {
          setIsLoading(true);
          try {
            const additionalImages = await loadImages();
            setImages(prev => [...prev, ...additionalImages]);
            setImagesLoaded(true);
          } catch (error) {
            console.error('Erro ao carregar imagens:', error);
          } finally {
            setIsLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, [imagesLoaded]);

  // Auto-play otimizado - apenas quando a página estiver visível
  useEffect(() => {
    if (!isAutoPlaying || !imagesLoaded || isLoading) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, imagesLoaded, isLoading]);

  // Memoizar funções para evitar re-renders
  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  }, []);

  // Preload próxima imagem
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [currentIndex, images]);

  return (
    <section ref={galleryRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl mb-6 text-white">
            Galeria
          </h2>
        </motion.div>

        {/* Carrossel otimizado */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video md:aspect-[16/9] rounded-xl overflow-hidden bg-secondary">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary/80 z-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex]}
                  alt={`Imagem ${currentIndex + 1} da galeria`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>

            {/* Botões de navegação otimizados */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Indicadores otimizados */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6 md:w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de imagens */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
