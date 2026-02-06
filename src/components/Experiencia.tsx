import { experiencia } from '../data/cvData';
import { Calendar, ShieldCheck } from 'lucide-react';

export const Experiencia = () => {
  const experienciaTecnica = experiencia.filter(exp => 
    exp.empresa.includes("Dirección Departamental") || exp.cargo.includes("Soporte")
  );

  return (
    /* bg-[#0D0D0D]: Fondo negro profundo para que la línea de tiempo resalte */
    <section id="experiencia" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] flex items-center gap-3">
            Experiencia <span className="text-[#F24130]">Técnica</span>
          </h2>
          {/* Línea divisoria técnica usando AZUL TEC (#1e293b) */}
          <div className="h-px flex-1 bg-[#1e293b]"></div>
        </div>

        <div className="relative">
          {/* Línea vertical: Gradiente que usa tu Rojo y Azul Tec para el efecto industrial */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#F24130] via-[#1e293b] to-transparent"></div>

          <div className="space-y-12">
            {experienciaTecnica.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20 group">
                {/* Nodo de la línea de tiempo con Glow Rojo #F24130 */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2.5 h-2.5 rounded-full bg-[#F24130] shadow-[0_0_12px_rgba(242,65,48,0.8)] group-hover:scale-150 transition-transform"></div>

                {/* Card de experiencia: bg-[#1A1A1A] para que sea diferenciable en móvil */}
                <div className="bg-[#1A1A1A] border border-[#1e293b] p-8 rounded-2xl hover:border-[#F24130]/30 transition-all shadow-xl">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F2F2F2] group-hover:text-[#F24130] transition-colors">
                        {exp.cargo}
                      </h3>
                      <p className="text-[#A6A6A6] font-mono text-sm mt-1 uppercase tracking-wider">{exp.empresa}</p>
                    </div>
                    {/* Badge de fecha con Rojo #F24130 */}
                    <div className="inline-flex items-center gap-2 text-[#F24130] font-mono text-xs bg-[#F24130]/5 px-3 py-1 rounded-full border border-[#F24130]/20">
                      <Calendar size={14} />
                      {exp.periodo}
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.tareas.map((tarea, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#A6A6A6] text-sm">
                        {/* Check icon con el rojo de la paleta */}
                        <ShieldCheck className="text-[#D94A3D] mt-0.5 flex-shrink-0" size={16} />
                        <span>{tarea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota opcional con Azul Tec sutil */}
        <div className="mt-12 p-4 bg-[#1A1A1A]/50 border border-[#1e293b]/30 rounded-xl text-center">
          <p className="text-[#A6A6A6] text-xs italic">
            * Para consultar mi trayectoria previa en gestión administrativa y logística, 
            puedes descargar mi CV completo en la sección superior.
          </p>
        </div>
      </div>
    </section>
  );
};