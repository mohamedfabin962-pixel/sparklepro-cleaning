import { memo } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, RefreshCw, X } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const StepConfirmation = memo(({
  confirmation,
  customer,
  quote,
  resetAll,
  closeWidget,
}) => {
  const referenceId = confirmation?.referenceId || 'SPQ-DEMO';

  return (
    <div className="space-y-5 text-center py-2">
      {/* Success Animated Icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-16 h-16 sm:w-20 sm:h-20 bg-freshGreen-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl shadow-freshGreen-500/30"
      >
        <Check className="w-9 h-9 stroke-[3]" />
      </motion.div>

      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-freshGreen-600 bg-freshGreen-50 px-3 py-1 rounded-full border border-freshGreen-200">
          Enquiry Ref: {referenceId}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-navy-900 mt-2 mb-1">
          Enquiry Request Received!
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
          Thank you, <strong className="text-navy-900">{customer.fullName || 'there'}</strong>! Our team has received your estimate request.
        </p>
      </div>

      {/* Recap Card */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left space-y-2.5 text-xs">
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
          <span className="font-bold text-navy-900 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-freshGreen-500" />
            Estimated Quote Summary
          </span>
          <span className="text-base font-black text-freshGreen-600">
            {quote.currency}{quote.estimatedPrice}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-slate-600">
          <div>
            <span className="text-[11px] text-slate-400 block">Service:</span>
            <span className="font-semibold text-navy-900 block truncate">
              {quote.cleaning.label}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-400 block">Property:</span>
            <span className="font-semibold text-navy-900 block truncate">
              {quote.property.label}
            </span>
          </div>
          {customer.preferredDate && (
            <div>
              <span className="text-[11px] text-slate-400 block">Preferred Date:</span>
              <span className="font-semibold text-navy-900 block truncate">
                {customer.preferredDate}
              </span>
            </div>
          )}
          <div>
            <span className="text-[11px] text-slate-400 block">Schedule:</span>
            <span className="font-semibold text-navy-900 block truncate">
              {quote.frequency.label}
            </span>
          </div>
        </div>
      </div>

      {/* Notice: Enquiry, not confirmed booking */}
      <div className="bg-navy-900 text-white rounded-xl p-3 text-left text-xs space-y-1">
        <div className="font-bold text-freshGreen-400 flex items-center gap-1.5">
          <span>Next Steps</span>
        </div>
        <p className="text-slate-300 text-[11px] leading-relaxed">
          This is an estimate enquiry, not a final confirmed booking. Our scheduling manager will contact you at <strong>{customer.phone || 'your phone number'}</strong> within 2 hours to confirm crew arrival and final scope.
        </p>
      </div>

      {/* Demo Mode Notice */}
      <div className="bg-slate-100 rounded-xl p-2.5 border border-slate-200 text-[11px] text-slate-500 text-left">
        <strong>Demo Mode Note:</strong> This submission was captured in local browser demo storage. In a live deployment, this enquiry will route straight to your CRM, email, or SMS notification webhook.
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        <Button
          type="button"
          variant="outline"
          onClick={resetAll}
          className="flex-1 text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          New Estimate
        </Button>
        <Button
          type="button"
          onClick={closeWidget}
          className="flex-1 text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5"
        >
          <X className="w-3.5 h-3.5" />
          Close Widget
        </Button>
      </div>
    </div>
  );
});

StepConfirmation.displayName = 'StepConfirmation';
