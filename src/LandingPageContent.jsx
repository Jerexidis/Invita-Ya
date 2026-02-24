import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Smartphone, Heart, MousePointer, Globe, Check, Star, Menu, X, ArrowRight, Mail, Send } from 'lucide-react';

const LandingPageContent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* --- NAVBAR --- */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-2">
                            <Heart className="text-rose-500 fill-rose-500" size={24} />
                            <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
                                Invita-Ya
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-rose-500 font-medium transition-colors">Características</a>
                            <a href="#demo" className="text-slate-600 hover:text-rose-500 font-medium transition-colors">Demos</a>
                            <a href="#contact" className="text-slate-600 hover:text-rose-500 font-medium transition-colors">Contacto</a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full">
                        <div className="flex flex-col space-y-4">
                            <a href="#features" className="text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Características</a>
                            <a href="#demo" className="text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Demos</a>
                            <a href="#contact" className="text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    <div className="md:w-1/2 text-center md:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold tracking-wide uppercase">
                            <Star size={14} className="fill-rose-600" /> La tendencia de 2026
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[1.1]">
                            Invitaciones que tus invitados <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-300">amarán</span>.
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                            Olvídate del papel. Crea experiencias digitales interactivas con confirmación de asistencia (RSVP) en tiempo real, mapas y galerías de fotos.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all font-medium flex items-center justify-center gap-2">
                                Ver Ejemplos <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="Cliente" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Cliente" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="Cliente" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            </div>
                            <p>+500 parejas felices</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-rose-100 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
                            alt="Vista previa invitacion en movil"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border-8 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow">
                            <div className="bg-green-100 p-2 rounded-full">
                                <Check size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">RSVP Recibido</p>
                                <p className="text-xs text-slate-500">hace 2 minutos</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- FEATURES --- */}
            <section id="features" className="py-24 bg-slate-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Todo lo que necesitas en un solo link</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Tus invitados tendrán toda la información a la mano, actualizada y accesible desde cualquier dispositivo.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Smartphone className="text-rose-500" size={32} />}
                            title="100% Responsivo"
                            desc="Diseño adaptable que se ve increíble en iPhone, Android, tablets y computadoras de escritorio."
                        />
                        <FeatureCard
                            icon={<MousePointer className="text-purple-500" size={32} />}
                            title="RSVP Inteligente"
                            desc="Recibe confirmaciones al instante en tu panel de control o por WhatsApp. Olvídate de perseguir invitados."
                        />
                        <FeatureCard
                            icon={<Globe className="text-blue-500" size={32} />}
                            title="Mapas y Ubicación"
                            desc="Integración directa con Google Maps y Waze para que nadie se pierda camino a la fiesta."
                        />
                    </div>
                </div>
            </section>

            {/* --- DEMO MOCKUP --- */}
            <section id="demo" className="py-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] p-8 md:p-20 text-center relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[2.5rem]">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">¿Listo para ver cómo luce?</h2>
                        <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                            Ofrecemos diseños personalizados para Bodas, XV Años, Bautizos y Cumpleaños.
                            Elige tu estilo y nosotros hacemos el resto.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                            {/* Boda Card */}
                            <div
                                onClick={() => navigate("/demo/boda")}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <div className="h-48 bg-slate-800 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Boda" />
                                    <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">Elegante</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Colección Boda Botánica</h3>
                                <p className="text-slate-400 text-sm">Estilo minimalista con toques florales.</p>
                            </div>

                            {/* XV Años Card */}
                            <div
                                onClick={() => navigate("/demo/xv")}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <div className="h-48 bg-rose-100 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="XV" />
                                    <span className="absolute top-4 left-4 bg-rose-400/80 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">Elegante</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">XV Años Elegante</h3>
                                <p className="text-slate-400 text-sm">Diseño clásico y refinado.</p>
                            </div>

                            {/* Bautizo Card */}
                            <div
                                onClick={() => navigate("/demo/bautizo")}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <div className="h-48 bg-sky-900 rounded-xl mb-4 overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="Bautizo" />
                                    <span className="absolute top-4 left-4 bg-sky-500/80 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">Tierno</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Bautizo Celestial</h3>
                                <p className="text-slate-400 text-sm">Tonos pastel suaves y delicados.</p>
                            </div>
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
                            <span className="text-rose-500 font-bold text-xs tracking-widest uppercase mb-4 block">Hablemos hoy</span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">¿Hablemos de tu evento?</h2>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                Estamos listos para ayudarte a crear la invitación perfecta. Cuéntanos tu idea y nos pondremos en contacto contigo vía WhatsApp de inmediato.
                            </p>
                        
                        </div>

                        {/* Right side - Form */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Tu nombre completo"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="event-type" className="block text-sm font-medium text-slate-700 mb-2">Tipo de Evento</label>
                                        <select
                                            id="event-type"
                                            name="event-type"
                                            defaultValue=""
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all outline-none text-slate-900 appearance-none"
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
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            placeholder="¿Cómo podemos ayudarte?"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400 resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="button"
                                        className="w-full py-4 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 transition-all shadow-lg shadow-rose-200/60 flex items-center justify-center gap-3 group"
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
            <footer className="bg-slate-900 text-slate-300 py-12 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="text-rose-500 fill-rose-500" size={20} />
                            <span className="text-xl font-serif font-bold text-white">Invita-Ya</span>
                        </div>
                        <p className="text-sm opacity-70">
                            Haciendo que tus momentos especiales comiencen desde el primer clic.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Producto</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#demo" className="hover:text-rose-400">Plantillas</a></li>
                            <li><a href="#contact" className="hover:text-rose-400">Contacto</a></li>
                            <li><a href="#" className="hover:text-rose-400">Ejemplos Reales</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Compañía</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-rose-400">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-rose-400">Contacto</a></li>
                            <li><a href="#" className="hover:text-rose-400">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <a href="mailto:invitaya.ags@gmail.com" className="flex items-center gap-2 text-sm hover:text-rose-400 mb-2">
                            <Mail size={16} /> invitaya.ags@gmail.com
                        </a>
                        <button className="mt-4 w-full py-2 bg-white/10 rounded border border-white/10 hover:bg-white/20 transition-colors text-sm">
                            Área de Clientes
                        </button>
                    </div>
                </div>
                <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-50">
                    © 2026 Invita-Ya. Todos los derechos reservados.
                </div>
            </footer>

        </div>
    );
};

// --- Subcomponentes ---

const FeatureCard = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);



export default LandingPageContent;
