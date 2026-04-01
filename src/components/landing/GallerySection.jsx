import { useNavigate } from 'react-router-dom';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';
import LazyImage from '../ui/LazyImage';

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
        badge: 'Nuevo',
        badgeColor: 'bg-blue-500 text-white',
        image: 'https://plus.unsplash.com/premium_photo-1664372356812-fbeb0850a835?q=80&w=732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const GallerySection = () => {
    const navigate = useNavigate();

    return (
        <section id="demo" className="py-24 bg-invita-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="text-center mb-16">
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

                <StaggerContainer className="grid md:grid-cols-3 gap-8">
                    {demos.map((demo, i) => (
                        <StaggerItem key={i}>
                            <div
                                onClick={() => navigate(demo.slug)}
                                className="bg-white rounded-2xl shadow-sm border border-invita-rosa/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                            >
                                {/* Image */}
                                <div className="h-52 overflow-hidden relative">
                                    <LazyImage
                                        src={demo.image}
                                        alt={demo.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        wrapperClassName="h-full"
                                    />

                                    {/* Badge */}
                                    <span className={`absolute top-3 left-3 ${demo.badgeColor} px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-sm`}>
                                        {demo.badge}
                                    </span>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                        <span className="text-white font-semibold text-sm flex items-center gap-2">
                                            Ver demo interactivo →
                                        </span>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-invita-dark mb-1">{demo.title}</h3>
                                    <p className="text-invita-gray text-sm mb-3">{demo.subtitle}</p>
                                    <span className="text-invita-heart font-semibold text-sm">
                                        Desde $299 MXN
                                    </span>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default GallerySection;
