import { personalInfo } from '../data/cvData';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 border-b border-slate-800 pb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">{personalInfo.nombre}</h3>
            <p className="max-w-xs text-slate-400">
              {personalInfo.titulo} especializado en desarrollo moderno y gestión de proyectos.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold">Contacto Directo</h4>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 hover:text-blue-400 transition">
              <Mail size={18} /> {personalInfo.email}
            </a>
            <span className="flex items-center gap-3">
              <Phone size={18} /> {personalInfo.celular}
            </span>
            <span className="flex items-center gap-3">
              <MapPin size={18} /> {personalInfo.direccion}
            </span>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} - Hecho con React & Tailwind</p>
          <div className="flex gap-4">
            <a href="https://github.com/TU_USUARIO" target="_blank" className="hover:text-white transition">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};