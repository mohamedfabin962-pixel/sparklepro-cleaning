import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileStickyCTA } from './MobileStickyCTA';

export const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full max-w-full min-w-0 overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full max-w-full min-w-0 overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};
