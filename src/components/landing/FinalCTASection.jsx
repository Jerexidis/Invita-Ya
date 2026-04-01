import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const WHATSAPP_NUMBER = '524491120621';

const FinalCTASection = () => {
    const openWhatsApp = () => {
        const text = encodeURIComponent('¡Hola! 👋 Me interesa cotizar una invitación digital.');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section className="pt-24 pb-16 bg-invita-dark relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-invita-heart/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-invita-rosa/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <ScrollReveal>
                    {/* Emotional headline */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-tight mb-5">
                        Tu evento es único.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-invita-heart to-invita-rosa">
                            Tu invitación también debería serlo.
                        </span>
                    </h2>

                    <p className="text-white/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        Escríbenos hoy y recibe tu invitación personalizada en menos de 48 horas.
                        ¿Tienes dudas? Pregúntanos lo que sea, sin compromiso.
                    </p>

                    {/* Urgency + Trust */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/50 text-sm">
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Respuesta en menos de 1 hora
                        </span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Sin compromiso
                        </span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Pago seguro
                        </span>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default FinalCTASection;
