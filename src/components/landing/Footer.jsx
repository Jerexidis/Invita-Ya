import { Check, Mail } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const WhatsAppSVG = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" />
    </svg>
);

const Footer = () => (
    <footer className="bg-invita-dark text-invita-gray relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-invita-heart/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-invita-rosa/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-invita-heart/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">

            {/* — CTA Block — */}
            <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <ScrollReveal className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white leading-tight mb-5">
                        Tu evento es único.{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-invita-heart to-invita-rosa">
                            Tu invitación también debería serlo.
                        </span>
                    </h2>

                    <p className="text-white/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        Escríbenos hoy y recibe tu invitación personalizada en menos de 48 horas.
                        ¿Tienes dudas? Pregúntanos lo que sea, sin compromiso.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/50 text-sm">
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Respuesta en menos de 1 hora
                        </span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Sin compromiso
                        </span>
                        <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-green-400" /> Pago seguro
                        </span>
                    </div>
                </ScrollReveal>
            </div>

            {/* — Divider — */}
            <div className="max-w-6xl mx-auto px-4">
                <div className="border-t border-white/10" />
            </div>

            {/* — Footer Content — */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="/img/heart.png" alt="Invita-Ya" className="w-5 h-5 object-contain" />
                            <span className="text-xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                                <span style={{ fontWeight: 800 }} className="text-white">INVITA-</span>
                                <span style={{ fontWeight: 600 }} className="text-invita-rosa">YA.</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70 max-w-xs">
                            Haciendo que tus momentos especiales comiencen desde el primer click.
                        </p>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Contacto</h4>
                        <a href="mailto:invitaya.ags@gmail.com" className="flex items-center gap-3 text-sm hover:text-invita-rosa transition-colors group">
                            <div className="w-9 h-9 rounded-lg bg-invita-text/50 flex items-center justify-center group-hover:bg-invita-rosa/20 transition-colors">
                                <Mail size={16} />
                            </div>
                            invitaya.ags@gmail.com
                        </a>
                        <a href={`https://api.whatsapp.com/send/?phone=524491120621&text=${encodeURIComponent('¡Hola! 😊 Me interesa una invitación digital')}&type=phone_number&app_absent=0`} className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors group">
                            <div className="w-9 h-9 rounded-lg bg-invita-text/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                <WhatsAppSVG />
                            </div>
                            +52 449 112 0621
                        </a>
                    </div>

                    {/* Redes */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-2">Síguenos</h4>
                        <div className="flex items-center gap-3">
                            <a href="https://www.facebook.com/profile.php?id=61588011047453" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/30">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/invitaya.mx/" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href={`https://api.whatsapp.com/send/?phone=524491120621&text=${encodeURIComponent('¡Hola! 😊 Me interesa una invitación digital')}&type=phone_number&app_absent=0`} aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-invita-text/50 flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/30">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.122.554 4.197 1.604 6.046L0 24l6.105-1.602a11.83 11.83 0 005.94 1.586h.005c6.635 0 12.032-5.394 12.034-12.03a11.758 11.758 0 00-3.517-8.403z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-invita-gray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs opacity-50">© 2026 Invita-Ya. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
