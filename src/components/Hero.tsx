
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center relative z-10 px-4 md:px-6 pt-12">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-rodeo-tan mb-4">
            Lolo Xavier
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-3">
            Locutor de Rodeio Profissional
          </p>
          <div className="w-24 h-1 bg-rodeo-tan mb-6 mx-auto md:mx-0"></div>
          <p className="text-xl text-white/90 mb-8 max-w-md mx-auto md:mx-0">
            A voz que emociona e agita as arenas de rodeio do Brasil. Mais de 15 anos de experiência narrando os maiores eventos da região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              className="bg-rodeo-tan hover:bg-rodeo-tan/90 text-rodeo-darkBrown text-lg px-6 py-6 font-bold"
              onClick={() => {
                const contactSection = document.getElementById('contato');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contrate Agora
            </Button>
            <Button
              variant="outline"
              className="border-rodeo-tan text-rodeo-tan hover:bg-rodeo-tan/20 text-lg px-6 py-6"
              onClick={() => {
                const servicesSection = document.getElementById('servicos');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça Meus Serviços
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <div className="rounded-full overflow-hidden border-4 border-rodeo-tan shadow-xl max-w-xs mx-auto">
            <img
              src="/lovable-uploads/775c0d8d-9ca5-4069-adbe-8653511e4829.png"
              alt="Lolo Xavier - Locutor de Rodeios"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
