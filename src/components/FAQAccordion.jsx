import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ items = [], className = '' }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={index} 
            className="border-b border-gray-200 last:border-b-0 overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium text-text font-heading">
                {item.question}
              </span>
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                  isOpen ? 'rotate-180 text-accent' : ''
                }`} 
              />
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 text-base leading-relaxed pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
