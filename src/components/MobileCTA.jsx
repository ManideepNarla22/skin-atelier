import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '../data/services';

const MobileCTA = () => {
  const phoneUrl = businessInfo.phoneTel;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] block md:hidden pb-safe">
      <div className="flex w-full h-16">
        <a 
          href={phoneUrl}
          className="flex-1 flex flex-col items-center justify-center text-primary hover:bg-warm-gray/50 active:bg-warm-gray transition-colors border-r border-border"
        >
          <Phone size={20} className="mb-1 text-primary" />
          <span className="text-xs font-medium uppercase tracking-wider">Call</span>
        </a>
        <Link 
          to="/contact"
          className="flex-1 flex flex-col items-center justify-center text-white bg-accent hover:bg-accent-dark active:bg-accent-dark transition-colors"
        >
          <Calendar size={20} className="mb-1" />
          <span className="text-xs font-medium uppercase tracking-wider">Book</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileCTA;
