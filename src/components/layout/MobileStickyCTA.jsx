import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

export const MobileStickyCTA = memo(() => {
  return (
    <div
      role="complementary"
      aria-label="Quick action buttons"
      className="fixed bottom-0 left-0 right-0 z-[60] md:hidden glass p-4 border-t border-slate-200 translate-y-0 transition-transform"
    >
      <div className="flex gap-4">
        <a 
          href="tel:+18005550123" 
          aria-label="Call SparklePro at 800-555-0123"
          className="flex-1 flex items-center justify-center gap-2 bg-navy-900 text-white rounded-2xl py-4 font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call Now
        </a>
        <Link 
          to="/quote" 
          aria-label="Get a free cleaning quote"
          className="flex-1 flex items-center justify-center gap-2 bg-freshGreen-500 text-white rounded-2xl py-4 font-bold active:scale-95 transition-transform"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          Get Quote
        </Link>
      </div>
    </div>
  );
});

MobileStickyCTA.displayName = 'MobileStickyCTA';
