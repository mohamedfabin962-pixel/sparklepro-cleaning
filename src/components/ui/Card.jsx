import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Card = ({ className, children, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' } : {}}
      className={cn(
        'bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-100 shadow-sm transition-all duration-300 w-full max-w-full min-w-0 box-border',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
