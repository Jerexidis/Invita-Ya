import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Gift, ChevronDown, Send, CheckCircle, Crown, Sparkles, Church } from 'lucide-react';

const InvitacionXV = () => {
    const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
    const eventDate = new Date("2026-08-15T20:00:00").getTime();

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

    const [formData, setFormData] = useState({ name: '', guests: 1 });
    const [rsvpStatus, setRsvpStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const scrollToRSVP = () => document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });

    const galleryImages = [
        {
            url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070&auto=format&fit=crop",
            alt: "Rosas elegantes"
        },
        {
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            alt: "Decoración de evento"
        },
        {
            url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop",
            alt: "Salón de fiesta"
        },
        {
            url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
            alt: "Celebración elegante"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDF8F4] text-slate-800 selection:bg-rose-200" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

            {/* --- HERO SECTION --- */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop"
                        alt="Fondo floral elegante"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDF8F4]" />
                </div>

                <div className="relative z-10 space-y-4 animate-fade-in-up">
                    {/* Ornamento superior */}
                    <div className="flex items-center justify-center gap-3 text-amber-200 text-2xl tracking-[0.5em]">
                        <span>✦</span>
                        <Crown className="w-8 h-8" />
                        <span>✦</span>
                    </div>

                    <p className="text-lg md:text-xl tracking-[0.3em] uppercase font-light text-white/90">
                        Mis XV Años
                    </p>

                    <h1 className="text-6xl md:text-8xl text-white tracking-wide drop-shadow-lg" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
                        Valentina
                    </h1>

                    {/* Línea decorativa */}
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <span className="h-px w-16 bg-amber-300/60"></span>
                        <Sparkles className="w-5 h-5 text-amber-300" />
                        <span className="h-px w-16 bg-amber-300/60"></span>
                    </div>

                    <p className="text-white/80 italic text-lg md:text-xl max-w-md mx-auto mt-2">
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
                        className="mt-10 px-10 py-3.5 bg-white/15 backdrop-blur-md border border-white/40 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 tracking-widest uppercase text-sm"
                    >
                        Confirmar Asistencia
                    </button>
                </div>

                <div className="absolute bottom-10 animate-bounce text-white/50">
                    <ChevronDown size={32} />
                </div>
            </header>

            {/* --- MENSAJE / FRASE --- */}
            <section className="py-20 px-4 bg-[#FDF8F4]">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-8 text-rose-300">
                        <span className="h-px w-12 bg-rose-200"></span>
                        <Crown className="w-6 h-6" />
                        <span className="h-px w-12 bg-rose-200"></span>
                    </div>
                    <p className="text-xl md:text-2xl italic text-slate-600 leading-relaxed">
                        Con la bendición de Dios y de mis padres
                    </p>
                    <p className="text-lg text-slate-500 mt-4">
                        <strong className="text-slate-700">Sr. Roberto García & Sra. María López de García</strong>
                    </p>
                    <p className="text-slate-500 mt-2">
                        tienen el honor de invitarle a la celebración de los XV años de su hija
                    </p>
                    <h2 className="text-4xl md:text-5xl text-rose-400 mt-6 mb-4" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>
                        Valentina
                    </h2>
                </div>
            </section>

            {/* --- COUNTDOWN --- */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl text-slate-700 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Faltan...</h2>
                    <div className="flex items-center justify-center gap-3 mb-12 text-rose-300">
                        <span className="h-px w-12 bg-rose-200"></span>
                        <Sparkles className="w-4 h-4" />
                        <span className="h-px w-12 bg-rose-200"></span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <CountdownItem value={timeLeft.dias} label="Días" />
                        <CountdownItem value={timeLeft.horas} label="Horas" />
                        <CountdownItem value={timeLeft.minutos} label="Min" />
                        <CountdownItem value={timeLeft.segundos} label="Seg" />
                    </div>
                </div>
            </section>

            {/* --- DETALLES DEL EVENTO --- */}
            <section className="py-24 bg-[#FDF8F4] px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl text-slate-700 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Detalles del Evento</h2>
                        <div className="flex items-center justify-center gap-3 text-rose-300">
                            <span className="h-px w-12 bg-rose-200"></span>
                            <Sparkles className="w-4 h-4" />
                            <span className="h-px w-12 bg-rose-200"></span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Ceremonia Religiosa */}
                        <div className="bg-white p-8 rounded-2xl border border-rose-100 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-rose-50 rounded-full">
                                    <Church className="w-8 h-8 text-rose-400" />
                                </div>
                            </div>
                            <h3 className="text-xl text-slate-800 mb-1" style={{ fontFamily: "'Georgia', serif" }}>Ceremonia Religiosa</h3>
                            <p className="text-slate-500 text-sm mb-4">Misa de Acción de Gracias</p>
                            <div className="space-y-2 text-slate-600">
                                <p className="font-medium">Parroquia del Sagrado Corazón</p>
                                <p className="text-sm text-slate-500">Av. Constitución #456</p>
                                <p className="text-rose-400 font-medium mt-3">6:00 PM</p>
                            </div>
                        </div>

                        {/* Recepción */}
                        <div className="bg-white p-8 rounded-2xl border border-rose-100 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-rose-50 rounded-full">
                                    <Sparkles className="w-8 h-8 text-rose-400" />
                                </div>
                            </div>
                            <h3 className="text-xl text-slate-800 mb-1" style={{ fontFamily: "'Georgia', serif" }}>Recepción</h3>
                            <p className="text-slate-500 text-sm mb-4">Celebración y Baile</p>
                            <div className="space-y-2 text-slate-600">
                                <p className="font-medium">Salón "Real de los Ángeles"</p>
                                <p className="text-sm text-slate-500">Av. Revolución 1234</p>
                                <p className="text-rose-400 font-medium mt-3">8:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Vestimenta y Mesa de Regalos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white p-8 rounded-2xl border border-rose-100 text-center shadow-sm">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-amber-50 rounded-full">
                                    <Crown className="w-7 h-7 text-amber-500" />
                                </div>
                            </div>
                            <h3 className="text-xl text-slate-800 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Código de Vestimenta</h3>
                            <p className="text-slate-600">
                                <strong>Formal / Etiqueta</strong>
                            </p>
                            <p className="text-sm text-slate-500 mt-2">Evitar color blanco y rosa pastel</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-rose-100 text-center shadow-sm">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-amber-50 rounded-full">
                                    <Gift className="w-7 h-7 text-amber-500" />
                                </div>
                            </div>
                            <h3 className="text-xl text-slate-800 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Mesa de Regalos</h3>
                            <p className="text-slate-600">Tu presencia es el mejor regalo.</p>
                            <button className="mt-3 text-rose-400 font-medium hover:text-rose-500 underline decoration-rose-200 decoration-2 underline-offset-4 text-sm">
                                Ver sugerencias
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GALERÍA --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-3xl text-slate-700 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Galería</h2>
                    <div className="flex items-center justify-center gap-3 text-rose-300">
                        <span className="h-px w-12 bg-rose-200"></span>
                        <Sparkles className="w-4 h-4" />
                        <span className="h-px w-12 bg-rose-200"></span>
                    </div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-8 snap-x mx-4 px-4" style={{ scrollbarWidth: 'none' }}>
                    {galleryImages.map((img, i) => (
                        <div key={i} className="flex-none w-72 h-96 bg-rose-50 rounded-2xl overflow-hidden relative snap-center transform hover:scale-[1.03] transition-transform duration-500 shadow-sm hover:shadow-lg border border-rose-100">
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* --- RSVP --- */}
            <section id="rsvp-section" className="py-24 px-4 bg-[#FDF8F4] relative">
                <div className="max-w-lg mx-auto relative z-10 bg-white p-8 md:p-12 rounded-3xl border border-rose-100 shadow-xl">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-3 mb-4 text-rose-300">
                            <span className="h-px w-8 bg-rose-200"></span>
                            <Crown className="w-8 h-8 text-rose-400" />
                            <span className="h-px w-8 bg-rose-200"></span>
                        </div>
                        <h2 className="text-3xl text-slate-700 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Confirmación</h2>
                        <p className="text-slate-500">Por favor confirma tu asistencia antes del 1 de Agosto</p>
                    </div>

                    {rsvpStatus === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-10 h-10 text-green-400" />
                            </div>
                            <h3 className="text-2xl text-slate-700 mb-2" style={{ fontFamily: "'Georgia', serif" }}>¡Confirmado!</h3>
                            <p className="text-slate-500">Gracias por acompañarme en este día tan especial.</p>
                            <button onClick={() => setRsvpStatus('idle')} className="mt-6 text-sm text-rose-400 hover:text-rose-500 underline">Nueva respuesta</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-1.5">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 text-slate-700 placeholder-slate-400 transition-all"
                                    placeholder="Ej. María González"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-600 mb-1.5">Número de Acompañantes</label>
                                <select
                                    value={formData.guests}
                                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-rose-50/50 border border-rose-100 rounded-xl focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 text-slate-700 transition-all"
                                >
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                disabled={rsvpStatus === 'submitting'}
                                className="w-full py-4 bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white rounded-xl font-medium tracking-wide transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-rose-200/50"
                            >
                                {rsvpStatus === 'submitting' ? (
                                    'Enviando...'
                                ) : (
                                    <>Confirmar Asistencia <Send size={16} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="py-12 text-center bg-white border-t border-rose-100">
                <div className="flex items-center justify-center gap-3 mb-4 text-rose-300">
                    <span className="h-px w-8 bg-rose-200"></span>
                    <Sparkles className="w-4 h-4" />
                    <span className="h-px w-8 bg-rose-200"></span>
                </div>
                <p className="text-2xl text-rose-400 mb-1" style={{ fontFamily: "'Georgia', serif", fontStyle: 'italic' }}>Valentina</p>
                <p className="text-slate-400 text-sm tracking-widest uppercase">XV Años • 2026</p>
                <p className="text-slate-400 text-xs mt-4 italic">Te esperamos con mucho cariño</p>
            </footer>
        </div>
    );
};

const CountdownItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-rose-50 rounded-2xl flex items-center justify-center border border-rose-100 shadow-sm mb-3">
            <span className="text-3xl text-rose-400 font-light" style={{ fontFamily: "'Georgia', serif" }}>
                {String(value).padStart(2, '0')}
            </span>
        </div>
        <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">{label}</span>
    </div>
);

export default InvitacionXV;
