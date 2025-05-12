
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const phoneNumber = "15996714056";
  const facebookUrl = "https://www.facebook.com/edicarlos.chavier/";
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  
  return (
    <section id="contato" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rodeo-tan mb-4">Entre em Contato</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Faça seu evento inesquecível com a locução de Lolo Xavier
          </p>
          <div className="w-24 h-1 bg-rodeo-tan mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white/95 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-rodeo-darkBrown">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rodeo-tan rounded-full p-3 text-rodeo-darkBrown mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-rodeo-darkBrown">Telefone</h4>
                  <p className="text-gray-700">(15) 99671-4056</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rodeo-tan rounded-full p-3 text-rodeo-darkBrown mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-rodeo-darkBrown">Facebook</h4>
                  <a 
                    href={facebookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-rodeo-blue hover:underline"
                  >
                    facebook.com/edicarlos.chavier
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-rodeo-tan rounded-full p-3 text-rodeo-darkBrown mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-rodeo-darkBrown">Localização</h4>
                  <p className="text-gray-700">Alambari, São Paulo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white w-full py-6 text-lg flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                  <path d="M17.5 3.42a10.98 10.98 0 0 1 4.83 4.3 11 11 0 0 1-1.42 10.65 10.96 10.96 0 0 1-18.56-2.62A10.98 10.98 0 0 1 3.57 6.5L7 5l1.5 4-2 2c1 3 3.5 5.5 6.5 6.5l2-2 4 1.5-1.5 3.43Z"></path>
                </svg>
                Conversar pelo WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img
              src="/lovable-uploads/775c0d8d-9ca5-4069-adbe-8653511e4829.png"
              alt="Lolo Xavier - Locutor de Rodeios"
              className="rounded-lg shadow-xl border-4 border-rodeo-tan transform -rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
