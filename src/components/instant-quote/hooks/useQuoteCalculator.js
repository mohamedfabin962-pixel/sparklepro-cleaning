import { useState, useMemo, useCallback } from 'react';
import { calculateQuote } from '../config/quoteConfig';
import { enquiryService } from '../services/enquiryService';

const INITIAL_SELECTIONS = {
  propertyType: 'house',
  bedrooms: 3,
  bathrooms: 2,
  sqftTier: '1000-1999',
  cleaningType: 'deep',
  frequency: 'biweekly',
  addons: ['fridge'],
};

const INITIAL_CUSTOMER = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  preferredDate: '',
  notes: '',
};

export function useQuoteCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState(INITIAL_SELECTIONS);
  const [customer, setCustomer] = useState(INITIAL_CUSTOMER);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [formError, setFormError] = useState(null);

  // Dynamic price calculation
  const quote = useMemo(() => {
    return calculateQuote(selections);
  }, [selections]);

  const openWidget = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeWidget = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, 7));
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= 7) {
      setStep(stepNumber);
    }
  }, []);

  const updateSelection = useCallback((key, value) => {
    setSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const toggleAddon = useCallback((addonId) => {
    setSelections((prev) => {
      const exists = prev.addons.includes(addonId);
      const updated = exists
        ? prev.addons.filter((id) => id !== addonId)
        : [...prev.addons, addonId];
      return { ...prev, addons: updated };
    });
  }, []);

  const updateCustomerField = useCallback((field, value) => {
    setCustomer((prev) => ({
      ...prev,
      [field]: value,
    }));
    setFormError(null);
  }, []);

  const submitEnquiry = useCallback(async () => {
    if (!customer.fullName || !customer.email || !customer.phone) {
      setFormError('Please fill in your name, email, and phone number.');
      return false;
    }

    setIsSubmitting(true);
    setFormError(null);

    try {
      const result = await enquiryService.submitEnquiry({
        customer,
        selections,
        quote,
      });

      setConfirmation(result);
      setStep(7); // Jump to confirmation step
      return true;
    } catch {
      setFormError('Failed to submit quote enquiry. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [customer, selections, quote]);

  const resetAll = useCallback(() => {
    setStep(1);
    setSelections(INITIAL_SELECTIONS);
    setCustomer(INITIAL_CUSTOMER);
    setConfirmation(null);
    setFormError(null);
  }, []);

  return {
    isOpen,
    step,
    selections,
    customer,
    quote,
    isSubmitting,
    confirmation,
    formError,
    openWidget,
    closeWidget,
    nextStep,
    prevStep,
    goToStep,
    updateSelection,
    toggleAddon,
    updateCustomerField,
    submitEnquiry,
    resetAll,
  };
}
