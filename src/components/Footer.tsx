import { Github, Terminal, Cpu } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          
          {/* Status del Sistema (Toque de Sistemas) */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="relative">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-100 text-xs font-mono font-bold tracking-widest uppercase">
                System Status
              </span>
              <span className="text-zinc-500 text-[10px] font-mono">
                Running: Ubuntu_WSL2 / React_Vite
              </span>
            </div>
          </div>

          {/* Logo Central */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Terminal size={18} className="text-red-600" />
              <span className="text-white font-bold tracking-tighter">
                ASH<span className="text-red-600">.dev</span>
              </span>
            </div>
            <div className="h-px w-12 bg-zinc-800"></div>
          </div>

          {/* Social / Github */}
          <div className="flex justify-center md:justify-end">
            <a 
              href="https://github.com/TU_USUARIO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-zinc-400 hover:text-white hover:border-red-600/50 transition-all"
            >
              <span className="text-xs font-mono">Source Code</span>
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Copyright y Stack */}
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} — Alexander Silva Huanca</p>
          <div className="flex items-center gap-2 italic">
            <Cpu size={12} />
            <span>Optimized for performance & reliability</span>
          </div>
        </div>
      </div>
    </footer>
  );
};