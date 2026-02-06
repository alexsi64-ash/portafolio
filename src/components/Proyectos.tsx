import { proyectos } from '../data/cvData';
import { ExternalLink, Github } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const Proyectos = () => {
  // [1] Variantes del contenedor (Stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1 
      }
    }
  };

  // [2] Variantes de las tarjetas (Sin transition interna para evitar el error)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section id="proyectos" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Proyectos <span className="text-red-600">Destacados</span>
            </h2>
            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>
          <p className="text-zinc-500 mt-4 font-mono text-sm italic">
            &gt; Soluciones técnicas desarrolladas
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // [3] Pasamos la transición como prop directa del componente
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 shadow-xl"
            >
              {/* Imagen con efecto de revelado */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={proyecto.imagen || "/api/placeholder/800/600"}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {proyecto.titulo}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías con estilo Mono */}
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono font-bold bg-zinc-800/80 text-red-500/90 px-2 py-1 rounded border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones de acción */}
                <div className="flex gap-4 pt-2">
                  {proyecto.github && (
                    <a 
                      href={proyecto.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs transition-colors"
                    >
                      <Github size={16} /> Código
                    </a>
                  )}
                  
                  <a 
                    href={proyecto.enlace} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-red-500 hover:text-red-400 text-xs font-bold transition-colors"
                  >
                    <ExternalLink size={16} /> Ver Detalles
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};