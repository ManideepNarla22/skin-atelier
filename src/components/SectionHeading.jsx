const SectionHeading = ({
  title,
  children,
  subtitle,
  description,
  align = 'center',
  className = ''
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  const headingText = title || children;

  return (
    <div className={`mb-10 ${alignments[align]} ${className} ${align === 'center' ? 'max-w-3xl' : ''}`}>
      {subtitle && (
        <span className="block text-sm uppercase tracking-widest text-primary font-semibold mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
        {headingText}
      </h2>
      {description && (
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
