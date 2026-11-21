import { memo } from 'react';
import { Sparkles, Check, Zap, Truck } from 'lucide-react';
import { CLEANING_TYPES } from '../../config/quoteConfig';

export const StepCleaningType = memo(({ selections, updateSelection }) => {
  const { cleaningType } = selections;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
          Select your cleaning level
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Choose the service that fits your home's current condition.
        </p>
      </div>

      <div className="space-y-3">
        {CLEANING_TYPES.map((type) => {
          const isSelected = cleaningType === type.id;
          const Icon = type.id === 'standard' ? Sparkles : type.id === 'deep' ? Zap : Truck;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => updateSelection('cleaningType', type.id)}
              className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 relative flex items-start gap-3.5 ${
                isSelected
                  ? 'border-freshGreen-500 bg-freshGreen-50/60 shadow-sm ring-1 ring-freshGreen-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div
                className={`p-2.5 rounded-xl flex-shrink-0 mt-0.5 ${
                  isSelected
                    ? 'bg-freshGreen-500 text-white shadow-sm shadow-freshGreen-500/20'
                    : 'bg-slate-100 text-navy-700'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0 pr-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-navy-900 text-sm sm:text-base">
                    {type.label}
                  </span>
                  {type.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-freshGreen-500 text-white px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {type.desc}
                </p>
              </div>

              <div className="absolute top-4 right-4">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'border-freshGreen-500 bg-freshGreen-500 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 text-xs text-slate-500 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-freshGreen-500 flex-shrink-0" />
        <span>First time with us? Most new clients start with a <strong>Deep Cleaning</strong>.</span>
      </div>
    </div>
  );
});

StepCleaningType.displayName = 'StepCleaningType';
