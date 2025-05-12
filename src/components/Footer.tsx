
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-rodeo-darkBrown text-white py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-rodeo-tan">Lolo Xavier</h2>
            <p className="text-white/70">Locutor Profissional de Rodeios</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/edicarlos.chavier/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rodeo-tan transition-colors"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://wa.me/15996714056" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rodeo-tan transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                <path d="M17.5 3.42a10.98 10.98 0 0 1 4.83 4.3 11 11 0 0 1-1.42 10.65 10.96 10.96 0 0 1-18.56-2.62A10.98 10.98 0 0 1 3.57 6.5L7 5l1.5 4-2 2c1 3 3.5 5.5 6.5 6.5l2-2 4 1.5-1.5 3.43Z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-white/60 text-sm">
          <p>&copy; {currentYear} Lolo Xavier - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
