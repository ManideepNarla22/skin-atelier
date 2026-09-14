import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../data/images';
import PageHero from '../components/PageHero';
import { skinServices } from '../data/services';
import ServiceGrid from '../components/ServiceGrid';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';

const SkinServices = () => {
  const introFade = useFadeUp();
  const ctaFade = useFadeUp();

  useEffect(() => {
    document.title = 'Skin Concerns & Conditions | Skin Atelier';
  }, []);

  return (
    <div className="w-full bg-white">
      <PageHero 
        title="Skin Concerns & Conditions"
        bgImage={images.pillars.skin}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'Skin', to: '/services/skin' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div ref={introFade} className="fade-up max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-text-light leading-relaxed">
            Every treatment plan begins with a proper diagnosis. Dr. Saritha Thotakura assesses your skin and medical history before recommending a course of treatment for any of the following conditions.
          </p>
        </div>

        <ServiceGrid services={skinServices} />

        <div ref={ctaFade} className="fade-up mt-24 text-center bg-warm-gray p-12 rounded-lg">
          <h3 className="text-2xl font-heading font-medium text-text mb-6">
            Book a consultation to discuss your skin concern with Dr. Saritha Thotakura.
          </h3>
          <Button to="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinServices;
