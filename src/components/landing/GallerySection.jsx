import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import LazyImage from '../ui/LazyImage';

const demos = [
    {
        slug: '/demo/boda',
        title: 'Boda 💍',
        subtitle: 'Elegancia natural con tonos verdes',
        badge: 'Más vendido',
        badgeColor: 'bg-invita-heart text-white',
        image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop',
        price: 'Desde $299 MXN',
    },
    {
        slug: '/demo/xv',
        title: 'XV Años 👑',
        subtitle: 'Diseño clásico y refinado en lila',
        badge: 'Popular',
        badgeColor: 'bg-purple-500 text-white',
        image: 'https://images.unsplash.com/photo-1721069118889-13b854aae301?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 'Desde $299 MXN',
    },
    {
        slug: '/demo/bautizo',
        title: 'Bautizo 🧸',
        subtitle: 'Tonos pastel suaves y delicados',
        badge: 'Tierno',
        badgeColor: 'bg-blue-500 text-white',
        image: 'https://plus.unsplash.com/premium_photo-1664372356812-fbeb0850a835?q=80&w=732&auto=format&fit=crop',
        price: 'Desde $299 MXN',
    },
    {
        slug: '/demo/comunion',
        title: 'Primera Comunión 🕊️',
        subtitle: 'Elegancia sagrada con oro y marfil',
        badge: 'Premium',
        badgeColor: 'bg-[#C9A84C] text-white',
        image: 'https://images.unsplash.com/photo-1683150372139-31611c320d73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 'Desde $499 MXN',
    },
    {
        slug: '/demo/babyshower',
        title: 'Baby Shower 👶',
        subtitle: 'Revelación de sexo divertido e interactivo',
        badge: 'Nuevo',
        badgeColor: 'bg-[#E8B4B8] text-white',
        image: 'https://plus.unsplash.com/premium_photo-1710894497488-8ec8c15a78c6?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 'Desde $499 MXN',
    },
    {
        slug: '/demo/infantil',
        title: 'Cumpleaños Infantil 🪅',
        subtitle: 'Colores vivos, divertidos y llenos de energía',
        badge: 'Divertido',
        badgeColor: 'bg-[#FF9F1C] text-white',
        image: 'https://plus.unsplash.com/premium_photo-1663839411959-884b1e1667f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 'Desde $499 MXN',
    },
];

const GallerySection = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Scroll roughly one card width (320px + gap)
            const scrollAmount = direction === 'left' ? -344 : 344;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="demo" className="py-24 bg-invita-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        Ejemplos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                        Encuentra tu estilo perfecto
                    </h2>
                    <p className="text-invita-gray max-w-2xl mx-auto text-lg">
                        Cada evento es único. Explora nuestros diseños y elige el que hable por ti.
                    </p>
                </ScrollReveal>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Botón Izquierdo (visible en pantallas medianas+) */}
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-invita-rosa/20 text-invita-dark hover:bg-invita-cream transition-transform hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Botón Derecho */}
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full items-center justify-center shadow-lg border border-invita-rosa/20 text-invita-dark hover:bg-invita-cream transition-transform hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pt-4 pb-8 -mx-4 px-4 sm:px-0 sm:mx-0 hide-scrollbar scroll-smooth"
                    >
                        {demos.map((demo, i) => (
                            <div key={i} className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center">
                                <div
                                    onClick={() => navigate(demo.slug)}
                                    className="bg-white rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group/card overflow-hidden h-full flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="h-48 overflow-hidden relative shrink-0">
                                        <LazyImage
                                            src={demo.image}
                                            alt={demo.title}
                                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                            wrapperClassName="h-full"
                                        />

                                        {/* Badge */}
                                        <span className={`absolute top-3 left-3 ${demo.badgeColor} px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm`}>
                                            {demo.badge}
                                        </span>

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                            <span className="text-white font-semibold text-sm flex items-center gap-2">
                                                Ver demo interactivo →
                                            </span>
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-invita-dark mb-1">{demo.title}</h3>
                                        <p className="text-invita-gray text-sm mb-4 flex-grow">{demo.subtitle}</p>
                                        <div className="mt-auto flex flex-col gap-2">
                                            <span className="text-invita-heart font-semibold text-sm">
                                                Desde ${demo.price || '299'} MXN
                                            </span>
                                            <span className="text-sm text-invita-rosa font-medium hover:text-invita-heart transition-colors flex items-center gap-2">
                                                <span className="inline-block animate-bounce text-base">👆</span> Pulsa aquí para ver el demo completo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Swipe indicator (Mobile solo) */}
                    <div className="md:hidden text-center mt-2 flex items-center justify-center gap-3 text-invita-gray/60">
                        <span className="w-10 h-[1px] bg-invita-gray/30"></span>
                        <span className="text-xs font-medium tracking-wide uppercase">Desliza para explorar</span>
                        <span className="w-10 h-[1px] bg-invita-gray/30"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
