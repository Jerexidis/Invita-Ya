import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Smartphone, Heart, MousePointer, Globe, Check, Star, Menu, X, ArrowRight, Mail, Zap } from 'lucide-react';

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
                            <a href="#pricing" className="text-slate-600 hover:text-rose-500 font-medium transition-colors">Precios</a>
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
                            <a href="#pricing" className="text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Precios</a>
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
                            Invitaciones que tus invitados <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">amarán</span>.
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                            Olvídate del papel. Crea experiencias digitales interactivas con confirmación de asistencia (RSVP) en tiempo real, mapas y galerías de fotos.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <button onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all font-medium flex items-center justify-center gap-2">
                                Ver Ejemplos <ArrowRight size={18} />
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:border-slate-300 transition-all font-medium">
                                Ver Catálogo
                            </button>
                        </div>
                        <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                            </div>
                            <p>+500 parejas felices</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-orange-100 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
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

            {/* --- PRICING --- */}
            <section id="pricing" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-100/30 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            <Zap size={14} className="fill-rose-600" /> Precios Transparentes
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-4">Invierte en tu evento, no en papel</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">Un solo pago por evento. Sin mensualidades, sin letras chiquitas. Tu invitación estará en línea todo el tiempo que necesites.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">

                        {/* --- Plan Básico --- */}
                        <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 bg-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-slate-50 to-transparent rounded-bl-full pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-5">
                                    <Globe className="text-slate-500" size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Básico</h3>
                                <p className="text-sm text-slate-400 mb-5">Ideal para eventos íntimos</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-slate-900">$299</span>
                                    <span className="text-slate-400 ml-1">MXN</span>
                                    <p className="text-xs text-slate-400 mt-1">pago único por evento</p>
                                </div>
                                <ul className="space-y-3.5 mb-8">
                                    <PricingItem text="Diseño predeterminado elegante" />
                                    <PricingItem text="Información completa del evento" />
                                    <PricingItem text="Ubicación con Google Maps" />
                                    <PricingItem text="Hosting incluido (3 meses)" />
                                    <PricingItem text="Enlace único y compartible" />
                                    <PricingItem text="RSVP digital" crossed />
                                    <PricingItem text="Galería de fotos" crossed />
                                </ul>
                                <button className="w-full py-3.5 border-2 border-slate-900 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
                                    Elegir Básico
                                </button>
                            </div>
                        </div>

                        {/* --- Plan Premium (Popular) --- */}
                        <div className="group border-2 border-rose-400 rounded-3xl p-8 shadow-2xl shadow-rose-100/50 relative bg-white transform md:-translate-y-4 overflow-hidden">
                            {/* Popular badge */}
                            <div className="absolute -top-px left-1/2 -translate-x-1/2">
                                <div className="bg-gradient-to-r from-rose-500 to-orange-400 text-white text-xs font-bold px-6 py-1.5 rounded-b-xl tracking-wider uppercase shadow-lg">
                                    ⭐ Más Popular
                                </div>
                            </div>
                            {/* Glow decoration */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="relative z-10 pt-4">
                                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center mb-5">
                                    <Heart className="text-rose-500 fill-rose-500" size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Premium</h3>
                                <p className="text-sm text-rose-400 font-medium mb-5">La opción favorita de nuestros clientes</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">$699</span>
                                    <span className="text-slate-400 ml-1">MXN</span>
                                    <p className="text-xs text-slate-400 mt-1">pago único por evento</p>
                                </div>
                                <ul className="space-y-3.5 mb-8">
                                    <PricingItem text="Diseño personalizable (colores y fuentes)" />
                                    <PricingItem text="RSVP con confirmación en tiempo real" />
                                    <PricingItem text="Galería de fotos (hasta 10)" />
                                    <PricingItem text="Cuenta regresiva animada" />
                                    <PricingItem text="Sugerencias de regalos" />
                                    <PricingItem text="Hosting incluido (6 meses)" />
                                    <PricingItem text="Enlace único y compartible" />
                                </ul>
                                <button className="w-full py-3.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-bold hover:from-rose-600 hover:to-rose-700 shadow-lg shadow-rose-200/60 transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center gap-2">
                                    Elegir Premium <ArrowRight size={16} />
                                </button>
                                <p className="text-center text-xs text-slate-400 mt-3">🔒 Pago seguro • Satisfacción garantizada</p>
                            </div>
                        </div>

                        {/* --- Plan A Medida --- */}
                        <div className="group border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-slate-100 to-transparent rounded-tr-full pointer-events-none"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-5">
                                    <Star className="text-amber-500 fill-amber-500" size={22} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-1">A Medida</h3>
                                <p className="text-sm text-slate-400 mb-5">Para quienes quieren lo mejor</p>
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-lg text-slate-400">Desde</span>
                                        <span className="text-5xl font-bold text-slate-900">$1,500</span>
                                        <span className="text-slate-400">MXN</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1">precio varía según complejidad</p>
                                </div>
                                <ul className="space-y-3.5 mb-8">
                                    <PricingItem text="Diseño 100% único y exclusivo" />
                                    <PricingItem text="Dominio propio (.com)" />
                                    <PricingItem text="Animaciones y efectos avanzados" />
                                    <PricingItem text="Hosting anual incluido" />
                                    <PricingItem text="Soporte prioritario por WhatsApp" />
                                    <PricingItem text="Funciones personalizadas a tu evento" />
                                    <PricingItem text="Galería ilimitada de fotos" />
                                </ul>
                                <button className="w-full py-3.5 border-2 border-slate-800 text-slate-800 rounded-xl font-bold hover:bg-slate-800 hover:text-white transition-all duration-300 transform group-hover:scale-[1.02] flex items-center justify-center gap-2">
                                    <Mail size={16} /> Contactar por WhatsApp
                                </button>
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
                            <li><a href="#" className="hover:text-rose-400">Plantillas</a></li>
                            <li><a href="#" className="hover:text-rose-400">Precios</a></li>
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
                        <a href="mailto:hola@Invita-Ya.com" className="flex items-center gap-2 text-sm hover:text-rose-400 mb-2">
                            <Mail size={16} /> hola@Invita-Ya.com
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

const PricingItem = ({ text, crossed }) => (
    <li className={`flex items-center gap-3 ${crossed ? 'opacity-50 line-through' : ''}`}>
        <div className={`p-1 rounded-full ${crossed ? 'bg-slate-200' : 'bg-rose-100'}`}>
            {crossed ? <X size={12} className="text-slate-500" /> : <Check size={12} className="text-rose-500" />}
        </div>
        <span className="text-sm font-medium text-slate-700">{text}</span>
    </li>
);

export default LandingPageContent;
