import { servicios } from '../data/cvData';
import { Zap, Code, Settings, MousePointer2, Network, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactoModal } from './ContactoModal';

export const Servicios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const iconMap: { [key: string]: any } = {
    Zap: <Zap size={32} />,
    Code: <Code size={32} />,
    Settings: <Settings size={32} />,
    MousePointer2: <MousePointer2 size={32} />,
    Network: <Network size={32} />,
  };

  return (
    /* bg-[#0D0D0D]: Fondo negro para contrastar con la sección de Proyectos anterior */
    <section id="servicios" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-4">
            Soluciones y <span className="text-[#F24130]">Servicios</span>
          </h2>
          <p className="text-[#A6A6A6] max-w-2xl mx-auto font-mono text-sm">
            &gt; Optimizando la infraestructura y procesos de su empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              /* bg-[#1A1A1A]: Card en gris carbón para resaltar sobre el fondo negro 
                 border-[#1e293b]: El Azul Tec definiendo el borde de servicio técnico
              */
              className="p-8 rounded-2xl bg-[#1A1A1A] border border-[#1e293b] hover:border-[#F24130]/40 transition-all duration-300 group relative overflow-hidden shadow-xl"
            >
              <div className="text-[#F24130] mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[servicio.icono]}
              </div>

              <h3 className="text-xl font-bold text-[#F2F2F2] mb-3 group-hover:text-[#F24130] transition-colors">
                {servicio.titulo}
              </h3>
              
              <p className="text-[#A6A6A6] text-sm leading-relaxed">
                {servicio.descripcion}
              </p>

              {/* Barra de acento Azul Tec que pasa a Rojo en hover */}
              <div className="mt-6 w-10 h-1 bg-[#1e293b] group-hover:w-full group-hover:bg-[#F24130] transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN DE CONTACTO FINAL CON ROJO #F24130 */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-[#F24130] hover:bg-[#D94A3D] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#F24130]/20 hover:-translate-y-1 cursor-pointer"
          >
            <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
            ¿Necesitas una solución técnica? Contáctame
          </button>
        </motion.div>
      </div>

      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};