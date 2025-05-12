
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "15996714056";
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg animate-float transition-transform duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
        <path d="M17.5 3.42a10.98 10.98 0 0 1 4.83 4.3 11 11 0 0 1-1.42 10.65 10.96 10.96 0 0 1-18.56-2.62A10.98 10.98 0 0 1 3.57 6.5L7 5l1.5 4-2 2c1 3 3.5 5.5 6.5 6.5l2-2 4 1.5-1.5 3.43Z"></path>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
