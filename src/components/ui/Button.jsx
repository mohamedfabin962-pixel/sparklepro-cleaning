import React, { memo } from 'react';
import { cn } from '../../utils/cn';

export const Button = memo(React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  ...props
}, ref) => {
  const variants = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/10',
    secondary: 'bg-freshGreen-500 text-white hover:bg-freshGreen-600 shadow-lg shadow-freshGreen-500/10',
    outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-50',
    ghost: 'text-navy-900 hover:bg-navy-50 border-none shadow-none',
  };

  const sizes = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold',
    md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold',
    lg: 'px-5 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200',
        'hover:scale-[1.02] active:scale-[0.98]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}));

Button.displayName = 'Button';

export default Button;
