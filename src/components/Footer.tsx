import { Github, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/cvData';

export const Footer = () => {
  return (
    /* bg-[#0D0D0D]: Fondo negro base.
       border-t con AZUL TEC (#1e293b) para un cierre técnico elegante.
    */
    <footer className="bg-[#0D0D0D] border-t border-[#1e293b]/50 py-12 mt-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          
          {/* Status del Sistema con el Rojo vibrante #F24130 */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="relative">
              <div className="w-3 h-3 bg-[#F24130] rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-[#F24130] rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F2F2F2] text-xs font-mono font-bold tracking-widest uppercase">
                System Status
              </span>
              <span className="text-[#A6A6A6] text-[10px] font-mono">
                Running: Ubuntu_WSL2 / React_Vite
              </span>
            </div>
          </div>

          {/* Logo Central */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={18} className="text-[#F24130]" />
              <span className="text-[#F2F2F2] font-bold tracking-tighter">
                ASH<span className="text-[#F24130]">.dev</span>
              </span>
            </div>
            {/* Divisor pequeño en Azul Tec */}
            <div className="h-px w-12 bg-[#1e293b]"></div>
          </div>

          {/* Social / Github con estilos de la paleta */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="https://github.com/alexsi64-ash/portafolio.git" 
              target="_blank" 
              rel="noopener noreferrer"
              /* bg-[#1A1A1A]: Gris carbón para destacar el botón del fondo negro */
              className="group flex items-center gap-2 bg-[#1A1A1A] border border-[#1e293b] px-4 py-2 rounded-xl text-[#A6A6A6] hover:text-[#F2F2F2] hover:border-[#F24130]/50 transition-all shadow-lg"
            >
              <span className="text-xs font-mono">Source Code</span>
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Copyright y Stack */}
        <div className="pt-8 border-t border-[#1e293b]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-[#A6A6A6] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} — {personalInfo.nombre}</p>
          <div className="flex items-center gap-2 italic text-[#D94A3D]">
            <Cpu size={12} className="text-[#1e293b]" />
            <span>{personalInfo.titulo}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};