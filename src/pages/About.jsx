import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';
import images from '../data/images';
import { businessInfo } from '../data/services';

const About = () => {
  useEffect(() => {
    document.title = 'About Skin Atelier | Dr. Saritha Thotakura';
  }, []);

  const aboutRef = useFadeUp();
  const doctorRef = useFadeUp();
  const approachRef = useFadeUp();
  const approachGridRef = useFadeUp();
  const clinicRef = useFadeUp();
  const galleryRef = useFadeUp();
  const ctaRef = useFadeUp();

  return (
    <div className="w-full">
      <PageHero 
        image={images.hero.about}
        title="About Skin Atelier"
        breadcrumbs="Home > About"
      />

      {/* About Section */}
      <section ref={aboutRef} className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto fade-up">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 fade-up-child delay-100">
            <img 
              src={images.about} 
              alt="About Skin Atelier" 
              className="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6 fade-up-child">
            <div className="text-gray-700 space-y-6 text-lg">
              <p>
                Skin Atelier is a dermatology and aesthetic clinic dedicated to providing personalised care for skin, hair, and aesthetic concerns. Led by Dr. Saritha Thotakura, MBBS, MD, the clinic focuses on understanding each individual's concerns and offering personalised treatment plans using modern dermatological and aesthetic approaches.
              </p>
              <p>
                At Skin Atelier, the goal is to help patients achieve healthy, confident-looking skin through expert guidance, personalised care, and a comfortable treatment experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section ref={doctorRef} className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto fade-up">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 fade-up-child">
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Dr. Saritha Thotakura, MBBS, MD
            </h2>
            <div className="text-gray-700 space-y-6 text-lg">
              <p>
                Dr. Saritha Thotakura leads Skin Atelier with a patient-first approach to dermatology and aesthetic medicine. She takes the time to understand each patient's history and goals before recommending a treatment path, combining clinical expertise with a genuine focus on comfort and long-term skin health.
              </p>
            </div>
          </div>
          <div className="fade-up-child delay-100">
            <img 
              src={images.clinic.doctor} 
              alt="Dr. Saritha Thotakura, MBBS, MD" 
              className="w-full h-auto object-cover rounded-sm aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div ref={approachRef} className="text-center mb-16 fade-up">
          <SectionHeading title="Our Approach" />
        </div>
        <div ref={approachGridRef} className="grid md:grid-cols-2 gap-x-12 gap-y-16 fade-up">
          {/* Step 1 */}
          <div className="flex flex-col space-y-4 fade-up-child">
            <span className="font-heading text-5xl text-accent/30">01</span>
            <p className="text-gray-800 text-lg md:text-xl">
              A thorough consultation before any treatment plan is proposed
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col space-y-4 fade-up-child delay-100">
            <span className="font-heading text-5xl text-accent/30">02</span>
            <p className="text-gray-800 text-lg md:text-xl">
              Treatment plans personalised to your skin type, condition and goals
            </p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col space-y-4 fade-up-child delay-150">
            <span className="font-heading text-5xl text-accent/30">03</span>
            <p className="text-gray-800 text-lg md:text-xl">
              A blend of medical dermatology and modern aesthetic technology
            </p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col space-y-4 fade-up-child delay-200">
            <span className="font-heading text-5xl text-accent/30">04</span>
            <p className="text-gray-800 text-lg md:text-xl">
              Clear communication about expected results, timelines and aftercare
            </p>
          </div>
        </div>
      </section>

      {/* Our Clinic Section */}
      <section className="py-20 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <div ref={clinicRef} className="text-center mb-16 fade-up">
          <SectionHeading
            title="Our Clinic"
            description="A calm, thoughtfully designed space for personalised skin, hair and aesthetic care."
          />
        </div>

        {/* Editorial-style gallery grid */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 fade-up">
          {/* Row 1: Large featured + tall side */}
          <div className="sm:col-span-2 lg:col-span-2 fade-up-child img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[0].src}
              alt={images.clinicGallery[0].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover block"
            />
          </div>
          <div className="fade-up-child delay-100 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[1].src}
              alt={images.clinicGallery[1].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover block"
            />
          </div>

          {/* Row 2: Three equal columns */}
          <div className="fade-up-child delay-150 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[2].src}
              alt={images.clinicGallery[2].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-56 sm:h-64 md:h-72 object-cover block"
            />
          </div>
          <div className="fade-up-child delay-200 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[3].src}
              alt={images.clinicGallery[3].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-56 sm:h-64 md:h-72 object-cover block"
            />
          </div>
          <div className="fade-up-child delay-250 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[4].src}
              alt={images.clinicGallery[4].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-56 sm:h-64 md:h-72 object-cover block"
            />
          </div>

          {/* Row 3: Side + large featured */}
          <div className="fade-up-child delay-300 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[5].src}
              alt={images.clinicGallery[5].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover block"
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-2 fade-up-child delay-350 img-reveal rounded-sm overflow-hidden bg-warm-gray">
            <img
              src={images.clinicGallery[6].src}
              alt={images.clinicGallery[6].alt}
              width={1800}
              height={2400}
              loading="lazy"
              decoding="async"
              className="w-full h-64 sm:h-80 md:h-[420px] object-cover block"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-primary text-white text-center px-6 fade-up">
        <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl">Ready to begin?</h2>
          <Button to="/contact" variant="outline-white" size="lg" className="mt-4" icon={<ArrowRight className="w-5 h-5" />}>
            Book a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
