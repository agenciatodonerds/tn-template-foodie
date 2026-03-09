import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

const options = [
  "RESERVA DE MESA", 
  "EVENTOS PRIVADOS", 
  "CONSULTA POR CATERING", 
  "MENU DE GRUPOS", 
  "OTRAS CONSULTAS"
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', service: options[0], message: '' });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "5493541456789"; 
    const text = `*SOLICITUD GASTRONÓMICA - TODONERDS RESTÓ*\n` +
                 `*------------------------------*\n` +
                 `*CLIENTE:* ${form.name}\n` +
                 `*MOTIVO:* ${form.service}\n` +
                 `*MENSAJE:* ${form.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form 
      onSubmit={handleWhatsApp} 
      className="relative z-10 space-y-6 text-left max-w-2xl mx-auto bg-surface-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/5"
    >
      {/* DECORACIÓN SUTIL */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-10 blur-3xl rounded-full -mr-16 -mt-16"></div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">NOMBRE COMPLETO</label>
          <input 
            required
            type="text" 
            placeholder="COMO APARECE EN DNI"
            onChange={(e) => setForm({...form, name: e.target.value})}
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm font-body uppercase"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">TIPO DE SOLICITUD</label>
          <div className="relative">
            <select 
              onChange={(e) => setForm({...form, service: e.target.value})}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-primary outline-none transition-all text-sm font-body appearance-none cursor-pointer pr-10 uppercase"
            >
              {options.map(o => <option key={o} value={o} className="bg-surface-800 text-white">{o}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">DETALLES O REQUERIMIENTOS</label>
        <textarea 
          required
          rows={3}
          placeholder="CANTIDAD DE PERSONAS, ALERGIAS, FECHAS..."
          onChange={(e) => setForm({...form, message: e.target.value})}
          className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:border-primary outline-none transition-all text-sm font-body resize-none uppercase"
        ></textarea>
      </div>

      <button 
        type="submit"
        className="group relative w-full bg-primary hover:bg-accent text-white py-5 rounded-full font-heading text-xl md:text-2xl tracking-[0.1em] uppercase transition-all overflow-hidden"
      >
        <div className="relative z-10 flex items-center justify-center gap-3">
            <MessageSquare className="w-6 h-6" />
            Enviar
        </div>
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </button>

      <div className="text-center opacity-40">
         <p className="text-[10px] text-white uppercase tracking-[0.4em]">
            RESPUESTA INMEDIATA VÍA WHATSAPP
         </p>
      </div>
    </form>
  );
}