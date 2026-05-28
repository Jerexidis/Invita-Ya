import { ArrowRight, Sparkles, Check, Flame, Zap } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const WHATSAPP_NUMBER = '524491120621';

const plans = [
    {
        name: 'Esencial',
        price: '$269',
        oldPrice: '$299',
        desc: 'Para quienes quieren algo lindo y funcional.',
        popular: false,
        discount: 10,
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
        price: '$399',
        oldPrice: '$499',
        desc: 'El favorito de nuestras novias y quinceañeras.',
        popular: true,
        discount: 20,
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
        price: '$559',
        oldPrice: '$799',
        desc: 'La experiencia completa para tu evento soñado.',
        popular: false,
        discount: 30,
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

/* ── Hot Sale ribbon CSS (injected once) ─────────────────────────── */
const hotSaleStyles = `
@keyframes hotSalePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}
@keyframes hotSaleShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes flameDance {
  0%, 100% { transform: rotate(-3deg) scale(1); }
  25% { transform: rotate(3deg) scale(1.1); }
  50% { transform: rotate(-2deg) scale(1.05); }
  75% { transform: rotate(2deg) scale(1.08); }
}
`;

/* Inject styles once */
if (typeof document !== 'undefined') {
    const id = 'hot-sale-styles';
    if (!document.getElementById(id)) {
        const style = document.createElement('style');
        style.id = id;
        style.textContent = hotSaleStyles;
        document.head.appendChild(style);
    }
}

/* ── Hot Sale Badge component ────────────────────────────────────── */
const HotSaleBadge = ({ discount }) => {
    // Color intensity scales with discount
    const bg = discount >= 30
        ? 'linear-gradient(135deg, #ff2d2d 0%, #ff6b35 50%, #ff2d2d 100%)'
        : discount >= 20
            ? 'linear-gradient(135deg, #ff4444 0%, #ff8833 50%, #ff4444 100%)'
            : 'linear-gradient(135deg, #ff6b35 0%, #ffaa33 50%, #ff6b35 100%)';

    const shadowColor = discount >= 30
        ? 'rgba(255, 45, 45, 0.4)'
        : discount >= 20
            ? 'rgba(255, 68, 68, 0.35)'
            : 'rgba(255, 107, 53, 0.3)';

    return (
        <div className="absolute -top-3 -right-3 z-20" style={{ animation: 'hotSalePulse 2s ease-in-out infinite' }}>
            <div
                className="relative flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-extrabold text-sm tracking-wide shadow-xl"
                style={{
                    background: bg,
                    backgroundSize: '200% auto',
                    animation: 'hotSaleShimmer 3s linear infinite',
                    boxShadow: `0 6px 20px ${shadowColor}, 0 2px 8px rgba(0,0,0,0.15)`,
                }}
            >
                <Flame size={16} className="text-yellow-200 drop-shadow" style={{ animation: 'flameDance 1s ease-in-out infinite' }} />
                <span className="drop-shadow-sm">-{discount}%</span>
            </div>
        </div>
    );
};

/* ── Hot Sale Banner (top of section) ────────────────────────────── */
const HotSaleSectionBanner = () => (
    <div className="flex items-center justify-center gap-3 mb-4">
        <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm tracking-wide uppercase"
            style={{
                background: 'linear-gradient(135deg, #ff2d2d 0%, #ff6b35 40%, #ff2d2d 80%)',
                backgroundSize: '200% auto',
                animation: 'hotSaleShimmer 3s linear infinite',
                boxShadow: '0 4px 15px rgba(255, 45, 45, 0.35)',
            }}
        >
            <Flame size={18} className="text-yellow-200" style={{ animation: 'flameDance 1s ease-in-out infinite' }} />
            🔥 HOT SALE 🔥
            <Flame size={18} className="text-yellow-200" style={{ animation: 'flameDance 1s ease-in-out infinite', animationDelay: '0.3s' }} />
        </div>
    </div>
);

const PricingSection = () => {
    const handlePlanClick = (planName) => {
        const text = encodeURIComponent(
            `¡Hola! 👋 Me interesa el plan ${planName} (HOT SALE) para mi invitación digital. ¿Me pueden dar más información?`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section id="precios" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-invita-heart/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-16">
                    <HotSaleSectionBanner />
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        <Sparkles size={14} className="fill-invita-heart" /> Precios de Hot Sale
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                        Una invitación para cada presupuesto
                    </h2>
                    <p className="text-invita-gray max-w-2xl mx-auto text-lg">
                        ¡Aprovecha nuestros descuentos de <strong className="text-invita-heart">Hot Sale</strong>! Hasta <strong className="text-invita-heart">30% OFF</strong> por tiempo limitado 🔥
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

        {/* Hot Sale discount badge */}
        {plan.discount && <HotSaleBadge discount={plan.discount} />}

        {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-invita-heart text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg shadow-invita-heart/30">
                ⭐ Más Popular
            </div>
        )}

        <h3 className="text-lg font-bold text-invita-dark mb-1">{plan.name}</h3>
        <p className="text-invita-gray text-sm mb-5">{plan.desc}</p>

        <div className="flex items-baseline gap-2 mb-2">
            {plan.oldPrice && (
                <span className="text-xl text-invita-gray line-through font-medium">{plan.oldPrice}</span>
            )}
            <span className="text-5xl font-extrabold text-invita-dark" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {plan.price}
            </span>
            <span className="text-invita-gray font-medium">MXN</span>
        </div>

        {/* Savings tag */}
        {plan.discount && (
            <div className="mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                    background: plan.discount >= 30
                        ? 'rgba(255, 45, 45, 0.1)'
                        : plan.discount >= 20
                            ? 'rgba(255, 68, 68, 0.1)'
                            : 'rgba(255, 107, 53, 0.1)',
                    color: plan.discount >= 30
                        ? '#cc2222'
                        : plan.discount >= 20
                            ? '#dd3333'
                            : '#cc5500',
                }}
            >
                <Zap size={12} />
                Ahorras {plan.discount}% · Hot Sale
            </div>
        )}

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
