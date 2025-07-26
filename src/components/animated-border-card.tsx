  'use client';

  import { motion } from 'framer-motion';

  interface AnimatedBorderCardProps {
    children: React.ReactNode;
    className?: string;
  }

export const AnimatedBorderCard = ({ children, className = '' }: AnimatedBorderCardProps) => {
  return (
    <div 
      className={`relative rounded-xl ${className} hover:text-[#DAA520]`}
    >
      <motion.div 
        className="absolute inset-0 rounded-xl border-2"
        whileHover={{ borderColor: '#DAA520' }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
      />
      
      <div 
        className="relative bg-background rounded-xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        {children}
      </div>
    </div>
  );
};
