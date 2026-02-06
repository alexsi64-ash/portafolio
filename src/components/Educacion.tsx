import { educacion, cursos } from '../data/cvData';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

export const Educacion = () => {
  return (
    <section id="educacion" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          <GraduationCap className="text-blue-600" size={32} />
          Educación y Certificaciones
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna: Educación Formal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800">Formación Académica</h3>
            {educacion.map((edu, i) => (
              <div key={i} className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-xl">
                <h4 className="text-lg font-bold text-slate-900">{edu.grado}</h4>
                <p className="text-blue-700 font-medium">{edu.instituto}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {edu.periodo}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded italic">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Columna: Cursos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-slate-800">Cursos de Especialización</h3>
            <div className="space-y-4">
              {cursos.map((curso, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">{curso.nombre}</h4>
                    <p className="text-sm text-slate-500">{curso.plataforma} • {curso.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};