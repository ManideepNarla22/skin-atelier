import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../data/images';
import PageHero from '../components/PageHero';
import { aestheticServices } from '../data/services';
import ServiceGrid from '../components/ServiceGrid';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';

const AestheticServices = () => {
  const introFade = useFadeUp();
  const ctaFade = useFadeUp();

  useEffect(() => {
    document.title = 'Aesthetic Treatments | Skin Atelier';
  }, []);

  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Aesthetic Treatments"
        bgImage={images.pillars.aesthetics}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Aesthetics', to: '/services/aesthetics' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div ref={introFade} className="fade-up max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            Our aesthetic treatments are performed with the same clinical care as our dermatology services, so results are effective and safe.
          </p>
        </div>

        <ServiceGrid services={aestheticServices} />

        <div ref={ctaFade} className="fade-up mt-24 text-center bg-warm-gray p-12 rounded-lg">
          <h3 className="text-2xl font-heading font-medium text-text mb-6">
            Book a consultation to explore the right aesthetic treatment for you.
          </h3>
          <Button to="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AestheticServices;
