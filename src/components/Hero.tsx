import { personalInfo, reconocimiento } from '../data/cvData';
import { Mail, MapPin, Download, Trophy } from 'lucide-react';

export const Hero = () => {
  // Tomamos el primer premio (el de 2025) para resaltarlo
  const primerPremio = reconocimiento[0];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Izquierdo: Texto */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <Trophy size={16} />
            {primerPremio.titulo}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Soy <span className="text-blue-600">{personalInfo.nombre}</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg">
            {personalInfo.titulo}. Especialista en soluciones informáticas y apasionado por el desarrollo de software. 
            Egresado del <span className="font-semibold">INCOS Santa Cruz</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={`mailto:${personalInfo.email}`} 
               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Contáctame
            </a>
            <button className="flex items-center gap-2 border-2 border-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition">
              Descargar CV <Download size={20} />
            </button>
          </div>

          <div className="flex gap-6 text-slate-500 pt-4">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">{personalInfo.direccion}</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Un elemento visual o decorativo */}
        <div className="flex-1 flex justify-center">
           <div className="relative w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-3xl rotate-3 flex items-center justify-center border-2 border-blue-200 shadow-xl">
              {/* Aquí luego podrías poner tu foto o un icono grande de código */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -rotate-6 rounded-3xl border border-slate-100 -z-10"></div>
              <span className="text-7xl">💻</span>
           </div>
        </div>

      </div>
    </section>
  );
};