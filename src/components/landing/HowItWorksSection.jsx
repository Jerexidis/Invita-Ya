import { MessageCircle, Palette, Eye, Share2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const steps = [
    {
        num: '01',
        icon: <MessageCircle size={24} />,
        title: 'Cuéntanos tu evento',
        desc: 'Escríbenos por WhatsApp. Dinos la fecha, tipo de evento y tu estilo favorito.',
    },
    {
        num: '02',
        icon: <Palette size={24} />,
        title: 'Diseñamos tu invitación',
        desc: 'Creamos tu invitación personalizada con tus colores, fotos y toda la información.',
    },
    {
        num: '03',
        icon: <Eye size={24} />,
        title: 'Apruebas y publicamos',
        desc: 'Te enviamos vista previa, haces ajustes y cuando digas "¡va!", queda lista.',
    },
    {
        num: '04',
        icon: <Share2 size={24} />,
        title: 'Comparte y disfruta',
        desc: 'Recibes tu link exclusivo. Compártelo por WhatsApp y recibe confirmaciones al instante. 🎉',
    },
];

const HowItWorksSection = () => (
    <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                    ✨ Súper fácil
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                    Tu invitación lista en 4 pasos
                </h2>
                <p className="text-invita-gray max-w-2xl mx-auto text-lg">
                    Nosotros nos encargamos del diseño. Tú solo elige y comparte.
                </p>
            </ScrollReveal>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {steps.map((step, i) => (
                    <StaggerItem key={i}>
                        <div className="text-center relative group">
                            {/* Large background number */}
                            <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-invita-heart/20 to-invita-rosa/10 font-montserrat select-none pointer-events-none">
                                {step.num}
                            </span>

                            {/* Icon circle */}
                            <div className="w-14 h-14 mx-auto bg-invita-cream rounded-2xl flex items-center justify-center text-invita-heart mb-4 -mt-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                                {step.icon}
                            </div>

                            <h3 className="text-lg font-bold text-invita-dark mb-2">{step.title}</h3>
                            <p className="text-invita-gray text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>

                            {/* Connector line (desktop only, not on last) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-invita-rosa/30" />
                            )}
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    </section>
);

export default HowItWorksSection;
