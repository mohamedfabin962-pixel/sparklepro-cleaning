import { memo } from 'react';
import { User, Mail, Phone, MapPin, Calendar, FileText, Send, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '../../../ui/Button';

export const StepBookingForm = memo(({
  customer,
  quote,
  updateCustomerField,
  submitEnquiry,
  isSubmitting,
  formError,
}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEnquiry();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Sticky Quote Banner */}
      <div className="bg-freshGreen-50 border border-freshGreen-200 rounded-2xl p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-freshGreen-500 text-white p-1.5 rounded-lg">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-freshGreen-900 block leading-tight">
              Estimated Quote
            </span>
            <span className="text-xs text-freshGreen-700 block truncate max-w-[200px]">
              {quote.cleaning.label} • {quote.property.label}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-lg font-black text-navy-900 block leading-tight">
            {quote.currency}{quote.estimatedPrice}
          </span>
          <span className="text-[10px] text-slate-500 block">
            {quote.frequency.label}
          </span>
        </div>
      </div>

      {formError && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
          <span>{formError}</span>
        </div>
      )}

      {/* Inputs */}
      <div className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-navy-900 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              placeholder="e.g. Sarah Johnson"
              value={customer.fullName}
              onChange={(e) => updateCustomerField('fullName', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Email & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-navy-900 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="sarah@example.com"
                value={customer.email}
                onChange={(e) => updateCustomerField('email', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                required
                placeholder="(305) 555-0123"
                value={customer.phone}
                onChange={(e) => updateCustomerField('phone', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-bold text-navy-900 mb-1">
            Property Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              placeholder="123 Ocean Drive, Apt 4B, Miami, FL"
              value={customer.address}
              onChange={(e) => updateCustomerField('address', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all placeholder:text-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-bold text-navy-900 mb-1">
            Preferred Cleaning Date
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="date"
              min={minDateStr}
              value={customer.preferredDate}
              onChange={(e) => updateCustomerField('preferredDate', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all font-medium"
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-xs font-bold text-navy-900 mb-1">
            Special Instructions / Entry Notes <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <textarea
              rows={2}
              placeholder="e.g. Gate code is #1234, friendly dog in backyard, focus on kitchen floor..."
              value={customer.notes}
              onChange={(e) => updateCustomerField('notes', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:border-freshGreen-500 focus:ring-1 focus:ring-freshGreen-500 outline-none transition-all placeholder:text-slate-400 font-medium resize-none"
            />
          </div>
        </div>
      </div>

      <div className="pt-2 space-y-2">
        <Button
          type="submit"
          size="lg"
          isLoading={isSubmitting}
          className="w-full py-3.5 text-base flex items-center justify-center gap-2 shadow-lg shadow-freshGreen-500/20"
        >
          Submit Booking Request
          <Send className="w-4 h-4" />
        </Button>

        <p className="text-[11px] text-center text-slate-400">
          No payment is taken now. Our booking team will contact you to confirm the exact arrival window.
        </p>
      </div>
    </form>
  );
});

StepBookingForm.displayName = 'StepBookingForm';
