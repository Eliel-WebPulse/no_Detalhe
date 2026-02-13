import { Car } from 'lucide-react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full border-2 border-red-600/20 flex items-center justify-center bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-red-600/40 group-hover:bg-background/80`}>
        <Car className={`w-1/2 h-1/2 text-red-600 transition-colors duration-300`} />
      </div>
      <span className="font-bold tracking-wider text-foreground opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        NO DETALHE
      </span>
    </div>
  );
};

export default Logo;
