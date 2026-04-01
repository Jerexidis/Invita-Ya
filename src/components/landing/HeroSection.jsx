import { motion } from 'framer-motion';
import { Star, ArrowRight, MessageCircle, Check } from 'lucide-react';
import mockWeb from '../../assets/mocks/Web.png';
import mockMovil from '../../assets/mocks/movil.PNG';

const WHATSAPP_NUMBER = '524491120621';

const HeroSection = () => {
    const openWhatsApp = () => {
        const text = encodeURIComponent('¡Hola! 👋 Me interesa cotizar una invitación digital.');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
            {/* Background decorative gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-invita-cream via-rose-50 to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">

                {/* Left — Text Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left space-y-8"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div variants={item}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-invita-cream text-invita-heart rounded-full text-sm font-semibold tracking-wide uppercase"
                    >
                        <Star size={14} className="fill-invita-heart" /> La tendencia de 2026
                    </motion.div>

                    {/* Title */}
                    <motion.h1 variants={item}
                        className="text-5xl lg:text-7xl font-serif text-invita-dark leading-[1.1]"
                    >
                        Invitaciones que tus invitados {' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-invita-heart to-invita-rosa">
                            amarán
                        </span>.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p variants={item}
                        className="text-xl text-invita-gray leading-relaxed max-w-lg mx-auto md:mx-0"
                    >
                        Crea invitaciones digitales hermosas para tu boda, XV años o bautizo.
                        Con confirmación automática, para que te enfoques en lo que importa:{' '}
                        <strong className="text-invita-dark">disfrutar tu día.</strong>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={item}
                        className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <button
                            onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 border-2 border-invita-dark text-invita-dark rounded-full hover:bg-invita-dark hover:text-white transition-all font-medium flex items-center justify-center gap-2 duration-300"
                        >
                            Ver ejemplos <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* Trust line */}
                    <motion.div variants={item}
                        className="flex items-center gap-4 justify-center md:justify-start text-sm text-invita-gray"
                    >
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-500" /> Respuesta en {'<'}1h
                        </span>
                        <span className="w-1 h-1 rounded-full bg-invita-gray/40" />
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-500" /> Sin compromiso
                        </span>
                    </motion.div>
                </motion.div>

                {/* Right — Mockups */}
                <motion.div
                    className="w-full md:w-1/2 relative mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-rose-100 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10" />

                    <div className="flex items-end justify-center scale-100 sm:scale-110 md:scale-100 lg:scale-[1.35] origin-bottom">
                        {/* Desktop mockup */}
                        <div className="relative z-10 w-full bg-gray-500 rounded-lg sm:rounded-xl shadow-2xl border border-gray-600 overflow-hidden">
                            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-600">
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400" />
                                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
                                <span className="ml-2 sm:ml-3 flex-1 bg-gray-400 rounded-md h-4 sm:h-5 text-[8px] sm:text-[10px] text-gray-200 flex items-center px-1.5 sm:px-2">invita-ya.com</span>
                            </div>
                            <img src={mockWeb} alt="Vista web de invitación" className="w-full object-cover object-top" loading="eager" fetchpriority="high" />
                        </div>

                        {/* Mobile mockup */}
                        <div className="relative z-20 -ml-6 sm:-ml-8 md:-ml-10 mb-0 w-[15%] min-w-[50px] bg-gray-500 rounded-[0.4rem] sm:rounded-[0.6rem] shadow-2xl border-2 border-gray-500 overflow-hidden scale-y-[1.15] origin-bottom">
                            <div className="flex justify-center py-0.5 bg-gray-500 shrink-0">
                                <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full" />
                            </div>
                            <img src={mockMovil} alt="Vista móvil de invitación" className="w-full block" loading="eager" fetchpriority="high" />
                        </div>
                    </div>

                    {/* Floating badge — RSVP */}
                    <motion.div
                        className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 z-30 bg-white p-3 sm:p-4 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                            <Check size={16} className="text-green-600 sm:hidden" />
                            <Check size={20} className="text-green-600 hidden sm:block" />
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm sm:text-base">Ana confirmó 🎉</p>
                            <p className="text-[10px] sm:text-xs text-slate-500">hace 2 minutos</p>
                        </div>
                    </motion.div>

                    {/* Floating badge — Location */}
                    <motion.div
                        className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-30 bg-white p-2.5 sm:p-3 rounded-xl shadow-lg flex items-center gap-2"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <div className="bg-blue-100 p-1.5 rounded-full">
                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">Abrir en Maps 📍</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
