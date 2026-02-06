import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Send } from 'lucide-react';
import { toast } from 'sonner'; // Importamos toast

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactoModal = ({ isOpen, onClose }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [enviando, setEnviando] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  
        form.current!, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        // ÉXITO: Toast verde y cerramos modal
        toast.success("¡Mensaje enviado con éxito!", {
          description: "Alexander te responderá pronto."
        });
        setEnviando(false);
        onClose();
    }, (error) => {
        // ERROR: Toast rojo
        toast.error("Error al enviar el mensaje", {
          description: error.text
        });
        setEnviando(false);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-2 italic">Contáctame</h2>
          <p className="text-zinc-400 text-sm mb-6 font-mono">
            &gt; Iniciando protocolo de comunicación...
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider block mb-1">Nombre</label>
              <input name="name" required type="text" placeholder="Tu nombre" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" />
            </div>
            <div>
              <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider block mb-1">Correo</label>
              <input name="email" required type="email" placeholder="tu@correo.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-700" />
            </div>
            <div>
              <label className="text-zinc-500 text-xs font-bold uppercase tracking-wider block mb-1">Mensaje</label>
              <textarea name="message" required placeholder="¿En qué puedo ayudarte?" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white h-32 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none placeholder:text-zinc-700" />
            </div>
            
            <button 
              disabled={enviando}
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              {enviando ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </span>
              ) : (
                <>Enviar Mensaje <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};