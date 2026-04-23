import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Componente decorativo: Línea separadora neutral
const Divider = () => (
    <div className="flex items-center justify-center gap-3 my-4 opacity-70">
        <div className="h-[1px] w-12 bg-babyshower-pink/50"></div>
        <Star size={12} className="text-babyshower-primary fill-babyshower-primary" />
        <div className="h-[1px] w-12 bg-babyshower-blue/50"></div>
    </div>
);

// Componente para las tarjetas de evento
const EventCard = ({ icon, title, venue, address, time, accent, isPink }) => {
    const borderColor = isPink ? 'border-babyshower-pink/20' : 'border-babyshower-blue/20';
    const borderHover = isPink ? 'hover:border-babyshower-pink/50' : 'hover:border-babyshower-blue/50';
    const bgGradient = isPink ? 'from-babyshower-pink/20' : 'from-babyshower-blue/20';
    const iconBg = isPink ? 'bg-babyshower-pink/10' : 'bg-babyshower-blue/10';
    const iconBorder = isPink ? 'border-babyshower-pink/30' : 'border-babyshower-blue/30';
    const textColor = isPink ? 'text-babyshower-pink' : 'text-babyshower-blue';
    const btnBg = isPink ? 'bg-babyshower-pink/10' : 'bg-babyshower-blue/10';
    const btnHover = isPink ? 'hover:bg-babyshower-pink hover:text-white' : 'hover:bg-babyshower-blue hover:text-white';

    return (
        <div className={`bg-white p-6 rounded-2xl shadow-sm border-2 ${borderColor} relative overflow-hidden group ${borderHover} transition-colors`}>
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${bgGradient} to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform`}></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center text-2xl mb-4 shadow-sm border ${iconBorder} group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-babyshower-dark mb-1">{title}</h3>
                <p className={`${textColor} text-sm font-semibold mb-3`}>{accent}</p>
                <div className="space-y-2 text-babyshower-gray text-sm">
                    <p className={`flex items-center justify-center gap-1.5 ${textColor}`}><Calendar size={14} /> <span className="text-babyshower-gray">{time}</span></p>
                    <p className="font-medium text-babyshower-dark mt-2">{venue}</p>
                    <p className="text-xs max-w-[200px] mx-auto leading-relaxed">{address}</p>
                </div>
                <button className={`mt-5 px-5 py-2 ${btnBg} ${textColor} rounded-full text-xs font-semibold ${btnHover} transition-colors border ${iconBorder}`}>
                    Ver en mapa
                </button>
            </div>
        </div>
    );
};

const InvitacionBabyShower = () => {
    const navigate = useNavigate();

    // Estado del Countdown
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    // Estado del RSVP
    const [rsvpStatus, setRsvpStatus] = useState('idle'); // idle, submitting, success
    // Estado de la votación
    const [voted, setVoted] = useState(false);
    const [votes, setVotes] = useState({ boy: 45, girl: 55 }); // Porcentajes iniciales demo

    // Lógica del Countdown (Fecha fija para la demo)
    useEffect(() => {
        const eventDate = new Date('2026-11-15T16:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleSubmitRSVP = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1500);
    };

    const handleVote = (gender) => {
        if (voted) return;
        setVotes(prev => ({
            ...prev,
            [gender]: prev[gender] + 5 // Simular un aumento
        }));
        setVoted(gender);
    };

    // Calcular porcentajes reales basados en los votos
    const totalVotes = votes.boy + votes.girl;
    const boyPercent = Math.round((votes.boy / totalVotes) * 100);
    const girlPercent = Math.round((votes.girl / totalVotes) * 100);

    const galleryPhotos = [
        { url: 'https://images.unsplash.com/photo-1722028047454-c7fe52b1ca4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Esperándote' },
        { url: 'https://images.unsplash.com/photo-1600153208231-4cc60ab436a3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Nuestro milagro' },
        { url: 'https://images.unsplash.com/photo-1586102728466-46b99b3bc411?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Todo listo' },
        { url: 'https://plus.unsplash.com/premium_photo-1702598563719-cf4bda0ae247?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: 'Con mucho amor' },
    ];

    return (
        <div className="min-h-screen bg-babyshower-cream text-babyshower-text font-montserrat">

            {/* BOTÓN VOLVER */}
            <button
                id="btn-volver-babyshower"
                onClick={() => navigate('/')}
                className="fixed top-5 left-5 z-50 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md border border-babyshower-primary/30 rounded-full text-babyshower-dark text-sm font-semibold hover:bg-white hover:shadow-md transition-all duration-300 shadow-sm"
            >
                <ArrowLeft size={15} />
                Regresar
            </button>

            {/* ══════════════════════════════════════════
                HERO — Baby Shower & Gender Reveal
            ══════════════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Fondo con gradiente diagonal Rosa/Azul suave */}
                <div className="absolute inset-0 bg-gradient-to-br from-babyshower-pink/20 via-babyshower-cream to-babyshower-blue/20"></div>

                {/* Elementos decorativos de fondo */}
                <div className="absolute top-20 left-10 w-32 h-32 bg-babyshower-pink/30 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-babyshower-blue/30 rounded-full blur-3xl mix-blend-multiply opacity-50"></div>

                <div className="relative z-10 text-center max-w-2xl w-full pt-16">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-babyshower-primary/20 text-babyshower-dark font-semibold text-sm tracking-widest uppercase mb-8 shadow-sm">
                        <Heart size={14} className="text-babyshower-pink fill-babyshower-pink/50" />
                        Baby Shower
                        <Heart size={14} className="text-babyshower-blue fill-babyshower-blue/50" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-vibes text-babyshower-dark mb-4 drop-shadow-sm">
                        Mariana & Carlos
                    </h1>

                    <p className="text-lg md:text-xl font-serif text-babyshower-gray italic mb-10">
                        ¡Estamos esperando un bebé y queremos celebrar contigo!
                    </p>

                    {/* Foto principal redonda */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10">
                        {/* Borde animado estilo revelación */}
                        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-babyshower-primary/40 animate-[spin_15s_linear_infinite]"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-babyshower-pink to-babyshower-blue p-1 shadow-xl">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1627958193251-87f6c65c3ee3?q=80&w=738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Baby clothes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 bg-white/50 backdrop-blur-sm py-4 px-8 rounded-2xl inline-block border border-white/60 shadow-sm">
                        <p className="font-bold text-babyshower-dark uppercase tracking-widest text-sm">Sábado</p>
                        <p className="text-xl font-serif text-babyshower-primary">15 de Noviembre, 2026</p>
                        <p className="font-bold text-babyshower-dark uppercase tracking-widest text-sm">4:00 PM</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                INTERACTIVO: GENDER REVEAL
            ══════════════════════════════════════════ */}
            <section className="py-16 px-4 bg-white relative overflow-hidden">
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-vibes text-babyshower-dark mb-2">¿Niño o Niña?</h2>
                    <Divider />
                    <p className="text-babyshower-gray text-sm md:text-base mb-10">
                        ¡Ayúdanos a adivinar antes de la gran revelación! Vota por tu equipo favorito.
                    </p>

                    <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-lg mx-auto">
                        {/* Botón Niña */}
                        <button
                            onClick={() => handleVote('girl')}
                            disabled={voted !== false}
                            className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 border-2 ${voted === 'girl'
                                ? 'border-babyshower-pink bg-babyshower-pink/10 scale-105 shadow-lg shadow-babyshower-pink/20'
                                : voted
                                    ? 'border-gray-200 bg-gray-50 opacity-50 grayscale'
                                    : 'border-babyshower-pink/30 hover:border-babyshower-pink bg-white hover:shadow-md'
                                }`}
                        >
                            <div className="text-4xl mb-2">🎀</div>
                            <h3 className="font-serif font-bold text-lg text-babyshower-dark mb-1">Team Niña</h3>

                            {voted && (
                                <div className="mt-4 pt-4 border-t border-babyshower-pink/20">
                                    <span className="text-2xl font-bold text-babyshower-pink">{girlPercent}%</span>
                                </div>
                            )}
                        </button>

                        {/* Botón Niño */}
                        <button
                            onClick={() => handleVote('boy')}
                            disabled={voted !== false}
                            className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 border-2 ${voted === 'boy'
                                ? 'border-babyshower-blue bg-babyshower-blue/10 scale-105 shadow-lg shadow-babyshower-blue/20'
                                : voted
                                    ? 'border-gray-200 bg-gray-50 opacity-50 grayscale'
                                    : 'border-babyshower-blue/30 hover:border-babyshower-blue bg-white hover:shadow-md'
                                }`}
                        >
                            <div className="text-4xl mb-2">🧢</div>
                            <h3 className="font-serif font-bold text-lg text-babyshower-dark mb-1">Team Niño</h3>

                            {voted && (
                                <div className="mt-4 pt-4 border-t border-babyshower-blue/20">
                                    <span className="text-2xl font-bold text-babyshower-blue">{boyPercent}%</span>
                                </div>
                            )}
                        </button>
                    </div>

                    {voted && (
                        <p className="mt-8 text-babyshower-primary font-serif italic text-lg animate-fade-in-up">
                            ¡Gracias por votar! Descubriremos la verdad juntos. 👶
                        </p>
                    )}
                </div>
            </section>

            {/* ══════════════════════════════════════════
                CUENTA REGRESIVA
            ══════════════════════════════════════════ */}
            <section className="py-16 bg-babyshower-cream text-center px-4">
                <h2 className="text-3xl font-vibes text-babyshower-dark mb-8">¡Ya falta muy poco!</h2>

                <div className="flex justify-center gap-3 md:gap-6">
                    {Object.entries(timeLeft).map(([unit, value], index) => {
                        const isPink = index % 2 === 0;
                        const borderColor = isPink ? 'border-babyshower-pink/30' : 'border-babyshower-blue/30';
                        const textColor = isPink ? 'text-babyshower-pink' : 'text-babyshower-blue';
                        return (
                        <div key={unit} className={`w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm border-2 ${borderColor} flex flex-col items-center justify-center`}>
                            <span className={`text-3xl md:text-4xl font-bold ${textColor} mb-1`}>
                                {value.toString().padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-babyshower-gray font-semibold">
                                {unit === 'days' ? 'Días' : unit === 'hours' ? 'Horas' : unit === 'minutes' ? 'Min' : 'Seg'}
                            </span>
                        </div>
                    )})}
                </div>
            </section>

            {/* ══════════════════════════════════════════
                EVENTO Y UBICACIÓN
            ══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-vibes text-babyshower-dark mb-2">Cuándo y Dónde</h2>
                        <Divider />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <EventCard
                            icon="🎀"
                            title="El Baby Shower"
                            venue="Terraza Los Girasoles"
                            address="Av. Universidad #123, Zona Norte, Aguascalientes."
                            time="4:00 PM"
                            accent="Recepción y Juegos"
                            isPink={true}
                        />
                        <EventCard
                            icon="🧢"
                            title="Gran Revelación"
                            venue="Mismo lugar"
                            address="No te pierdas el momento más emocionante de la tarde."
                            time="6:30 PM"
                            accent="¡Niño o Niña!"
                            isPink={false}
                        />
                    </div>

                    {/* Dress code */}
                    <div className="mt-12 text-center bg-gradient-to-r from-babyshower-pink/10 to-babyshower-blue/10 rounded-2xl p-8 border-2 border-dashed border-babyshower-primary/30 max-w-lg mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-babyshower-pink to-babyshower-blue"></div>
                        <div className="w-14 h-14 bg-white rounded-full mx-auto flex items-center justify-center text-3xl mb-4 shadow-sm border border-babyshower-primary/20">
                            👗
                        </div>
                        <h3 className="text-xl font-serif font-bold text-babyshower-dark mb-2">Código de Vestimenta</h3>
                        <p className="text-babyshower-gray">Casual y cómodo en tonos pastel (<span className="text-babyshower-pink font-semibold">rosas</span>, <span className="text-babyshower-blue font-semibold">azules</span>, amarillos o blancos). ¡Ven listo para divertirte!</p>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                GALERÍA DE FOTOS
            ══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-babyshower-cream">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-vibes text-babyshower-dark mb-2">Nuestra Dulce Espera</h2>
                    <Divider />
                </div>
                {/* Grid simple 2x2 para las fotos */}
                <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
                    {galleryPhotos.map((photo, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden aspect-square relative group">
                            <img src={photo.url} alt={photo.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-babyshower-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-white font-semibold text-sm">{photo.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════
                MESA DE REGALOS & RSVP
            ══════════════════════════════════════════ */}
            <section className="py-20 px-4 bg-white relative">
                <div className="max-w-xl mx-auto">

                    {/* Mesa de Regalos */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-vibes text-babyshower-dark mb-2">Mesa de Regalos</h2>
                        <Divider />
                        <p className="text-babyshower-gray mb-6 mt-4">
                            Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nuestro bebé, hemos preparado las siguientes opciones:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-babyshower-pink/10 border-2 border-babyshower-pink/30 rounded-xl text-babyshower-pink font-semibold hover:bg-babyshower-pink hover:text-white transition-all shadow-sm">
                                Ver Mesa en Amazon
                            </button>
                            <button className="px-6 py-3 bg-babyshower-blue/10 border-2 border-babyshower-blue/30 rounded-xl text-babyshower-blue font-semibold hover:bg-babyshower-blue hover:text-white transition-all shadow-sm">
                                Lluvia de Pañales
                            </button>
                        </div>
                    </div>

                    {/* Formulario RSVP */}
                    <div className="bg-babyshower-light p-8 md:p-12 rounded-3xl shadow-sm border border-babyshower-primary/20">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-serif text-babyshower-dark mb-2">Confirma tu asistencia</h2>
                            <p className="text-babyshower-gray text-sm">Por favor confirmanos antes del 1 de Noviembre.</p>
                        </div>

                        {rsvpStatus === 'success' ? (
                            <div className="text-center py-8 animate-fade-in-up">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-serif text-babyshower-dark mb-2">¡Gracias por confirmar!</h3>
                                <p className="text-babyshower-gray text-sm">Nos vemos pronto para celebrar. 🍼</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmitRSVP} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-bold text-babyshower-dark uppercase tracking-wide mb-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-babyshower-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-babyshower-primary/50 text-babyshower-dark"
                                        placeholder="Ej. Familia Pérez"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-babyshower-dark uppercase tracking-wide mb-2">Asistencia</label>
                                    <select required className="w-full px-4 py-3 rounded-xl border border-babyshower-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-babyshower-primary/50 text-babyshower-dark appearance-none">
                                        <option value="">Selecciona una opción...</option>
                                        <option value="yes">¡Sí, ahí estaremos!</option>
                                        <option value="no">Lo siento, no podré asistir</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-babyshower-dark uppercase tracking-wide mb-2">Mensaje para el bebé (Opcional)</label>
                                    <textarea
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-xl border border-babyshower-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-babyshower-primary/50 text-babyshower-dark resize-none"
                                        placeholder="Escribe tus buenos deseos..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={rsvpStatus === 'submitting'}
                                    className="w-full py-4 bg-gradient-to-r from-babyshower-pink to-babyshower-blue text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-md mt-4 disabled:opacity-70 flex justify-center items-center"
                                >
                                    {rsvpStatus === 'submitting' ? 'Enviando...' : 'Confirmar por WhatsApp'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 text-center bg-babyshower-cream border-t border-babyshower-primary/20">
                <p className="font-vibes text-4xl text-babyshower-dark mb-2">Baby Shower</p>
                <p className="text-babyshower-gray text-xs uppercase tracking-widest">Mariana & Carlos · 2026</p>
                <p className="mt-6 text-babyshower-gray/50 text-xs">Hecho con ❤ en Invita-Ya</p>
            </footer>

        </div>
    );
};

export default InvitacionBabyShower;
