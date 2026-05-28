import { Music, Timer, MessageCircle, Images, MapPin, Shirt, Palette, Users } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const features = [
    { icon: <Music size={22} />,         title: 'Música personalizada',      desc: 'Tu canción favorita de fondo' },
    { icon: <Timer size={22} />,         title: 'Cuenta regresiva',           desc: 'Animada y en tiempo real' },
    { icon: <MessageCircle size={22} />, title: 'RSVP por WhatsApp',          desc: 'Confirmaciones automáticas' },
    { icon: <Images size={22} />,        title: 'Galería de fotos',           desc: 'Comparte tus mejores momentos' },
    { icon: <MapPin size={22} />,        title: 'Ubicación con mapa',         desc: 'Abre directo en Google Maps' },
    { icon: <Shirt size={22} />,         title: 'Código de vestimenta',       desc: 'Guía visual para tus invitados' },
    { icon: <Palette size={22} />,       title: 'Diseño personalizado',       desc: 'Colores y estilo únicos' },
    { icon: <Users size={22} />,         title: 'Lista de padrinos',          desc: 'Con foto y categoría' },
];

const BenefitsSection = () => (
    <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-5">
                    ✨ Todo incluido
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-3">
                    Tu invitación, completa desde el día uno
                </h2>
                <p className="text-invita-gray max-w-xl mx-auto">
                    Cada detalle diseñado para que tus invitados digan "¡Wow!"
                </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {features.map((f, i) => (
                    <StaggerItem key={i}>
                        <div className="group flex flex-col items-center text-center p-5 rounded-2xl border border-invita-rosa/10 bg-invita-cream/40 hover:bg-invita-cream hover:border-invita-rosa/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
                            <div className="w-11 h-11 rounded-xl bg-white border border-invita-rosa/15 flex items-center justify-center text-invita-heart mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {f.icon}
                            </div>
                            <p className="font-bold text-invita-dark text-sm leading-snug mb-1">{f.title}</p>
                            <p className="text-invita-gray text-xs leading-relaxed">{f.desc}</p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    </section>
);

export default BenefitsSection;
