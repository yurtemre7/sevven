import { motion } from "framer-motion";

export const BrushUnderline = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ height: '4px', width: '100%' }}>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-full bg-blue-600 rounded-full"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        animate={{ 
          scaleX: 1,
          boxShadow: '0 0 4px rgba(59, 130, 246, 0.5)'
        }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </div>
  );
};
