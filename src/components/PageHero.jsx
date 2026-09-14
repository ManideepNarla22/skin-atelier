import Breadcrumbs from './Breadcrumbs';

const PageHero = ({
  title,
  subtitle,
  bgImage,
  image, // alias for bgImage
  breadcrumbs = [],
  className = ''
}) => {
  const backgroundImage = bgImage || image;

  // Support both array and string breadcrumbs
  const breadcrumbItems = typeof breadcrumbs === 'string'
    ? breadcrumbs.split('>').map((item, idx, arr) => {
        const label = item.trim();
        if (idx === arr.length - 1) return { label };
        if (label === 'Home') return { label, to: '/' };
        if (label === 'Services') return { label, to: '/services' };
        if (label === 'About') return { label, to: '/about' };
        if (label === 'Contact') return { label, to: '/contact' };
        return { label };
      })
    : breadcrumbs;

  return (
    <div 
      className={`relative w-full h-[50vh] md:h-[60vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {breadcrumbItems.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        )}
        
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4 drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
