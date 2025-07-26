'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBorderCard = ({ children, className = '' }: AnimatedBorderCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <div 
      ref={ref} 
      className={`relative rounded-xl ${className}`}
    >
      <motion.div 
        className="absolute inset-0 rounded-xl border-2 border-transparent"
        initial={{ borderColor: 'transparent' }}
        animate={{ 
          borderColor: isInView ? '#3b82f6' : 'transparent',
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
      />
      
      <div 
        className="relative bg-background rounded-xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border border-border"
      >
        {children}
      </div>
    </div>
  );
};
