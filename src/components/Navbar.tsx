
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rodeo-darkBrown/95 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-rodeo-tan text-2xl">🤠</div>
            <div>
              <h1 className="text-2xl font-bold text-rodeo-tan m-0">Lolo Xavier</h1>
              <div className="bg-rodeo-tan text-rodeo-darkBrown px-2 py-0.5 text-xs font-bold rounded">
                LOCUTOR DE RODEIO
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-rodeo-tan transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-rodeo-tan transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-rodeo-tan transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-rodeo-tan hover:bg-rodeo-tan/80 text-rodeo-darkBrown"
            >
              Contrate Agora
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-white hover:text-rodeo-tan"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
        
        <div id="mobile-menu" className="hidden md:hidden mt-4 pb-2">
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => {
                scrollToSection('sobre');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-white hover:text-rodeo-tan transition-colors py-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => {
                scrollToSection('servicos');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-white hover:text-rodeo-tan transition-colors py-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => {
                scrollToSection('contato');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="text-white hover:text-rodeo-tan transition-colors py-2"
            >
              Contato
            </button>
            <Button 
              onClick={() => {
                scrollToSection('contato');
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className="bg-rodeo-tan hover:bg-rodeo-tan/80 text-rodeo-darkBrown mt-2"
            >
              Contrate Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
