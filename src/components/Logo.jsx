import { Link } from 'react-router-dom';

const Logo = ({ variant = 'dark', className = '', imgClassName = '' }) => {
  // variant === 'light' for dark backgrounds (Footer) -> renders white logo
  // variant === 'dark' for light backgrounds (Header) -> renders dark logo
  const filterStyle = variant === 'light' 
    ? { filter: 'brightness(0) invert(1)' } 
    : { filter: 'brightness(0)' };

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const logoSrc = `${base}assets/logo.png`;

  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="The Skin Atelier Home">
      <img
        src={logoSrc}
        alt="The Skin Atelier - Skin, Hair & Aesthetics"
        style={filterStyle}
        className={`h-12 md:h-14 w-auto object-contain transition-transform duration-200 hover:scale-105 ${imgClassName}`}
      />
    </Link>
  );
};

export default Logo;
