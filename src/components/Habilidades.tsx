import { skills } from '../data/cvData';
import { Layout, Database, Settings, Terminal, Palette } from 'lucide-react';

export const Habilidades = () => {
  const getIconClass = (skill: string) => {
    const map: { [key: string]: string } = {
      "HTML": "devicon-html5-plain colored",
      "CSS": "devicon-css3-plain colored",
      "JavaScript": "devicon-javascript-plain colored",
      "React": "devicon-react-original colored",
      "Tailwind CSS": "devicon-tailwindcss-original colored",
      "Bootstrap": "devicon-bootstrap-plain colored",
      "PHP": "devicon-php-plain colored",
      "Laravel": "devicon-laravel-original colored",
      "Java": "devicon-java-plain colored",
      "C++": "devicon-cplusplus-plain colored",
      "SQL": "devicon-mysql-plain colored",
      "Git": "devicon-git-plain colored",
      "GitHub": "devicon-github-original",
      "Docker": "devicon-docker-plain colored",
      "Flutter": "devicon-flutter-plain colored", 
      "WSL2": "devicon-linux-plain colored", 
      "Android Studio": "devicon-android-plain colored",
      "Windows 7/10/11": "devicon-windows8-original colored",
      "Fedora Linux": "devicon-fedora-plain colored",
      "Debian Linux": "devicon-debian-plain colored",
      "Ubuntu Linux": "devicon-ubuntu-plain colored",
      "Adobe Photoshop": "devicon-photoshop-plain colored",
      "Illustrator": "devicon-illustrator-plain colored",
    };
    return map[skill] || "devicon-matcha-plain";
  };

  // He cambiado todos los iconos a text-red-600 para dar uniformidad
  const categorias = [
    { nombre: 'Frontend', datos: skills.frontend, icono: <Layout size={20} /> },
    { nombre: 'Backend', datos: skills.backend, icono: <Database size={20} /> },
    { nombre: 'Herramientas', datos: skills.herramientas, icono: <Settings size={20} /> },
    { nombre: 'Sistemas', datos: skills.sistemas, icono: <Terminal size={20} /> },
    { nombre: 'Diseño', datos: skills.diseño, icono: <Palette size={20} /> },
  ];

  return (
    <section id="habilidades" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stack <span className="text-red-600">Tecnológico</span>
          </h2>
          <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <div 
              key={cat.nombre} 
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-red-600/30 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-zinc-800 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {cat.icono}
                </div>
                <h3 className="font-bold text-zinc-100 text-lg tracking-tight uppercase text-sm">{cat.nombre}</h3>
              </div>

              <div className="space-y-4">
                {cat.datos.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/item">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 group-hover/item:border-zinc-500 transition-colors">
                      <i className={`${getIconClass(skill)} text-2xl filter grayscale group-hover/item:grayscale-0 transition-all`}></i>
                    </div>
                    <span className="text-zinc-400 font-medium group-hover/item:text-red-500 transition-colors text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};