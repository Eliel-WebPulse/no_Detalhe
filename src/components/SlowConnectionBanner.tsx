import { useState, useEffect } from 'react';

interface SlowConnectionBannerProps {
  onDismiss?: () => void;
}

const SlowConnectionBanner = ({ onDismiss }: SlowConnectionBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // Verificar tipo de conexão
    const checkConnection = () => {
      const connection = (navigator as any).connection || 
                       (navigator as any).mozConnection || 
                       (navigator as any).webkitConnection;
      
      if (connection) {
        const isSlow = connection.effectiveType === 'slow-2g' || 
                       connection.effectiveType === '2g' || 
                       connection.effectiveType === '3g' ||
                       connection.downlink < 1; // menos de 1 Mbps
        
        setIsSlowConnection(isSlow);
        
        // Mostrar banner apenas se for conexão lenta
        if (isSlow) {
          setIsVisible(true);
        }
      }
    };

    checkConnection();
    
    // Verificar mudanças na conexão
    const connection = (navigator as any).connection || 
                     (navigator as any).mozConnection || 
                     (navigator as any).webkitConnection;
    
    if (connection) {
      connection.addEventListener('change', checkConnection);
    }

    return () => {
      if (connection) {
        connection.removeEventListener('change', checkConnection);
      }
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible || !isSlowConnection) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-500/90 backdrop-blur-sm text-black p-3 text-center">
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        <p className="text-sm font-medium">
          🐌 Conexão lenta detectada. Algumas animações foram reduzidas para melhor performance.
        </p>
        <button
          onClick={handleDismiss}
          className="text-black/70 hover:text-black transition-colors duration-200"
          aria-label="Fechar aviso"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlowConnectionBanner;
