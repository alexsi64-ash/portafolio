import { useState, useEffect } from 'react';
import { personalInfo } from '../data/cvData';
import { MapPin, Download, ChevronRight } from 'lucide-react';
import { ContactoModal } from './ContactoModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // LOGICA MULTI-TEXTO PARA EVITAR DOS LINEAS
  const [textIndex, setTextIndex] = useState(0);
  const titles = ["Técnico Superior", "Sistemas Informáticos"];
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[textIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 3000); // Pausa al terminar
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length); // Cambia al siguiente texto
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="pt-5 pb-20 flex flex-col justify-start md:justify-center relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 w-full pt-15 md:pt-0 flex flex-col md:flex-row items-center gap-6 md:gap-16">
        
        <div className="flex-[1.8] space-y-4 md:space-y-6 z-10 w-full">
          
          {/* TERMINAL: Multi-texto dinámico */}
          <div className="h-5">
            <code className="text-red-500 text-xs md:text-sm font-mono tracking-tighter flex items-center">
              <span className="mr-2 opacity-50">&gt;_</span>
              <span className="whitespace-nowrap">{displayText}</span>
              <span className="w-2 h-4 bg-red-500 ml-1 animate-pulse"></span>
            </code>
          </div>

          <div className="space-y-1 md:space-y-2">
            <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white leading-tight">
              Soy <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                {personalInfo.nombre}
              </span>
            </h1>
          </div>
          
          <div className="space-y-5">
            <p className="text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Analizando entornos, <span className="text-white font-medium">optimizando procesos</span> y construyendo soluciones  
              <span className="text-zinc-200 border-b border-red-900/50"> Tecnologicas</span>.
            </p>

            {/* Workflow Visual Metodológico */}
            <div className="flex items-center gap-2 text-[8px] md:text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-1">
              <span className="flex items-center text-white text-xs gap-1.5 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                <div className="w-1 h-1 rounded-full bg-red-600"></div> Evaluar
              </span>
              <ChevronRight size={10} className="text-slate-800" />
              <span className="flex items-center text-white text-xs gap-1.5 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                <div className="w-1 h-1 rounded-full bg-red-600"></div> Proponer
              </span>
              <ChevronRight size={10} className="text-slate-800" />
              <span className="flex items-center text-white text-xs gap-1.5 bg-slate-900/50 px-2 py-0.5 rounded border border-slate-800">
                <div className="w-1 h-1 rounded-full bg-red-600"></div> Solucionar
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-3 pt-4">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all text-xs md:text-sm shadow-lg shadow-red-950/20 cursor-pointer">
              Contáctame
            </button>

            <a href="/CV_Alexander_Silva.pdf" download="CV_Alexander_Silva.pdf"
               className="flex items-center justify-center gap-2 border border-slate-800 text-zinc-300 px-6 md:px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-all text-xs md:text-sm">
              CV <Download size={16} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-600 font-mono text-[15px] pt-2">
            <MapPin size={12} className="text-red-600 opacity-70" />
            <span>Santa Cruz, Bolivia</span>
          </div>
        </div>

        {/* Lado Derecho: Contenedor más grande y efecto expansivo */}
<div className="hidden md:flex flex-1 justify-center relative scale-90 lg:scale-110 group">
    {/* Brillo de fondo más intenso al hacer hover */}
    <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full group-hover:bg-red-600/15 transition-colors duration-700"></div>
    
    {/* 1. Aumentamos w-64/h-64 a w-80/h-80 para que el cuadro sea más grande.
        2. Quitamos el padding excesivo para que la imagen pueda crecer.
    */}
    <div className="relative w-72 h-72 lg:w-96 lg:h-96 bg-slate-900/40 rounded-3xl rotate-3 flex items-center justify-center border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover:rotate-0 group-hover:border-red-600/40 group-hover:scale-105 group-hover:shadow-red-900/20">
        <img 
  src="/ash-dev1.png" 
  alt="Logo Alexander Silva" 
  className="w-full h-full object-contain p-10 opacity-90 transition-all duration-500 
             group-hover:scale-110 group-hover:opacity-100 group-hover:p-6
             image-render-auto antialiased" // Mejora el suavizado en algunos navegadores
/>
        
        {/* Reflejo cristalino extra al pasar el cursor */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
</div>
      </div>

      {/* Decoración de fondo opcional para llenar espacio si la pantalla es muy alta */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
      </div>

      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}