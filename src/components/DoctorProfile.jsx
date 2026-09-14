import { businessInfo } from '../data/services';
import images from '../data/images';
import Button from './Button';

const DoctorProfile = ({ children, className = '' }) => {
  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[3/4] relative rounded overflow-hidden shadow-lg">
              <img 
                src={images.clinic.doctor} 
                alt="Dr. Saritha Thotakura" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <span className="text-sm uppercase tracking-widest text-accent font-semibold mb-2 block">
              Lead Dermatologist
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-text mb-6">
              Dr. Saritha Thotakura
              <span className="block text-xl md:text-2xl text-gray-500 font-normal mt-2">
                MBBS, MD
              </span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 max-w-none">
              {children || (
                <>
                  <p>
                    Dr. Saritha Thotakura is a board-certified dermatologist with extensive experience in clinical, cosmetic, and surgical dermatology. She is dedicated to providing personalized, state-of-the-art care to help patients achieve healthy, beautiful skin.
                  </p>
                  <p>
                    With a deep understanding of skin biology and aesthetics, Dr. Thotakura specializes in advanced treatments for acne, pigmentation, hair loss, and anti-aging. Her patient-centric approach ensures that each treatment plan is tailored to individual needs and goals.
                  </p>
                </>
              )}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button to="/contact">Book Consultation</Button>
              <Button variant="outline" href={businessInfo.phoneTel}>
                Call Clinic (+91 6303050820)
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
