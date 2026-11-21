import { memo } from 'react';
import { Sparkles, Flame, Sun, Archive, Layers, Heart, Check, Plus } from 'lucide-react';
import { ADDONS } from '../../config/quoteConfig';

const ICONS_MAP = {
  Sparkles,
  Flame,
  Sun,
  Archive,
  Layers,
  Heart,
};

export const StepAddons = memo(({ selections, toggleAddon }) => {
  const selectedAddons = selections.addons || [];

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
          Select optional extra services
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          Customize your cleaning with specific deep-cleaning add-ons.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {ADDONS.map((addon) => {
          const isSelected = selectedAddons.includes(addon.id);
          const IconComponent = ICONS_MAP[addon.icon] || Sparkles;

          return (
            <button
              key={addon.id}
              type="button"
              onClick={() => toggleAddon(addon.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? 'border-freshGreen-500 bg-freshGreen-50/60 shadow-sm ring-1 ring-freshGreen-500'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div
                  className={`p-2 rounded-xl ${
                    isSelected
                      ? 'bg-freshGreen-500 text-white'
                      : 'bg-slate-100 text-navy-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-navy-900 text-xs sm:text-sm">
                    +${addon.price}
                  </span>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                      isSelected
                        ? 'border-freshGreen-500 bg-freshGreen-500 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected ? (
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    ) : (
                      <Plus className="w-2.5 h-2.5 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>

              <div>
                <span className="font-bold text-navy-900 text-xs sm:text-sm block">
                  {addon.label}
                </span>
                <span className="text-[11px] text-slate-500 leading-tight block mt-0.5 line-clamp-1">
                  {addon.desc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="text-center text-xs text-slate-400 italic">
        You can also request custom requests during the booking review step.
      </div>
    </div>
  );
});

StepAddons.displayName = 'StepAddons';
