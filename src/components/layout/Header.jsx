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

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  return (
    <header 
      role="banner"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="SparklePro – Home">
            <div className="bg-freshGreen-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300" aria-hidden="true">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-navy-900 tracking-tight">
              Sparkle<span className="text-freshGreen-500">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="tel:+18005550123" 
              className="flex items-center gap-2 text-navy-900 font-bold hover:text-freshGreen-500 transition-colors"
              aria-label="Call SparklePro at 800-555-0123"
            >
              <Phone className="w-4 h-4 text-freshGreen-500" aria-hidden="true" />
              <span>(800) 555-0123</span>
            </a>
            <Link to="/quote" aria-label="Get a free quote">
              <Button size="sm">Get Free Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-navy-900 rounded-lg transition-colors hover:bg-slate-100"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-8 h-8" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu — CSS transition instead of Framer Motion */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation menu"
        aria-hidden={!isOpen}
        className={cn(
          'md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <Container className="py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              tabIndex={isOpen ? 0 : -1}
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={cn(
                'text-xl font-bold transition-colors',
                location.pathname === link.path ? 'text-freshGreen-500' : 'text-navy-900'
              )}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-4">
            <a 
              href="tel:+18005550123" 
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center gap-3 text-navy-900 font-bold text-lg"
              aria-label="Call SparklePro at 800-555-0123"
            >
              <Phone className="w-5 h-5 text-freshGreen-500" aria-hidden="true" />
              (800) 555-0123
            </a>
            <Link to="/quote" tabIndex={isOpen ? 0 : -1} aria-label="Get a free quote">
              <Button className="w-full text-lg py-4">Get Free Quote</Button>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
