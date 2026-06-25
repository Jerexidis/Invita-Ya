import { lazy, Suspense, useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

const LandingPageContent = lazy(() => import("./LandingPageContent"));
const InvitacionBoda = lazy(() => import("./InvitacionBoda"));
const InvitacionXV = lazy(() => import("./InvitacionXV"));
const InvitacionBautizo = lazy(() => import("./InvitacionBautizo"));
const InvitacionComunion = lazy(() => import("./InvitacionComunion"));
const InvitacionBabyShower = lazy(() => import("./InvitacionBabyShower"));
const InvitacionInfantil = lazy(() => import("./InvitacionInfantil"));
const Aguachiles = lazy(() => import("./Aguachiles"));
const DemoRsvpDashboard = lazy(() => import("./DemoRsvpDashboard"));

const routeMetadata = {
  "/": {
    title: "Invita-Ya — Invitaciones Digitales para Bodas, XV Años, Bautizos y más",
    description: "Invitaciones digitales interactivas para bodas, XV años, bautizos y eventos en México.",
  },
  "/demo/boda": { title: "Demo de invitación de boda | Invita-Ya", description: "Explora una demostración de invitación digital para boda." },
  "/demo/xv": { title: "Demo de invitación para XV años | Invita-Ya", description: "Explora una demostración de invitación digital para XV años." },
  "/demo/bautizo": { title: "Demo de invitación para bautizo | Invita-Ya", description: "Explora una demostración de invitación digital para bautizo." },
  "/demo/comunion": { title: "Demo de invitación para primera comunión | Invita-Ya", description: "Explora una demostración de invitación digital para primera comunión." },
  "/demo/babyshower": { title: "Demo de invitación para baby shower | Invita-Ya", description: "Explora una demostración de invitación digital para baby shower." },
  "/demo/infantil": { title: "Demo de invitación infantil | Invita-Ya", description: "Explora una demostración de invitación digital para cumpleaños infantil." },
  "/demo/rsvp": { title: "Demo del panel RSVP | Invita-Ya", description: "Conoce cómo se organizan las confirmaciones de asistencia en Invita-Ya." },
  "/eventos/aguachiles": { title: "Aguachiles y vasos preparados | Invita-Ya", description: "Invitación digital para la apertura de Aguachiles y Vasos Preparados." },
};


function RouteTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const metadata = routeMetadata[pathname] || routeMetadata["/"];
    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", metadata.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://invita-ya.com${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);
  return null;
}

function DemoNotice() {
  const { pathname } = useLocation();

  if (!pathname.startsWith("/demo/")) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[60] max-w-[260px] rounded-xl bg-invita-dark/90 px-4 py-3 text-xs text-white shadow-lg backdrop-blur">
      Demo visual: los formularios muestran el flujo, pero no envían datos reales.
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-invita-dark">
      <p className="font-semibold animate-pulse">Cargando invitación…</p>
    </div>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-invita-cream px-6 text-center">
      <div>
        <p className="text-invita-heart font-bold mb-3">Error 404</p>
        <h1 className="text-4xl font-serif text-invita-dark mb-4">Esta página no existe</h1>
        <Link to="/" className="inline-flex px-6 py-3 rounded-full bg-invita-dark text-white font-semibold">
          Volver a Invita-Ya
        </Link>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <RouteTracker />
      <DemoNotice />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>

      {/* Landing */}
      <Route path="/" element={<LandingPageContent />} />

      {/* Demos */}
      <Route path="/demo/boda" element={<InvitacionBoda />} />
      <Route path="/demo/xv" element={<InvitacionXV />} />
      <Route path="/demo/bautizo" element={<InvitacionBautizo />} />
      <Route path="/demo/comunion" element={<InvitacionComunion />} />
      <Route path="/demo/babyshower" element={<InvitacionBabyShower />} />
      <Route path="/demo/infantil" element={<InvitacionInfantil />} />
      <Route path="/demo/rsvp" element={<DemoRsvpDashboard />} />

      <Route path="/eventos/aguachiles" element={<Aguachiles />} />
      <Route path="*" element={<NotFound />} />

      {/* Invitación real - descomentar cuando el componente esté listo */}
      {/* <Route path="/invitacion/ana-y-luis" element={<InvitacionReal />} /> */}

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
