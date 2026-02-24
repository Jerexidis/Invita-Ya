import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import LandingPageContent from "./LandingPageContent";

import InvitacionBoda from "./InvitacionBoda";
import InvitacionXV from "./InvitacionXV";
import InvitacionBautizo from "./InvitacionBautizo";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

      {/* Landing */}
      <Route path="/" element={<LandingPageContent />} />

      {/* Demos */}
      <Route path="/demo/boda" element={<InvitacionBoda />} />
      <Route path="/demo/xv" element={<InvitacionXV />} />
      <Route path="/demo/bautizo" element={<InvitacionBautizo />} />

      {/* Invitación real - descomentar cuando el componente esté listo */}
      {/* <Route path="/invitacion/ana-y-luis" element={<InvitacionReal />} /> */}

      </Routes>
    </>
  );
}

export default App;
