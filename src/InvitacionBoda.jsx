import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Music, Gift, ChevronDown, Send, CheckCircle } from 'lucide-react';

const InvitacionBoda = () => {
  // --- Estado para la Cuenta Regresiva ---
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  // FECHA DEL EVENTO
  const eventDate = new Date("2026-12-31T18:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // --- Estado para el formulario RSVP ---
  const [formData, setFormData] = useState({ name: '', guests: 1, message: '' });
  const [rsvpStatus, setRsvpStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRsvpStatus('submitting');
    setTimeout(() => {
      setRsvpStatus('success');
    }, 1500);
  };

  const scrollToRSVP = () => {
    document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans selection:bg-rose-200">

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-90"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF7]" />
        </div>

        <div className="relative z-10 text-white space-y-6 animate-fade-in-up">
          <p className="text-lg md:text-xl tracking-[0.2em] uppercase font-light opacity-90">
            ¡Nos Casamos!
          </p>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight drop-shadow-lg">
            Sofia &amp; Mateo
          </h1>
          <div className="flex items-center justify-center gap-4 text-lg md:text-2xl font-light mt-4">
            <span>31</span>
            <span className="h-px w-8 bg-white/60"></span>
            <span>DIC</span>
            <span className="h-px w-8 bg-white/60"></span>
            <span>2026</span>
          </div>

          <button
            onClick={scrollToRSVP}
            className="mt-12 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
          >
            Confirmar Asistencia
          </button>
        </div>

        <div className="absolute bottom-10 animate-bounce text-white/70">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* --- CUENTA REGRESIVA --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-slate-700 mb-12">Solo faltan...</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <CountdownItem value={timeLeft.dias} label="Días" />
            <CountdownItem value={timeLeft.horas} label="Horas" />
            <CountdownItem value={timeLeft.minutos} label="Min" />
            <CountdownItem value={timeLeft.segundos} label="Seg" />
          </div>
        </div>
      </section>

      {/* --- DETALLES DEL EVENTO --- */}
      <section className="py-24 bg-[#F7F5F2] px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <DetailCard
            icon={<Calendar className="w-8 h-8 text-rose-400" />}
            title="¿Cuándo?"
            content="Jueves, 31 de Diciembre"
            subContent="2026"
          />

          <DetailCard
            icon={<Clock className="w-8 h-8 text-rose-400" />}
            title="Hora"
            content="Ceremonia: 5:00 PM"
            subContent="Recepción: 7:00 PM"
          />

          <DetailCard
            icon={<MapPin className="w-8 h-8 text-rose-400" />}
            title="¿Dónde?"
            content="Hacienda Las Flores"
            subContent="Carretera Nacional, Km 25"
            link="#"
          />

        </div>
      </section>

      {/* --- CODIGO DE VESTIMENTA & REGALOS --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-stone-100 text-center shadow-sm">
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-rose-50 rounded-full"><Gift className="w-6 h-6 text-rose-400" /></span>
            </div>
            <h3 className="text-2xl font-serif mb-4">Mesa de Regalos</h3>
            <p className="text-slate-600 mb-4">Su presencia es nuestro mejor regalo. Si desean tener un detalle, pueden consultar nuestras opciones.</p>
            <button className="text-rose-500 font-medium hover:text-rose-600 underline decoration-rose-200 decoration-2 underline-offset-4">
              Ver sugerencias
            </button>
          </div>

          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-stone-100 text-center shadow-sm">
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-rose-50 rounded-full"><Music className="w-6 h-6 text-rose-400" /></span>
            </div>
            <h3 className="text-2xl font-serif mb-4">Código de Vestimenta</h3>
            <p className="text-slate-600">
              <strong>Etiqueta Rigurosa</strong><br />
              Hombres: Smoking o Traje Oscuro<br />
              Mujeres: Vestido Largo
            </p>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO RSVP --- */}
      <section id="rsvp-section" className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>

        <div className="max-w-lg mx-auto relative z-10 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <Heart className="w-10 h-10 text-rose-400 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl font-serif mb-2">RSVP</h2>
            <p className="text-slate-300">Por favor confirma tu asistencia antes del 1 de Diciembre</p>
          </div>

          {rsvpStatus === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-serif mb-2">¡Confirmación Recibida!</h3>
              <p className="text-slate-300">Gracias por acompañarnos en este día especial.</p>
              <button
                onClick={() => setRsvpStatus('idle')}
                className="mt-6 text-sm text-rose-300 hover:text-rose-200 underline"
              >
                Enviar otra respuesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white placeholder-slate-500 transition-colors"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Número de Adultos</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white [&>option]:text-slate-900 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Mensaje (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white placeholder-slate-500 transition-colors"
                  placeholder="¿Alguna alergia alimentaria?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={rsvpStatus === 'submitting'}
                className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {rsvpStatus === 'submitting' ? (
                  <>Enviando...</>
                ) : (
                  <>Confirmar Asistencia <Send size={18} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center bg-[#FDFBF7] text-slate-500 text-sm">
        <p className="font-serif italic text-lg mb-2">Sofia & Mateo</p>
        <p>Te esperamos con mucha ilusión.</p>
      </footer>
    </div>
  );
};

// --- Subcomponentes ---

const CountdownItem = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100 shadow-sm mb-3">
      <span className="text-2xl md:text-3xl font-serif text-rose-500 font-medium">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">{label}</span>
  </div>
);

const DetailCard = ({ icon, title, content, subContent, link }) => (
  <div className="flex flex-col items-center p-6 transition-transform hover:-translate-y-1 duration-300">
    <div className="mb-6 p-4 bg-white rounded-full shadow-sm border border-stone-100">
      {icon}
    </div>
    <h3 className="text-xl font-serif text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 font-medium">{content}</p>
    {subContent && <p className="text-slate-500">{subContent}</p>}
    {link && (
      <a href={link} className="mt-4 text-sm text-rose-500 font-medium border-b border-rose-300 pb-0.5 hover:text-rose-600">
        Ver en mapa
      </a>
    )}
  </div>
);

export default InvitacionBoda;