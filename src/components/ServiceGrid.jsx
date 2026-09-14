import ServiceCard from './ServiceCard';

const ServiceGrid = ({ services = [], className = '' }) => {
  if (!services || services.length === 0) {
    return <p className="text-gray-500 text-center py-8">No services found.</p>;
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${className}`}>
      {services.map((service, index) => (
        <ServiceCard key={service.id || index} service={service} />
      ))}
    </div>
  );
};

export default ServiceGrid;
