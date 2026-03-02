import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Gift, CheckCircle, Send, ArrowLeft } from 'lucide-react';

const InvitacionBautizo = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', guests: 1 });
    const [rsvpStatus, setRsvpStatus] = useState('idle');

    // --- Countdown ---
    const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    const eventDate = new Date("2026-10-12T10:00:00").getTime();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const scrollToRSVP = () => document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });

    const galleryPhotos = [
        { url: "https://images.unsplash.com/photo-1478798868346-68cef4fe6c9d?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "Recién nacido" },
        { url: "https://images.unsplash.com/photo-1685458249588-9b9fe0f5b2e8?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "3 meses" },
        { url: "https://images.unsplash.com/photo-1544117988-c8707480115f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "6 meses" },
        { url: "https://plus.unsplash.com/premium_photo-1664372356812-fbeb0850a835?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "¡Mi bautizo!" },
    ];

    return (
        <div className="min-h-screen bg-bautizo-cream text-bautizo-text font-montserrat selection:bg-bautizo-accent/30">

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
                {/* Background Decorations */}
                <div className="absolute top-20 left-10 text-bautizo-accent animate-pulse-soft">
                    <Star size={48} fill="currentColor" className="opacity-40" />
                </div>
                <div className="absolute bottom-40 right-10 text-bautizo-accent animate-bounce-slow">
                    <Star size={28} fill="currentColor" className="opacity-30" />
                </div>
                <div className="absolute top-32 right-16 text-bautizo-accent/30 animate-pulse">
                    <Star size={24} fill="currentColor" />
                </div>

                <div className="relative z-10 space-y-6 animate-fade-in-up max-w-2xl">
                    <div className="inline-block p-2 px-5 bg-white rounded-full text-bautizo-primary font-bold uppercase text-xs tracking-widest shadow-sm mb-4">
                        Mi Bautizo
                    </div>
                    <h1 className="text-6xl md:text-8xl font-vibes text-bautizo-dark leading-tight">
                        Santiago
                    </h1>

                    {/* Imagen del bebé — reemplaza /img/bautizo-hero.png con tu imagen */}
                    <div className="flex justify-center my-4">
                        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-bautizo-accent/30 shadow-xl ring-4 ring-white">
                            <img
                                src="https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Santiago"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <p className="text-lg md:text-xl text-bautizo-primary italic font-serif">
                        "Hoy recibo la luz de Dios en mi corazón"
                    </p>

                    <div className="flex items-center justify-center gap-4 text-bautizo-dark font-medium mt-8 text-lg">
                        <span>Domingo</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-bautizo-accent"></span>
                        <span>12 de Octubre, 2026</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-bautizo-accent"></span>
                        <span>10:00 AM</span>
                    </div>

                    <button
                        onClick={scrollToRSVP}
                        className="mt-10 px-8 py-3 bg-bautizo-primary text-white rounded-full font-medium hover:bg-bautizo-accent transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        Acompáñanos
                    </button>
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-white/40"></div>
                </div>
            </header>

            {/* --- CUENTA REGRESIVA — Cajas redondeadas --- */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-vibes text-bautizo-primary mb-2">¡Falta poco!</h2>
                    <div className="mb-10"><Divider /></div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <CountdownBox value={timeLeft.dias} label="Días" />
                        <CountdownBox value={timeLeft.horas} label="Horas" />
                        <CountdownBox value={timeLeft.minutos} label="Minutos" />
                        <CountdownBox value={timeLeft.segundos} label="Segundos" />
                    </div>
                </div>
            </section>

            {/* --- INFO CARDS --- */}
            <section className="py-20 px-4 bg-bautizo-cream">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-vibes text-bautizo-primary mb-4">Detalles</h2>
                        <Divider />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Church */}
                        <div className="bg-white p-8 rounded-2xl text-center border border-bautizo-accent/15 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-16 h-16 bg-bautizo-light rounded-full flex items-center justify-center mb-4">
                                <Star size={28} className="text-bautizo-primary" fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-vibes text-bautizo-dark mb-2">Ceremonia Religiosa</h3>
                            <p className="text-bautizo-text font-medium">Parroquia San Francisco</p>
                            <p className="text-bautizo-gray">Calle Principal #123</p>
                            <p className="text-bautizo-primary font-bold mt-3">10:00 AM</p>
                        </div>

                        {/* Reception */}
                        <div className="bg-white p-8 rounded-2xl text-center border border-bautizo-accent/15 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-16 h-16 bg-bautizo-light rounded-full flex items-center justify-center mb-4">
                                <Gift size={28} className="text-bautizo-primary" />
                            </div>
                            <h3 className="text-2xl font-vibes text-bautizo-dark mb-2">Recepción</h3>
                            <p className="text-bautizo-text font-medium">Jardín Los Olivos</p>
                            <p className="text-bautizo-gray">Av. Las Palmas #456</p>
                            <p className="text-bautizo-primary font-bold mt-3">12:30 PM</p>
                        </div>
                    </div>

                    {/* Padrinos Quote */}
                    <div className="text-center mt-16 max-w-2xl mx-auto animate-fade-in">
                        <Divider />
                        <p className="font-serif italic text-xl text-bautizo-gray mt-6">
                            "Los padrinos: Juan y María, agradecen su compañía en este día tan especial."
                        </p>
                    </div>
                </div>
            </section>

            {/* --- GALERÍA — Grid 2×2 --- */}
            <section className="py-20 px-4 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-vibes text-bautizo-primary mb-4">Momentos</h2>
                    <Divider />
                </div>
                <div className="gallery-grid">
                    {galleryPhotos.map((photo, i) => (
                        <div key={i} className="gallery-grid-card">
                            <img src={photo.url} alt={photo.label} />
                            <div className="label bg-white/70 text-bautizo-dark">{photo.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- RSVP --- */}
            <section id="rsvp-section" className="py-20 px-4 bg-bautizo-cream">
                <div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-bautizo-accent/15">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-vibes text-bautizo-primary mb-2">Confirmación</h2>
                        <p className="text-bautizo-gray">Ayúdanos a preparar todo para ti.</p>
                    </div>

                    {rsvpStatus === 'success' ? (
                        <div className="text-center py-8 animate-fade-in">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-bautizo-dark mb-2">¡Gracias!</h3>
                            <p className="text-bautizo-gray">Nos vemos en el bautizo.</p>
                            <button onClick={() => setRsvpStatus('idle')} className="mt-4 text-sm text-bautizo-primary hover:text-bautizo-accent underline transition-colors">Volver al formulario</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-bautizo-dark mb-1 ml-1">Nombre</label>
                                <input
                                    type="text" name="name" required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-bautizo-light/50 border border-bautizo-accent/20 rounded-xl focus:outline-none focus:border-bautizo-primary focus:ring-1 focus:ring-bautizo-primary text-bautizo-text transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-bautizo-dark mb-1 ml-1">Personas</label>
                                <select
                                    className="w-full px-4 py-3 bg-bautizo-light/50 border border-bautizo-accent/20 rounded-xl focus:outline-none focus:border-bautizo-primary focus:ring-1 focus:ring-bautizo-primary text-bautizo-text transition-colors"
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                >
                                    <option value="1">1 Adulto</option>
                                    <option value="2">2 Adultos</option>
                                    <option value="3">2 Adultos + 1 Niño</option>
                                    <option value="4">Familia (4)</option>
                                </select>
                            </div>
                            <button
                                type="submit" disabled={rsvpStatus === 'submitting'}
                                className="w-full py-3 bg-bautizo-primary hover:bg-bautizo-accent text-white rounded-xl font-bold shadow-md transition-all mt-4 flex items-center justify-center gap-2"
                            >
                                {rsvpStatus === 'submitting' ? 'Confirmando...' : (<>Confirmar Asistencia <Send size={16} /></>)}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <footer className="py-8 text-center bg-white text-bautizo-gray text-sm border-t border-bautizo-accent/15">
                <p className="font-vibes text-xl text-bautizo-primary mb-1">Santiago</p>
                <p>Bautizo • 2026</p>
            </footer>
        </div>
    );
};

// --- Subcomponentes ---

const Divider = () => (
    <div className="flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-bautizo-accent/40"></span>
        <Star size={14} className="text-bautizo-accent/60" fill="currentColor" />
        <span className="h-px w-12 bg-bautizo-accent/40"></span>
    </div>
);

/* Rounded Soft Boxes */
const CountdownBox = ({ value, label }) => (
    <div className="bg-bautizo-light border border-bautizo-accent/20 rounded-2xl px-5 py-4 min-w-[80px] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
        <span className="block text-3xl md:text-4xl font-bold text-bautizo-primary leading-none">
            {String(value).padStart(2, '0')}
        </span>
        <span className="block text-[0.65rem] uppercase text-bautizo-gray tracking-widest mt-1.5">{label}</span>
    </div>
);

export default InvitacionBautizo;
