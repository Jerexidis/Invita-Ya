import React, { useState, useEffect } from "react";
import { MapPin, Clock, ChevronDown, Flame, Star, MessageCircle } from "lucide-react";

import bgImg from "./assets/aguachiles/fondo.png";
import camaronImg from "./assets/aguachiles/camaron.png";
import cervezaImg from "./assets/aguachiles/cerveza.png";
import platoImg from "./assets/aguachiles/plato.png";

/* ─── Paleta de marca ───────────────────────────────── */
const C = {
  // Verdes
  greenDark:   "#1F4D1C",   // fondo oscuro
  green:       "#3F7D22",   // verde medio
  greenLime:   "#7ED321",   // lima claro
  greenBright: "#A6E22E",   // limón brillante
  lemon:       "#B7F23A",   // verde limón
  yellow:      "#E8FF5A",   // amarillo limón
  // Rojos
  red:         "#D62828",   // chile intenso
  redDark:     "#8B1A1A",   // rojo oscuro
  redBright:   "#FF3B30",   // rojo brillante
  // Naranjas
  orange:      "#FF6A2A",   // naranja camarón
  orangeDark:  "#C94A1A",   // naranja oscuro
  orangeLight: "#FFA24C",   // naranja claro
  // Morado
  purple:      "#C97ACF",   // cebolla claro
  purpleDark:  "#8A4FA3",   // cebolla medio
  // Neutrales
  cream:       "#F5F5F5",
  dark:        "#111111",
  text:        "#1F3A0D",
  // WhatsApp
  wa:          "#25D366",
  waDark:      "#128C7E",
};

/* ─── CSS global ─────────────────────────────────── */
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Nunito:wght@400;600;700;800&display=swap');

  .ag-page * { box-sizing: border-box; margin: 0; padding: 0; }

  .ag-page {
    font-family: 'Nunito', sans-serif;
    background: ${C.greenDark};
    color: ${C.cream};
    min-height: 100vh;
  }

  /* Anton → display bold moderno */
  .ag-title  { font-family: 'Anton', sans-serif; letter-spacing: 0.02em; }
  /* Bebas Neue → subtítulos condensados */
  .ag-label  { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.12em; }

  @keyframes agFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ag-fade-up  { animation: agFadeUp 0.9s ease both; }
  .ag-fade-up2 { animation: agFadeUp 1.0s 0.18s ease both; }
  .ag-fade-up3 { animation: agFadeUp 1.0s 0.36s ease both; }

  @keyframes agBounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(9px); }
  }
  .ag-bounce { animation: agBounce 1.6s ease-in-out infinite; }

  @keyframes agPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(192,57,43,.45); }
    50%      { box-shadow: 0 0 0 10px rgba(192,57,43,0); }
  }
  .ag-cd-box { animation: agPulse 2s ease-in-out infinite; }

  @keyframes agFlicker {
    0%,100% { opacity:1; transform:scale(1) rotate(-3deg); }
    40%      { opacity:.85; transform:scale(1.08) rotate(2deg); }
  }
  .ag-flame { animation: agFlicker 1.7s ease-in-out infinite; }

  .ag-menu-card {
    transition: transform .3s, box-shadow .3s;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 6px 22px rgba(0,0,0,.10);
    display: flex;
    flex-direction: column;
  }
  .ag-menu-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,.16); }

  .ag-detail-card {
    background:#fff;
    border-radius:18px;
    padding:32px 24px;
    text-align:center;
    box-shadow:0 4px 16px rgba(0,0,0,.08);
    border:1px solid ${C.gold}33;
    transition: transform .3s, box-shadow .3s;
  }
  .ag-detail-card:hover { transform:translateY(-4px); box-shadow:0 12px 30px rgba(0,0,0,.12); }

  .ag-wa-btn {
    display:flex; align-items:center; justify-content:center; gap:8px;
    padding:14px 28px;
    background: linear-gradient(135deg,${C.wa},${C.waDark});
    color:#fff; border:none; border-radius:999px;
    font-family:'Fredoka One',cursive; font-size:18px;
    cursor:pointer; width:100%;
    box-shadow: 0 6px 18px rgba(37,211,102,.45);
    transition: transform .2s, box-shadow .2s;
  }
  .ag-wa-btn:hover  { transform:scale(1.03); box-shadow:0 10px 28px rgba(37,211,102,.55); }
  .ag-wa-btn:active { transform:scale(0.97); }

  .ag-input {
    width:100%; padding:12px 16px;
    border:2px solid ${C.greenLime}55; border-radius:12px;
    font-family:'Nunito',sans-serif; font-size:15px;
    outline:none; transition:border-color .2s;
    background:${C.greenDark}cc;
    color: ${C.cream};
  }
  .ag-input::placeholder { color: ${C.greenLime}88; }
  .ag-input:focus { border-color:${C.yellow}; }

  .ag-menu-card {
    transition: transform .3s, box-shadow .3s;
    background: #1a4318;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 6px 22px rgba(0,0,0,.30);
    display: flex;
    flex-direction: column;
    border: 1px solid ${C.greenLime}33;
  }
  .ag-menu-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(0,0,0,.4); }

  .ag-detail-card {
    background: #1a4318;
    border-radius:18px;
    padding:32px 24px;
    text-align:center;
    box-shadow:0 4px 16px rgba(0,0,0,.25);
    border:1px solid ${C.greenLime}33;
    transition: transform .3s, box-shadow .3s;
  }
  .ag-detail-card:hover { transform:translateY(-4px); box-shadow:0 12px 30px rgba(0,0,0,.35); }

  .ag-wa-btn {
    display:flex; align-items:center; justify-content:center; gap:8px;
    padding:14px 28px;
    background: linear-gradient(135deg,${C.wa},${C.waDark});
    color:#fff; border:none; border-radius:999px;
    font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:0.1em;
    cursor:pointer; width:100%;
    box-shadow: 0 6px 18px rgba(37,211,102,.45);
    transition: transform .2s, box-shadow .2s;
  }
  .ag-wa-btn:hover  { transform:scale(1.03); box-shadow:0 10px 28px rgba(37,211,102,.55); }
  .ag-wa-btn:active { transform:scale(0.97); }

  /* Grid detalles + mapa*/
  .ag-detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: stretch;
  }
  .ag-map-wrap {
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 6px 24px rgba(0,0,0,.25);
    display: flex;
    align-self: stretch;
  }
  .ag-map-wrap iframe { width:100%; height:100%; border:0; display:block; min-height:320px; }

  @media (max-width: 700px) {
    .ag-detail-grid { grid-template-columns: 1fr; }
    .ag-map-wrap { height: 260px; }
    .ag-map-wrap iframe { min-height: 260px; }
  }

  /* Responsive map+footer grid */
  .ag-bottom-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 340px;
  }
  @media (max-width:700px) {
    .ag-bottom-grid { grid-template-columns: 1fr; }
  }
`;

/* ─── Countdown hook ─────────────────────────────── */
const useCountdown = (target) => {
  const [t, setT] = useState({ dias:0, horas:0, minutos:0, segundos:0 });
  useEffect(() => {
    const tick = () => {
      const d = new Date(target).getTime() - Date.now();
      if (d <= 0) return;
      setT({
        dias:     Math.floor(d / 86400000),
        horas:    Math.floor((d % 86400000) / 3600000),
        minutos:  Math.floor((d % 3600000)  / 60000),
        segundos: Math.floor((d % 60000)    / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
};

/* ─── Sub-componentes ────────────────────────────── */
const CountBox = ({ value, label }) => (
  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
    <div
      className="ag-cd-box"
      style={{
        width:80, height:80,
        background:`linear-gradient(135deg,${C.red},${C.redDark})`,
        borderRadius:14,
        display:"flex", alignItems:"center", justifyContent:"center",
        color:"#fff", fontSize:32,
        fontFamily:"'Anton',sans-serif",
        border:`2px solid ${C.orange}66`,
      }}
    >
      {String(value).padStart(2,"0")}
    </div>
    <span style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.15em", color:C.yellow, fontWeight:800 }}>
      {label}
    </span>
  </div>
);

const MenuCard = ({ img, name, desc, badge, price }) => (
  <div className="ag-menu-card">
    <div style={{
      background:`linear-gradient(135deg,${C.redDark},${C.orange})`,
      height:160,
      display:"flex", alignItems:"center", justifyContent:"center",
    }}>
      <img src={img} alt={name} style={{ height:120, objectFit:"contain", filter:"drop-shadow(0 4px 12px rgba(0,0,0,.3))" }} />
    </div>
    <div style={{ padding:"18px 20px 22px", flex:1, display:"flex", flexDirection:"column" }}>
      {badge && (
        <span style={{
          display:"inline-block", background:C.yellow, color:C.dark,
          fontSize:10, fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase",
          padding:"3px 10px", borderRadius:999, marginBottom:10, alignSelf:"flex-start",
        }}>{badge}</span>
      )}
      <h3 className="ag-title" style={{ fontSize:22, color:C.lemon, marginBottom:6 }}>{name}</h3>
      <p style={{ fontSize:14, color:"#fff", lineHeight:1.6, flex:1 }}>{desc}</p>

      {/* Precio */}
      <div style={{
        marginTop:14,
        borderTop:`1px dashed ${C.greenLime}44`,
        paddingTop:12,
        display:"flex", alignItems:"center", justifyContent:"space-between",
      }}>
        <span className="ag-label" style={{ fontSize:14, color:C.greenLime }}>Precio</span>
        <span className="ag-title" style={{ fontSize:22, color:C.yellow }}>
          {price ?? <span style={{ color:"#555", fontSize:14 }}>—</span>}
        </span>
      </div>
    </div>
  </div>
);

const DetailCard = ({ icon, title, lines }) => (
  <div className="ag-detail-card">
    <div style={{
      width:52, height:52,
      background:`linear-gradient(135deg,${C.red}22,${C.orange}22)`,
      borderRadius:"50%",
      display:"flex", alignItems:"center", justifyContent:"center",
      margin:"0 auto 14px",
    }}>{icon}</div>
    <h3 className="ag-title" style={{ fontSize:20, color:C.lemon, marginBottom:8 }}>{title}</h3>
    {lines.map((l,i) => <p key={i} style={{ fontSize:14, color:"#fff", lineHeight:1.7 }}>{l}</p>)}
  </div>
);

/* ─── Formulario WhatsApp ────────────────────────── */
const WaForm = () => {
  const [msg, setMsg] = useState("");
  const phone = "526691234567"; // ← cambia por tu número (con código de país, sin +)

  const sendWa = (e) => {
    e.preventDefault();
    if (!msg.trim()) return;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={sendWa} style={{ display:"flex", flexDirection:"column", gap:14 }}>
      <label className="ag-label" style={{ fontSize:18, color:C.lemon }}>
        Tu pedido o mensaje
      </label>
      <textarea
        className="ag-input"
        rows={4}
        placeholder="Ej: Hola! ¿A qué hora abren el 19 de abril?"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        style={{ resize:"vertical" }}
      />
      <button type="submit" className="ag-wa-btn">
        <MessageCircle size={20} />
        Enviar por WhatsApp
      </button>
    </form>
  );
};

/* ─── Componente principal ───────────────────────── */
const Aguachiles = () => {
  const INAUGURATION = "2026-04-19T13:00:00";
  const t = useCountdown(INAUGURATION);

  return (
    <>
      <style>{globalStyle}</style>
      <div className="ag-page">

        {/* ── HERO ─────────────────────────────── */}
        <header style={{ position:"relative", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0 }}>
            <img src={bgImg} alt="Fondo" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(20,8,2,.60) 0%,rgba(20,8,2,.78) 55%,rgba(20,8,2,.97) 100%)" }} />
          </div>

          <div style={{ position:"relative", zIndex:1, padding:"0 24px", maxWidth:700 }}>
            <div className="ag-fade-up" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:18 }}>
              <Flame size={22} color={C.orange} className="ag-flame" />
              <span style={{ color:C.yellow, fontSize:13, fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase" }}>Gran Apertura</span>
              <Flame size={22} color={C.orange} className="ag-flame" />
            </div>

            <h1 className="ag-title ag-fade-up2" style={{ fontSize:"clamp(46px,9vw,88px)", color:"#fff", lineHeight:1.05, marginBottom:10 }}>
              Aguachiles y<br />
              <span style={{ color:C.orange }}>Vasos Preparados</span>
            </h1>

            <p className="ag-fade-up3" style={{ color:"rgba(255,255,255,.78)", fontSize:"clamp(14px,2.2vw,18px)", marginBottom:36, lineHeight:1.7 }}>
              ¡Frescos, picosos y bien preparados!<br />El mejor sabor de la calle, en un solo lugar.
            </p>

            <div className="ag-fade-up3" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:44 }}>
              <span style={{ height:1, width:36, background:C.yellow }} />
              <span className="ag-title" style={{ color:C.yellow, fontSize:17, letterSpacing:"0.15em" }}>19 · ABRIL · 2026</span>
              <span style={{ height:1, width:36, background:C.yellow }} />
            </div>

            <a
              href="#ag-details"
              onClick={e => { e.preventDefault(); document.getElementById("ag-details")?.scrollIntoView({ behavior:"smooth" }); }}
              style={{
                display:"inline-block",
                padding:"13px 34px",
                background:`linear-gradient(135deg,${C.red},${C.orange})`,
                border:"none", borderRadius:999,
                color:"#fff", fontSize:16, fontWeight:700,
                fontFamily:"'Bebas Neue',sans-serif", letterSpacing:"0.1em",
                cursor:"pointer", textDecoration:"none",
                boxShadow:`0 8px 24px ${C.red}66`,
              }}
            >
              ¡Conoce más!
            </a>
          </div>

          <div className="ag-bounce" style={{ position:"absolute", bottom:28, color:"rgba(255,255,255,.45)" }}>
            <ChevronDown size={32} />
          </div>
        </header>

        {/* ── CUENTA REGRESIVA ─────────────────── */}
        <section style={{ padding:"68px 24px", background:"#0D2B0A", textAlign:"center" }}>
          <p style={{ color:C.yellow, fontSize:12, fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:10 }}>
            ¡Ya mero!
          </p>
          <h2 className="ag-title" style={{ color:"#fff", fontSize:38, marginBottom:44 }}>
            La apertura se acerca 🔥
          </h2>
          <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:24 }}>
            <CountBox value={t.dias}     label="Días" />
            <CountBox value={t.horas}    label="Horas" />
            <CountBox value={t.minutos}  label="Min" />
            <CountBox value={t.segundos} label="Seg" />
          </div>
        </section>

        {/* ── MENÚ ─────────────────────────────── */}
        <section style={{ padding:"80px 24px", background:C.greenDark }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:54 }}>
              <p style={{ color:C.orange, fontSize:12, fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:10 }}>
                Lo que te espera
              </p>
              <h2 className="ag-title" style={{ fontSize:42, color:C.lemon, marginBottom:14 }}>
                Nuestras Especialidades 🦐
              </h2>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
                <span style={{ height:1, width:60, background:C.greenLime }} />
                <Star size={16} color={C.yellow} fill={C.yellow} />
                <span style={{ height:1, width:60, background:C.greenLime }} />
              </div>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:28 }}>
              <MenuCard
                img={camaronImg}
                name="Aguachiles Negros"
                desc="Camarones frescos en salsa negra de chile pasilla, limón y especias. ¡Bien picosos!"
                price="$120"
              />
              <MenuCard
                img={platoImg}
                name="Tostadas de Marlín"
                desc="Marlín ahumado sobre tostada crujiente, aguacate y mayonesa de chipotle. Clásico."
                price="$80"
              />
              <MenuCard
                img={cervezaImg}
                name="Vasos Preparados"
                desc="Micheladas, clamatos y cheladas preparadas al momento. Bien cargadas y bien frías."
                price="$60"
              />
            </div>
          </div>
        </section>

        {/* ── DETALLES ─────────────────────────── */}
        <section id="ag-details" style={{ padding:"80px 24px", background:"#122B10" }}>
          <div style={{ maxWidth:1100, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:54 }}>
              <p style={{ color:C.orange, fontSize:12, fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:10 }}>
                Apunta en tu calendario
              </p>
              <h2 className="ag-title" style={{ fontSize:40, color:C.lemon }}>
                ¿Cuándo y dónde? 📍
              </h2>
            </div>

            {/* Cards + Mapa lado a lado */}
            <div className="ag-detail-grid">
              {/* Cards stacked */}
              <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                <DetailCard
                  icon={<Clock size={24} color={C.red} />}
                  title="¿Cuándo?"
                  lines={["Domingo, 19 de Abril", "1:00 PM en adelante 🎉"]}
                />
                <DetailCard
                  icon={<MapPin size={24} color={C.red} />}
                  title="¿Dónde?"
                  lines={["Blvd. Del Mar 420", "Col. Centro, Mazatlán, Sin."]}
                />
              </div>

              {/* Mapa */}
              <div className="ag-map-wrap">
                <iframe
                  title="Ubicación del negocio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2!2d-106.4111!3d23.2494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f53aaf176e38d%3A0x17e4f3f5e2db0b3d!2sBlvd.%20del%20Mar%2C%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses!2smx!4v1700000000000"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMULARIO PEDIDOS/DUDAS ──────────── */}
        <section style={{ padding:"80px 24px", background:C.greenDark }}>
          <div style={{ maxWidth:520, margin:"0 auto", textAlign:"center" }}>
            <p style={{ color:C.greenLime, fontSize:12, fontWeight:800, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:10 }}>
              Pedidos y dudas
            </p>
            <h2 className="ag-title" style={{ fontSize:38, color:C.lemon, marginBottom:8 }}>
              ¡Haz tu pedido! 🦐
            </h2>
            <p style={{ color:"#fff", marginBottom:32, lineHeight:1.7 }}>
              Mándanos tu pedido o pregunta por WhatsApp y te respondemos al momento.
            </p>
            <div style={{
              background:"#1a4318",
              borderRadius:20,
              padding:32,
              boxShadow:"0 8px 28px rgba(0,0,0,.09)",
              border:`1px solid ${C.gold}33`,
              textAlign:"left",
            }}>
              <WaForm />
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────── */}
        <footer style={{
          background:C.dark,
          padding:"48px 36px",
          display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
          textAlign:"center", gap:10,
        }}>
          <h2 className="ag-title" style={{ color:C.gold, fontSize:28 }}>
            Aguachiles y Vasos Preparados
          </h2>
          <p style={{ color:"rgba(255,255,255,.55)", fontSize:14 }}>
            Mazatlán, Sinaloa · Apertura 19 Abril 2026
          </p>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:8 }}>
            <Flame size={18} color={C.orange} className="ag-flame" />
            <span style={{ color:"rgba(255,255,255,.35)", fontSize:12 }}>Frescura · Sabor · Calle</span>
            <Flame size={18} color={C.orange} className="ag-flame" />
          </div>
        </footer>

      </div>
    </>
  );
};

export default Aguachiles;