import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Button from './Button';
import SectionHeading from './SectionHeading';

const ConsultationForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    concern: '',
    date: '',
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    
    if (cleanPhone.length < 10) {
      alert("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        concern: '',
        date: '',
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 2000);
  };

  return (
    <div className={`bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 shadow-sm rounded-sm border border-gray-100">
        <SectionHeading 
          title="Request a Consultation" 
          subtitle="Book an Appointment"
          align="center"
          className="mb-8"
        />

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-medium text-gray-900 mb-2">Thank You</h3>
            <p className="text-gray-600">Your consultation request has been received. Our team will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-accent focus:border-accent outline-none transition-colors"
                placeholder="Name"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-accent focus:border-accent outline-none transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">Primary Concern</label>
              <select
                id="concern"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
              >
                <option value="" disabled>Select an option</option>
                <option value="Skin">Skin Treatment</option>
                <option value="Aesthetics">Aesthetics</option>
                <option value="Hair">Hair Loss / Treatment</option>
                <option value="Other">Other Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-accent focus:border-accent outline-none transition-colors"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full justify-center" 
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Processing...
                </>
              ) : (
                'Book Now'
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationForm;
