import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded transition-all duration-300 cursor-pointer select-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-sm',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
    'outline-white': 'border border-white text-white hover:bg-white hover:text-primary',
    white: 'bg-white text-primary hover:bg-cream hover:text-primary-dark shadow-sm hover:shadow',
    ghost: 'text-primary hover:text-primary-dark hover:bg-black/5',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  // Determine variant styling safely
  const selectedVariant = variants[variant] || variants.primary;
  const selectedSize = sizes[size] || sizes.md;
  
  const classes = `${baseStyles} ${selectedVariant} ${selectedSize} ${className}`.trim();

  const content = (
    <>
      {children}
      {icon && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
