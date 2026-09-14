import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../data/images';
import PageHero from '../components/PageHero';
import { hairServices } from '../data/services';
import ServiceGrid from '../components/ServiceGrid';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';

const HairServices = () => {
  const introFade = useFadeUp();
  const ctaFade = useFadeUp();

  useEffect(() => {
    document.title = 'Hair & Scalp Treatments | Skin Atelier';
  }, []);

  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Hair & Scalp Treatments"
        bgImage={images.pillars.hair}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Hair', to: '/services/hair' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div ref={introFade} className="fade-up max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            Hair and scalp concerns are evaluated properly before treatment, since the right approach depends on the underlying cause.
          </p>
        </div>

        <ServiceGrid services={hairServices} />

        <div ref={ctaFade} className="fade-up mt-24 text-center bg-warm-gray p-12 rounded-lg">
          <h3 className="text-2xl font-heading font-medium text-text mb-6">
            Book a consultation to address your hair or scalp concern.
          </h3>
          <Button to="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HairServices;
