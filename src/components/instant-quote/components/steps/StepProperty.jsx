import { memo } from 'react';
import { Home, Building2, Plus, Minus, Check } from 'lucide-react';
import { PROPERTY_TYPES, SQFT_TIERS, ROOM_RATES } from '../../config/quoteConfig';

export const StepProperty = memo(({ selections, updateSelection }) => {
  const { propertyType, bedrooms, bathrooms, sqftTier } = selections;

  const handleBedroomsChange = (delta) => {
    const next = Math.min(
      ROOM_RATES.maxBedrooms,
      Math.max(ROOM_RATES.minBedrooms, (bedrooms || 1) + delta)
    );
    updateSelection('bedrooms', next);
  };

  const handleBathroomsChange = (delta) => {
    const next = Math.min(
      ROOM_RATES.maxBathrooms,
      Math.max(ROOM_RATES.minBathrooms, Number(((bathrooms || 1) + delta).toFixed(1)))
    );
    updateSelection('bathrooms', next);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">
          Tell us about your home
        </h3>
        <p className="text-xs sm:text-sm text-slate-500">
          We use this to calculate room sizes and cleaning duration.
        </p>
      </div>

      {/* Property Type Selection */}
      <div className="grid grid-cols-2 gap-3">
        {PROPERTY_TYPES.map((type) => {
          const isSelected = propertyType === type.id;
          const Icon = type.icon === 'Home' ? Home : Building2;

          return (
            <button
              key={type.id}
              type="button"
              onClick={() => updateSelection('propertyType', type.id)}
              className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative ${
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
                  <Icon className="w-5 h-5" />
                </div>
                {isSelected && (
                  <span className="w-5 h-5 rounded-full bg-freshGreen-500 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <div>
                <span className="font-bold text-navy-900 text-sm sm:text-base block">
                  {type.label}
                </span>
                <span className="text-[11px] text-slate-500 leading-tight block mt-0.5 line-clamp-1">
                  {type.desc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Bedrooms & Bathrooms Counters */}
      <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 space-y-4">
        {/* Bedrooms */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-navy-900 text-sm sm:text-base block">
              Bedrooms
            </span>
            <span className="text-xs text-slate-500">
              Includes master & guest rooms
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleBedroomsChange(-1)}
              disabled={bedrooms <= ROOM_RATES.minBedrooms}
              aria-label="Decrease bedrooms"
              className="w-8 h-8 rounded-full border border-slate-300 bg-white text-navy-900 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-7 text-center font-black text-navy-900 text-base sm:text-lg">
              {bedrooms}
            </span>
            <button
              type="button"
              onClick={() => handleBedroomsChange(1)}
              disabled={bedrooms >= ROOM_RATES.maxBedrooms}
              aria-label="Increase bedrooms"
              className="w-8 h-8 rounded-full border border-slate-300 bg-white text-navy-900 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <hr className="border-slate-200/60" />

        {/* Bathrooms */}
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-navy-900 text-sm sm:text-base block">
              Bathrooms
            </span>
            <span className="text-xs text-slate-500">
              Full and half baths
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleBathroomsChange(-0.5)}
              disabled={bathrooms <= ROOM_RATES.minBathrooms}
              aria-label="Decrease bathrooms"
              className="w-8 h-8 rounded-full border border-slate-300 bg-white text-navy-900 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-7 text-center font-black text-navy-900 text-base sm:text-lg">
              {bathrooms}
            </span>
            <button
              type="button"
              onClick={() => handleBathroomsChange(0.5)}
              disabled={bathrooms >= ROOM_RATES.maxBathrooms}
              aria-label="Increase bathrooms"
              className="w-8 h-8 rounded-full border border-slate-300 bg-white text-navy-900 flex items-center justify-center font-bold hover:bg-slate-100 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Approximate Property Size (Optional) */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-navy-900 mb-2">
          Approximate Size <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {SQFT_TIERS.map((tier) => {
            const isSelected = sqftTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => updateSelection('sqftTier', tier.id)}
                className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold border text-center transition-all ${
                  isSelected
                    ? 'border-navy-900 bg-navy-900 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {tier.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

StepProperty.displayName = 'StepProperty';
