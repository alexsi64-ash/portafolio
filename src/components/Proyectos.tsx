import { Construction } from 'lucide-react';

export const Proyectos = () => {
  return (
    /* bg-[#1A1A1A]: Fondo gris para diferenciar la sección en móvil */
    /* border-y con AZUL TEC (#1e293b) para delimitar el área de trabajo */
    <section id="proyectos" className="py-24 px-6 relative overflow-hidden bg-[#1A1A1A] border-y border-[#1e293b]/30">
      <div className="max-w-5xl mx-auto">
        {/* Título de la sección con Blanco Humo y Rojo */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-2">Proyectos</h2>
          <div className="w-20 h-1 bg-[#F24130] rounded-full shadow-[0_0_10px_rgba(242,65,48,0.4)]"></div>
        </div>

        {/* Banner de "Trabajando en ello" */}
        <div className="relative group">
          {/* Fondo con brillo Rojo sutil */}
          <div className="absolute inset-0 bg-[#F24130]/5 blur-3xl rounded-full"></div>
          
          {/* bg-[#0D0D0D]: El banner usa el negro base para "hundirse" elegantemente en el fondo gris 
              border-[#1e293b]: Definición con Azul Tec
          */}
          <div className="relative border border-[#1e293b] bg-[#0D0D0D]/80 backdrop-blur-md rounded-3xl p-12 flex flex-col items-center text-center space-y-6 shadow-2xl">
            
            {/* Icono animado con Rojo #F24130 */}
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-[#F24130]/20 rounded-full"></div>
              <div className="relative bg-[#1A1A1A] p-5 rounded-2xl border border-[#F24130]/30 shadow-[0_0_20px_rgba(242,65,48,0.1)]">
                <Construction size={48} className="text-[#F24130]" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2] uppercase tracking-tighter">
                Portafolio en <span className="text-[#F24130]">Construcción</span>
              </h3>
              <p className="text-[#A6A6A6] max-w-md mx-auto font-mono text-sm leading-relaxed">
                Actualmente estoy documentando mis proyectos de desarrollo y optimización de sistemas. 
              </p>
            </div>

            {/* Barra de progreso visual con AZUL TEC y ROJO */}
            <div className="w-full max-w-xs space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-[#A6A6A6] uppercase tracking-widest">
                <span>Deploying Projects</span>
                <span className="text-[#F2F2F2]">75%</span>
              </div>
              {/* Fondo de barra con AZUL TEC (#1e293b) */}
              <div className="w-full h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                <div className="h-full bg-[#F24130] w-[75%] animate-pulse shadow-[0_0_10px_rgba(242,65,48,0.5)]"></div>
              </div>
            </div>

            <div className="pt-4">
              {/* Código de status con el rojo oscuro de la paleta */}
              <code className="text-[10px] text-[#D94A3D] font-mono bg-[#F24130]/5 px-3 py-1 rounded-full border border-[#F24130]/10">
                status: compilling_portfolio.exe --v1.0
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};