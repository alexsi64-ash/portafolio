import { reconocimiento } from '../data/cvData';
import { Trophy, Award, Star } from 'lucide-react';

export const Reconocimientos = () => {
  return (
    <section id="premios" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Logros y Reconocimientos
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            Mi participación en ferias de innovación tecnológica en el INCOS Santa Cruz, 
            donde he liderado proyectos que obtuvieron los primeros lugares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reconocimiento.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-blue-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white shadow-sm group-hover:bg-blue-500 transition-colors">
                  {index === 0 ? (
                    <Trophy className="text-yellow-500 group-hover:text-white" size={32} />
                  ) : (
                    <Award className="text-blue-600 group-hover:text-white" size={32} />
                  )}
                </div>
                <div>
                  <span className="text-sm font-bold text-blue-600 group-hover:text-blue-200 uppercase tracking-wider">
                    {item.fecha}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mt-1 leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-slate-600 group-hover:text-blue-100 mt-2 text-sm md:text-base leading-relaxed">
                    {item.institucion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};