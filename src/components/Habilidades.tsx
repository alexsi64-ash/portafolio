import { skills } from '../data/cvData';
import { Code2, Layout, Settings, Palette, Terminal } from 'lucide-react';

export const Habilidades = () => {
  // Mapeamos los iconos a las categorías de tu cvData
  const categorias = [
    { nombre: 'Lenguajes', datos: skills.lenguajes, icono: <Code2 className="text-blue-600" /> },
    { nombre: 'Frameworks', datos: skills.frameworks, icono: <Layout className="text-cyan-600" /> },
    { nombre: 'Herramientas', datos: skills.herramientas, icono: <Settings className="text-indigo-600" /> },
    { nombre: 'Diseño', datos: skills.design, icono: <Palette className="text-pink-600" /> },
    { nombre: 'Sistemas', datos: skills.os, icono: <Terminal className="text-slate-700" /> },
  ];

  return (
    <section id="habilidades" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
          Habilidades Técnicas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((cat) => (
            <div key={cat.nombre} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-50 rounded-lg">{cat.icono}</div>
                <h3 className="font-bold text-slate-800 text-lg">{cat.nombre}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cat.datos.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-100 hover:bg-blue-600 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};