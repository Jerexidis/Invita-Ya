import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import LandingPageContent from "./LandingPageContent";

import InvitacionBoda from "./InvitacionBoda";
import InvitacionXV from "./InvitacionXV";
import InvitacionBautizo from "./InvitacionBautizo";
import InvitacionComunion from "./InvitacionComunion";
import InvitacionBabyShower from "./InvitacionBabyShower";
import InvitacionInfantil from "./InvitacionInfantil";

import Aguachiles from "./Aguachiles";


function RouteTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <RouteTracker />
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

      <Route path="/eventos/aguachiles" element={<Aguachiles />} />

      {/* Invitación real - descomentar cuando el componente esté listo */}
      {/* <Route path="/invitacion/ana-y-luis" element={<InvitacionReal />} /> */}

      </Routes>
    </>
  );
}

export default App;
