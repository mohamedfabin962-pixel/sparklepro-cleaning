import { memo } from 'react';
import { useQuoteCalculator } from './hooks/useQuoteCalculator';
import { QuoteLauncher } from './components/QuoteLauncher';
import { QuoteModal } from './components/QuoteModal';

export const InstantQuoteWidget = memo(() => {
  const calculatorState = useQuoteCalculator();
  const { isOpen, openWidget, closeWidget } = calculatorState;

  return (
    <>
      {/* Floating launcher fixed to bottom-right */}
      <QuoteLauncher isOpen={isOpen} onToggle={openWidget} />

      {/* Floating / Full-screen Quote & Booking Modal */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeWidget}
        calculatorState={calculatorState}
      />
    </>
  );
});

InstantQuoteWidget.displayName = 'InstantQuoteWidget';

export default InstantQuoteWidget;
