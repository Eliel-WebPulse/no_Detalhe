import { motion } from 'framer-motion';
import { animationConfig } from '@/lib/animations';
import logo from '@/assets/logo.bmp';

const Header = () => {
  return (
    <motion.header 
      {...animationConfig.slideDown} 
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300"
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-center h-full">
          <a href="#" className="flex items-center h-full">
            <img 
              src={logo} 
              alt="NO DETALHE - Estética Automotiva" 
              className="h-full w-auto max-h-16 logo-site"
              style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.5)',
                background: 'transparent !important'
              }}
            />
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
