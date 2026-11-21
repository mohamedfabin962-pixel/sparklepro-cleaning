/**
 * Enquiry Submission Service for Instant Quote Widget
 * 
 * In this client-side sales demo, enquiries are stored locally with structured
 * metadata. This service provides a clear contract for future backend/CRM integration.
 */

const STORAGE_KEY = 'sparklepro_quote_enquiries';

export const enquiryService = {
  /**
   * Status indicator for the demo
   */
  isBackendConnected: false,

  /**
   * Saves an enquiry and returns confirmation payload
   */
  async submitEnquiry({ customer, selections, quote }) {
    // Simulate brief network latency for realistic feel
    await new Promise((resolve) => setTimeout(resolve, 600));

    const referenceId = `SPQ-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toISOString();

    const record = {
      referenceId,
      timestamp,
      source: 'instant_quote_widget',
      status: 'pending_confirmation',
      customer: {
        fullName: customer.fullName?.trim() || '',
        email: customer.email?.trim() || '',
        phone: customer.phone?.trim() || '',
        address: customer.address?.trim() || '',
        preferredDate: customer.preferredDate || '',
        notes: customer.notes?.trim() || '',
      },
      quote: {
        estimatedPrice: quote.estimatedPrice,
        currency: quote.currency,
        propertyType: quote.property.label,
        bedrooms: selections.bedrooms,
        bathrooms: selections.bathrooms,
        sqftTier: quote.sqft.label,
        cleaningType: quote.cleaning.label,
        frequency: quote.frequency.label,
        addons: quote.selectedAddonsList.map((a) => a.label),
        breakdown: quote.breakdown,
      },
      isDemoSubmission: true,
    };

    try {
      const existing = this.getStoredEnquiries();
      const updated = [record, ...existing].slice(0, 50); // keep last 50
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist enquiry to localStorage:', e);
    }

    return {
      success: true,
      referenceId,
      record,
    };
  },

  /**
   * Retrieves stored demo enquiries
   */
  getStoredEnquiries() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
};
