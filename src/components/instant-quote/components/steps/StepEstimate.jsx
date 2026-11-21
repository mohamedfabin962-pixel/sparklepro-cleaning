import { memo } from 'react';
import { Sparkles, ShieldCheck, Clock, CheckCircle2, ArrowRight, Edit2, Info } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const StepEstimate = memo(({ quote, selections, nextStep, goToStep }) => {
  const { property, cleaning, frequency, selectedAddonsList, breakdown, estimatedPrice, currency } = quote;

  return (
    <div className="space-y-5">
      {/* Price Header Card */}
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white p-5 sm:p-6 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-freshGreen-500/20 blur-2xl rounded-full pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-freshGreen-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Your Estimated Price
            </span>
            {breakdown.discountPercent > 0 && (
              <span className="bg-freshGreen-500 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                {breakdown.discountPercent}% Savings Applied
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {currency}{estimatedPrice}
            </span>
            <span className="text-slate-400 text-xs sm:text-sm font-medium">
              {frequency.id === 'onetime' ? 'estimated total' : `/ visit (${frequency.label.toLowerCase()})`}
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Includes supplies, equipment, insurance coverage & 100% satisfaction guarantee.
          </p>
        </div>
      </div>

      {/* Summary of Selected Specs */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-3">
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Selected Service Summary
          </span>
          <button
            type="button"
            onClick={() => goToStep(1)}
            className="text-xs font-bold text-freshGreen-600 hover:text-freshGreen-700 flex items-center gap-1"
          >
            <Edit2 className="w-3 h-3" />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-slate-500 block">Property</span>
            <span className="font-bold text-navy-900 block truncate">
              {property.label} ({selections.bedrooms}b / {selections.bathrooms}ba)
            </span>
          </div>

          <div>
            <span className="text-slate-500 block">Service Level</span>
            <span className="font-bold text-navy-900 block truncate">
              {cleaning.label}
            </span>
          </div>

          <div>
            <span className="text-slate-500 block">Schedule</span>
            <span className="font-bold text-navy-900 block truncate">
              {frequency.label}
            </span>
          </div>

          <div>
            <span className="text-slate-500 block">Add-ons</span>
            <span className="font-bold text-navy-900 block truncate">
              {selectedAddonsList.length > 0
                ? `${selectedAddonsList.length} extra service${selectedAddonsList.length > 1 ? 's' : ''}`
                : 'None selected'}
            </span>
          </div>
        </div>

        {selectedAddonsList.length > 0 && (
          <div className="pt-1 flex flex-wrap gap-1">
            {selectedAddonsList.map((addon) => (
              <span
                key={addon.id}
                className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md"
              >
                + {addon.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600">
        <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
          <ShieldCheck className="w-4 h-4 text-freshGreen-500 mb-0.5" />
          <span className="font-bold text-navy-900">Bonded & Insured</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
          <Clock className="w-4 h-4 text-freshGreen-500 mb-0.5" />
          <span className="font-bold text-navy-900">2-Hr Response</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center">
          <CheckCircle2 className="w-4 h-4 text-freshGreen-500 mb-0.5" />
          <span className="font-bold text-navy-900">100% Guaranteed</span>
        </div>
      </div>

      {/* Transparent Disclaimer */}
      <div className="flex items-start gap-2 bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Demo Notice:</strong> This instant estimate provides an automated calculation. Final quotes are confirmed by SparklePro upon review of your home's unique layout and requirements.
        </p>
      </div>

      {/* Primary CTA */}
      <Button
        type="button"
        size="lg"
        onClick={nextStep}
        className="w-full py-4 text-base sm:text-lg flex items-center justify-center gap-2 shadow-lg shadow-freshGreen-500/20"
      >
        Continue to Booking
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
});

StepEstimate.displayName = 'StepEstimate';
