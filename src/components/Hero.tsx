import { personalInfo } from "../data/cvData";
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-3xl">
                <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
                    {personalInfo.titulo}
                </h2>
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Egresado del INCOS Santa Cruz con pasión por el desarrollo de software y la innovación tecnológica. 
                        Ganador del 1er lugar en la Feria de Proyectos de Innovación 2025.
                    </p>
                </h1>

                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition">
                        <Mail size={18} /> Contactame
                    </a>
                    <button className="flex items-center gap-2 border-2 border-slate-900 px-6 py-3 rounded-full hover:bg-slate-50 transition">
                        Ver Proyectos <ExternalLink size={18} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-500 text-sm">
                    <span className="flex items-center gap-1"><MapPin size={16} /> {personalInfo.direccion}</span>
                    <span className="flex items-center gap-1"><Phone size={16} /> {personalInfo.celular}</span>
                </div>
            </div>
        </section>
    )
}