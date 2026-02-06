import { skills } from '../data/cvData';
import { Layout, Database, Settings, Terminal, Palette } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

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

  const categorias = [
    { nombre: 'Frontend', datos: skills.frontend, icono: <Layout size={20} /> },
    { nombre: 'Backend', datos: skills.backend, icono: <Database size={20} /> },
    { nombre: 'Herramientas', datos: skills.herramientas, icono: <Settings size={20} /> },
    { nombre: 'Sistemas', datos: skills.sistemas, icono: <Terminal size={20} /> },
    { nombre: 'Diseño', datos: skills.diseño, icono: <Palette size={20} /> },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0 
    }
  };

  return (
    /* bg-[#1A1A1A]: Fondo gris para separar secciones.
       border-y con AZUL TEC (#1e293b) para delimitación técnica.
    */
    <section id="habilidades" className="py-24 bg-[#1A1A1A] border-y border-[#1e293b]/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2]">
            Stack <span className="text-[#F24130]">Tecnológico</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-px flex-1 bg-[#1e293b] origin-left"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {categorias.map((cat) => (
            <motion.div 
              key={cat.nombre} 
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              /* bg-[#0D0D0D]: Card negra sobre fondo gris.
                 border-[#1e293b]: El Azul Tec definiendo la silueta.
              */
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center p-6 rounded-2xl bg-[#0D0D0D] border border-[#1e293b] hover:border-[#F24130]/30 transition-all duration-300 group shadow-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                {/* Icono con fondo gris oscuro y efecto glow rojo en hover */}
                <div className="p-2.5 bg-[#1A1A1A] rounded-xl text-[#F24130] border border-[#1e293b] group-hover:bg-[#F24130] group-hover:text-white transition-all duration-500 shadow-[0_0_0_rgba(242,65,48,0)] group-hover:shadow-[0_0_20px_rgba(242,65,48,0.4)]">
                  {cat.icono}
                </div>
                <h3 className="font-bold text-[#F2F2F2] text-sm tracking-tight uppercase font-mono">{cat.nombre}</h3>
              </div>

              <div className="space-y-4">
                {cat.datos.map((skill) => (
                  <motion.div 
                    key={skill} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group/item"
                  >
                    {/* Contenedor del icono con Azul Tec */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A1A] border border-[#1e293b]/50 group-hover/item:border-[#F24130]/50 transition-all duration-300">
                      <i className={`${getIconClass(skill)} text-2xl filter grayscale group-hover/item:grayscale-0 transition-all`}></i>
                    </div>
                    <span className="text-[#A6A6A6] font-medium group-hover/item:text-[#F24130] transition-colors text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Indicador visual móvil optimizado */}
        <div className="flex justify-center gap-1 mt-4 md:hidden">
          <div className="w-8 h-1 bg-[#1e293b] rounded-full overflow-hidden">
            <div className="h-full bg-[#F24130] animate-pulse"></div>
          </div>
          <span className="text-[10px] text-[#A6A6A6] font-mono uppercase tracking-widest">Deslizar para ver más</span>
        </div>
      </div>
    </section>
  );
};