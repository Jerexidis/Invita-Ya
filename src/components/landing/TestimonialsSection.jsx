import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const testimonials = [
    {
        text: 'Mis invitados no paraban de decirme lo bonita que estaba la invitación. Varios me preguntaron quién la hizo. Lo mejor fue que pude ver en tiempo real quién confirmaba y organizar todo sin estrés.',
        name: 'Sofía R.',
        event: 'Boda en Aguascalientes',
        date: 'Octubre 2025',
        type: 'Boda ✨',
        initials: 'SR',
        color: 'bg-green-100 text-green-700',
    },
    {
        text: 'Yo quería algo diferente para los XV de mi hija, no la típica invitación de papel. Invita-Ya nos diseñó una invitación hermosa con los colores lila que mi hija eligió. Fue súper fácil compartirla.',
        name: 'María Elena G.',
        event: 'XV Años en León',
        date: 'Marzo 2026',
        type: 'XV Años 🎀',
        initials: 'MG',
        color: 'bg-purple-100 text-purple-700',
    },
    {
        text: 'Ahorramos como $4,000 en invitaciones impresas. Y la verdad, la digital se veía mucho más elegante. Mi suegra es la que más compartió el link jajaja.',
        name: 'Daniela y Luis',
        event: 'Boda en Guadalajara',
        date: 'Enero 2026',
        type: 'Boda ✨',
        initials: 'DL',
        color: 'bg-rose-100 text-rose-700',
    },
    {
        text: 'Pensé que iba a ser complicado, pero solo les mandé mis datos por WhatsApp y en 2 días ya tenía la invitación lista. La parte del mapa que abre Maps fue lo que más le gustó a mi familia.',
        name: 'Karen M.',
        event: 'Bautizo en Aguascalientes',
        date: 'Febrero 2026',
        type: 'Bautizo 💙',
        initials: 'KM',
        color: 'bg-blue-100 text-blue-700',
    },
];

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-advance every 6 seconds
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    const slideVariants = {
        enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
        <section className="py-24 bg-invita-cream relative overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[200px] font-serif text-invita-heart/5 leading-none pointer-events-none select-none">"</div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                        ❤️ Historias reales
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-invita-dark mb-4">
                        Lo que nuestras clientas dicen
                    </h2>
                </ScrollReveal>

                {/* Carousel */}
                <div className="relative">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm border border-invita-rosa/10 min-h-[280px] flex flex-col justify-center items-center text-center overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                className="flex flex-col items-center"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-invita-dark text-lg sm:text-xl leading-relaxed max-w-2xl mb-8 italic">
                                    "{t.text}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}>
                                        {t.initials}
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-invita-dark">{t.name}</p>
                                        <p className="text-invita-gray text-sm">{t.event} · {t.date}</p>
                                    </div>
                                    <span className="ml-2 px-2.5 py-1 bg-invita-cream rounded-full text-xs font-semibold text-invita-dark">
                                        {t.type}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-invita-gray hover:text-invita-dark hover:shadow-lg transition-all"
                        aria-label="Testimonio anterior"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-invita-gray hover:text-invita-dark hover:shadow-lg transition-all"
                        aria-label="Siguiente testimonio"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current
                                ? 'w-8 bg-invita-heart'
                                : 'w-2 bg-invita-gray/30 hover:bg-invita-gray/50'
                                }`}
                            aria-label={`Ver testimonio ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
