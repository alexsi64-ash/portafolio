import { experiencia } from '../data/cvData';
import { Calendar, ShieldCheck } from 'lucide-react';

export const Experiencia = () => {
  // Filtramos para mostrar solo la pasantía o roles técnicos
  // Si en tu cvData la pasantía es el primer elemento:
  const experienciaTecnica = experiencia.filter(exp => 
    exp.empresa.includes("Dirección Departamental") || exp.cargo.includes("Soporte")
  );

  return (
    <section id="experiencia" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            Trayectoria <span className="text-red-600">Técnica</span>
          </h2>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </div>

        <div className="relative">
          {/* Línea vertical estilo "Bus de datos" */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-zinc-800 to-transparent"></div>

          <div className="space-y-12">
            {experienciaTecnica.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20 group">
                {/* Nodo de la línea de tiempo */}
                <div className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] group-hover:scale-150 transition-transform"></div>

                <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/30 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                        {exp.cargo}
                      </h3>
                      <p className="text-zinc-400 font-mono text-sm mt-1">{exp.empresa}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-red-500 font-mono text-xs bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">
                      <Calendar size={14} />
                      {exp.periodo}
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.tareas.map((tarea, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                        <ShieldCheck className="text-red-600 mt-0.5 flex-shrink-0" size={16} />
                        <span>{tarea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nota opcional para el reclutador */}
        <div className="mt-12 p-4 bg-zinc-900/20 border border-zinc-800/50 rounded-xl text-center">
          <p className="text-zinc-500 text-xs italic">
            * Para consultar mi trayectoria previa en gestión administrativa y logística, 
            puedes descargar mi CV completo en la sección superior.
          </p>
        </div>
      </div>
    </section>
  );
};