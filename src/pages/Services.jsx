import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';
import images from '../data/images';

const services = [
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal Treatment',
    description:
      'Experience advanced laser hair removal using triple-wavelength precision technology to permanently reduce unwanted hair on the face and body. Our treatments are calibrated for all skin tones and hair types, delivering long-lasting smoothness with minimal discomfort. Say goodbye to waxing, threading and shaving — for good.',
    image: images.services.laserHairRemoval,
    alt: 'Laser Hair Removal Treatment',
  },
  {
    id: 'acne-scar-treatment',
    title: 'Acne & Scar Treatment',
    description:
      'After a thorough consultation and examination, our doctor determines the most effective course of action to treat active acne and minimise the scars it leaves behind. We use a combination of micro-needling, radiofrequency, laser and medical therapies to achieve significant improvement in skin clarity and texture.',
    image: images.services.acneScar,
    alt: 'Acne and Scar Treatment',
  },
  {
    id: 'specific-skin-concerns',
    title: 'Specific Skin Concerns',
    description:
      'Targeted treatments for your individual skin concerns — from brightening sun-damaged skin and clearing blemishes to treating dark circles and uneven tone. Our dermatologist tailors a personalised treatment plan that may include chemical peels, hydrafacial, skin brightening therapies and IV treatments to restore a radiant, natural glow.',
    image: images.services.specificSkin,
    alt: 'Specific Skin Concerns',
  },
  {
    id: 'hair-loss-treatment',
    title: 'Hair Loss Treatment',
    description:
      'We identify the root causes of your hair loss through detailed clinical evaluation and create a personalised treatment plan. From PRP, GFC and mesotherapy to medical therapy and laser-assisted regrowth, our comprehensive approach supports hair density and scalp health at every stage of hair loss.',
    image: images.services.hairLoss,
    alt: 'Hair Loss Treatment',
  },
  {
    id: 'anti-ageing-treatment',
    title: 'Anti Ageing Treatment',
    description:
      'Turn back the clock with our range of scientifically-proven anti-ageing treatments. From Botox and dermal fillers that soften lines and restore volume, to HIFU skin tightening and skin boosters that hydrate from within — every treatment is performed by our experienced doctor for safe, natural-looking results.',
    image: images.services.antiAgeing,
    alt: 'Anti Ageing Treatment',
  },
  {
    id: 'medical-dermatology',
    title: 'Medical Dermatology',
    description:
      'Expert medical management of chronic and complex skin conditions including psoriasis, vitiligo, eczema, fungal infections and more. Our doctor provides evidence-based treatment plans to manage symptoms, reduce flare-ups and improve quality of life — with compassionate, long-term care at every stage.',
    image: images.services.medical,
    alt: 'Medical Dermatology',
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels Treatment',
    description:
      'Unlock radiant, youthful skin with our range of medical-grade chemical peels. Precisely formulated for your skin type and concern, our peels exfoliate dead cells, stimulate collagen, and improve tone and texture. Whether targeting pigmentation, acne scars or fine lines, chemical peels deliver visible results with minimal downtime.',
    image: images.services.chemicalPeels,
    alt: 'Chemical Peels Treatment',
  },
  {
    id: 'skin-pigmentation',
    title: 'Skin Pigmentation Treatment',
    description:
      'Struggling with melasma, sunspots, post-inflammatory marks or freckles? Our advanced pigmentation treatments use laser therapy, chemical peels and targeted topical protocols to safely address all types of hyperpigmentation — helping you achieve a clearer, more even complexion.',
    image: images.services.skinPigmentation,
    alt: 'Skin Pigmentation Treatment',
  },
  {
    id: 'other-treatments',
    title: 'Other Treatments',
    description:
      'Beyond our core services, we offer a wide range of specialist treatments including permanent tattoo removal, medi-facials, mole and wart removal, stretch mark treatment, DPN/skin tag removal and ear lobe repair. Our clinic is equipped with the latest technology to deliver precise, comfortable results for every concern.',
    image: images.services.otherTreatments,
    alt: 'Other Treatments',
  },
];

// Each service section gets its own fade ref
const ServiceSection = ({ service, index, fadeRef }) => {
  const isEven = index % 2 === 1;

  return (
    <section
      key={service.id}
      id={service.id}
      ref={fadeRef}
      className="fade-up w-full"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${
          isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-10 lg:gap-16 xl:gap-24 py-16 md:py-20 lg:py-24`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-sm">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-[300px] sm:h-[400px] lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-5">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Treatment {String(index + 1).padStart(2, '0')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] font-light leading-tight text-text">
            {service.title}
          </h2>
          <div className="w-12 h-0.5 bg-accent" />
          <p className="text-base md:text-lg text-text-light leading-relaxed">
            {service.description}
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Divider — all sections except last */}
      {index < services.length - 1 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-border-light" />
        </div>
      )}
    </section>
  );
};

const Services = () => {
  const fade0 = useFadeUp();
  const fade1 = useFadeUp();
  const fade2 = useFadeUp();
  const fade3 = useFadeUp();
  const fade4 = useFadeUp();
  const fade5 = useFadeUp();
  const fade6 = useFadeUp();
  const fade7 = useFadeUp();
  const fade8 = useFadeUp();
  const ctaFade = useFadeUp();

  const fadeRefs = [fade0, fade1, fade2, fade3, fade4, fade5, fade6, fade7, fade8];

  useEffect(() => {
    document.title = 'Skin, Hair & Cosmetic Treatments | Skin Atelier';
  }, []);

  return (
    <div className="w-full bg-white">
      <PageHero
        title="Our Services"
        subtitle="Expert skin, hair and cosmetic treatments — personalised to you by Dr. Saritha Thotakura, MBBS, MD."
        bgImage={images.hero.services}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
        ]}
      />

      {/* Service Sections */}
      <div className="w-full pt-8 md:pt-12">
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
            fadeRef={fadeRefs[index]}
          />
        ))}
      </div>

      {/* Final CTA Banner */}
      <div ref={ctaFade} className="fade-up bg-warm-gray py-20 md:py-28 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="font-heading text-3xl md:text-4xl font-light text-text">
            Not sure where to start?
          </h3>
          <p className="text-text-light text-lg leading-relaxed">
            Book a consultation with Dr. Saritha Thotakura and we'll assess your
            concerns and recommend the right treatment plan for you.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Book a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;

