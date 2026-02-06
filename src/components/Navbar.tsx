import { useState } from 'react';
import { Menu, X, Code2, Send } from 'lucide-react';
import { ContactoModal } from './ContactoModal'; // Importamos el modal

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Stack', href: '#habilidades'},
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
  ];

  return (
    <>
      <nav className="fixed w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <Code2 className="text-red-600 group-hover:scale-110 transition-transform" size={28} />
              <span className="font-bold text-xl text-white tracking-tighter">
                ASH<span className='text-red-600'>.dev</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-zinc-400 hover:text-red-500 font-medium transition-colors text-xs uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}

              {/* Botón de Contacto Desktop */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 border border-red-600/50 text-red-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-red-600 hover:text-white transition-all shadow-[0_0_10px_rgba(220,38,38,0.1)] cursor-pointer"
              >
                <Send size={12} />
                Contacto
              </button>
            </div>

            {/* Mobile Button */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-zinc-400 hover:text-red-500 hover:bg-zinc-900/50 rounded-lg font-medium transition-all text-sm uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botón de Contacto Mobile */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest"
                >
                  <Send size={16} />
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* LLAMADA AL MODAL */}
      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};