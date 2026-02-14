import React, { useState } from 'react';
import { Heart, Calendar, MapPin, Clock, Star, Gift, CheckCircle } from 'lucide-react';

const InvitacionBautizo = () => {
    const [formData, setFormData] = useState({ name: '', guests: 1 });
    const [rsvpStatus, setRsvpStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const scrollToRSVP = () => document.getElementById('rsvp-section').scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="min-h-screen bg-blue-50 text-slate-600 font-sans selection:bg-blue-200">

            {/* --- HERO SECTION --- */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-20 left-10 text-blue-200 animate-pulse">
                    <Star size={48} fill="currentColor" className="opacity-50" />
                </div>
                <div className="absolute bottom-40 right-10 text-blue-200 animate-bounce-slow">
                    <Heart size={32} fill="currentColor" className="opacity-50" />
                </div>

                <div className="relative z-10 space-y-6 animate-fade-in-up max-w-2xl">
                    <div className="inline-block p-2 px-4 bg-white rounded-full text-blue-500 font-bold uppercase text-xs tracking-widest shadow-sm mb-4">
                        Mi Bautizo
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif text-blue-900 leading-tight">
                        Santiago
                    </h1>
                    <p className="text-lg md:text-xl text-blue-700 italic font-serif">
                        "Hoy recibo la luz de Dios en mi corazón"
                    </p>

                    <div className="flex items-center justify-center gap-4 text-blue-900 font-medium mt-8 text-lg">
                        <span>Domingo</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                        <span>12 de Octubre, 2026</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                        <span>10:00 AM</span>
                    </div>

                    <button
                        onClick={scrollToRSVP}
                        className="mt-10 px-8 py-3 bg-blue-400 text-white rounded-full font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-1"
                    >
                        Acompañanos
                    </button>
                </div>

                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-white/40"></div>
                </div>
            </header>

            {/* --- INFO CARDS --- */}
            <section className="py-20 px-4 bg-white rounded-t-[3rem] -mt-20 relative z-20 shadow-xl">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Church */}
                    <div className="bg-blue-50 p-8 rounded-3xl text-center border border-blue-100 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-blue-400">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-2xl font-serif text-blue-900 mb-2">Ceremonia Religiosa</h3>
                        <p className="text-blue-800 font-medium">Parroquia San Francisco</p>
                        <p className="text-slate-500">Calle Principal #123</p>
                        <p className="text-blue-500 font-bold mt-2">10:00 AM</p>
                    </div>

                    {/* Reception */}
                    <div className="bg-blue-50 p-8 rounded-3xl text-center border border-blue-100 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-blue-400">
                            <Gift size={32} />
                        </div>
                        <h3 className="text-2xl font-serif text-blue-900 mb-2">Recepción</h3>
                        <p className="text-blue-800 font-medium">Jardín Los Olivos</p>
                        <p className="text-slate-500">Av. Las Palmas #456</p>
                        <p className="text-blue-500 font-bold mt-2">12:30 PM</p>
                    </div>

                </div>

                {/* Quote */}
                <div className="text-center mt-16 max-w-2xl mx-auto">
                    <p className="font-serif italic text-2xl text-slate-400">
                        "Los padrinos: Juan y María, agradecen su compañía en este día tan especial."
                    </p>
                </div>
            </section>

            {/* --- RSVP --- */}
            <section id="rsvp-section" className="py-20 px-4 bg-blue-100">
                <div className="max-w-md mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-serif text-blue-900 mb-2">Confirmación</h2>
                        <p className="text-slate-500">Ayúdanos a preparar todo para ti.</p>
                    </div>

                    {rsvpStatus === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2">¡Gracias!</h3>
                            <p className="text-slate-500">Nos vemos en el bautizo.</p>
                            <button onClick={() => setRsvpStatus('idle')} className="mt-4 text-sm text-blue-500 hover:text-blue-600 underline">Volver al formulario</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1 ml-1">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-blue-50 border-transparent rounded-xl focus:border-blue-300 focus:bg-white focus:ring-0 text-slate-700 transition-colors"
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-blue-900 mb-1 ml-1">Personas</label>
                                <select
                                    className="w-full px-4 py-3 bg-blue-50 border-transparent rounded-xl focus:border-blue-300 focus:bg-white focus:ring-0 text-slate-700 transition-colors"
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
                                type="submit"
                                disabled={rsvpStatus === 'submitting'}
                                className="w-full py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold shadow-md shadow-blue-200 transition-all mt-4"
                            >
                                {rsvpStatus === 'submitting' ? 'Confirmando...' : 'Confirmar Asistencia'}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <footer className="py-8 text-center bg-blue-100 text-blue-400 text-sm">
                <p>Bautizo Santiago • 2026</p>
            </footer>
        </div>
    );
};

export default InvitacionBautizo;
