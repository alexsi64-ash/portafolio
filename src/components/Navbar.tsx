import { useState } from 'react';
import { Menu, X, Code2, Send } from 'lucide-react';
import { ContactoModal } from './ContactoModal';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Stack', href: '#habilidades'},
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
  ];

  return (
    <>
      {/* bg-[#0D0D0D]/90: Tu negro base con opacidad para el efecto glass.
        border-[#1e293b]: El Azul Tec sutil para delimitar el navbar en móviles.
      */}
      <nav className="fixed w-full bg-[#0D0D0D]/90 backdrop-blur-md z-50 border-b border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo con #F24130 (Rojo vibrante) */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <Code2 className="text-[#F24130] group-hover:scale-110 transition-transform" size={28} />
              <span className="font-bold text-xl text-[#F2F2F2] tracking-tighter">
                ASH<span className='text-[#F24130]'>.dev</span>
              </span>
            </div>
            
            {/* Desktop Menu con #A6A6A6 (Gris para links) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[#A6A6A6] hover:text-[#F24130] font-medium transition-colors text-xs uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}

              {/* Botón de Contacto Desktop con Rojo #F24130 */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 border border-[#F24130]/50 text-[#F24130] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase hover:bg-[#F24130] hover:text-white transition-all shadow-[0_0_15px_rgba(242,65,48,0.1)] cursor-pointer"
              >
                <Send size={12} />
                Contacto
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#A6A6A6] hover:text-[#F2F2F2] transition-colors"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu con fondo #0D0D0D */}
        {isOpen && (
          <div className="md:hidden bg-[#0D0D0D] border-b border-[#1e293b] animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-[#A6A6A6] hover:text-[#F24130] hover:bg-[#F2F2F2]/5 rounded-lg font-medium transition-all text-sm uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Botón Mobile con el Rojo de la paleta */}
              <div className="pt-4 px-4">
                <button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#F24130] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest shadow-lg shadow-[#F24130]/20"
                >
                  <Send size={16} />
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};