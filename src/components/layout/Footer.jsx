import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Globe, Share2, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-12 sm:pt-16 pb-28 md:pb-12" role="contentinfo" aria-label="Site footer">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2" aria-label="SparklePro – Home">
              <div className="bg-freshGreen-500 p-2 rounded-xl" aria-hidden="true">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Sparkle<span className="text-freshGreen-500">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Premium residential and commercial cleaning services you can trust. Fully insured, background checked, and 100% satisfaction guaranteed.
            </p>
            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <a href="#" role="listitem" aria-label="Visit our website" className="bg-navy-800 p-3 rounded-full hover:bg-freshGreen-500 transition-colors">
                <Globe className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" role="listitem" aria-label="Share on social media" className="bg-navy-800 p-3 rounded-full hover:bg-freshGreen-500 transition-colors">
                <Share2 className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" role="listitem" aria-label="Chat with us" className="bg-navy-800 p-3 rounded-full hover:bg-freshGreen-500 transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-slate-400 hover:text-freshGreen-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Our Services</Link></li>
              <li><Link to="/reviews" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Customer Reviews</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/quote" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Get a Quote</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services">
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">House Cleaning</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Deep Cleaning</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Office Cleaning</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Move In/Out</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-freshGreen-500 transition-colors">Airbnb Cleaning</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-freshGreen-500 flex-shrink-0 mt-1" aria-hidden="true" />
                <address className="text-slate-400 not-italic">123 Cleaning St, Suite 100<br />Miami, FL 33101</address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-freshGreen-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+18005550123" className="text-slate-400 hover:text-freshGreen-500" aria-label="Call us at 800-555-0123">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-freshGreen-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@sparklepro.com" className="text-slate-400 hover:text-freshGreen-500" aria-label="Email us at info@sparklepro.com">info@sparklepro.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-navy-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {currentYear} SparklePro Cleaning Services. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-freshGreen-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-freshGreen-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';
