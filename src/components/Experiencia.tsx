import { experiencia } from '../data/cvData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experiencia = () => {
  return (
    <section id="experiencia" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Briefcase className="text-blue-600" size={32} />
            Experiencia Laboral
          </h2>
          <p className="text-slate-600 mt-2">Mi trayectoria profesional en soporte técnico, coordinación y diseño.</p>
        </div>

        <div className="grid gap-8">
          {experiencia.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Decoración lateral */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.cargo}</h3>
                  <p className="text-blue-600 font-medium text-lg">{exp.empresa}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-100 px-4 py-1 rounded-full text-sm">
                  <Calendar size={16} />
                  {exp.periodo}
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.tareas.map((tarea, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <span>{tarea}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};