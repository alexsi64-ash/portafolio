import { motion } from 'framer-motion';

export const SobreMi = () => {
  return (
    /* bg-[#1A1A1A]: Gris carbón para diferenciar la sección del negro base en móviles */
    <section id="sobre-mi" className="py-24 bg-[#1A1A1A] border-y border-[#1e293b]/30">
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
            {/* Títulos en Blanco Humo #F2F2F2 y Rojo #F24130 */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2]">
              Sobre <span className="text-[#F24130]">Mi</span>
            </h2>
            
            <p className="text-[#A6A6A6] leading-relaxed text-lg">
              Mi meta profesional se encuentra en la intersección de la <span className="text-[#F2F2F2] font-semibold">Ingeniería Industrial y de Sistemas</span>. 
              No solo busco desarrollar software, sino diseñar soluciones que optimicen la arquitectura operativa de cualquier organización.
            </p>

            <p className="text-[#A6A6A6] leading-relaxed">
              Con una trayectoria en el <span className="text-[#F2F2F2]">sector industrial</span>, 
              he transformado esa experiencia en una curiosidad por el desarrollo técnico.
            </p>

            <p className="text-[#A6A6A6] leading-relaxed italic border-l-2 border-[#F24130] pl-4 bg-[#F24130]/5 py-2">
              "Mi objetivo es fusionar la eficiencia de los procesos industriales con la potencia de la ingeniería de software para crear sistemas de alto impacto."
            </p>

            <div className="flex gap-8 pt-4">
              <div>
                <h4 className="text-[#F2F2F2] font-bold text-2xl">Mente</h4>
                <p className="text-[#F24130] text-xs uppercase font-mono font-bold">Analítica / Industrial</p>
              </div>
              <div className="text-[#1e293b] text-2xl font-light">/</div>
              <div>
                <h4 className="text-[#F2F2F2] font-bold text-2xl">Visión</h4>
                <p className="text-[#F24130] text-xs uppercase font-mono font-bold">Tecnológica / Sistemas</p>
              </div>
            </div>
          </motion.div>

          {/* Columna Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* bg-[#0D0D0D]: El fondo del recuadro vuelve al negro base para resaltar contra el fondo gris de la sección */}
            <div className="aspect-square bg-[#0D0D0D] rounded-3xl border border-[#1e293b] flex items-center justify-center relative overflow-hidden group shadow-2xl">
               
               {/* Rejilla técnica con el AZUL TEC (#1e293b) */}
               <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] [background-size:40px_40px]"></div>
               
               {/* Iconografía Central Rojo #F24130 */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="text-[#F24130] font-black text-8xl mb-2 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(242,65,48,0.3)]">∑</div>
                  <div className="text-[#A6A6A6] font-mono text-sm tracking-[0.3em]">OPTIMIZACIÓN_TOTAL</div>
               </div>

               {/* Brillo dinámico Rojo */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#F24130]/10 to-transparent"></div>
            </div>

            {/* Decoración de Terminal - Fondo Negro #0D0D0D y Borde Azul Tec */}
            <div className="absolute -bottom-4 -left-4 bg-[#0D0D0D] border border-[#1e293b] p-4 rounded-xl shadow-2xl hidden md:block">
              <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#F24130]"></div>
                <div className="w-2 h-2 rounded-full bg-[#1e293b]"></div>
                <div className="w-2 h-2 rounded-full bg-[#1e293b]"></div>
              </div>
              <code className="text-[10px] text-[#A6A6A6] font-mono">
                status: <span className="text-[#D94A3D]">evolucionando_...</span><br/>
                goal: <span className="text-[#F2F2F2]">ind_sys_integration</span>
              </code>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};