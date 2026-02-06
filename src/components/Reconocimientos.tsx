import { reconocimiento } from '../data/cvData';
import { Trophy, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const Reconocimientos = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    /* bg-[#0D0D0D]: Volvemos al negro base para contrastar con el gris de "Sobre Mi" */
    <section id="premios" className="py-20 bg-[#0D0D0D] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-4">
            Logros y <span className="text-[#F24130] drop-shadow-[0_0_8px_rgba(242,65,48,0.3)]">Reconocimientos</span>
          </h2>

          {/* BARRA CON ANIMACIÓN INFINITA - Usando Rojo #F24130 */}
          <motion.div 
            animate={{ 
              width: [40, 100, 40],
              opacity: [0.5, 1, 0.5] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="h-1 bg-[#F24130] mx-auto rounded-full shadow-[0_0_15px_rgba(242,65,48,0.4)]"
          ></motion.div>

          <p className="text-[#A6A6A6] mt-6 max-w-2xl mx-auto">
            Mi participación en ferias de innovación tecnológica, donde he liderado proyectos 
            que obtuvieron los primeros lugares en el <span className="text-[#F2F2F2]">INCOS Santa Cruz</span>.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reconocimiento.map((item, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              /* bg-[#1A1A1A]: Las tarjetas usan el gris carbón para "flotar" sobre el fondo negro 
                 border-[#1e293b]: Borde Azul Tec para el toque de ingeniería
              */
              className="group relative p-8 rounded-2xl border border-[#1e293b] bg-[#1A1A1A] hover:border-[#F24130]/50 transition-all duration-300 shadow-2xl"
            >
              {/* Resplandor interno Rojo al hacer hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F24130]/0 blur-[60px] group-hover:bg-[#F24130]/10 transition-all duration-500 rounded-full"></div>

              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  /* Icono con fondo negro base y borde azul tec */
                  className="p-3 rounded-xl bg-[#0D0D0D] border border-[#1e293b] group-hover:border-[#F24130]/50 transition-colors"
                >
                  {index === 0 ? (
                    <Trophy className="text-[#F24130]" size={28} />
                  ) : (
                    <Award className="text-[#D94A3D]" size={28} />
                  )}
                </motion.div>
                
                <div>
                  <span className="text-xs font-mono font-bold text-[#F24130] uppercase tracking-widest">
                    {item.fecha}
                  </span>
                  <h3 className="text-xl font-bold text-[#F2F2F2] mt-1 leading-tight group-hover:text-white transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-[#A6A6A6] mt-2 text-sm leading-relaxed">
                    {item.institucion}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};