import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream text-text border-t border-border pt-16 pb-8 mb-16 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Logo imgClassName="h-16 md:h-20 w-auto" />
            <p className="text-text-light text-sm leading-relaxed">
              Personalised dermatology and aesthetic care.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/theskinatelier_official/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/SkinAtelierHyd/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-text-light hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-text-light hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-text-light hover:text-accent transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-text-light hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Treatments */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-6">Treatments</h3>
            <ul className="space-y-4">
              <li><Link to="/services#laser-hair-removal" className="text-text-light hover:text-accent transition-colors text-sm">Laser Hair Removal</Link></li>
              <li><Link to="/services#acne-scar-treatment" className="text-text-light hover:text-accent transition-colors text-sm">Acne & Scar Treatment</Link></li>
              <li><Link to="/services#hair-loss-treatment" className="text-text-light hover:text-accent transition-colors text-sm">Hair Loss Treatment</Link></li>
              <li><Link to="/services#anti-ageing-treatment" className="text-text-light hover:text-accent transition-colors text-sm">Anti Ageing Treatment</Link></li>
              <li><Link to="/services#chemical-peels" className="text-text-light hover:text-accent transition-colors text-sm">Chemical Peels</Link></li>
              <li><Link to="/services#skin-pigmentation" className="text-text-light hover:text-accent transition-colors text-sm">Skin Pigmentation</Link></li>
            </ul>
          </div>


          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-primary mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <a href="tel:+916303050820" className="text-text-light hover:text-accent transition-colors text-sm">
                  +91 6303050820
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:skinatelier66@gmail.com" className="text-text-light hover:text-accent transition-colors text-sm">
                  skinatelier66@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-light text-sm leading-relaxed">
                  4th Floor, 1-2-39/10, above Aakruti,20 meters from JNTU Metro Station,Nizampet Main Road, Hyderabad<br />
                  
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-text-light text-sm leading-relaxed">
                  <p>9am – 8pm</p>
                  <p>Sunday Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 mt-8">
          <p className="text-center text-text-muted text-sm">
            &copy; {currentYear} Skin Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
