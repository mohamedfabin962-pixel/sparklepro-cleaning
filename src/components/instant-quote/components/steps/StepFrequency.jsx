import { memo } from 'react';
import { Calendar, Check, Percent } from 'lucide-react';
import { FREQUENCIES } from '../../config/quoteConfig';

export const StepFrequency = memo(({ selections, updateSelection }) => {
  const { frequency } = selections;

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
          How often do you need cleaning?
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Recurring schedules include ongoing loyalty discounts.
        </p>
      </div>

      <div className="space-y-2.5">
        {FREQUENCIES.map((item) => {
          const isSelected = frequency === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => updateSelection('frequency', item.id)}
              className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 relative flex items-center justify-between ${
                isSelected
                  ? 'border-freshGreen-500 bg-freshGreen-50/60 shadow-sm ring-1 ring-freshGreen-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div
                  className={`p-2 rounded-xl flex-shrink-0 ${
                    isSelected
                      ? 'bg-freshGreen-500 text-white'
                      : 'bg-slate-100 text-navy-700'
                  }`}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy-900 text-sm sm:text-base">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-bold bg-freshGreen-100 text-freshGreen-800 px-2 py-0.5 rounded-full border border-freshGreen-200">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-500 block">
                    {item.desc}
                  </span>
                </div>
              </div>

              <div
                className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-all ${
                  isSelected
                    ? 'border-freshGreen-500 bg-freshGreen-500 text-white'
                    : 'border-slate-300 bg-white'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-navy-900 text-white p-3.5 rounded-xl text-xs flex items-center gap-2.5">
        <div className="p-1.5 rounded-lg bg-freshGreen-500/20 text-freshGreen-400">
          <Percent className="w-4 h-4" />
        </div>
        <span>Cancel or reschedule recurring plans anytime with 24 hours notice. No contracts.</span>
      </div>
    </div>
  );
});

StepFrequency.displayName = 'StepFrequency';
