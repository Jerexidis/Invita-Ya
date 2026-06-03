import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '524491120621';

const navLinks = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#demo', label: 'Ejemplos' },
    { href: '#precios', label: 'Precios' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openWhatsApp = () => {
        const text = encodeURIComponent('¡Hola! 👋 Me interesa cotizar una invitación digital.');
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-invita-cream'
            : 'bg-white/90 backdrop-blur-md border-b border-invita-cream'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img src="/img/heart.png" alt="Invita-Ya" className="w-6 h-6 object-contain" />
                        <span className="text-2xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            <span style={{ fontWeight: 800 }} className="text-invita-dark">INVITA-</span>
                            <span style={{ fontWeight: 600 }} className="text-invita-rosa">YA.</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}
                                className="text-invita-gray hover:text-invita-heart font-medium transition-colors">
                                {link.label}
                            </a>
                        ))}

                        <AnimatePresence>
                            {scrolled && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9, width: 0 }}
                                    animate={{ opacity: 1, scale: 1, width: 'auto' }}
                                    exit={{ opacity: 0, scale: 0.9, width: 0 }}
                                    transition={{ duration: 0.25 }}
                                    onClick={openWhatsApp}
                                    className="px-5 py-2.5 bg-invita-heart text-white text-sm font-semibold rounded-full hover:bg-invita-rosa transition-colors flex items-center gap-2 overflow-hidden whitespace-nowrap"
                                >
                                    Cotizar <ArrowRight size={14} />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-invita-gray p-2">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-invita-cream shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col space-y-1 p-4">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href}
                                    className="text-invita-gray font-medium py-3 px-4 rounded-xl hover:bg-invita-cream transition-colors"
                                    onClick={() => setIsMenuOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                            <button
                                onClick={() => { setIsMenuOpen(false); openWhatsApp(); }}
                                className="mt-2 py-3 px-4 bg-invita-heart text-white rounded-xl font-semibold text-center hover:bg-invita-rosa transition-colors"
                            >
                                💬 Cotizar por WhatsApp
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
