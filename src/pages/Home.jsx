import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ClipboardList, Sparkles, Heart, MapPin, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ConsultationForm from '../components/ConsultationForm';
import FAQAccordion from '../components/FAQAccordion';
import useFadeUp from '../hooks/useFadeUp';
import images from '../data/images';
import { faqs, businessInfo } from '../data/services';

const Home = () => {
  useEffect(() => {
    document.title = 'Skin Atelier | Dermatology & Aesthetic Clinic in Nizampet, Hyderabad';
  }, []);

  const welcomeRef = useFadeUp();
  const pillarRef1 = useFadeUp();
  const pillarRef2 = useFadeUp();
  const pillarRef3 = useFadeUp();
  const whyRef = useFadeUp();
  const formRef = useFadeUp();
  const faqRef = useFadeUp();

  return (
    <div className="w-full">
      {/* 2. HERO Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${images.hero?.home || ''})` }}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        
        <div className="relative z-20 container mx-auto px-4 md:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Your Skin, Understood.
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Personalised dermatology and aesthetic care in Nizampet, Hyderabad — led by Dr. Saritha Thotakura, MBBS, MD.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button to="/contact" variant="outline-white" className="min-w-[220px]">
                Book a Consultation
              </Button>
              <Button to="/services" variant="outline-white" className="min-w-[220px]">
                Explore Treatments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WELCOME Section */}
      <section ref={welcomeRef} className="py-20 md:py-28 bg-white fade-up">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 overflow-hidden group">
              <img 
                src={images.welcome} 
                alt="Welcome to Skin Atelier" 
                className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <SectionHeading align="left">Welcome to Skin Atelier</SectionHeading>
              <div className="text-gray-600 space-y-4 text-lg leading-relaxed font-light">
                <p>
                  At Skin Atelier, every treatment plan starts with listening. Led by Dr. Saritha Thotakura, MBBS, MD, our clinic combines medical dermatology with modern aesthetic care to address your skin, hair, and confidence — with a plan that's built around you, not a one-size-fits-all menu.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/about">
                  <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                    More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE PILLARS Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-24">
          
          {/* Pillar 1: Skin */}
          <div ref={pillarRef1} className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 fade-up">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden group">
              <img 
                src={images.pillars?.skin} 
                alt="Skin Concerns & Conditions" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">SKIN CONCERNS & CONDITIONS</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                From acne and pigmentation to eczema, psoriasis and vitiligo, we diagnose and manage skin conditions with a medical, evidence-based approach.
              </p>
              <Link to="/services/skin" className="inline-flex items-center text-accent font-medium border-b border-accent hover:text-primary hover:border-primary transition-colors pb-1">
                View Treatments <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Aesthetics */}
          <div ref={pillarRef2} className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16 fade-up">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden group">
              <img 
                src={images.pillars?.aesthetics} 
                alt="Aesthetics" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">AESTHETICS</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Chemical peels, medi-facials, injectables and laser treatments designed to refresh, smooth and rejuvenate — administered by trained medical professionals.
              </p>
              <Link to="/services/aesthetics" className="inline-flex items-center text-accent font-medium border-b border-accent hover:text-primary hover:border-primary transition-colors pb-1">
                View Treatments <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Hair */}
          <div ref={pillarRef3} className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 fade-up">
            <div className="w-full md:w-1/2 h-[450px] overflow-hidden group">
              <img 
                src={images.pillars?.hair} 
                alt="Hair" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl text-primary font-light">HAIR</h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Hair fall evaluation, PRP, GFC and scalp treatments to identify the root cause of hair and scalp concerns and treat them accordingly.
              </p>
              <Link to="/services/hair" className="inline-flex items-center text-accent font-medium border-b border-accent hover:text-primary hover:border-primary transition-colors pb-1">
                View Treatments <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY SKIN ATELIER Section */}
      <section ref={whyRef} className="py-20 md:py-28 bg-warm-gray fade-up">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <SectionHeading>Why Skin Atelier</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 mt-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm mb-2">
                <Stethoscope className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-light text-sm md:text-base px-2">
                Doctor-led care from Dr. Saritha Thotakura, MBBS, MD
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm mb-2">
                <ClipboardList className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-light text-sm md:text-base px-2">
                Personalised treatment plans, not off-the-shelf packages
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm mb-2">
                <Sparkles className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-light text-sm md:text-base px-2">
                Modern dermatological and aesthetic technology
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm mb-2">
                <Heart className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-light text-sm md:text-base px-2">
                A calm, comfortable clinic experience
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm mb-2">
                <MapPin className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-light text-sm md:text-base px-2">
                Conveniently located on Nizampet main road, Hyderabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION FORM Section */}
      <section ref={formRef} className="py-20 md:py-28 bg-white fade-up">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading>Book a Consultation</SectionHeading>
          <div className="mt-12 bg-cream rounded-sm p-6 md:p-10 shadow-sm border border-gray-100">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section ref={faqRef} className="py-20 md:py-28 bg-cream fade-up">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
