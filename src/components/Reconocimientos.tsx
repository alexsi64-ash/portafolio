import { reconocimiento } from '../data/cvData';
import { Trophy, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const Reconocimientos = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } // Movido aquí para consistencia
    }
  };

  return (
    <section id="premios" className="py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Logros y <span className="text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.2)]">Reconocimientos</span>
          </h2>

          {/* BARRA CON ANIMACIÓN INFINITA */}
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
            className="h-1 bg-red-600 mx-auto rounded-full shadow-[0_0_10px_rgba(220,38,38,0.3)]"
          ></motion.div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Mi participación en ferias de innovación tecnológica, donde he liderado proyectos 
            que obtuvieron los primeros lugares en el <span className="text-zinc-200">INCOS Santa Cruz</span>.
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
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-red-600/50 transition-colors duration-300 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/0 blur-[60px] group-hover:bg-red-600/10 transition-all duration-500 rounded-full"></div>

              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:border-red-600/50 transition-colors"
                >
                  {index === 0 ? (
                    <Trophy className="text-red-500" size={28} />
                  ) : (
                    <Award className="text-red-600/70" size={28} />
                  )}
                </motion.div>
                
                <div>
                  <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
                    {item.fecha}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-100 mt-1 leading-tight group-hover:text-white transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
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