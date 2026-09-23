import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { businessInfo } from '../data/services';
import Logo from './Logo';
import Button from './Button';

// 9 services matching the reference website — all link to /services with an anchor
const navServices = [
  { label: 'Laser Hair Removal',       anchor: '#laser-hair-removal' },
  { label: 'Acne & Scar Treatment',    anchor: '#acne-scar-treatment' },
  { label: 'Specific Skin Concerns',   anchor: '#specific-skin-concerns' },
  { label: 'Hair Loss Treatment',      anchor: '#hair-loss-treatment' },
  { label: 'Anti Ageing Treatment',    anchor: '#anti-ageing-treatment' },
  { label: 'Medical Dermatology',      anchor: '#medical-dermatology' },
  { label: 'Chemical Peels',           anchor: '#chemical-peels' },
  { label: 'Skin Pigmentation',        anchor: '#skin-pigmentation' },
  { label: 'Other Treatments',         anchor: '#other-treatments' },
];


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-border-light ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="z-50">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : 'text-text'}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : 'text-text'}`}>About Us</NavLink>
          
          {/* Services Dropdown */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center text-sm font-medium text-text hover:text-accent transition-colors cursor-pointer">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[720px] bg-white shadow-xl rounded-b-lg border-t border-border-light z-50">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-light">
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent">Our Treatments</span>
                    <Link to="/services" className="text-xs text-text-light hover:text-accent transition-colors">View All →</Link>
                  </div>
                  <ul className="grid grid-cols-3 gap-x-6 gap-y-2">
                    {navServices.map((service) => (
                      <li key={service.anchor}>
                        <Link
                          to={`/services${service.anchor}`}
                          className="text-sm text-text-light hover:text-accent transition-colors block py-1.5"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>


          <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : 'text-text'}`}>Contact Us</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button to="/contact" variant="primary">Book a Consultation</Button>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex items-center space-x-3 md:hidden">
          <Button to="/contact" variant="primary" className="text-xs px-3 py-1.5 h-auto">Book</Button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-text hover:text-primary focus:outline-none z-50 relative p-1 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay / Dropdown */}
    {mobileMenuOpen && (
      <div 
        id="mobile-navigation-menu"
        className="fixed top-20 left-0 right-0 md:hidden z-40 bg-white border-t border-border-light shadow-2xl overflow-y-auto flex flex-col justify-between animate-in fade-in slide-in-from-top-2 duration-200"
        style={{
          bottom: 'calc(4rem + env(safe-area-inset-bottom, 0px))',
        }}
      >
        <nav className="px-5 py-5 space-y-1">
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3.5 rounded-lg text-lg font-medium transition-colors border-b border-border-light/60 ${
                isActive
                  ? 'text-accent bg-accent/5 font-semibold'
                  : 'text-text hover:text-accent hover:bg-warm-gray/40'
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3.5 rounded-lg text-lg font-medium transition-colors border-b border-border-light/60 ${
                isActive
                  ? 'text-accent bg-accent/5 font-semibold'
                  : 'text-text hover:text-accent hover:bg-warm-gray/40'
              }`
            }
          >
            About Us
          </NavLink>

          {/* Services with Expandable Submenu */}
          <div className="border-b border-border-light/60">
            <div className="flex items-center justify-between">
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex-1 px-4 py-3.5 text-lg font-medium transition-colors ${
                    isActive
                      ? 'text-accent bg-accent/5 font-semibold rounded-lg'
                      : 'text-text hover:text-accent'
                  }`
                }
              >
                Services
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-3.5 text-text hover:text-accent transition-colors focus:outline-none cursor-pointer"
                aria-label="Toggle Services submenu"
                aria-expanded={mobileServicesOpen}
              >
                {mobileServicesOpen ? (
                  <ChevronUp className="w-5 h-5 text-accent" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Expandable Submenu */}
            {mobileServicesOpen && (
              <div className="ml-4 pl-3 border-l-2 border-accent/30 my-1 space-y-0.5 pb-2">
                {navServices.map((service) => (
                  <Link
                    key={service.anchor}
                    to={`/services${service.anchor}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-text-light hover:text-accent hover:bg-warm-gray/40 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}

          </div>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3.5 rounded-lg text-lg font-medium transition-colors border-b border-border-light/60 ${
                isActive
                  ? 'text-accent bg-accent/5 font-semibold'
                  : 'text-text hover:text-accent hover:bg-warm-gray/40'
              }`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Bottom Call link */}
        <div className="p-5 pt-3 pb-6 space-y-3 bg-warm-white/60 border-t border-border-light/60">
          <a 
            href="tel:+916303050820" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary/5 text-sm transition-colors"
          >
            Call Now (+91 6303050820)
          </a>
        </div>
      </div>
    )}
  </>
  );
};

export default Header;
