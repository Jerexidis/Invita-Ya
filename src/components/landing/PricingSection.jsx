import { ArrowRight, Sparkles, Check } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const WHATSAPP_NUMBER = '524491120621';

const plans = [
    {
        name: 'Esencial',
        price: '$299',
        oldPrice: null,
        desc: 'Para quienes quieren algo lindo y funcional.',
        popular: false,
        features: [
            'Diseño de plantilla personalizable',
            'Información del evento (fecha, hora, lugar)',
            'Mapa con Google Maps',
            'Cuenta regresiva animada',
            '100% responsivo (celular y web)',
            'Link para compartir por WhatsApp',
        ],
    },
    {
        name: 'Premium',
        price: '$499',
        oldPrice: '$699',
        desc: 'El favorito de nuestras novias y quinceañeras.',
        popular: true,
        features: [
            'Todo lo del plan Esencial',
            'Diseño 100% personalizado',
            'RSVP inteligente por WhatsApp',
            'Galería de fotos del evento',
            'Música de fondo personalizada',
            'Mesa de regalos / dress code',
            '2 rondas de ajustes',
        ],
    },
    {
        name: 'Exclusivo',
        price: '$799',
        oldPrice: null,
        desc: 'La experiencia completa para tu evento soñado.',
        popular: false,
        features: [
            'Todo lo del plan Premium',
            'Animaciones especiales y efectos',
            'Sección de padrinos con foto',
            'Itinerario del evento',
            'Panel de estadísticas RSVP',
            'Soporte prioritario WhatsApp',
            'Ajustes ilimitados',
        ],
    },
];

const PricingSection = () => {
    const handlePlanClick = (planName) => {
        const text = encodeURIComponent(
            `¡Hola! 👋 Me interesa el plan ${planName} para mi invitación digital. ¿Me pueden dar más información?`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section id="precios" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-invita-heart/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        <Sparkles size={14} className="fill-invita-heart" /> Precios accesibles
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                        Una invitación para cada presupuesto
                    </h2>
                    <p className="text-invita-gray max-w-2xl mx-auto text-lg">
                        Sin letras chiquitas. Sin costos ocultos. Un solo pago y tu invitación es tuya para siempre.
                    </p>
                </ScrollReveal>

                {/* Desktop: grid · Mobile: horizontal scroll snap */}
                <StaggerContainer className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
                    {plans.map((plan, i) => (
                        <StaggerItem key={i}>
                            <PlanCard plan={plan} onSelect={handlePlanClick} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Mobile carousel */}
                <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pt-6 pb-4 -mx-4 px-4 hide-scrollbar">
                    {plans.map((plan, i) => (
                        <div key={i} className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center">
                            <PlanCard plan={plan} onSelect={handlePlanClick} />
                        </div>
                    ))}
                </div>

                {/* Swipe hint (mobile only) */}
                <p className="md:hidden text-center text-invita-gray/50 text-xs mt-2">
                    ← Desliza para ver más planes →
                </p>

                {/* Trust badge */}
                <ScrollReveal delay={0.3} className="text-center mt-10">
                    <p className="text-invita-gray text-sm flex items-center justify-center gap-2">
                        🔒 Pago seguro · Respuesta garantizada en menos de 1 hora
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
};

// --- Plan Card subcomponent (shared between desktop grid & mobile carousel) ---
const PlanCard = ({ plan, onSelect }) => (
    <div className={`relative rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 h-full ${plan.popular
        ? 'bg-gradient-to-b from-invita-cream to-white border-2 border-invita-heart/30 shadow-xl shadow-invita-heart/10 md:scale-105'
        : 'bg-invita-cream border border-invita-rosa/15 shadow-sm hover:shadow-lg'
        }`}>

        {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-invita-heart text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg shadow-invita-heart/30">
                ⭐ Más Popular
            </div>
        )}

        <h3 className="text-lg font-bold text-invita-dark mb-1">{plan.name}</h3>
        <p className="text-invita-gray text-sm mb-5">{plan.desc}</p>

        <div className="flex items-baseline gap-2 mb-6">
            {plan.oldPrice && (
                <span className="text-xl text-invita-gray line-through font-medium">{plan.oldPrice}</span>
            )}
            <span className="text-5xl font-extrabold text-invita-dark" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {plan.price}
            </span>
            <span className="text-invita-gray font-medium">MXN</span>
        </div>

        <button
            onClick={() => onSelect(plan.name)}
            className={`w-full py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 mb-6 ${plan.popular
                ? 'bg-invita-dark text-white hover:bg-invita-text shadow-lg shadow-invita-dark/20'
                : 'bg-white text-invita-dark border-2 border-invita-dark/20 hover:bg-invita-dark hover:text-white hover:border-invita-dark'
                }`}
        >
            Pedir esta <ArrowRight size={16} />
        </button>

        <div className="space-y-3">
            {plan.features.map((feat, j) => (
                <div key={j} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                        <Check size={16} className={plan.popular ? 'text-invita-heart' : 'text-green-500'} />
                    </div>
                    <span className="text-sm text-invita-dark/80">{feat}</span>
                </div>
            ))}
        </div>
    </div>
);

export default PricingSection;
