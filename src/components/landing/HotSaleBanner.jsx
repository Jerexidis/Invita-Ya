import { useState } from 'react';
import { X, Flame } from 'lucide-react';

const HOT_SALE_BAR_HEIGHT = 'hot-sale-bar-h';

const HotSaleBanner = () => {
    const [visible, setVisible] = useState(true);

    const scrollToPricing = () => {
        document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <>
            {/* Fixed banner bar — sits above the navbar */}
            <div
                className="fixed top-0 left-0 right-0 bg-red-600 text-white text-xs sm:text-sm font-semibold cursor-pointer z-[60]"
                onClick={scrollToPricing}
                id={HOT_SALE_BAR_HEIGHT}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 py-2 px-10">
                    <Flame size={14} className="text-yellow-300 hidden sm:block flex-shrink-0" />
                    <span>🔥</span>
                    <span className="tracking-wide text-center">
                        <strong>HOT SALE</strong> — Hasta 30% OFF en invitaciones digitales
                    </span>
                    <span className="hidden sm:inline px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold flex-shrink-0">
                        ¡Ver ofertas!
                    </span>
                    <span>🔥</span>
                    <Flame size={14} className="text-yellow-300 hidden sm:block flex-shrink-0" />

                    {/* Close button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); setVisible(false); }}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
                        aria-label="Cerrar banner"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Spacer so content is not hidden behind the fixed banner */}
            <div className="h-[36px]" />
        </>
    );
};

export default HotSaleBanner;
