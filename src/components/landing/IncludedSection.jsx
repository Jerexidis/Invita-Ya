import { Check } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const WHATSAPP_NUMBER = '524491120621';

const included = [
    'Diseño 100% personalizado',
    'Entrega en menos de 48 horas',
    'RSVP automático por WhatsApp',
    'Mapa con Google Maps',
    'Cuenta regresiva animada',
    'Galería de fotos',
    'Música personalizada',
    'Código de vestimenta',
    'Mesa de regalos',
    '2 rondas de ajustes incluidas',
    'Soporte continuo por WhatsApp',
    'Link para siempre',
];

const IncludedSection = () => {
    const openWhatsApp = () => {
        const text = encodeURIComponent('¡Hola! 👋 Me interesa cotizar una invitación digital.');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section className="py-20 bg-invita-cream">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-5">
                        🎁 ¿Qué incluye?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-3">
                        Todo lo que necesitas, sin sorpresas
                    </h2>
                    <p className="text-invita-gray max-w-xl mx-auto">
                        Sin costos ocultos. Un solo pago y tu invitación es tuya para siempre.
                    </p>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-invita-rosa/15 shadow-sm">
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                            {included.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                                        <Check size={11} className="text-green-600" />
                                    </div>
                                    <span className="text-invita-dark text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Price anchor + CTA */}
                        <div className="border-t border-invita-rosa/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                            <div>
                                <p className="text-invita-gray text-sm mb-1">Desde</p>
                                <p className="text-4xl font-extrabold text-invita-dark font-montserrat">
                                    $299 <span className="text-lg font-semibold text-invita-gray">MXN</span>
                                </p>
                            </div>
                            <button
                                id="btn-included-whatsapp"
                                onClick={openWhatsApp}
                                className="flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-lg shadow-green-200/60 hover:-translate-y-0.5 whitespace-nowrap"
                            >
                                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
                                </svg>
                                Quiero mi invitación
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default IncludedSection;
