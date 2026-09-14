import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, className = '' }) => {
  return (
    <div className={`group flex flex-col bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-xl font-medium text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {service.description || service.shortDescription}
        </p>
        {service.slug && (
          <Link 
            to={`/services/${service.slug}`} 
            className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto"
          >
            Explore <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
