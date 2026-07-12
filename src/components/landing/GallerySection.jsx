import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays, ExternalLink, Sparkles } from 'lucide-react';
import { gsap, useGSAP } from '../../utils/gsap';
import LazyImage from '../ui/LazyImage';

const REAL_EVENTS_URL = 'https://eventos.invita-ya.com';

const demos = [
    {
        slug: '/demo/boda',
        title: 'Boda 💍',
        subtitle: 'Elegancia natural con tonos verdes',
        badge: 'Más vendido',
        badgeColor: 'bg-invita-heart text-white',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
    },
    {
        slug: '/demo/xv',
        title: 'XV Años 👑',
        subtitle: 'Diseño clásico y refinado en lila',
        badge: 'Popular',
        badgeColor: 'bg-purple-500 text-white',
        image: 'https://images.unsplash.com/photo-1721069118889-13b854aae301?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        slug: '/demo/bautizo',
        title: 'Bautizo 🧸',
        subtitle: 'Tonos pastel suaves y delicados',
        badge: 'Tierno',
        badgeColor: 'bg-blue-500 text-white',
        image: 'https://plus.unsplash.com/premium_photo-1664372356812-fbeb0850a835?q=80&w=732&auto=format&fit=crop',
    },
    {
        slug: '/demo/comunion',
        title: 'Primera Comunión 🕊️',
        subtitle: 'Elegancia sagrada con oro y marfil',
        badge: 'Premium',
        badgeColor: 'bg-[#C9A84C] text-white',
        image: 'https://images.unsplash.com/photo-1683150372139-31611c320d73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        slug: '/demo/babyshower',
        title: 'Baby Shower 👶',
        subtitle: 'Revelación de sexo divertido e interactivo',
        badge: 'Nuevo',
        badgeColor: 'bg-[#E8B4B8] text-white',
        image: 'https://plus.unsplash.com/premium_photo-1710894497488-8ec8c15a78c6?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        slug: '/demo/infantil',
        title: 'Cumpleaños Infantil 🪅',
        subtitle: 'Colores vivos, divertidos y llenos de energía',
        badge: 'Divertido',
        badgeColor: 'bg-[#FF9F1C] text-white',
        image: 'https://plus.unsplash.com/premium_photo-1663839411959-884b1e1667f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

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

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState('demos'); // 'demos' | 'events'
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

            gsap.from('.gallery-heading', {
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
        });

        return () => media.revert();
    }, { scope: sectionRef });

    useGSAP(() => {
        gsap.fromTo('.gallery-card',
            { opacity: 0, y: 30, scale: 0.96 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.65,
                stagger: 0.08,
                ease: 'power3.out',
                overwrite: 'auto'
            }
        );
    }, { dependencies: [activeTab], scope: sectionRef });

    return (
        <section ref={sectionRef} id="demo" className="bg-invita-dark py-24 text-white border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Heading */}
                <div className="gallery-heading mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-invita-rosa">
                            <Sparkles size={15} /> Portafolio
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl">
                            Encuentra tu estilo perfecto
                        </h2>
                        <p className="mt-4 max-w-2xl text-white/65">
                            Explora nuestras plantillas de demostración interactivas o echa un vistazo a invitaciones reales publicadas para nuestros clientes.
                        </p>
                    </div>
                    {activeTab === 'events' && (
                        <a
                            href={REAL_EVENTS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-invita-rosa hover:text-invita-rosa"
                        >
                            Ver todo el portafolio <ExternalLink size={16} />
                        </a>
                    )}
                </div>

                {/* Tabs Switcher */}
                <div className="flex justify-center mb-12">
                    <div className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full">
                        <button
                            onClick={() => setActiveTab('demos')}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                                activeTab === 'demos'
                                    ? 'bg-invita-heart text-white shadow-[0_0_12px_rgba(214,82,127,0.3)]'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Demos de Plantillas
                        </button>
                        <button
                            onClick={() => setActiveTab('events')}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                                activeTab === 'events'
                                    ? 'bg-invita-heart text-white shadow-[0_0_12px_rgba(214,82,127,0.3)]'
                                    : 'text-white/70 hover:text-white'
                            }`}
                        >
                            Eventos Reales
                        </button>
                    </div>
                </div>

                {/* Grid / Scroll Container */}
                <div className="flex md:grid gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-4 pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-3 hide-scrollbar scroll-smooth">
                    {activeTab === 'demos' ? (
                        demos.map((demo) => (
                            <div key={demo.slug} className="gallery-card flex-shrink-0 w-[80vw] sm:w-[300px] md:w-auto snap-center">
                                <Link
                                    to={demo.slug}
                                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-invita-rosa/50 h-full flex flex-col hover:shadow-[0_0_20px_rgba(214,82,127,0.15)]"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white/10 shrink-0">
                                        <LazyImage
                                            src={demo.image}
                                            alt={demo.title}
                                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                            wrapperClassName="h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <span className={`absolute top-4 left-4 ${demo.badgeColor} px-3 py-1 rounded-full text-xs font-bold shadow-sm`}>
                                            {demo.badge}
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow p-5">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{demo.title}</h3>
                                            <p className="text-white/60 text-sm mb-4">{demo.subtitle}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-2">
                                            <span className="text-xs text-invita-rosa font-bold tracking-wider uppercase group-hover:text-white transition-colors duration-300">
                                                Probar Demo
                                            </span>
                                            <ArrowUpRight className="text-invita-rosa transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        events.map((event) => (
                            <div key={event.href} className="gallery-card flex-shrink-0 w-[80vw] sm:w-[300px] md:w-auto snap-center">
                                <a
                                    href={event.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-invita-rosa/50 h-full flex flex-col hover:shadow-[0_0_20px_rgba(214,82,127,0.15)]"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white/10 shrink-0">
                                        <LazyImage
                                            src={event.image}
                                            alt={`Invitación real: ${event.title}`}
                                            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                                            wrapperClassName="h-full"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-invita-dark">
                                            {event.type}
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow p-5">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                                            <p className="mt-2 flex items-center gap-2 text-sm text-white/55 mb-4">
                                                <CalendarDays size={14} /> {event.date}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between mt-auto pt-2">
                                            <span className="text-xs text-invita-rosa font-bold tracking-wider uppercase group-hover:text-white transition-colors duration-300">
                                                Ver Invitación 🔗
                                            </span>
                                            <ArrowUpRight className="text-invita-rosa transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    )}
                </div>

                {/* Swipe indicator (Mobile only) */}
                <div className="md:hidden text-center mt-2 flex items-center justify-center gap-3 text-white/40">
                    <span className="w-10 h-[1px] bg-white/20"></span>
                    <span className="text-[10px] font-medium tracking-wide uppercase">Desliza para explorar</span>
                    <span className="w-10 h-[1px] bg-white/20"></span>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
