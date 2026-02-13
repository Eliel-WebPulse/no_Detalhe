import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Lazy loading para componentes pesados
const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const Contact = lazy(() => import('@/components/Contact'));
const ImageGallery = lazy(() => import('@/components/ImageGallery'));

// Componente de loading para seções
const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ImageGallery />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
