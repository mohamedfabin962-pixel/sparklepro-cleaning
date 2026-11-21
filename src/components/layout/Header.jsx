import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <header
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 w-full max-w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3' : 'bg-white/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-3 sm:py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between w-full min-w-0" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group min-w-0" aria-label="SparklePro – Home">
            <div className="bg-freshGreen-500 p-1.5 sm:p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">
              <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
              Sparkle<span className="text-freshGreen-500">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav - visible at lg (1024px+) to prevent tablet wrap */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                role="listitem"
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200 hover:text-freshGreen-500',
                  location.pathname === link.path ? 'text-freshGreen-500' : 'text-navy-700'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA - visible at lg (1024px+) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a
              href="tel:+18005550123"
              className="flex items-center gap-2 text-navy-900 font-bold hover:text-freshGreen-500 transition-colors text-sm"
              aria-label="Call SparklePro at 800-555-0123"
            >
              <Phone className="w-4 h-4 text-freshGreen-500" aria-hidden="true" />
              <span>(800) 555-0123</span>
            </a>
            <Link to="/quote" aria-label="Get a free quote">
              <Button size="sm">Get Free Quote</Button>
            </Link>
          </div>

          {/* Tablet & Mobile Menu Toggle (< 1024px) */}
          <div className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <a
              href="tel:+18005550123"
              className="flex-shrink-0 p-2 text-navy-900 hover:text-freshGreen-500 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1 text-sm font-bold"
              aria-label="Call SparklePro at 800-555-0123"
            >
              <Phone className="w-4 h-4 text-freshGreen-500" aria-hidden="true" />
              <span className="hidden sm:inline">(800) 555-0123</span>
            </a>
            <button
              className="flex-shrink-0 p-2 text-navy-900 rounded-lg transition-colors hover:bg-slate-100"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile & Tablet Drawer Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
        className={cn(
          'lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-64px)] transition-all duration-300 ease-in-out shadow-xl',
          isOpen ? 'max-h-screen opacity-100 py-6 sm:py-8' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        )}
      >
        <Container className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                tabIndex={isOpen ? 0 : -1}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={cn(
                  'text-lg sm:text-xl font-bold py-2 transition-colors',
                  location.pathname === link.path ? 'text-freshGreen-500' : 'text-navy-900'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <hr className="border-slate-100" />
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between">
            <a
              href="tel:+18005550123"
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center gap-2 text-navy-900 font-bold text-base sm:text-lg py-2.5 px-4 rounded-xl bg-slate-50 border border-slate-200"
              aria-label="Call SparklePro at 800-555-0123"
            >
              <Phone className="w-5 h-5 text-freshGreen-500" aria-hidden="true" />
              (800) 555-0123
            </a>
            <Link to="/quote" tabIndex={isOpen ? 0 : -1} aria-label="Get a free quote" className="flex-1">
              <Button className="w-full text-base sm:text-lg py-3.5">Get Free Quote</Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
