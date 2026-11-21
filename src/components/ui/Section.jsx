import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

/* Shared variant object — defined once, not per render */
const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export const Section = memo(({ 
  className, 
  children, 
  id, 
  animate = true,
  background = 'white', // 'white' | 'gray' | 'navy'
  ...props 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    navy: 'bg-navy-900 text-white',
  };

  return (
    <section 
      id={id} 
      className={cn('py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden w-full max-w-full min-w-0', backgrounds[background], className)} 
      {...props}
    >
      {animate ? (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={sectionVariants}
          className="w-full max-w-full min-w-0"
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
