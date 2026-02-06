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
    <section id="servicios" className="py-10"> {/* Sin bg-zinc-950 para heredar bg-slate-950 */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluciones y <span className="text-red-600">Servicios</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-mono text-sm">
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
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-red-600/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[servicio.icono]}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                {servicio.titulo}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {servicio.descripcion}
              </p>

              <div className="mt-6 w-10 h-1 bg-slate-800 group-hover:w-full group-hover:bg-red-600 transition-all duration-500 rounded-full"></div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN DE CONTACTO AL FINAL DE SERVICIOS */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-red-950/20 hover:-translate-y-1 cursor-pointer"
          >
            <MessageSquare size={20} className="group-hover:rotate-12 transition-transform" />
            ¿Necesitas una solución técnica? Hablemos
          </button>
        </motion.div>
      </div>

      <ContactoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};