import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileCTA from './components/MobileCTA';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-white">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-text-muted font-body text-sm">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* Redirect old sub-routes to /services — prevents broken links */}
            <Route path="/services/skin" element={<Navigate to="/services" replace />} />
            <Route path="/services/aesthetics" element={<Navigate to="/services" replace />} />
            <Route path="/services/hair" element={<Navigate to="/services" replace />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>


      <Footer />

      {/* SINGLE global WhatsApp button — the only one on the entire site */}
      <WhatsAppButton />

      {/* Mobile-only sticky CTA bar (Call + Book, NO WhatsApp) */}
      <MobileCTA />
    </div>
  );
}

export default App;
