import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Logros', href: '#premios' },
    { name: 'habilidades', href: '#habilidades'},
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
  ];

  return (
    <nav className="fixed w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo con estilo técnico */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Code2 className="text-red-600 group-hover:scale-110 transition-transform" size={28} />
            <span className="font-bold text-xl text-white tracking-tighter">
              ASH<span className='text-red-600'>.dev</span>
            </span>
          </div>
          
          {/* Desktop Menu - Colores Zinc y Red */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-zinc-400 hover:text-red-500 font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button - Cambiado a Zinc */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Ahora es oscuro y elegante */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-zinc-400 hover:text-red-500 hover:bg-zinc-900/50 rounded-lg font-medium transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};