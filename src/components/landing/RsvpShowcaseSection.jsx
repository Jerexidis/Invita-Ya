import { ArrowRight, CheckCircle2, LayoutDashboard, LockKeyhole, MessageSquareText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';

const RsvpShowcaseSection = () => (
    <section id="rsvp-demo" className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <ScrollReveal variant="fadeLeft">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-700">
                    <LayoutDashboard size={15} /> RSVP organizado
                </span>
                <h2 className="mb-5 font-serif text-3xl text-invita-dark md:text-4xl">
                    Tus confirmaciones, todas en un solo lugar
                </h2>
                <p className="mb-7 max-w-xl text-lg leading-relaxed text-invita-gray">
                    Cuando un invitado confirma, puedes consultar nombres, número de personas,
                    mensajes y fecha de respuesta desde un panel privado.
                </p>
                <div className="mb-8 space-y-3 text-sm text-invita-dark">
                    <p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-green-500" /> Conteo automático de asistentes</p>
                    <p className="flex items-center gap-3"><MessageSquareText size={18} className="text-invita-heart" /> Mensajes y respuestas centralizados</p>
                    <p className="flex items-center gap-3"><LockKeyhole size={18} className="text-blue-600" /> Acceso protegido para cada cliente</p>
                </div>
                <Link
                    to="/demo/rsvp"
                    className="inline-flex items-center gap-2 rounded-full bg-invita-dark px-7 py-4 font-semibold text-white transition hover:bg-invita-heart"
                >
                    Ver panel RSVP de ejemplo <ArrowRight size={17} />
                </Link>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight">
                <div className="overflow-hidden rounded-3xl border border-gray-200 bg-[#f8f9fa] p-3 shadow-2xl shadow-gray-200/60">
                    <div className="rounded-2xl border border-gray-200 bg-white">
                        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                            <div>
                                <p className="font-semibold text-gray-800">Confirmaciones</p>
                                <p className="text-xs text-gray-400">Vista de ejemplo</p>
                            </div>
                            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">12 personas</span>
                        </div>
                        {[
                            ['AM', 'Ana Martínez', '2', '#D6527F'],
                            ['CE', 'Carlos y Elena', '3', '#7C6EB0'],
                            ['FR', 'Familia Rodríguez', '4', '#3C8D76'],
                        ].map(([initials, name, guests, color]) => (
                            <div key={name} className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 last:border-0">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: color }}>
                                    {initials}
                                </span>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-800">{name}</p>
                                    <p className="text-xs text-gray-400">Confirmación recibida</p>
                                </div>
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{guests}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

export default RsvpShowcaseSection;
