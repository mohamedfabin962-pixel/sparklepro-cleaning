import { useEffect, memo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../../ui/Button';

// Steps
import { StepProperty } from './steps/StepProperty';
import { StepCleaningType } from './steps/StepCleaningType';
import { StepFrequency } from './steps/StepFrequency';
import { StepAddons } from './steps/StepAddons';
import { StepEstimate } from './steps/StepEstimate';
import { StepBookingForm } from './steps/StepBookingForm';
import { StepConfirmation } from './steps/StepConfirmation';

export const QuoteModal = memo(({
  isOpen,
  onClose,
  calculatorState,
}) => {
  const {
    step,
    selections,
    customer,
    quote,
    isSubmitting,
    confirmation,
    formError,
    nextStep,
    prevStep,
    goToStep,
    updateSelection,
    toggleAddon,
    updateCustomerField,
    submitEnquiry,
    resetAll,
  } = calculatorState;

  const contentRef = useRef(null);

  // Scroll to top of modal content whenever step changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  // Lock body scroll on mobile only when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Calculate step progress percentage for steps 1-5
  const progressPercent = Math.min(100, Math.round(((step - 1) / 4) * 100));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[70] md:hidden"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-widget-title"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`
              fixed z-[75] bg-white shadow-2xl flex flex-col overflow-hidden
              /* Mobile: full screen */
              inset-0 md:inset-auto
              /* Desktop: anchored bottom-right */
              md:bottom-6 md:right-6 md:w-[420px] md:max-w-[calc(100vw-2rem)]
              md:h-[680px] md:max-h-[85vh] md:rounded-3xl md:border md:border-slate-200/90
            `}
          >
            {/* Header */}
            <div className="bg-white border-b border-slate-100 px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between relative flex-shrink-0">
              <div className="flex items-center gap-2.5">
                {step > 1 && step < 7 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    aria-label="Go to previous step"
                    className="p-1.5 -ml-1 text-slate-500 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="w-7 h-7 rounded-xl bg-freshGreen-500 text-white flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div>
                  <h2
                    id="quote-widget-title"
                    className="text-xs sm:text-sm font-bold text-navy-900 leading-tight flex items-center gap-1.5"
                  >
                    <span>Instant Price Calculator</span>
                    {step <= 4 && (
                      <span className="text-[10px] text-slate-400 font-normal">
                        ({step} of 4)
                      </span>
                    )}
                  </h2>
                  <span className="text-[10px] text-freshGreen-600 font-semibold block leading-none mt-0.5">
                    {step === 5
                      ? 'Estimate Ready'
                      : step === 6
                      ? 'Final Step: Booking Enquiry'
                      : step === 7
                      ? 'Request Confirmed'
                      : 'Live Pricing Guarantee'}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close quote widget"
                className="p-1.5 text-slate-400 hover:text-navy-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Progress bar line */}
              {step <= 5 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-freshGreen-500 transition-all duration-300 ease-out"
                    style={{ width: `${Math.max(15, progressPercent)}%` }}
                  />
                </div>
              )}
            </div>

            {/* Scrollable Content Body */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 min-w-0"
            >
              {step === 1 && (
                <StepProperty
                  selections={selections}
                  updateSelection={updateSelection}
                />
              )}

              {step === 2 && (
                <StepCleaningType
                  selections={selections}
                  updateSelection={updateSelection}
                />
              )}

              {step === 3 && (
                <StepFrequency
                  selections={selections}
                  updateSelection={updateSelection}
                />
              )}

              {step === 4 && (
                <StepAddons
                  selections={selections}
                  toggleAddon={toggleAddon}
                />
              )}

              {step === 5 && (
                <StepEstimate
                  quote={quote}
                  selections={selections}
                  nextStep={nextStep}
                  goToStep={goToStep}
                />
              )}

              {step === 6 && (
                <StepBookingForm
                  customer={customer}
                  quote={quote}
                  updateCustomerField={updateCustomerField}
                  submitEnquiry={submitEnquiry}
                  isSubmitting={isSubmitting}
                  formError={formError}
                  prevStep={prevStep}
                />
              )}

              {step === 7 && (
                <StepConfirmation
                  confirmation={confirmation}
                  customer={customer}
                  quote={quote}
                  resetAll={resetAll}
                  closeWidget={onClose}
                />
              )}
            </div>

            {/* Sticky Navigation Footer (Only for steps 1-4) */}
            {step <= 4 && (
              <div className="bg-slate-50 border-t border-slate-200/80 px-4 py-3 sm:px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] flex items-center justify-between gap-3 flex-shrink-0">
                {/* Live price ticker */}
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Est.
                  </span>
                  <span className="text-xl font-black text-navy-900 leading-none">
                    {quote.currency}{quote.estimatedPrice}
                  </span>
                  {quote.breakdown.discountPercent > 0 && (
                    <span className="text-[10px] text-freshGreen-600 font-bold bg-freshGreen-100 px-1.5 py-0.5 rounded-full">
                      -{quote.breakdown.discountPercent}%
                    </span>
                  )}
                </div>

                {/* Continue button */}
                <Button
                  type="button"
                  size="md"
                  onClick={nextStep}
                  className="px-6 py-2.5 sm:py-3 text-sm font-bold flex items-center gap-2 shadow-lg shadow-freshGreen-500/25 active:scale-95"
                >
                  {step === 4 ? (
                    <>
                      View Estimate
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

QuoteModal.displayName = 'QuoteModal';
