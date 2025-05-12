
import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Lolo Xavier</h2>
          <div className="w-24 h-1 bg-rodeo-tan mx-auto"></div>
        </div>
        
        <div className="bg-white/90 rounded-lg p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-rodeo-brown">A Voz do Rodeio</h3>
              <p className="text-lg mb-4">
                Com mais de 15 anos de experiência, Lolo Xavier se tornou um dos locutores mais 
                reconhecidos e respeitados na região de Alambari.
              </p>
              <p className="text-lg mb-4">
                Sua voz marcante e seu estilo único já animaram centenas de eventos e conquistaram 
                mais de 80 mil seguidores nas redes sociais.
              </p>
              <p className="text-lg">
                Autêntico e apaixonado pela cultura sertaneja, Lolo Xavier traz carisma e 
                profissionalismo para cada apresentação, transformando simples eventos em 
                experiências inesquecíveis.
              </p>
            </div>
            
            <div className="md:w-1/2 space-y-4">
              <div className="bg-rodeo-tan/20 p-4 rounded-lg border-l-4 border-rodeo-brown">
                <h4 className="text-xl font-bold text-rodeo-darkBrown">Experiência</h4>
                <p>Mais de 15 anos no mercado, narrando os principais eventos da região.</p>
              </div>
              
              <div className="bg-rodeo-tan/20 p-4 rounded-lg border-l-4 border-rodeo-brown">
                <h4 className="text-xl font-bold text-rodeo-darkBrown">Alcance</h4>
                <p>Mais de 80 mil seguidores no Facebook, construindo uma comunidade engajada.</p>
              </div>
              
              <div className="bg-rodeo-tan/20 p-4 rounded-lg border-l-4 border-rodeo-brown">
                <h4 className="text-xl font-bold text-rodeo-darkBrown">Versatilidade</h4>
                <p>Experiência em rodeios, festas, eventos comerciais e programas de rádio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
