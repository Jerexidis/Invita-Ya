import { useState, useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMAGES = {
    HERO_PHOTO: 'https://plus.unsplash.com/premium_photo-1762456151036-58024a74294c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    HERO_DECO_LEFT: null,  // ej: 'https://mi-cdn.com/woody.png'
    HERO_DECO_RIGHT: null,  // ej: 'https://mi-cdn.com/buzz.png'
};

const characters = [
    {
        img: 'https://i.pinimg.com/originals/cd/5b/3e/cd5b3e36af57d55515866af58b9e2f7a.png',
        emoji: '🤠',
        name: 'Woody',
        quote: '"¡Hay una serpiente en mi bota!"',
        bg: '#FDD835',
    },
    {
        img: 'https://i.pinimg.com/originals/64/71/28/647128eca7ad5b25dcf0eb9456407d98.png',
        emoji: '🚀',
        name: 'Buzz',
        quote: '"¡Al infinito y más allá!"',
        bg: '#5B9BD5',
    },
    {
        img: 'https://i.pinimg.com/originals/ce/2c/93/ce2c93734765e6ba9e82f5bac6e22894.png',
        emoji: '🦕',
        name: 'Rex',
        quote: '"¡El mejor dino de todos!"',
        bg: '#4CAF50',
    },
    {
        img: 'https://i.pinimg.com/1200x/ae/69/d9/ae69d96b0bb69f5f854822e990e53834.jpg',
        emoji: '🥄',
        name: 'Forky',
        quote: '"¡Soy basura!"',
        bg: '#E53935',
    },
];

const photos = [
    { url: 'https://images.unsplash.com/photo-1552924028-04ee791dcc44?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: '1 años' },
    { url: 'https://images.unsplash.com/photo-1583078281490-576252fb0085?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: '2 año' },
    { url: 'https://images.unsplash.com/photo-1648127787184-7bdde9fd3300?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: '3 años' },
    { url: 'https://images.unsplash.com/photo-1678923685297-0ade9816275e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', label: '4 años' },
];

/* ══════════════════════════════════════════════════ */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@700;800;900&display=swap');

  .ts-bangers { font-family: 'Bangers', cursive; letter-spacing: 2px; }

  .ts-cloud { position:absolute; background:white; border-radius:50px; opacity:0.85; }
  .ts-cloud::before, .ts-cloud::after { content:''; position:absolute; background:white; border-radius:50%; }
  .ts-cloud-1 { width:120px;height:40px;top:8%;left:5%;animation:tsFloatCloud 8s ease-in-out infinite; }
  .ts-cloud-1::before { width:60px;height:60px;top:-30px;left:15px; }
  .ts-cloud-1::after  { width:40px;height:40px;top:-20px;left:50px; }
  .ts-cloud-2 { width:180px;height:50px;top:15%;right:8%;animation:tsFloatCloud 11s ease-in-out infinite reverse; }
  .ts-cloud-2::before { width:80px;height:80px;top:-40px;left:20px; }
  .ts-cloud-2::after  { width:60px;height:60px;top:-30px;left:80px; }
  .ts-cloud-3 { width:100px;height:35px;top:5%;left:40%;animation:tsFloatCloud 9s ease-in-out infinite 2s; }
  .ts-cloud-3::before { width:50px;height:50px;top:-25px;left:10px; }
  .ts-cloud-3::after  { width:35px;height:35px;top:-15px;left:45px; }

  @keyframes tsFloatCloud { 0%,100%{transform:translateX(0)} 50%{transform:translateX(20px)} }
  @keyframes tsBounceIn {
    0%{transform:scale(0) rotate(-5deg);opacity:0} 60%{transform:scale(1.15) rotate(2deg)}
    80%{transform:scale(0.95)} 100%{transform:scale(1) rotate(0);opacity:1}
  }
  @keyframes tsFloat {
    0%,100%{transform:translateY(0) rotate(2deg)} 50%{transform:translateY(-12px) rotate(-2deg)}
  }
  @keyframes tsWiggle { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
  @keyframes tsSpinSlow { 0%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} 100%{transform:rotate(-15deg)} }
  @keyframes tsTwinkle { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.5)} }
  @keyframes tsRocket {
    0%{transform:translate(-60px,60px) rotate(-30deg);opacity:0}
    10%{opacity:0.6} 90%{opacity:0.6}
    100%{transform:translate(900px,-250px) rotate(-30deg);opacity:0}
  }

  .ts-badge-invited { animation: tsWiggle 3s ease-in-out infinite; }
  .ts-hero-name     { animation: tsBounceIn 0.6s cubic-bezier(.36,.07,.19,.97) both; }
  .ts-hero-number   { animation: tsBounceIn 0.8s cubic-bezier(.36,.07,.19,.97) 0.2s both; }
  .ts-photo-float   { animation: tsFloat 4s ease-in-out infinite; }
  .ts-badge-float-1 { animation: tsSpinSlow 6s linear infinite; }
  .ts-badge-float-2 { animation: tsSpinSlow 8s linear infinite reverse; }
  .ts-char-1 { animation: tsFloat 4s ease-in-out infinite 0s; }
  .ts-char-2 { animation: tsFloat 4s ease-in-out infinite 0.8s; }
  .ts-char-3 { animation: tsFloat 4s ease-in-out infinite 1.6s; }
  .ts-char-4 { animation: tsFloat 4s ease-in-out infinite 2.4s; }

  .ts-polaroid { transition: transform 0.2s; cursor: pointer; }
  .ts-polaroid:nth-child(1) { transform: rotate(3deg); }
  .ts-polaroid:nth-child(2) { transform: rotate(-5deg) translateY(-16px); }
  .ts-polaroid:nth-child(3) { transform: rotate(6deg) translateY(10px); }
  .ts-polaroid:nth-child(4) { transform: rotate(-3deg); }
  .ts-polaroid:hover        { transform: rotate(0deg) scale(1.08) !important; z-index:10; }

  .ts-cd-box:hover { animation: tsBounceIn 0.3s ease; }
  .ts-rocket { position:absolute;font-size:36px;pointer-events:none;opacity:0.6;animation:tsRocket 12s linear forwards; }
  .ts-success-check { animation: tsBounceIn 0.5s cubic-bezier(.36,.07,.19,.97) both; }
  .ts-map-btn:hover { transform:translate(3px,3px);box-shadow:2px 2px 0 #1a1a1a !important;background:#C62828 !important; }
  .ts-submit-btn:hover:not(:disabled) { transform:translate(3px,3px);box-shadow:2px 2px 0 #1a1a1a !important; }

  /* Imagen del personaje — sin recorte, proporciones respetadas */
  .ts-char-img {
    width: 110px; height: 110px;
    object-fit: contain;
    object-position: bottom center;
    display: block; margin: 0 auto 8px;
    filter: drop-shadow(2px 4px 4px rgba(0,0,0,0.22));
  }
  /* Imagen deco del hero */
  .ts-hero-deco-img {
    width: 100%; height: 100%;
    object-fit: contain;
    filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
  }
`;

const C = {
    sky: '#87CEEB', blue: '#5B9BD5', dark: '#1a1a1a', navy: '#1a3a5c',
    yellow: '#FDD835', red: '#E53935', green: '#4CAF50', cream: '#FFF9C4', white: '#ffffff',
};

const CountBox = ({ value, label, bg, rotate }) => (
    <div className="ts-cd-box" style={{
        background: bg, border: `4px solid ${C.dark}`, borderRadius: 16,
        width: 100, height: 100, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        boxShadow: '5px 5px 0 rgba(0,0,0,0.5)', transform: `rotate(${rotate}deg)`,
    }}>
        <span className="ts-bangers" style={{ fontSize: 46, lineHeight: 1, color: 'rgba(0,0,0,0.75)', WebkitTextStroke: '2px rgba(0,0,0,0.3)' }}>{value}</span>
        <span style={{ fontSize: 11, fontWeight: 900, textTransform: 'uppercase', color: 'rgba(0,0,0,0.6)', letterSpacing: 1 }}>{label}</span>
    </div>
);

const FenceDivider = () => (
    <div style={{
        width: '100%', height: 20,
        background: 'repeating-linear-gradient(90deg,#8B5E3C 0px,#8B5E3C 18px,#FFF 18px,#FFF 22px)',
        borderTop: `4px solid ${C.dark}`, borderBottom: `4px solid ${C.dark}`,
    }} />
);

/* Muestra imagen si hay src, si no el emoji */
const CharVisual = ({ img, emoji }) =>
    img
        ? <img src={img} alt="" className="ts-char-img" />
        : <span style={{ fontSize: 64, display: 'block', textAlign: 'center', marginBottom: 8, lineHeight: 1 }}>{emoji}</span>;

/* Badge flotante del hero: imagen o emoji */
const HeroDeco = ({ src, fallback, className, style }) => (
    <div className={className} style={style}>
        {src
            ? <img src={src} alt="" className="ts-hero-deco-img" />
            : <span style={{ fontSize: 24 }}>{fallback}</span>
        }
    </div>
);

/* ══════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
══════════════════════════════════════════════════ */
const InvitacionToyStory = ({ onBack }) => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [rsvpStatus, setRsvpStatus] = useState('idle');
    const [rockets, setRockets] = useState([]);
    const rocketId = useRef(0);

    useEffect(() => {
        const eventDate = new Date('2026-08-20T15:00:00').getTime();
        const tick = () => {
            const dist = eventDate - Date.now();
            if (dist < 0) return;
            setTimeLeft({
                days: Math.floor(dist / 86400000),
                hours: Math.floor((dist % 86400000) / 3600000),
                minutes: Math.floor((dist % 3600000) / 60000),
                seconds: Math.floor((dist % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const launch = () => {
            const id = rocketId.current++;
            setRockets(r => [...r, { id, top: 40 + Math.random() * 30 }]);
            setTimeout(() => setRockets(r => r.filter(x => x.id !== id)), 12000);
        };
        const t1 = setTimeout(launch, 2000);
        const t2 = setInterval(launch, 15000);
        return () => { clearTimeout(t1); clearInterval(t2); };
    }, []);

    const handleRSVP = (e) => {
        e.preventDefault();
        setRsvpStatus('submitting');
        setTimeout(() => setRsvpStatus('success'), 1400);
    };

    return (

        <>
            <style>{STYLES}</style>
            <div style={{ fontFamily: "'Nunito', sans-serif", background: C.blue, minHeight: '100vh', overflowX: 'hidden', color: C.dark }}>

                <button onClick={onBack || (() => navigate('/'))} style={{
                    position: 'fixed', top: 20, left: 20, zIndex: 50,
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 18px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
                    border: `2px solid ${C.dark}`, borderRadius: 50,
                    fontFamily: "'Nunito', sans-serif", fontWeight: 900, fontSize: 14,
                    cursor: 'pointer', boxShadow: `4px 4px 0 ${C.dark}`, transition: 'all .2s',
                }}>
                    <ArrowLeft size={15} /> Regresar
                </button>

                {/* ── HERO ── */}
                <section style={{
                    position: 'relative', minHeight: '95vh',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    padding: '80px 20px 40px', overflow: 'hidden',
                    background: `linear-gradient(180deg, ${C.sky} 0%, ${C.blue} 40%, ${C.yellow} 40%, ${C.yellow} 42%, ${C.blue} 42%)`,
                }}>
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(#FFF176 2px, transparent 2px)`, backgroundSize: '45px 45px', opacity: 0.12 }} />
                    <div className="ts-cloud ts-cloud-1" /><div className="ts-cloud ts-cloud-2" /><div className="ts-cloud ts-cloud-3" />

                    <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 600, width: '100%' }}>
                        <div className="ts-badge-invited" style={{ display: 'inline-block', marginBottom: 20 }}>
                            <span className="ts-bangers" style={{ background: C.red, color: C.white, fontSize: 22, letterSpacing: 3, padding: '8px 28px', borderRadius: 40, border: `4px solid ${C.dark}`, boxShadow: `5px 5px 0 ${C.dark}`, display: 'inline-block' }}>
                                ¡Estás Invitado!
                            </span>
                        </div>
                        <div style={{ lineHeight: 0.9, marginBottom: 10 }}>
                            <span className="ts-bangers ts-hero-name" style={{ display: 'block', fontSize: 'clamp(80px,18vw,130px)', color: C.yellow, WebkitTextStroke: `4px ${C.dark}`, textShadow: `6px 6px 0 ${C.dark}` }}>Leo</span>
                            <span className="ts-bangers" style={{ display: 'block', fontSize: 'clamp(40px,8vw,65px)', color: C.white, WebkitTextStroke: `3px ${C.dark}`, textShadow: `4px 4px 0 ${C.dark}` }}>cumple</span>
                            <span className="ts-bangers ts-hero-number" style={{ display: 'block', fontSize: 'clamp(110px,25vw,180px)', color: C.red, WebkitTextStroke: `5px ${C.dark}`, textShadow: `8px 8px 0 ${C.dark}` }}>5</span>
                        </div>

                        {/* Foto + badges flotantes */}
                        <div className="ts-photo-float" style={{ position: 'relative', width: 220, height: 220, margin: '20px auto' }}>
                            <div style={{ position: 'absolute', inset: 0, background: C.dark, borderRadius: '50%', transform: 'translate(8px,8px)' }} />
                            <div style={{ position: 'absolute', inset: 0, background: C.yellow, borderRadius: '50%', border: `4px solid ${C.dark}` }} />
                            <div style={{ position: 'absolute', inset: 8, borderRadius: '50%', overflow: 'hidden', border: `4px solid ${C.dark}` }}>
                                {/* 🖼️ Foto del cumpleañero → cambia IMAGES.HERO_PHOTO */}
                                <img src={IMAGES.HERO_PHOTO} alt="Leo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            {/* 🖼️ Badge izquierdo → cambia IMAGES.HERO_DECO_LEFT (null = emoji 🤠) */}
                            <HeroDeco
                                src={IMAGES.HERO_DECO_LEFT} fallback="🤠"
                                className="ts-badge-float-1"
                                style={{
                                    position: 'absolute', top: -8, left: -8, zIndex: 10,
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: C.yellow, border: `3px solid ${C.dark}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `3px 3px 0 ${C.dark}`, overflow: 'hidden',
                                    padding: IMAGES.HERO_DECO_LEFT ? 4 : 0,
                                }}
                            />

                            {/* 🖼️ Badge derecho → cambia IMAGES.HERO_DECO_RIGHT (null = emoji 🚀) */}
                            <HeroDeco
                                src={IMAGES.HERO_DECO_RIGHT} fallback="🚀"
                                className="ts-badge-float-2"
                                style={{
                                    position: 'absolute', bottom: 0, right: -8, zIndex: 10,
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: C.green, border: `3px solid ${C.dark}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: `3px 3px 0 ${C.dark}`, overflow: 'hidden',
                                    padding: IMAGES.HERO_DECO_RIGHT ? 4 : 0,
                                }}
                            />
                        </div>
                        <span className="ts-bangers" style={{ fontSize: 22, letterSpacing: 2, color: C.white, WebkitTextStroke: `1px ${C.dark}`, textShadow: `2px 2px 0 ${C.dark}` }}>¡Al infinito y más allá!</span>
                    </div>
                </section>

                <FenceDivider />

                {/* ── COUNTDOWN ── */}
                <section style={{ background: C.navy, padding: '50px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    {Array.from({ length: 25 }).map((_, i) => {
                        const sz = Math.random() * 3 + 1;
                        return <div key={i} style={{ position: 'absolute', width: sz, height: sz, background: 'white', borderRadius: '50%', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `tsTwinkle ${1.5 + Math.random() * 2}s ease-in-out ${Math.random() * 3}s infinite` }} />;
                    })}
                    {rockets.map(r => <div key={r.id} className="ts-rocket" style={{ top: `${r.top}%`, left: 0 }}>🚀</div>)}
                    <span className="ts-bangers" style={{ display: 'block', fontSize: 42, color: C.yellow, letterSpacing: 3, textShadow: '3px 3px 0 rgba(0,0,0,0.4)', marginBottom: 30, position: 'relative', zIndex: 1 }}>¡Faltan solo!</span>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                        <CountBox value={timeLeft.days} label="Días" bg={C.yellow} rotate={3} />
                        <CountBox value={timeLeft.hours} label="Horas" bg={C.red} rotate={-2} />
                        <CountBox value={timeLeft.minutes} label="Min" bg={C.green} rotate={2} />
                        <CountBox value={timeLeft.seconds} label="Seg" bg={C.white} rotate={-3} />
                    </div>
                </section>

                <FenceDivider />

                {/* ── CUÁNDO Y DÓNDE ── */}
                <section style={{ background: C.cream, padding: '60px 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <span className="ts-bangers" style={{ display: 'inline-block', background: C.blue, color: C.white, fontSize: 42, letterSpacing: 3, padding: '8px 32px', border: `4px solid ${C.dark}`, borderRadius: 12, boxShadow: `6px 6px 0 ${C.dark}` }}>¡La Fiesta!</span>
                    </div>
                    <div style={{ maxWidth: 500, margin: '0 auto', background: C.white, border: `4px solid ${C.dark}`, borderRadius: 24, padding: '36px', boxShadow: `8px 8px 0 ${C.dark}`, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: C.yellow, borderRadius: '0 0 0 100%', opacity: 0.3 }} />
                        <div className="ts-photo-float" style={{ width: 72, height: 72, borderRadius: '50%', border: `4px solid ${C.dark}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 20px', background: C.yellow, boxShadow: `4px 4px 0 ${C.dark}` }}>🎉</div>
                        <span className="ts-bangers" style={{ display: 'block', fontSize: 30, textAlign: 'center', letterSpacing: 1, color: C.navy, marginBottom: 6 }}>Salón "Dino Aventuras"</span>
                        <p style={{ fontSize: 18, fontWeight: 900, color: C.red, textAlign: 'center', marginBottom: 20 }}>Sábado 20 de Agosto · 3:00 PM</p>
                        <div style={{ background: '#F5F5F5', border: '2px dashed #aaa', borderRadius: 12, padding: 16, textAlign: 'center', fontWeight: 700, color: '#555', marginBottom: 24 }}>
                            <strong>Dirección:</strong><br />Av. de los Dinosaurios #123, Col. Jurásica
                        </div>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="ts-map-btn" style={{ display: 'block', width: '100%', padding: 16, background: C.red, color: C.white, fontFamily: "'Bangers', cursive", fontSize: 22, letterSpacing: 2, border: `4px solid ${C.dark}`, borderRadius: 50, cursor: 'pointer', boxShadow: `5px 5px 0 ${C.dark}`, transition: 'all .15s', textDecoration: 'none', textAlign: 'center' }}>¡Abrir Mapa! 🗺️</a>
                    </div>
                </section>

                {/* ── PERSONAJES ── */}
                <section style={{ background: '#E3F2FD', padding: '50px 20px', textAlign: 'center' }}>
                    <div style={{ textAlign: 'center', marginBottom: 10 }}>
                        <span className="ts-bangers" style={{ display: 'inline-block', background: C.red, color: C.white, fontSize: 38, letterSpacing: 3, padding: '8px 32px', border: `4px solid ${C.dark}`, borderRadius: 12, boxShadow: `6px 6px 0 ${C.dark}` }}>Los Invitados Especiales</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginTop: 30 }}>
                        {characters.map((ch, i) => (
                            <div key={i} className={`ts-char-${i + 1}`} style={{ background: C.white, border: `4px solid ${C.dark}`, borderRadius: 20, padding: '20px 16px 18px', width: 170, boxShadow: `6px 6px 0 ${C.dark}` }}>

                                {/*
                  🖼️ Si ch.img tiene URL → imagen (110×110px, contain, sin recorte).
                     Si ch.img es null    → emoji de respaldo.
                     Cambia el campo `img` en el array `characters` arriba del archivo.
                */}
                                <CharVisual img={ch.img} emoji={ch.emoji} />

                                <div style={{ background: ch.bg, border: `2px solid ${C.dark}`, borderRadius: 8, padding: '4px 10px', marginBottom: 8, display: 'inline-block' }}>
                                    <span className="ts-bangers" style={{ fontSize: 20, letterSpacing: 1, color: C.dark }}>{ch.name}</span>
                                </div>
                                <p style={{ fontSize: 12, fontWeight: 700, color: '#888', fontStyle: 'italic', margin: 0 }}>{ch.quote}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── GALERÍA ── */}
                <section style={{ background: C.white, padding: '60px 20px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `radial-gradient(circle, ${C.blue} 2px, transparent 2px)`, backgroundSize: '40px 40px', opacity: 0.08 }} />
                    <div style={{ textAlign: 'center', marginBottom: 40 }}>
                        <span className="ts-bangers" style={{ display: 'inline-block', background: C.green, color: C.white, fontSize: 42, letterSpacing: 3, padding: '8px 32px', border: `4px solid ${C.dark}`, borderRadius: 12, boxShadow: `6px 6px 0 ${C.dark}` }}>¡Mis Fotos!</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 24, maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                        {/* 🖼️ Cambia `url` en el array `photos` arriba del archivo */}
                        {photos.map((ph, i) => (
                            <div key={i} className="ts-polaroid" style={{ background: C.white, border: `3px solid ${C.dark}`, borderRadius: 8, padding: '10px 10px 28px', boxShadow: `6px 6px 0 ${C.dark}` }}>
                                <img src={ph.url} alt={ph.label} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', border: '2px solid #eee' }} />
                                <p className="ts-bangers" style={{ textAlign: 'center', fontSize: 18, letterSpacing: 1, color: '#333', marginTop: 8 }}>{ph.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── RSVP ── */}
                <section style={{ background: C.navy, padding: '60px 20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px', opacity: 0.08 }} />
                    <div style={{ maxWidth: 480, margin: '0 auto', background: C.white, border: `4px solid ${C.yellow}`, borderRadius: 24, padding: '44px 36px 36px', boxShadow: '10px 10px 0 rgba(0,0,0,0.4)', position: 'relative', zIndex: 1 }}>
                        <div style={{ position: 'absolute', top: -36, left: '50%', transform: 'translateX(-50%)', width: 72, height: 72, background: C.yellow, border: `4px solid ${C.dark}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, boxShadow: `4px 4px 0 ${C.dark}` }}>🎁</div>
                        <span className="ts-bangers" style={{ display: 'block', fontSize: 40, letterSpacing: 3, textAlign: 'center', color: C.navy, marginBottom: 6 }}>¡Confirma!</span>
                        <p style={{ textAlign: 'center', color: '#777', fontWeight: 700, marginBottom: 28, fontSize: 15 }}>Dinos si podrás venir a jugar con nosotros.</p>

                        {rsvpStatus === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '30px 0' }}>
                                <div className="ts-success-check" style={{ width: 80, height: 80, background: C.green, border: `4px solid ${C.dark}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 20px', boxShadow: `5px 5px 0 ${C.dark}` }}>✓</div>
                                <span className="ts-bangers" style={{ display: 'block', fontSize: 44, letterSpacing: 3, color: C.green }}>¡A Infinito!</span>
                                <p style={{ fontWeight: 800, color: '#555', marginTop: 8 }}>¡Nos vemos en la fiesta, vaquero! 🎈</p>
                            </div>
                        ) : (
                            <form onSubmit={handleRSVP} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                {[
                                    { label: 'Tu Nombre', id: 'ts-name', type: 'text', placeholder: 'Ej. Familia Rodríguez', required: true },
                                    { label: '¿Cuántos niños?', id: 'ts-kids', type: 'number', placeholder: '0', required: false },
                                ].map(f => (
                                    <div key={f.id} style={{ marginBottom: 20 }}>
                                        <label htmlFor={f.id} style={{ display: 'block', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, color: C.navy, marginBottom: 8 }}>{f.label}</label>
                                        <input id={f.id} type={f.type} required={f.required} placeholder={f.placeholder} min={f.type === 'number' ? 0 : undefined} style={{ width: '100%', padding: '14px 18px', border: `3px solid ${C.dark}`, borderRadius: 14, fontSize: 15, fontWeight: 700, fontFamily: "'Nunito', sans-serif", background: '#F5F5F5', outline: 'none' }} />
                                    </div>
                                ))}
                                <div style={{ marginBottom: 20 }}>
                                    <label htmlFor="ts-attend" style={{ display: 'block', fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 1, color: C.navy, marginBottom: 8 }}>¿Vas a venir?</label>
                                    <select id="ts-attend" required style={{ width: '100%', padding: '14px 18px', border: `3px solid ${C.dark}`, borderRadius: 14, fontSize: 15, fontWeight: 700, fontFamily: "'Nunito', sans-serif", background: '#F5F5F5', outline: 'none', appearance: 'none' }}>
                                        <option value="">Elige una opción...</option>
                                        <option value="yes">¡Sí, ahí estaremos!</option>
                                        <option value="no">No podremos ir :(</option>
                                    </select>
                                </div>
                                <button type="submit" disabled={rsvpStatus === 'submitting'} className="ts-submit-btn" style={{ padding: 18, background: C.yellow, color: C.dark, fontFamily: "'Bangers', cursive", fontSize: 26, letterSpacing: 2, border: `4px solid ${C.dark}`, borderRadius: 50, cursor: rsvpStatus === 'submitting' ? 'not-allowed' : 'pointer', boxShadow: `5px 5px 0 ${C.dark}`, transition: 'all .15s', marginTop: 8, opacity: rsvpStatus === 'submitting' ? 0.6 : 1 }}>
                                    {rsvpStatus === 'submitting' ? 'Enviando...' : '¡Enviar Confirmación! 🚀'}
                                </button>
                            </form>
                        )}
                    </div>
                </section>

                {/* ── FOOTER ── */}
                <footer style={{ background: '#0D1B2A', padding: '40px 20px', textAlign: 'center' }}>
                    <span className="ts-bangers" style={{ display: 'block', fontSize: 38, letterSpacing: 4, color: C.yellow, marginBottom: 8 }}>Leo cumple 5</span>
                    <span style={{ display: 'block', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 3, color: C.blue, marginBottom: 20 }}>Agosto 2026</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase' }}>Creado con ❤ en Invita-Ya</span>
                </footer>

            </div>
        </>
    );
};

export default InvitacionToyStory;