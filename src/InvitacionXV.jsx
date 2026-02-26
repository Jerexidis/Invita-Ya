import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Gift, ChevronDown, Send, CheckCircle, Crown, Sparkles, Church, ChevronLeft, ChevronRight } from 'lucide-react';

const InvitacionXV = () => {
    const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    const eventDate = new Date("2026-08-15T20:00:00").getTime();

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

    const [formData, setFormData] = useState({ name: '', guests: 1 });
    const [rsvpStatus, setRsvpStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const scrollToRSVP = () => document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });

    const galleryImages = [
        { url: "https://images.unsplash.com/photo-1762922572186-3ec569f54c2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Mis primeros pasos" },
        { url: "https://images.unsplash.com/photo-1614366559478-edf9d1cc4719?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Creciendo feliz" },
        { url: "https://images.unsplash.com/photo-1721069103861-480bf1337510?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Mis sueños" },
        { url: "https://images.unsplash.com/photo-1721069118889-13b854aae301?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "Una nueva etapa" },
        { url: "https://images.unsplash.com/photo-1476834333517-979117ad6f83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", caption: "¡Mis XV!" },
    ];

    // Gallery scroll controls
    const scrollGallery = (direction) => {
        const el = document.getElementById('xv-gallery-scroll');
        if (el) el.scrollBy({ left: direction * 300, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-xv-cream text-xv-text font-montserrat selection:bg-xv-accent/30">

            {/* --- HERO SECTION --- */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1721069119611-6933d8817344?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Fondo floral elegante"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-xv-dark/45" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-xv-cream" />
                </div>

                <div className="relative z-10 space-y-4 animate-fade-in-up">
                    <div className="flex items-center justify-center gap-3 text-xv-accent text-2xl tracking-[0.5em]">
                        <span>✦</span>
                        <Crown className="w-8 h-8" />
                        <span>✦</span>
                    </div>

                    <p className="text-lg md:text-xl tracking-[0.3em] uppercase font-light text-white/90">
                        Mis XV Años
                    </p>

                    <h1 className="text-6xl md:text-8xl text-white tracking-wide drop-shadow-lg font-vibes">
                        Valentina
                    </h1>

                    <div className="flex items-center justify-center gap-4 mt-2">
                        <span className="h-px w-16 bg-xv-accent/60"></span>
                        <Sparkles className="w-5 h-5 text-xv-accent" />
                        <span className="h-px w-16 bg-xv-accent/60"></span>
                    </div>

                    <p className="text-white/80 italic text-lg md:text-xl max-w-md mx-auto mt-2 font-serif">
                        "Hoy dejo atrás mi niñez y doy la bienvenida a una nueva etapa de mi vida"
                    </p>

                    <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-light mt-4 text-white">
                        <span>15</span>
                        <span className="h-px w-8 bg-white/50"></span>
                        <span>Agosto</span>
                        <span className="h-px w-8 bg-white/50"></span>
                        <span>2026</span>
                    </div>

                    <button
                        onClick={scrollToRSVP}
                        className="mt-10 px-10 py-3.5 bg-white/15 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white hover:text-xv-dark transition-all duration-300 transform hover:scale-105 tracking-widest uppercase text-sm"
                    >
                        Confirmar Asistencia
                    </button>
                </div>

                <div className="absolute bottom-10 animate-bounce text-white/50">
                    <ChevronDown size={32} />
                </div>
            </header>

            {/* --- MENSAJE / PADRES --- */}
            <section className="py-20 px-4 bg-xv-cream">
                <div className="max-w-3xl mx-auto text-center">
                    <Divider />
                    <p className="text-xl md:text-2xl italic text-xv-gray leading-relaxed mt-8 font-serif">
                        Con la bendición de Dios y de mis padres
                    </p>
                    <p className="text-lg text-xv-text mt-4">
                        <strong>Sr. Roberto García & Sra. María López de García</strong>
                    </p>
                    <p className="text-xv-gray mt-2">
                        tienen el honor de invitarle a la celebración de los XV años de su hija
                    </p>
                    <h2 className="text-4xl md:text-5xl text-xv-primary mt-6 mb-4 font-vibes">
                        Valentina
                    </h2>
                </div>
            </section>

            {/* --- COUNTDOWN — Números elegantes serif --- */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-vibes text-xv-primary mb-2">Faltan...</h2>
                    <div className="mb-14"><Divider /></div>
                    <div className="flex flex-wrap justify-center items-baseline gap-8 md:gap-12">
                        <CountdownElegant value={timeLeft.dias} label="Días" />
                        <span className="text-xv-accent/40 text-3xl font-light mb-6">:</span>
                        <CountdownElegant value={timeLeft.horas} label="Horas" />
                        <span className="text-xv-accent/40 text-3xl font-light mb-6">:</span>
                        <CountdownElegant value={timeLeft.minutos} label="Min" />
                        <span className="text-xv-accent/40 text-3xl font-light mb-6">:</span>
                        <CountdownElegant value={timeLeft.segundos} label="Seg" />
                    </div>
                </div>
            </section>

            {/* --- DETALLES DEL EVENTO --- */}
            <section className="py-24 bg-xv-cream px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-vibes text-xv-primary mb-4">Detalles del Evento</h2>
                        <Divider />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-xv-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-xv-light rounded-full">
                                    <Church className="w-8 h-8 text-xv-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-vibes text-xv-dark mb-1">Ceremonia Religiosa</h3>
                            <p className="text-xv-gray text-sm mb-4">Misa de Acción de Gracias</p>
                            <div className="space-y-2">
                                <p className="text-xv-text font-medium">Parroquia del Sagrado Corazón</p>
                                <p className="text-sm text-xv-gray">Av. Constitución #456</p>
                                <p className="text-xv-primary font-medium mt-3">6:00 PM</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-xv-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-xv-light rounded-full">
                                    <Sparkles className="w-8 h-8 text-xv-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-vibes text-xv-dark mb-1">Recepción</h3>
                            <p className="text-xv-gray text-sm mb-4">Celebración y Baile</p>
                            <div className="space-y-2">
                                <p className="text-xv-text font-medium">Salón "Real de los Ángeles"</p>
                                <p className="text-sm text-xv-gray">Av. Revolución 1234</p>
                                <p className="text-xv-primary font-medium mt-3">8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-8 rounded-2xl border border-xv-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-xv-light rounded-full">
                                    <Crown className="w-7 h-7 text-xv-accent" />
                                </div>
                            </div>
                            <h3 className="text-xl font-vibes text-xv-dark mb-3">Código de Vestimenta</h3>
                            <p className="text-xv-text font-medium">Formal / Etiqueta</p>
                            <p className="text-sm text-xv-gray mt-2">Evitar color blanco y rosa pastel</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-xv-accent/20 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-xv-light rounded-full">
                                    <Gift className="w-7 h-7 text-xv-accent" />
                                </div>
                            </div>
                            <h3 className="text-xl font-vibes text-xv-dark mb-3">Mesa de Regalos</h3>
                            <p className="text-xv-gray">Tu presencia es el mejor regalo.</p>
                            <button className="mt-3 text-xv-primary font-medium hover:text-xv-accent underline decoration-xv-accent/30 decoration-2 underline-offset-4 text-sm transition-colors">
                                Ver sugerencias
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GALERÍA — Scroll Horizontal --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-vibes text-xv-primary mb-4">Galería</h2>
                    <Divider />
                </div>

                {/* Desktop arrows */}
                <div className="relative max-w-5xl mx-auto">
                    <button
                        onClick={() => scrollGallery(-1)}
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-xv-primary hover:bg-xv-light transition-colors"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scrollGallery(1)}
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg items-center justify-center text-xv-primary hover:bg-xv-light transition-colors"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div id="xv-gallery-scroll" className="gallery-scroll">
                        {galleryImages.map((img, i) => (
                            <div key={i} className="gallery-scroll-card shadow-md">
                                <img src={img.url} alt={img.caption} />
                                <div className="overlay">{img.caption}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-xv-gray text-sm mt-4 md:hidden">← Desliza para ver más →</p>
            </section>

            {/* --- RSVP --- */}
            <section id="rsvp-section" className="py-24 px-4 bg-xv-cream relative">
                <div className="max-w-lg mx-auto relative z-10 bg-white p-8 md:p-12 rounded-3xl border border-xv-accent/20 shadow-xl">
                    <div className="text-center mb-8">
                        <Divider />
                        <h2 className="text-3xl font-vibes text-xv-primary mt-4 mb-2">Confirmación</h2>
                        <p className="text-xv-gray">Por favor confirma tu asistencia antes del 1 de Agosto</p>
                    </div>

                    {rsvpStatus === 'success' ? (
                        <div className="text-center py-12 animate-fade-in">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-vibes text-xv-dark mb-2">¡Confirmado!</h3>
                            <p className="text-xv-gray">Gracias por acompañarme en este día tan especial.</p>
                            <button onClick={() => setRsvpStatus('idle')} className="mt-6 text-sm text-xv-primary hover:text-xv-accent underline transition-colors">Nueva respuesta</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-xv-text mb-1.5">Nombre Completo</label>
                                <input
                                    type="text" name="name" required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-xv-light/50 border border-xv-accent/20 rounded-xl focus:outline-none focus:border-xv-primary focus:ring-1 focus:ring-xv-primary text-xv-text placeholder-xv-gray/50 transition-all"
                                    placeholder="Ej. María González"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-xv-text mb-1.5">Número de Acompañantes</label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-xv-light/50 border border-xv-accent/20 rounded-xl focus:outline-none focus:border-xv-primary focus:ring-1 focus:ring-xv-primary text-xv-text transition-all"
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit" disabled={rsvpStatus === 'submitting'}
                                className="w-full py-4 bg-xv-primary hover:bg-xv-accent text-white rounded-xl font-medium tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg"
                            >
                                {rsvpStatus === 'submitting' ? 'Enviando...' : (<>Confirmar Asistencia <Send size={16} /></>)}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 text-center bg-white border-t border-xv-accent/20">
                <Divider />
                <p className="text-2xl text-xv-primary mt-4 mb-1 font-vibes">Valentina</p>
                <p className="text-xv-gray text-sm tracking-widest uppercase">XV Años • 2026</p>
                <p className="text-xv-gray text-xs mt-4 italic">Te esperamos con mucho cariño</p>
            </footer>
        </div>
    );
};

// --- Subcomponentes ---

const Divider = () => (
    <div className="flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-xv-accent/40"></span>
        <Sparkles className="w-4 h-4 text-xv-accent/60" />
        <span className="h-px w-12 bg-xv-accent/40"></span>
    </div>
);

/* Elegant Large Serif Numbers */
const CountdownElegant = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <span className="text-5xl md:text-6xl font-serif font-light text-xv-primary leading-none tracking-tight">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-xv-gray tracking-[0.2em] mt-2">{label}</span>
    </div>
);

export default InvitacionXV;
