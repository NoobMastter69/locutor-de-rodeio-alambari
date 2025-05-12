
import React from 'react';

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-white/95 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-rodeo-tan">
      <div className="text-4xl text-rodeo-darkBrown mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-rodeo-darkBrown mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-rodeo-darkBrown/30 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rodeo-tan mb-4">Serviços</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A voz profissional que seu evento merece
          </p>
          <div className="w-24 h-1 bg-rodeo-tan mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Rodeios"
            description="Narração profissional para rodeios de todos os portes, trazendo energia e emoção para o evento."
            icon="🤠"
          />
          <ServiceCard
            title="Festas & Eventos"
            description="Apresentação e condução de festas, shows e eventos culturais com profissionalismo."
            icon="🎉"
          />
          <ServiceCard
            title="Narração Comercial"
            description="Locução para lojas, propagandas e anúncios comerciais que capturam a atenção do público."
            icon="🎙️"
          />
          <ServiceCard
            title="Programas de Rádio"
            description="Experiência em programas de rádio, trazendo conteúdo de qualidade aos ouvintes."
            icon="📻"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
