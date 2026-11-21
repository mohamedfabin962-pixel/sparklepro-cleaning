import { memo } from 'react';
import { Calculator, Sparkles } from 'lucide-react';

export const QuoteLauncher = memo(({ isOpen, onToggle }) => {
  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-out ${
        isOpen ? 'scale-90 opacity-0 pointer-events-none' : 'scale-100 opacity-100'
      } bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] right-4 md:bottom-6 md:right-6`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-label="Open Instant Quote Calculator"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className="group relative flex items-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-navy-900/25 border border-white/10 transition-all duration-200 active:scale-95 hover:shadow-2xl hover:scale-[1.03]"
      >
        {/* Subtle Green Pulse Accent Icon */}
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-freshGreen-500 flex items-center justify-center text-white shadow-md shadow-freshGreen-500/30 group-hover:rotate-12 transition-transform duration-300">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-freshGreen-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-freshGreen-500" />
          </span>
        </div>

        {/* Text Label */}
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white whitespace-nowrap">
              Get Instant Quote
            </span>
            <Sparkles className="w-3 h-3 text-freshGreen-400" />
          </div>
          <span className="text-[10px] text-slate-300 font-medium block leading-none">
            60-Sec Estimate
          </span>
        </div>
      </button>
    </div>
  );
});

QuoteLauncher.displayName = 'QuoteLauncher';
