import { reconocimiento } from '../data/cvData';
import { Trophy, Award } from 'lucide-react';

export const Reconocimientos = () => {
  return (
    <section id="premios" className="py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Logros y <span className="text-red-600">Reconocimientos</span>
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Mi participación en ferias de innovación tecnológica, donde he liderado proyectos 
            que obtuvieron los primeros lugares en el <span className="text-zinc-200">INCOS Santa Cruz</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reconocimiento.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl"
            >
              {/* Glow decorativo en la esquina al hacer hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/5 blur-[50px] group-hover:bg-red-600/10 transition-colors rounded-full"></div>

              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 group-hover:border-red-600/50 transition-colors">
                  {index === 0 ? (
                    <Trophy className="text-red-500" size={28} />
                  ) : (
                    <Award className="text-red-600/70" size={28} />
                  )}
                </div>
                
                <div>
                  <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">
                    {item.fecha}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-100 mt-1 leading-tight group-hover:text-white">
                    {item.titulo}
                  </h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
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