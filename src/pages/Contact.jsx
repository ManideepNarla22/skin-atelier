import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ConsultationForm from '../components/ConsultationForm';
import Button from '../components/Button';
import useFadeUp from '../hooks/useFadeUp';
import images from '../data/images';
import { businessInfo } from '../data/services';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact Skin Atelier | Nizampet, Hyderabad';
  }, []);

  const formRef = useFadeUp();
  const infoRef = useFadeUp();
  const mapRef = useFadeUp();

  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHero
        image={images.hero.contact}
        title="Get in Touch"
        subtitle="We look forward to hearing from you. Book a consultation with Dr. Saritha Thotakura through the form below, or reach out directly."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Consultation Form */}
          <div ref={formRef} className="fade-up">
            <SectionHeading title="Send a Message" align="left" className="mb-8" />
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-200">
              <ConsultationForm />
            </div>
          </div>

          {/* Right Column - Clinic Details */}
          <div ref={infoRef} className="fade-up">
            <SectionHeading title="Contact Information" align="left" className="mb-8" />
            
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-start space-x-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-stone-50 p-3 rounded-full shrink-0 border border-stone-100">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Address</h3>
                  <p className="text-stone-600 leading-relaxed">
                    4th Floor, 1-2-39/10, above Aakruti,200 meters from JNTU Metro Station,<br />
                    Nizampet Main Road, Hyderabad<br />
                    
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-start space-x-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-stone-50 p-3 rounded-full shrink-0 border border-stone-100">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Phone</h3>
                  <a href={businessInfo.phoneTel} className="text-stone-600 hover:text-accent transition-colors block">
                    +91 6303050820
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-start space-x-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-stone-50 p-3 rounded-full shrink-0 border border-stone-100">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Email</h3>
                  <a href="mailto:skinatelier66@gmail.com" className="text-stone-600 hover:text-accent transition-colors block">
                    skinatelier66@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex items-start space-x-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="bg-stone-50 p-3 rounded-full shrink-0 border border-stone-100">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-stone-900 mb-2">Working Hours</h3>
                  <p className="text-stone-600">
                    <span className="block mb-1">Monday to Saturday : 9am – 8pm</span>
                    <span className="block text-stone-500 text-sm">Sunday : 10am - 3pm</span>
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col space-y-4 transition-transform hover:-translate-y-1 duration-300">
                <h3 className="font-serif text-xl text-stone-900">Follow Us</h3>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://www.instagram.com/theskinatelier_official/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-stone-600 hover:text-accent transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    Instagram: @theskinatelier_official
                  </a>
                  <a 
                    href="https://www.facebook.com/SkinAtelierHyd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-stone-600 hover:text-accent transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    Facebook: Skin Atelier
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Find Us Section */}
      <section ref={mapRef} className="py-16 md:py-24 bg-white fade-up border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading title="Find Us" align="center" className="mb-12" />
          
          <div className="relative max-w-4xl mx-auto bg-stone-100 rounded-3xl border border-stone-200 overflow-hidden min-h-[450px] flex flex-col items-center justify-center p-8 shadow-inner">
            {/* Map styling background pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#78716c_1px,transparent_1px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl text-center max-w-md w-full border border-stone-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-50 border border-stone-100 mb-6 shadow-sm">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Skin Atelier</h3>
              <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                4th Floor, 1-2-39/10, above Aakruti,200 meters from JNTU Metro Station,<br />
                Nizampet Main Road, Hyderabad<br />
                
              </p>
              
              <Button 
                href="https://maps.app.goo.gl/4PsiUq7wknMZXEqw7"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full flex justify-center py-3 text-lg"
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
