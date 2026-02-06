import { useState } from 'react';
import { personalInfo } from '../data/cvData';
import { MapPin, Download } from 'lucide-react';
import { ContactoModal } from './ContactoModal'; // Importamos el modal

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-[1.5] space-y-4">    
          <div className="space-y-2">
            <code className="text-red-500 text-sm font-mono tracking-widest">
              &gt; {personalInfo.titulo}
            </code>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
              Soy <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                {personalInfo.nombre}
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
            Especialista en soluciones informáticas y apasionado por el desarrollo de software. 
            Egresado del <span className="text-zinc-200 border-b border-red-900">INCOS Santa Cruz</span>.
          </p>

          <div className="flex flex-wrap gap-5 pt-2">
            {/* BOTÓN ACTUALIZADO PARA ABRIR MODAL */}
            <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-900/40 hover:-translate-y-1">
              Contáctame
            </button>

            <a href="/CV_Alexander_Silva.pdf" download="CV_Alexander_Silva.pdf"
               className="flex items-center gap-2 border-2 border-zinc-800 text-zinc-300 px-8 py-3 rounded-xl font-bold hover:bg-zinc-900 transition-all hover:border-zinc-700">
              Descargar CV <Download size={20} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs">
            <MapPin size={14} className="text-red-600" />
            <span>{personalInfo.direccion}</span>
          </div>
        </div>

        {/* Lado Derecho con tu logo A.dev */}
        <div className="hidden md:flex flex-1 justify-center relative">
            <div className="absolute inset-0 bg-red-600/10 blur-[80px] rounded-full"></div>
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 bg-zinc-900 rounded-3xl rotate-3 flex items-center justify-center border border-red-600/20 shadow-2xl">
              <div className="absolute inset-0 bg-zinc-800/40 backdrop-blur-sm -rotate-6 rounded-3xl border border-zinc-800 -z-10"></div>
              <img src="/ash-dev.png" alt="Logo Alexander Silva" className="w-48 h-48 object-contain" />
            </div>
        </div>
      </div>

      {/* LLAMADA AL COMPONENTE MODAL */}
      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};