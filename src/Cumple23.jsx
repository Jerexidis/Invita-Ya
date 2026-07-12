import { useEffect, useRef, useState } from "react";
import { Heart, Volume2, VolumeX } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "./utils/gsap";
import "./cumple23.css";
import "./fandom23.css";
import "./music23.css";

const base = "/img/fotosmias/";
const fandoms = [
  { key: "minecraft", title: "Minecraft", image: "/img/fandom/minecraft.jpg", label: "nuestro mundo", note: "Construir, explorar y encontrar un hogar juntos. Tú eres mi lugar seguro en cualquier bioma.", memories: [["IMG_0440.jpg", "nuestro spawn favorito"], ["IMG_1325.jpg", "hogar es donde estés tú"]] },
  { key: "dandadan", title: "DAN DA DAN", image: "/img/fandom/dandadan.jpg", label: "fantasmas + aliens", note: "Un poquito paranormal, caótico y muy bonito. Como las mejores aventuras que terminan siendo historias nuestras.", memories: [["IMG_0879.jpg", "dos raritos contra el universo"], ["IMG_6475.jpg", "actividad paranormal: nosotros"]] },
  { key: "beastars", title: "BEASTARS", image: "/img/fandom/beastars.jpg", label: "corazones salvajes", note: "Amar también es aprender a mirar todo lo que alguien es. Yo te elijo completa, siempre.", memories: [["IMG_0501.jpg", "mi corazón salvaje"], ["IMG_0577.jpg", "siempre te elijo"]] },
  { key: "adventure", title: "HORA DE AVENTURA", image: "/img/fandom/adventure-time.png", label: "vamos de aventura", note: "Contigo, hasta ir por un antojo se siente como una misión épica. Qué bonito compartir este mundo.", memories: [["IMG_0234.jpg", "aventura contigo > todo"], ["IMG_1253.jpg", "otro capítulo juntos"]] },
  { key: "nirvana", title: "NIRVANA", image: "/img/fandom/nirvana.jpg", label: "come as you are", note: "Sin filtros, sin pretender. Te amo justo como eres: rara, brillante, intensa y auténtica.", memories: [["IMG_1212.jpg", "come as you are"], ["IMG_8984.jpg", "ruido bonito"]] },
];

const PixelHeart = ({ className = "" }) => <span className={`c23-pixel-heart ${className}`} aria-hidden="true" />;

export default function Cumple23() {
  const root = useRef(null);
  const video = useRef(null);
  const music = useRef(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    const audio = music.current;
    if (!audio) return;
    audio.volume = 0.42;
    const startMusic = () => audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
    startMusic();
    const unlock = () => { startMusic(); window.removeEventListener("pointerdown", unlock); };
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, []);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".c23-kicker", { y: 24, opacity: 0, duration: .65 })
      .from(".c23-title .line", { yPercent: 115, rotate: 3, duration: .9, stagger: .12 }, "-=.3")
      .from(".c23-hero-card", { y: 70, rotate: -8, opacity: 0, duration: 1 }, "-=.55")
      .from(".c23-sticker", { scale: 0, rotate: -18, duration: .55, stagger: .08, ease: "back.out(2)" }, "-=.7")
      .from(".c23-scroll-note", { opacity: 0, y: 10, duration: .5 }, "-=.15");
    gsap.to(".c23-hero-card", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".c23-hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.utils.toArray(".c23-reveal").forEach((item) => gsap.from(item, { y: 70, opacity: 0, rotate: gsap.utils.random(-2, 2), duration: .85, scrollTrigger: { trigger: item, start: "top 87%", toggleActions: "play none none reverse" } }));
    gsap.utils.toArray(".c23-fandom").forEach((section) => {
      const art = section.querySelector(".c23-fandom-art");
      const copy = section.querySelector(".c23-fandom-copy");
      const memories = section.querySelectorAll(".c23-memory");
      const tl = gsap.timeline({ scrollTrigger: { trigger: section, start: "top 76%", toggleActions: "play none none reverse" } });
      tl.from(art, { x: -80, rotate: -12, opacity: 0, duration: .85, ease: "back.out(1.25)" })
        .from(copy, { x: 60, opacity: 0, duration: .7 }, "-=.55")
        .from(memories, { y: 110, rotate: (i) => i ? 12 : -12, opacity: 0, scale: .88, stagger: .16, duration: .85, ease: "power3.out" }, "-=.25");
      gsap.to(art, { yPercent: -8, ease: "none", scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.2 } });
    });
    gsap.from(".c23-lego-copy", { x: -100, rotate: -5, opacity: 0, duration: .9, ease: "back.out(1.35)", scrollTrigger: { trigger: ".c23-lego", start: "top 78%" } });
    gsap.from(".c23-lego-video", { x: 100, rotate: 7, opacity: 0, scale: .88, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".c23-lego", start: "top 72%" } });
    gsap.to(".c23-lego-dots", { x: 12, duration: .65, repeat: -1, yoyo: true, ease: "steps(2)" });
    gsap.to(".c23-pixel-heart", { y: -14, rotate: 55, duration: 1.5, repeat: -1, yoyo: true, stagger: .25, ease: "sine.inOut" });
    gsap.to(".c23-marquee-track", { xPercent: -50, duration: 24, repeat: -1, ease: "none" });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, { scope: root });

  const toggleMusic = () => {
    if (!music.current) return;
    if (music.current.paused) music.current.play().then(() => setMusicPlaying(true));
    else { music.current.pause(); setMusicPlaying(false); }
  };
  const toggleVideoSound = () => {
    if (!video.current) return;
    video.current.muted = !video.current.muted;
    video.current.dataset.muted = String(video.current.muted);
    if (!video.current.muted) { music.current?.pause(); setMusicPlaying(false); }
    else music.current?.play().then(() => setMusicPlaying(true)).catch(() => {});
  };

  return <main ref={root} className="c23-page">
    <audio ref={music} src="/audio/brillas-1m40.mp3" autoPlay loop preload="auto" />
    <button className={`c23-music-toggle ${musicPlaying ? "is-playing" : ""}`} onClick={toggleMusic} aria-label={musicPlaying ? "Pausar música" : "Reproducir música"}>{musicPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}<span>{musicPlaying ? "Brillas · sonando" : "Activar música"}</span></button>
    <section className="c23-hero">
      <div className="c23-noise" /><PixelHeart className="c23-heart-one" /><PixelHeart className="c23-heart-two" />
      <div className="c23-hero-copy"><p className="c23-kicker">nivel 23 desbloqueado — para mi niña favorita</p><h1 className="c23-title" aria-label="Felices 23"><span className="clip"><span className="line">Felices</span></span><span className="clip"><span className="line c23-number">23</span></span></h1><p className="c23-hero-note">Hoy celebramos que existes — y yo celebro tener la suerte de amarte.</p></div>
      <figure className="c23-hero-card"><img src={`${base}foto-principal-23.png`} alt="La cumpleañera abrazando un monito de peluche" fetchPriority="high" /><figcaption>birthday girl ♡ nivel 23</figcaption><span className="c23-tape" /></figure>
      <span className="c23-sticker c23-sticker-grunge">TE AMO</span><span className="c23-sticker c23-sticker-pixel">+23 XP</span><span className="c23-sticker c23-sticker-weird">☆ paranormalmente linda ☆</span><p className="c23-scroll-note">desliza para abrir este pequeño universo ↓</p>
    </section>
    <section className="c23-letter c23-letter-solo c23-reveal"><div className="c23-letter-paper"><p className="c23-eyebrow">Una nota para ti</p><h2>Te amo en todos<br />nuestros universos.</h2><p>En los días pixelados y tranquilos. En los que se sienten como una aventura rarísima. En los conciertos, en las risas sin sentido y hasta en las fotos borrosas.</p><p>Espero que tus 23 estén llenos de cosas que te hagan sentir tan feliz como tú me haces sentir a mí.</p><strong>Feliz cumpleaños, amor. ♡</strong></div></section>
    <section className="c23-fandoms"><header className="c23-fandoms-head c23-reveal"><p>cosas que hacen tu mundo más tú</p><h2>Tus universos<br /><em>favoritos</em></h2></header><div className="c23-fandom-list">{fandoms.map((fandom, index) => <article className={`c23-fandom c23-fandom-${fandom.key} c23-reveal`} key={fandom.key}><div className="c23-fandom-index">0{index + 1}</div><div className="c23-fandom-art"><img src={fandom.image} alt={`Arte de ${fandom.title}`} loading="lazy" /><span>{fandom.label}</span></div><div className="c23-fandom-copy"><p>para la cumpleañera que ama</p><h3>{fandom.title}</h3><p>{fandom.note}</p><span className="c23-doodle" aria-hidden="true">♡ ✦ ☆</span></div><div className="c23-fandom-memories">{fandom.memories.map(([src, caption]) => <figure className="c23-memory" key={src}><img src={`${base}${src}`} alt={caption} loading="lazy" /><figcaption>{caption}</figcaption></figure>)}</div></article>)}</div></section>
    <div className="c23-marquee" aria-hidden="true"><div className="c23-marquee-track">TE AMO ✦ FELICES 23 ✦ ERES MI PERSONA FAVORITA ✦ TE AMO ✦ FELICES 23 ✦ ERES MI PERSONA FAVORITA ✦ </div></div>
    <section className="c23-lego c23-reveal"><div className="c23-lego-copy"><span className="c23-brick-label">06 · LEGO</span><h2>Todo encaja<br />contigo.</h2><p>Una pieza, luego otra. Un recuerdo, luego otro. Así hemos construido algo que quiero cuidar todos los días.</p><div className="c23-lego-dots" aria-hidden="true">● ● ● ●<br />● ● ● ●</div></div><div className="c23-video-frame c23-lego-video"><video ref={video} src={`${base}IMG_6180.mp4`} autoPlay loop muted playsInline data-muted="true" aria-label="Un recuerdo en video de nosotros" /><button onClick={toggleVideoSound} className="c23-sound" aria-label="Activar o silenciar audio del video"><Volume2 className="sound-on" size={19} /><VolumeX className="sound-off" size={19} /> sonido</button></div></section>
    <section className="c23-finale"><div className="c23-finale-orbit" aria-hidden="true"><span>23</span></div><p className="c23-reveal">Que este sea tu mejor nivel hasta ahora.</p><h2 className="c23-reveal">Feliz cumpleaños,<br /><em>mi amor.</em></h2><div className="c23-final-photo c23-reveal"><img src={`${base}IMG_0234.jpg`} alt="Un beso para la cumpleañera" loading="lazy" /><Heart fill="currentColor" /></div><p className="c23-signature c23-reveal">Con todo mi amor, siempre ♡</p></section>
  </main>;
}
