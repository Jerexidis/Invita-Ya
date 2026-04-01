import { Users, TrendingDown, Globe, Share2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const benefits = [
    {
        icon: <Users className="text-invita-heart" size={28} />,
        problem: '¿No sabes quién va a venir?',
        title: 'Sabrás exactamente quién va y quién no',
        desc: 'Confirmación automática por WhatsApp. Sin llamadas, sin perseguir a nadie. Abre tu teléfono y listo: sabes cuántos platos pedir.',
        accent: 'from-rose-500/10 to-rose-500/5',
    },
    {
        icon: <TrendingDown className="text-green-500" size={28} />,
        problem: '¿Gastar miles en impresiones de papel?',
        title: 'Ahorra dinero sin sacrificar elegancia',
        desc: 'Las invitaciones impresas cuestan $30-$80 por pieza. Con Invita-Ya pagas una sola vez y compartes con TODOS tus invitados.',
        accent: 'from-green-500/10 to-green-500/5',
    },
    {
        icon: <Globe className="text-invita-rosa" size={28} />,
        problem: '¿Tienes la info regada por todos lados?',
        title: 'Toda la info de tu evento en un solo link',
        desc: 'Ubicación con mapa, hora, dresscode, mesa de regalos, galería... Todo actualizado en tiempo real. ¿Cambió la hora? Tus invitados lo ven al instante.',
        accent: 'from-orange-500/10 to-orange-500/5',
    },
    {
        icon: <Share2 className="text-purple-500" size={28} />,
        problem: '¿Quieres algo moderno y fácil de compartir?',
        title: 'Comparte por WhatsApp en 2 segundos',
        desc: 'Olvídate de repartir sobres. Simplemente copia el link, comparte por WhatsApp, Instagram o donde quieras. Tus invitados lo abren desde su celular.',
        accent: 'from-purple-500/10 to-purple-500/5',
    },
];

const BenefitsSection = () => (
    <section id="beneficios" className="py-24 bg-invita-cream relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-invita-heart/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-invita-rosa/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                    💡 Pensado para ti
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                    ¿Te identificas con alguno de estos problemas?
                </h2>
                <p className="text-invita-gray max-w-2xl mx-auto text-lg">
                    Organizar un evento es emocionante... pero también estresante. Nosotros eliminamos el caos.
                </p>
            </ScrollReveal>

            <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {benefits.map((b, i) => (
                    <StaggerItem key={i}>
                        <div className="bg-white p-7 sm:p-8 rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                            {/* Subtle gradient accent on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <p className="text-invita-gray text-sm italic mb-3">{b.problem}</p>
                                <div className="bg-invita-cream w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {b.icon}
                                </div>
                                <h3 className="text-xl font-bold text-invita-dark mb-3">{b.title}</h3>
                                <p className="text-invita-gray leading-relaxed">{b.desc}</p>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    </section>
);

export default BenefitsSection;
