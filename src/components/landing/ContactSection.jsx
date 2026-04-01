import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const WHATSAPP_NUMBER = '524491120621';

const ContactSection = () => {
    const [contactName, setContactName] = useState('');
    const [eventType, setEventType] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const eventLabels = {
            boda: 'Boda',
            xv: 'XV Años',
            bautizo: 'Bautizo / Baby Shower',
            cumple: 'Cumpleaños',
            otro: 'Otro Evento',
        };
        const lines = [
            '¡Hola! 👋 Me gustaría cotizar una invitación digital.',
            '',
            '✨ Datos de mi evento:',
            `• Nombre: ${contactName || 'No especificado'}`,
            `• Tipo de evento: ${eventLabels[eventType] || 'No especificado'}`,
            contactMessage ? `• Detalles adicionales: ${contactMessage}` : '',
            '',
            'Quedo pendiente de la información 🤍',
        ].filter(Boolean);
        const text = encodeURIComponent(lines.join('\n'));
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left side — Text */}
                    <ScrollReveal variant="fadeLeft" className="w-full lg:w-1/2 space-y-6">
                        <span className="text-invita-heart font-bold text-xs tracking-widest uppercase mb-4 block">
                            Hablemos hoy
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-invita-dark leading-tight">
                            Hablemos de tu evento
                        </h2>
                        <p className="text-invita-gray text-lg leading-relaxed max-w-md">
                            Estamos listos para ayudarte a crear la invitación perfecta.
                            Cuéntanos tu idea y nos pondremos en contacto contigo vía WhatsApp de inmediato.
                        </p>
                    </ScrollReveal>

                    {/* Right side — Form */}
                    <ScrollReveal variant="fadeRight" className="w-full lg:w-1/2">
                        <div className="bg-invita-cream p-8 md:p-10 rounded-2xl border border-invita-rosa/15 shadow-sm">
                            <form onSubmit={handleWhatsApp} className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-invita-dark mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        required
                                        value={contactName}
                                        onChange={(e) => setContactName(e.target.value)}
                                        placeholder="Tu nombre completo"
                                        className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text placeholder:text-invita-gray"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="event-type" className="block text-sm font-medium text-invita-dark mb-2">
                                        Tipo de Evento
                                    </label>
                                    <select
                                        id="event-type"
                                        name="event-type"
                                        required
                                        value={eventType}
                                        onChange={(e) => setEventType(e.target.value)}
                                        className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text appearance-none"
                                    >
                                        <option value="" disabled>Selecciona una opción</option>
                                        <option value="boda">Boda</option>
                                        <option value="xv">XV Años</option>
                                        <option value="bautizo">Bautizo / Baby Shower</option>
                                        <option value="cumple">Cumpleaños</option>
                                        <option value="otro">Otro Evento</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-sm font-medium text-invita-dark mb-2">
                                        Mensaje <span className="text-invita-gray font-normal">(opcional)</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows="4"
                                        value={contactMessage}
                                        onChange={(e) => setContactMessage(e.target.value)}
                                        placeholder="Cuéntanos sobre tu evento..."
                                        className="w-full px-4 py-3 bg-white border border-invita-rosa/20 rounded-xl focus:ring-2 focus:ring-invita-heart focus:border-transparent transition-all outline-none text-invita-text placeholder:text-invita-gray resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200/60 flex items-center justify-center gap-3 group"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
                                    </svg>
                                    <span>Enviar por WhatsApp</span>
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
