import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items = [], className = '' }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className="text-white/60 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  {item.to ? (
                    <Link 
                      to={item.to} 
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{item.label}</span>
                  )}
                  <span className="mx-2 text-white/40">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
