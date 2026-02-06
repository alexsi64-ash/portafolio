import { motion } from 'framer-motion';

export const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sobre <span className="text-red-600">Mi</span>
            </h2>
            
            <p className="text-zinc-300 leading-relaxed text-lg">
              Mi meta profesional se encuentra en la intersección de la <span className="text-white font-semibold">Ingeniería Industrial y de Sistemas</span>. 
              No solo busco desarrollar software, sino diseñar soluciones que optimicen la arquitectura operativa de cualquier organización.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Con una trayectoria en el <span className="text-zinc-200">sector industrial</span>, 
              he transformado esa experiencia en una curiosidad por el desarrollo técnico.
            </p>

            <p className="text-zinc-400 leading-relaxed italic border-l-2 border-red-600 pl-4">
              "Mi objetivo es fusionar la eficiencia de los procesos industriales con la potencia de la ingeniería de software para crear sistemas de alto impacto."
            </p>

            <div className="flex gap-8 pt-4">
              <div>
                <h4 className="text-white font-bold text-2xl">Mente</h4>
                <p className="text-red-500 text-xs uppercase font-mono">Analítica / Industrial</p>
              </div>
              <div className="text-zinc-700 text-2xl font-light">/</div>
              <div>
                <h4 className="text-white font-bold text-2xl">Visión</h4>
                <p className="text-red-500 text-xs uppercase font-mono">Tecnológica / Sistemas</p>
              </div>
            </div>
          </motion.div>

          {/* Columna Visual - Representación de la Meta */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-900/50 rounded-3xl border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
               {/* Efecto de rejilla técnica de fondo */}
               <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]"></div>
               
               {/* Iconografía Central */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="text-red-600 font-black text-8xl mb-2 group-hover:scale-110 transition-transform duration-500">∑</div>
                  <div className="text-zinc-500 font-mono text-sm tracking-[0.3em]">OPTIMIZACIÓN_TOTAL</div>
               </div>

               {/* Brillo dinámico */}
               <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent"></div>
            </div>

            {/* Decoración de Terminal */}
            <div className="absolute -bottom-4 -left-4 bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl hidden md:block">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
              </div>
              <code className="text-[10px] text-zinc-500 font-mono">
                status: <span className="text-red-400">evolucionando_...</span><br/>
                goal: <span className="text-white">ind_sys_integration</span>
              </code>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};