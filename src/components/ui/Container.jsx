import { cn } from '../../utils/cn';

export const Container = ({ className, children, ...props }) => {
  return (
    <div 
      className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0 box-border', className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
