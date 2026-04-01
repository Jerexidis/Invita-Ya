import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Smartphone, MousePointer, Globe, Check, Star, Menu, X, ArrowRight, Mail, Send, Sparkles, Image, Clock, Users, Share2, Monitor } from 'lucide-react';

import mockWeb from './assets/mocks/Web.png';
import mockMovil from './assets/mocks/movil.PNG';

const LandingPageContent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [contactName, setContactName] = useState('');
    const [eventType, setEventType] = useState('');
    const [contactMessage, setContactMessage] = useState('');
    const navigate = useNavigate();

    // ---- WhatsApp Integration ----
    const WHATSAPP_NUMBER = '524491120621';

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const eventLabels = { boda: 'Boda', xv: 'XV Años', bautizo: 'Bautizo / Baby Shower', cumple: 'Cumpleaños', otro: 'Otro Evento' };
        const lines = [
            '¡Hola! 👋 Me gustaría cotizar una invitación digital.',
            '',
            '✨ Datos de mi evento:',
            `• Nombre: ${contactName || 'No especificado'}`,
            `• Tipo de evento: ${eventLabels[eventType] || 'No especificado'}`,
            contactMessage ? `• Detalles adicionales: ${contactMessage}` : '',
            '',
            'Quedo pendiente de la información 🤍'
        ].filter(Boolean);
        const text = encodeURIComponent(lines.join('\n'));
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-white font-sans text-invita-text">

            {/* --- NAVBAR --- */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-invita-cream">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <img src="/img/heart.png" alt="Invita-Ya" className="w-6 h-6 object-contain" />
                            <span className="text-2xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <span style={{ fontWeight: 800 }} className="text-invita-dark">INVITA-</span><span style={{ fontWeight: 600 }} className="text-invita-rosa">YA.</span>
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-invita-gray hover:text-invita-heart font-medium transition-colors">Contenido</a>
                            <a href="#precios" className="text-invita-gray hover:text-invita-heart font-medium transition-colors">Precios</a>
                            <a href="#demo" className="text-invita-gray hover:text-invita-heart font-medium transition-colors">Ejemplos</a>
                            <a href="#contact" className="text-invita-gray hover:text-invita-heart font-medium transition-colors">Contáctanos</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-invita-gray">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-invita-cream p-4 shadow-lg absolute w-full">
                        <div className="flex flex-col space-y-4">
                            <a href="#features" className="text-invita-gray font-medium" onClick={() => setIsMenuOpen(false)}>Contenido</a>
                            <a href="#precios" className="text-invita-gray font-medium" onClick={() => setIsMenuOpen(false)}>Precios</a>
                            <a href="#demo" className="text-invita-gray font-medium" onClick={() => setIsMenuOpen(false)}>Ejemplos</a>
                            <a href="#contact" className="text-invita-gray font-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    <div className="md:w-1/2 text-center md:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase">
                            <Star size={14} className="fill-invita-heart" /> La tendencia de 2026
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif text-invita-dark leading-[1.1]">
                            Invitaciones que tus invitados <span className="text-transparent bg-clip-text bg-gradient-to-r from-invita-heart to-invita-rosa">amarán</span>.
                        </h1>
                        <p className="text-xl text-invita-gray leading-relaxed max-w-lg mx-auto md:mx-0">
                            Olvídate del papel. Crea experiencias digitales interactivas con confirmación de asistencia (RSVP) en tiempo real, mapas y galerías de fotos.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-invita-dark text-white rounded-full hover:bg-invita-text transition-all font-medium flex items-center justify-center gap-2">
                                Ver Ejemplos <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-rose-100 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>

                        <div className="flex items-end justify-center scale-100 sm:scale-110 md:scale-100 lg:scale-[1.35] origin-bottom">
                            {/* Desktop / Laptop mockup */}
                            <div className="relative z-10 w-full bg-gray-500 rounded-lg sm:rounded-xl shadow-2xl border border-gray-600 overflow-hidden">
                                {/* Browser top bar */}
                                <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-600">
                                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400"></span>
                                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400"></span>
                                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400"></span>
                                    <span className="ml-2 sm:ml-3 flex-1 bg-gray-400 rounded-md h-4 sm:h-5 text-[8px] sm:text-[10px] text-gray-200 flex items-center px-1.5 sm:px-2">invita-ya.com</span>
                                </div>
                                <img
                                    src={mockWeb}
                                    alt="Vista web de invitación"
                                    className="w-full object-cover object-top"
                                />
                            </div>

                            {/* Mobile mockup - overlapping the desktop */}
                            <div className="relative z-20 -ml-6 sm:-ml-8 md:-ml-10 mb-0 w-[15%] min-w-[50px] bg-gray-500 rounded-[0.4rem] sm:rounded-[0.6rem] shadow-2xl border-2 border-gray-500 overflow-hidden scale-y-[1.15] origin-bottom">
                                {/* Phone notch */}
                                <div className="flex justify-center py-0.5 bg-gray-500 shrink-0">
                                    <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
                                </div>
                                <img
                                    src={mockMovil}
                                    alt="Vista móvil de invitación"
                                    className="w-full block"
                                />
                            </div>
                        </div>

                        {/* Floating Badge - outside scaled container */}
                        <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 z-30 bg-white p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 animate-bounce-slow">
                            <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                                <Check size={16} className="text-green-600 sm:hidden" />
                                <Check size={20} className="text-green-600 hidden sm:block" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm sm:text-base">RSVP Recibido</p>
                                <p className="text-[10px] sm:text-xs text-slate-500">hace 2 minutos</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- FEATURES --- */}
            <section id="features" className="py-24 bg-invita-cream">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">Todo lo que necesitas en un solo link</h2>
                        <p className="text-invita-gray max-w-2xl mx-auto">Tus invitados tendrán toda la información a la mano, actualizada y accesible desde cualquier dispositivo.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Smartphone className="text-invita-heart" size={32} />}
                            title="100% Responsivo"
                            desc="Diseño adaptable que se ve increíble en iPhone, Android, tablets y computadoras de escritorio."
                        />
                        <FeatureCard
                            icon={<MousePointer className="text-invita-rosa" size={32} />}
                            title="RSVP Inteligente"
                            desc="Recibe confirmaciones al instante en tu panel de control o por WhatsApp. Olvídate de perseguir invitados."
                        />
                        <FeatureCard
                            icon={<Globe className="text-invita-dark" size={32} />}
                            title="Mapas y Ubicación"
                            desc="Integración directa con Google Maps y Waze para que nadie se pierda camino a la fiesta."
                        />
                    </div>
                </div>
            </section>

            {/* --- PRICING --- */}
            <section id="precios" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                            <Sparkles size={14} className="fill-invita-heart" /> Precio único
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">Tu invitación digital completa</h2>
                        <p className="text-invita-gray max-w-2xl mx-auto">Un solo pago, sin costos ocultos. Todo lo que necesitas para invitar con estilo.</p>
                    </div>

                    <div className="bg-invita-cream rounded-3xl p-8 md:p-12 border border-invita-rosa/15 shadow-sm relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-invita-heart/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-invita-rosa/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                            {/* Price */}
                            <div className="text-center lg:text-left lg:w-2/5 space-y-4">
                                <div className="flex items-baseline justify-center lg:justify-start gap-1">
                                    <span className="text-6xl md:text-7xl font-extrabold text-invita-dark" style={{ fontFamily: "'Montserrat', sans-serif" }}>$299</span>
                                    <span className="text-xl text-invita-gray font-medium">MXN</span>
                                </div>
                                <p className="text-invita-gray text-sm">por invitación · pago único</p>
                                <button
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className="mt-4 w-full sm:w-auto px-8 py-4 bg-invita-dark text-white rounded-full hover:bg-invita-text transition-all font-medium flex items-center justify-center gap-2 mx-auto lg:mx-0"
                                >
                                    Pide la tuya <ArrowRight size={18} />
                                </button>
                            </div>

                            {/* Divider */}
                            <div className="hidden lg:block w-px h-64 bg-invita-rosa/20"></div>
                            <div className="lg:hidden w-full h-px bg-invita-rosa/20"></div>

                            {/* What's included */}
                            <div className="lg:w-3/5">
                                <h3 className="text-sm font-bold text-invita-dark uppercase tracking-widest mb-6">¿Qué incluye?</h3>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    <PricingFeature icon={<Sparkles size={18} />} text="Diseño personalizado" />
                                    <PricingFeature icon={<MousePointer size={18} />} text="RSVP en tiempo real" />
                                    <PricingFeature icon={<Globe size={18} />} text="Mapa con Google Maps / Waze" />
                                    <PricingFeature icon={<Image size={18} />} text="Galería de fotos" />
                                    <PricingFeature icon={<Clock size={18} />} text="Cuenta regresiva animada" />
                                    
                                    
                                    <PricingFeature icon={<Monitor size={18} />} text="100% responsivo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DEMO MOCKUP --- */}
            <section id="demo" className="py-24 bg-invita-cream">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">¿Listo para ver cómo luce?</h2>
                        <p className="text-invita-gray max-w-2xl mx-auto">
                            Ofrecemos diseños personalizados para Bodas, XV Años, Bautizos y Cumpleaños.
                            Elige tu estilo y nosotros hacemos el resto.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Boda Card */}
                        <div
                            onClick={() => navigate("/demo/boda")}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <div className="h-48 rounded-xl mb-4 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Boda" />
                                <span className="absolute top-3 left-3 bg-white/90 text-invita-dark px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">Demo</span>
                            </div>
                            <h3 className="text-xl font-bold text-invita-dark mb-1">Boda Botánica</h3>
                            <p className="text-invita-gray text-sm">Estilo minimalista con un toque verdoso</p>
                        </div>

                        {/* XV Años Card */}
                        <div
                            onClick={() => navigate("/demo/xv")}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <div className="h-48 rounded-xl mb-4 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1721069118889-13b854aae301?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="XV" />
                                <span className="absolute top-3 left-3 bg-white/90 text-invita-dark px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">Demo</span>
                            </div>
                            <h3 className="text-xl font-bold text-invita-dark mb-1">XV Años Elegante</h3>
                            <p className="text-invita-gray text-sm">Diseño clásico y refinado.</p>
                        </div>

                        {/* Bautizo Card */}
                        <div
                            onClick={() => navigate("/demo/bautizo")}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                        >
                            <div className="h-48 rounded-xl mb-4 overflow-hidden relative">
                                <img src="https://plus.unsplash.com/premium_photo-1664372356812-fbeb0850a835?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Bautizo" />
                                <span className="absolute top-3 left-3 bg-white/90 text-invita-dark px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">Demo</span>
                            </div>
                            <h3 className="text-xl font-bold text-invita-dark mb-1">Bautizo Celestial</h3>
                            <p className="text-invita-gray text-sm">Tonos pastel suaves y delicados.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CONTACT --- */}
            <section id="contact" className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left side - Text */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <span className="text-invita-heart font-bold text-xs tracking-widest uppercase mb-4 block">Hablemos hoy</span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-invita-dark leading-tight">Hablemos de tu evento</h2>
                            <p className="text-invita-gray text-lg leading-relaxed max-w-md">
                                Estamos listos para ayudarte a crear la invitación perfecta. Cuéntanos tu idea y nos pondremos en contacto contigo vía WhatsApp de inmediato.
                            </p>

                        </div>

                        {/* Right side - Form */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-invita-cream p-8 md:p-10 rounded-2xl border border-invita-rosa/15 shadow-sm">
                                <form onSubmit={handleWhatsApp} className="space-y-6">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-invita-dark mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={contactName}
                                            onChange={(e) => setContactName(e.target.value)}
                                            placeholder="Tu nombre completo"
                                            className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text placeholder:text-invita-gray"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="event-type" className="block text-sm font-medium text-invita-dark mb-2">Tipo de Evento</label>
                                        <select
                                            id="event-type"
                                            name="event-type"
                                            required
                                            value={eventType}
                                            onChange={(e) => setEventType(e.target.value)}
                                            className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text appearance-none"
                                        >
                                            <option value="" disabled>Selecciona una opción</option>
                                            <option value="boda">Boda</option>
                                            <option value="xv">XV Años</option>
                                            <option value="bautizo">Bautizo / Baby Shower</option>
                                            <option value="cumple">Cumpleaños</option>
                                            <option value="otro">Otro Evento</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-invita-dark mb-2">Mensaje <span className="text-invita-gray font-normal">(opcional)</span></label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows="4"
                                            value={contactMessage}
                                            onChange={(e) => setContactMessage(e.target.value)}
                                            placeholder="Cuéntanos sobre tu evento..."
                                            className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text placeholder:text-invita-gray resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200/60 flex items-center justify-center gap-3 group"
                                    >
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
                                        </svg>
                                        <span>Enviar por WhatsApp</span>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-invita-dark text-invita-gray py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                        {/* Brand */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/img/heart.png" alt="Invita-Ya" className="w-5 h-5 object-contain" />
                                <span className="text-xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                    <span style={{ fontWeight: 800 }} className="text-white">INVITA-</span><span style={{ fontWeight: 600 }} className="text-invita-rosa">YA.</span>
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-70 max-w-xs">
                                Haciendo que tus momentos especiales comiencen desde el primer click.
                            </p>
                        </div>

                        {/* Contacto */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Contacto</h4>
                            <a href="mailto:invitaya.ags@gmail.com" className="flex items-center gap-3 text-sm hover:text-invita-rosa transition-colors group">
                                <div className="w-9 h-9 rounded-lg bg-invita-text/50 flex items-center justify-center group-hover:bg-invita-rosa/20 transition-colors">
                                    <Mail size={16} />
                                </div>
                                invitaya.ags@gmail.com
                            </a>
                            <a href={`https://api.whatsapp.com/send/?phone=524491120621&text=${encodeURIComponent('¡Hola! 😊 Me interesa una invitación digital')}&type=phone_number&app_absent=0`} className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors group">
                                <div className="w-9 h-9 rounded-lg bg-invita-text/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                    {/* WhatsApp icon */}
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
                                    </svg>
                                </div>
                                +52 449 112 0621
                            </a>
                        </div>

                        {/* Redes Sociales */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Síguenos</h4>
                            <div className="flex items-center gap-3">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=61588011047453" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/30">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/invitaya.mx/" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                {/* WhatsApp */}
                                <a href={`https://api.whatsapp.com/send/?phone=524491120621&text=${encodeURIComponent('¡Hola! 😊 Me interesa una invitación digital')}&type=phone_number&app_absent=0`} aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-invita-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs opacity-50">© 2026 Invita-Ya. Todos los derechos reservados.</p>

                    </div>
                </div>
            </footer>



        </div>
    );
};

// --- Subcomponentes ---

const FeatureCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="bg-invita-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-invita-dark mb-3">{title}</h3>
        <p className="text-invita-gray leading-relaxed">{desc}</p>
    </div>
);

const PricingFeature = ({ icon, text }) => (
    <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-invita-heart shadow-sm">
            {icon}
        </div>
        <span className="text-invita-dark font-medium text-sm">{text}</span>
    </div>
);

export default LandingPageContent;
