import { useRef } from 'react';
import { ArrowUpRight, CalendarDays, ExternalLink, Sparkles } from 'lucide-react';
import { gsap, useGSAP } from '../../utils/gsap';

const REAL_EVENTS_URL = 'https://eventos.invita-ya.com';

const events = [
    {
        title: 'Kassandra & Brian',
        type: 'Boda',
        date: 'Mayo 2026',
        href: `${REAL_EVENTS_URL}/i/kassandra-brian`,
        image: `${REAL_EVENTS_URL}/invitations/kassandra-brian/img/Portada.jpeg`,
    },
    {
        title: 'Melani Marisol',
        type: 'XV Años',
        date: 'Mayo 2026',
        href: `${REAL_EVENTS_URL}/i/melani-marisol`,
        image: `${REAL_EVENTS_URL}/invitations/melani-marisol/img/og-preview-v5.jpg`,
    },
    {
        title: 'Kass & Brian',
        type: 'Despedida',
        date: 'Mayo 2026',
        href: `${REAL_EVENTS_URL}/i/despedida-kass-brian`,
        image: `${REAL_EVENTS_URL}/invitations/despedida-kass-brian/img/share-preview.png`,
    },
];

const RealEventsSection = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const media = gsap.matchMedia();

        media.add({
            desktop: '(min-width: 768px)',
            mobile: '(max-width: 767px)',
            reduceMotion: '(prefers-reduced-motion: reduce)',
        }, (context) => {
            const { desktop, reduceMotion } = context.conditions;
            if (reduceMotion) return;

            gsap.from('.real-events-heading', {
                opacity: 0,
                y: desktop ? 45 : 24,
                duration: desktop ? 0.8 : 0.55,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: desktop ? 'top 72%' : 'top 86%',
                    once: true,
                },
            });

            gsap.from('.real-event-card', {
                opacity: 0,
                y: desktop ? 70 : 30,
                scale: desktop ? 0.94 : 0.98,
                duration: desktop ? 0.85 : 0.55,
                stagger: desktop ? 0.14 : 0.09,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.real-events-grid',
                    start: desktop ? 'top 78%' : 'top 88%',
                    once: true,
                },
            });

            gsap.utils.toArray('.real-event-image').forEach((image) => {
                gsap.fromTo(image,
                    { yPercent: desktop ? -6 : -2, scale: 1.06 },
                    {
                        yPercent: desktop ? 6 : 2,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: image,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: desktop ? 1 : 0.35,
                        },
                    }
                );
            });
        });

        return () => media.revert();
    }, { scope: sectionRef });

    return (
    <section ref={sectionRef} id="eventos-reales" className="bg-invita-dark py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="real-events-heading mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-invita-rosa">
                        <Sparkles size={15} /> Trabajo publicado
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl">Mira invitaciones de eventos reales</h2>
                    <p className="mt-4 max-w-2xl text-white/65">
                        Una selección de celebraciones finalizadas que forman parte de nuestro portafolio público.
                    </p>
                </div>
                <a
                    href={REAL_EVENTS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-invita-rosa hover:text-invita-rosa"
                >
                    Ver todo el portafolio <ExternalLink size={16} />
                </a>
            </div>

            <div className="real-events-grid grid gap-6 md:grid-cols-3">
                {events.map((event) => (
                    <div key={event.href} className="real-event-card">
                        <a
                            href={event.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-invita-rosa/50"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden bg-white/10">
                                <img
                                    src={event.image}
                                    alt={`Invitación real: ${event.title}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="real-event-image h-[112%] w-full object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-invita-dark">
                                    {event.type}
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-4 p-5">
                                <div>
                                    <h3 className="text-xl font-bold">{event.title}</h3>
                                    <p className="mt-2 flex items-center gap-2 text-sm text-white/55">
                                        <CalendarDays size={14} /> {event.date}
                                    </p>
                                </div>
                                <ArrowUpRight className="text-invita-rosa transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default RealEventsSection;
