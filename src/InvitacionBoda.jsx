import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, Music, Gift, ChevronDown, Send, CheckCircle, ArrowLeft } from 'lucide-react';

const InvitacionBoda = () => {
  const navigate = useNavigate();
  // --- Countdown ---
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
  const eventDate = new Date("2026-12-31T18:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  // --- RSVP ---
  const [formData, setFormData] = useState({ name: '', guests: 1, message: '' });
  const [rsvpStatus, setRsvpStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRsvpStatus('submitting');
    setTimeout(() => setRsvpStatus('success'), 1500);
  };

  const scrollToRSVP = () => document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });

  // --- Polaroid Gallery ---
  const stackRef = useRef(null);
  useEffect(() => {
    const stack = stackRef.current;
    if (!stack || stack.children.length === 0) return;
    const interval = setInterval(() => {
      const topCard = stack.lastElementChild;
      if (!topCard) return;
      topCard.classList.add('fly-out');
      setTimeout(() => {
        stack.prepend(topCard);
        topCard.classList.remove('fly-out');
        void topCard.offsetWidth;
      }, 600);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-boda-cream text-boda-text font-montserrat selection:bg-boda-accent/30">

      {/* --- BOTÓN VOLVER --- */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-md text-sm font-medium text-slate-700 rounded-full shadow-lg border border-slate-200/60 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
      >
        <ArrowLeft size={16} />
        <span>Volver al inicio</span>
      </button>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-boda-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-boda-cream" />
        </div>

        <div className="relative z-10 text-white space-y-6 animate-fade-in-up">
          <p className="text-lg md:text-xl tracking-[0.25em] uppercase font-light opacity-90">
            ¡Nos Casamos!
          </p>
          <h1 className="text-6xl md:text-8xl font-vibes tracking-wide drop-shadow-lg">
            Sofia & Mateo
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
            className="mt-12 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white hover:text-boda-dark transition-all duration-300 transform hover:scale-105"
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
          <h2 className="text-3xl font-vibes text-boda-primary mb-12">¡Falta poco!</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <CountdownCircle value={timeLeft.dias} label="Días" />
            <CountdownCircle value={timeLeft.horas} label="Horas" />
            <CountdownCircle value={timeLeft.minutos} label="Min" />
            <CountdownCircle value={timeLeft.segundos} label="Seg" />
          </div>
        </div>
      </section>

      {/* --- DETALLES DEL EVENTO --- */}
      <section className="py-24 bg-boda-cream px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-vibes text-boda-primary mb-4">Detalles</h2>
            <Divider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <DetailCard
              icon={<Calendar className="w-7 h-7 text-boda-primary" />}
              title="¿Cuándo?"
              content="Jueves, 31 de Diciembre"
              subContent="2026"
            />
            <DetailCard
              icon={<Clock className="w-7 h-7 text-boda-primary" />}
              title="Hora"
              content="Ceremonia: 5:00 PM"
              subContent="Recepción: 7:00 PM"
            />
            <DetailCard
              icon={<MapPin className="w-7 h-7 text-boda-primary" />}
              title="¿Dónde?"
              content="Hacienda Las Flores"
              subContent="Carretera Nacional, Km 25"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* --- DRESS CODE & REGALOS --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-boda-cream p-8 rounded-2xl border border-boda-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-white rounded-full shadow-sm"><Gift className="w-6 h-6 text-boda-primary" /></span>
            </div>
            <h3 className="text-2xl font-vibes text-boda-dark mb-4">Mesa de Regalos</h3>
            <p className="text-boda-gray">Su presencia es nuestro mejor regalo. Si desean tener un detalle, pueden consultar nuestras opciones.</p>
            <button className="mt-4 text-boda-primary font-medium hover:text-boda-accent underline decoration-boda-accent/30 decoration-2 underline-offset-4 transition-colors">
              Ver sugerencias
            </button>
          </div>

          <div className="bg-boda-cream p-8 rounded-2xl border border-boda-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <span className="p-3 bg-white rounded-full shadow-sm"><Music className="w-6 h-6 text-boda-primary" /></span>
            </div>
            <h3 className="text-2xl font-vibes text-boda-dark mb-4">Código de Vestimenta</h3>
            <p className="text-boda-gray">
              <strong className="text-boda-text">Etiqueta Rigurosa</strong><br />
              Hombres: Smoking o Traje Oscuro<br />
              Mujeres: Vestido Largo
            </p>
          </div>
        </div>
      </section>

      {/* --- GALERÍA POLAROID --- */}
      <section className="py-24 bg-boda-cream overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-vibes text-boda-primary mb-4">Nuestra Historia</h2>
          <Divider />
        </div>
        <div className="polaroid-stack-container">
          <div className="polaroid-stack" ref={stackRef}>
            <div className="polaroid-card">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" alt="Foto 1" />
              <p className="caption">El inicio</p>
            </div>
            <div className="polaroid-card">
              <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop" alt="Foto 2" />
              <p className="caption">Nuestro viaje</p>
            </div>
            <div className="polaroid-card">
              <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" alt="Foto 3" />
              <p className="caption">¡Sí, quiero!</p>
            </div>
            <div className="polaroid-card">
              <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop" alt="Foto 4" />
              <p className="caption">Para siempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORMULARIO RSVP --- */}
      <section id="rsvp-section" className="py-24 px-4 bg-boda-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>

        <div className="max-w-lg mx-auto relative z-10 bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <img src="/img/heart.png" alt="heart" className="w-10 h-10 object-contain mx-auto mb-4 animate-pulse-soft" />
            <h2 className="text-4xl font-vibes mb-2">Confirmar</h2>
            <p className="text-white/60">Por favor confirma tu asistencia antes del 1 de Diciembre</p>
          </div>

          {rsvpStatus === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-vibes mb-2">¡Confirmación Recibida!</h3>
              <p className="text-white/60">Gracias por acompañarnos en este día especial.</p>
              <button onClick={() => setRsvpStatus('idle')} className="mt-6 text-sm text-boda-accent hover:text-white underline transition-colors">
                Enviar otra respuesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Nombre Completo</label>
                <input
                  type="text" name="name" required
                  value={formData.name} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-boda-accent focus:ring-1 focus:ring-boda-accent text-white placeholder-white/30 transition-colors"
                  placeholder="Ej. Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Número de Adultos</label>
                <select
                  name="guests" value={formData.guests} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-boda-accent focus:ring-1 focus:ring-boda-accent text-white [&>option]:text-boda-dark transition-colors"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-1">Mensaje (Opcional)</label>
                <textarea
                  name="message" value={formData.message} onChange={handleInputChange} rows="3"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-boda-accent focus:ring-1 focus:ring-boda-accent text-white placeholder-white/30 transition-colors"
                  placeholder="¿Alguna alergia alimentaria?"
                ></textarea>
              </div>
              <button
                type="submit" disabled={rsvpStatus === 'submitting'}
                className="w-full py-4 bg-boda-primary hover:bg-boda-accent text-white rounded-lg font-medium tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {rsvpStatus === 'submitting' ? 'Enviando...' : (<>Confirmar Asistencia <Send size={18} /></>)}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center bg-boda-cream border-t border-boda-accent/20">
        <p className="font-vibes text-2xl text-boda-primary mb-2">Sofia & Mateo</p>
        <p className="text-boda-gray text-sm">Te esperamos con mucha ilusión.</p>
      </footer>
    </div>
  );
};

// --- Subcomponentes ---

const Divider = () => (
  <div className="flex items-center justify-center gap-3">
    <span className="h-px w-12 bg-boda-accent/40"></span>
    <span className="w-2 h-2 rounded-full bg-boda-primary/40"></span>
    <span className="h-px w-12 bg-boda-accent/40"></span>
  </div>
);

const CountdownCircle = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="countdown-circle bg-boda-primary text-white" style={{ width: 72, height: 72 }}>
      <span className="text-2xl font-bold leading-none">{String(value).padStart(2, '0')}</span>
      <span className="text-[0.65rem] uppercase mt-0.5 opacity-80">{label}</span>
    </div>
  </div>
);

const DetailCard = ({ icon, title, content, subContent, link }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-boda-accent/15 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className="mb-5 p-4 bg-boda-light rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-vibes text-boda-dark mb-3">{title}</h3>
    <p className="text-boda-text font-medium">{content}</p>
    {subContent && <p className="text-boda-gray">{subContent}</p>}
    {link && (
      <a href={link} className="mt-4 text-sm text-boda-primary font-medium border-b border-boda-accent/30 pb-0.5 hover:text-boda-accent transition-colors">
        Ver en mapa
      </a>
    )}
  </div>
);

export default InvitacionBoda;