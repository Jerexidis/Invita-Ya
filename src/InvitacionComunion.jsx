import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Send, ArrowLeft, MapPin, Clock, Heart } from 'lucide-react';

/* ============================================================
   INVITACIÓN DEMO — Primera Comunión
   Paleta: Blanco / Crema / Dorado (temas claros y sagrados)
   ============================================================ */

const InvitacionComunion = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', guests: '1' });
    const [rsvpStatus, setRsvpStatus] = useState('idle');

    const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    const eventDate = new Date('2026-09-06T11:00:00').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const distance = eventDate - Date.now();
            if (distance < 0) { clearInterval(timer); return; }
            setTimeLeft({
                dias: Math.floor(distance / 86400000),
                horas: Math.floor((distance % 86400000) / 3600000),
                minutos: Math.floor((distance % 3600000) / 60000),
                segundos: Math.floor((distance % 60000) / 1000),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [eventDate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const galleryPhotos = [
        { url: 'https://images.unsplash.com/photo-1721862650499-a8b77860567b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Mi bautizo' },
        { url: 'https://images.unsplash.com/photo-1661274765524-20669dc4091b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Mi Presentación' },
        { url: 'https://images.unsplash.com/photo-1614144477821-9daf217ae100?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Mi familia' },
        { url: 'https://images.unsplash.com/photo-1760328249118-68f323e0ecbb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Mi gran día' },
    ];

    return (
        <div className="min-h-screen bg-comunion-cream text-comunion-text font-montserrat selection:bg-comunion-softgold/40">

            {/* BOTÓN VOLVER */}
            <button
                id="btn-volver-comunion"
                onClick={() => navigate('/')}
                className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-comunion-accent/40 rounded-full text-comunion-dark text-sm font-semibold hover:bg-white hover:shadow-md transition-all duration-300 shadow-sm"
            >
                <ArrowLeft size={15} />
                Regresar
            </button>

            {/* ══════════════════════════════════════════
                HERO — Crema / Blanco con dorado
            ══════════════════════════════════════════ */}
            <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">

                {/* Fondo suave degradado crema */}
                <div className="absolute inset-0 bg-gradient-to-b from-comunion-cream via-white to-comunion-light pointer-events-none" />

                {/* Patrón decorativo muy sutil en crema */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26 0h8v26H60v8H34v26h-8V34H0v-8h26z' fill='%23C9A84C'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />

                {/* Círculos de luz dorada */}
                <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-comunion-softgold/20 blur-3xl pointer-events-none" />
                <div className="absolute bottom-24 left-16 w-48 h-48 rounded-full bg-comunion-softgold/15 blur-2xl pointer-events-none" />

                {/* Cruces decorativas */}
                <div className="absolute top-16 left-10 text-comunion-accent/25 animate-bounce-slow text-4xl select-none"><CrossIcon /></div>
                <div className="absolute top-28 right-14 text-comunion-accent/20 animate-pulse-soft text-2xl select-none">✦</div>
                <div className="absolute bottom-36 left-14 text-comunion-accent/20 animate-pulse text-xl select-none">✦</div>
                <div className="absolute bottom-20 right-10 text-comunion-accent/25 animate-bounce-slow text-3xl select-none"><CrossIcon /></div>

                {/* Línea decorativa superior */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-comunion-gold to-transparent opacity-60" />

                <div className="relative z-10 space-y-5 animate-fade-in-up max-w-xl">
                    {/* Badge dorado */}
                    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-comunion-gold/50 bg-comunion-gold/10 text-comunion-primary text-xs uppercase tracking-widest font-bold">
                        <span className="text-comunion-gold flex items-center"><CrossIcon /></span>
                        Primera Comunión
                        <span className="text-comunion-gold flex items-center"><CrossIcon /></span>
                    </div>

                    {/* Nombre */}
                    <h1 className="text-6xl md:text-8xl font-vibes text-comunion-dark leading-tight">
                        Mateo Alejandro
                    </h1>

                    {/* Foto circular con marco dorado */}
                    <div className="flex justify-center my-3">
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-full border border-comunion-gold/40 animate-pulse-soft" />
                            <div className="absolute -inset-6 rounded-full border border-comunion-gold/15" />
                            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-[3px] border-comunion-gold/70 shadow-xl shadow-comunion-gold/20">
                                <img
                                    src="https://images.unsplash.com/photo-1601788596176-616078143086?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Mateo Alejandro"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Versículo */}
                    <p className="text-comunion-gray italic font-playfair text-base md:text-lg leading-relaxed">
                        "Dejad que los niños vengan a mí, y no se lo impidáis,<br />
                        porque de los que son como estos es el reino de Dios."
                    </p>
                    <p className="text-comunion-accent text-xs tracking-widest uppercase font-semibold">— Marcos 10:14</p>

                    {/* Fecha */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-comunion-dark font-semibold text-sm mt-3">
                        <span>Sábado</span>
                        <GoldDot />
                        <span>6 de Septiembre, 2026</span>
                        <GoldDot />
                        <span>11:00 AM</span>
                    </div>

                    {/* CTA */}
                    <button
                        id="btn-rsvp-hero"
                        onClick={() => document.getElementById('rsvp-comunion').scrollIntoView({ behavior: 'smooth' })}
                        className="mt-4 px-8 py-3 bg-comunion-gold text-white rounded-full font-bold text-sm tracking-wide hover:bg-comunion-primary transition-all duration-300 shadow-md shadow-comunion-gold/30 hover:-translate-y-0.5"
                    >
                        Confirmar Asistencia
                    </button>
                </div>

                {/* Línea decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-comunion-gold/40 to-transparent" />
            </header>

            {/* ══════════════════════════════════════════
                CUENTA REGRESIVA
            ══════════════════════════════════════════ */}
            <section className="py-16 px-4 bg-comunion-cream">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-vibes text-comunion-primary mb-1">¡Falta poco!</h2>
                    <GoldDivider />
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
                        {[
                            { value: timeLeft.dias, label: 'Días' },
                            { value: timeLeft.horas, label: 'Horas' },
                            { value: timeLeft.minutos, label: 'Minutos' },
                            { value: timeLeft.segundos, label: 'Segundos' },
                        ].map(({ value, label }) => (
                            <div key={label} className="min-w-[80px] text-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white border-2 border-comunion-gold/30 rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                                    <span className="text-3xl md:text-4xl font-bold text-comunion-primary leading-none">
                                        {String(value).padStart(2, '0')}
                                    </span>
                                    <span className="text-[0.6rem] uppercase tracking-widest text-comunion-gray mt-1">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                MENSAJE PERSONAL
            ══════════════════════════════════════════ */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-comunion-light border-2 border-comunion-gold/30 shadow-sm">
                        <Heart size={24} className="text-comunion-gold" fill="currentColor" />
                    </div>
                    <h2 className="text-4xl font-vibes text-comunion-primary mb-1">Con todo mi amor</h2>
                    <GoldDivider />
                    <p className="mt-6 text-comunion-gray font-playfair italic text-lg leading-loose">
                        Hoy, con el corazón lleno de fe y alegría,<br />
                        recibo por primera vez a Jesús en mi corazón.<br />
                        Quiero que seas parte de este día tan importante,<br />
                        porque tu presencia lo hace aún más especial.
                    </p>
                    <p className="mt-5 font-vibes text-3xl text-comunion-accent">Con cariño, Mateo</p>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                DETALLES DEL EVENTO
            ══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-comunion-light">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-vibes text-comunion-primary mb-1">Detalles del Día</h2>
                        <GoldDivider />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <EventCard
                            icon="⛪"
                            title="Santa Misa"
                            venue="Parroquia Nuestra Señora del Carmen"
                            address="Av. Constitución #210, Centro"
                            time="11:00 AM"
                            accent="Ceremonia Religiosa"
                        />
                        <EventCard
                            icon="🎊"
                            title="Festejo"
                            venue="Jardín Villa Real"
                            address="Blvd. Las Flores #789, Fracc. Jardines"
                            time="1:30 PM"
                            accent="Recepción y Fiesta"
                        />
                    </div>

                    {/* Padrinos */}
                    <div className="mt-12 text-center">
                        <GoldDivider />
                        <p className="mt-6 font-playfair italic text-comunion-gray text-base">
                            Padrinos de Honor:{' '}
                            <span className="font-semibold text-comunion-dark not-italic">Roberto y Elena Vásquez</span>
                        </p>
                        <p className="text-comunion-gray text-sm mt-1">
                            Quienes con amor han guiado mis primeros pasos en la fe.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                GALERÍA — Bento asimétrico
            ══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-vibes text-comunion-primary mb-1">Mis Momentos</h2>
                    <GoldDivider />
                    <p className="text-comunion-gray text-xs mt-3 uppercase tracking-widest">Pasa el cursor sobre las fotos</p>
                </div>

                <div className="gallery-bento">
                    {/* Foto ancha — arriba izquierda */}
                    <div className="gallery-bento-card gallery-bento-card--wide">
                        <img src={galleryPhotos[0].url} alt={galleryPhotos[0].label} />
                        <div className="gallery-bento-label">{galleryPhotos[0].label}</div>
                    </div>

                    {/* Foto alta — columna derecha, ambas filas */}
                    <div className="gallery-bento-card gallery-bento-card--tall">
                        <img src={galleryPhotos[1].url} alt={galleryPhotos[1].label} />
                        <div className="gallery-bento-label">{galleryPhotos[1].label}</div>
                    </div>

                    {/* Foto pequeña — abajo izquierda */}
                    <div className="gallery-bento-card gallery-bento-card--sm-left">
                        <img src={galleryPhotos[2].url} alt={galleryPhotos[2].label} />
                        <div className="gallery-bento-label">{galleryPhotos[2].label}</div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                RSVP — Crema con card blanca
            ══════════════════════════════════════════ */}
            <section id="rsvp-comunion" className="py-20 px-4 bg-comunion-cream">
                {/* Franja dorada decorativa arriba */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-comunion-gold/50 to-transparent mb-16" />

                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-block text-2xl mb-2">✦</div>
                        <h2 className="text-4xl font-vibes text-comunion-primary mb-1">¿Nos acompañas?</h2>
                        <p className="text-comunion-gray text-sm">Confirma tu asistencia antes del 25 de Agosto.</p>
                    </div>

                    <div className="bg-white border border-comunion-gold/25 rounded-3xl p-8 shadow-lg shadow-comunion-gold/10">
                        {rsvpStatus === 'success' ? (
                            <div className="text-center py-8 animate-fade-in">
                                <div className="w-16 h-16 bg-comunion-light rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-comunion-gold/30">
                                    <CheckCircle className="w-8 h-8 text-comunion-gold" />
                                </div>
                                <h3 className="text-2xl font-vibes text-comunion-primary mb-2">¡Gracias!</h3>
                                <p className="text-comunion-gray text-sm flex items-center justify-center gap-1">Nos vemos el 6 de septiembre. 🙏<CrossIcon className="w-3 h-3 text-comunion-gold" /></p>
                                <button
                                    onClick={() => setRsvpStatus('idle')}
                                    className="mt-5 text-sm text-comunion-accent hover:text-comunion-primary underline transition-colors"
                                >
                                    Volver al formulario
                                </button>
                            </div>
                        ) : (
                            <form id="form-rsvp-comunion" onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-comunion-gray uppercase tracking-widest mb-1.5 ml-1">
                                        Tu nombre
                                    </label>
                                    <input
                                        type="text" required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Nombre completo"
                                        className="w-full px-4 py-3 bg-comunion-cream border border-comunion-gold/25 rounded-xl text-comunion-dark placeholder:text-comunion-gray/50 focus:outline-none focus:border-comunion-gold focus:ring-1 focus:ring-comunion-gold/30 transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-comunion-gray uppercase tracking-widest mb-1.5 ml-1">
                                        Asistentes
                                    </label>
                                    <select
                                        value={formData.guests}
                                        onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                        className="w-full px-4 py-3 bg-comunion-cream border border-comunion-gold/25 rounded-xl text-comunion-dark focus:outline-none focus:border-comunion-gold focus:ring-1 focus:ring-comunion-gold/30 transition-colors text-sm"
                                    >
                                        <option value="1">1 persona</option>
                                        <option value="2">2 personas</option>
                                        <option value="3">3 personas</option>
                                        <option value="4">Familia (4+)</option>
                                    </select>
                                </div>
                                <button
                                    id="btn-submit-rsvp"
                                    type="submit"
                                    disabled={rsvpStatus === 'submitting'}
                                    className="w-full py-3 bg-comunion-gold text-white rounded-xl font-bold text-sm tracking-wide hover:bg-comunion-primary transition-all shadow-md shadow-comunion-gold/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                                >
                                    {rsvpStatus === 'submitting'
                                        ? 'Confirmando...'
                                        : (<>Confirmar Asistencia <Send size={15} /></>)
                                    }
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-comunion-gold/50 to-transparent mt-16" />
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center bg-white border-t border-comunion-gold/15">
                <p className="font-vibes text-3xl text-comunion-primary mb-1">Mateo Alejandro</p>
                <p className="text-comunion-gray text-xs uppercase tracking-widest">Primera Comunión · Septiembre 2026</p>
                <p className="mt-4 text-comunion-gray/40 text-xs">Hecho con ❤ en Invita-Ya</p>
            </footer>
        </div>
    );
};

/* ── Subcomponentes ── */

const GoldDot = () => (
    <span className="w-1.5 h-1.5 rounded-full bg-comunion-gold inline-block" />
);

const GoldDivider = () => (
    <div className="flex items-center justify-center gap-3 mt-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-comunion-gold/50" />
        <span className="text-comunion-gold text-sm">✦</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-comunion-gold/50" />
    </div>
);

const EventCard = ({ icon, title, venue, address, time, accent }) => (
    <div className="bg-white rounded-2xl p-7 text-center border border-comunion-gold/20 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
        <div className="text-4xl mb-3">{icon}</div>
        <span className="text-[0.65rem] uppercase tracking-widest text-comunion-gold font-bold mb-1">{accent}</span>
        <h3 className="text-2xl font-vibes text-comunion-dark mb-3">{title}</h3>
        <div className="space-y-1 text-sm">
            <p className="flex items-center gap-1.5 text-comunion-text font-semibold justify-center">
                <MapPin size={13} className="text-comunion-accent" />{venue}
            </p>
            <p className="text-comunion-gray">{address}</p>
            <p className="flex items-center gap-1.5 text-comunion-primary font-bold justify-center mt-2">
                <Clock size={13} />{time}
            </p>
        </div>
    </div>
);

const CrossIcon = ({ className = "w-[1em] h-[1em]" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`}>
        <path d="M10.5 2h3v5.5H19v3h-5.5V22h-3v-11.5H5v-3h5.5V2z" />
    </svg>
);

export default InvitacionComunion;
