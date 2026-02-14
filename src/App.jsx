import { Routes, Route } from "react-router-dom";

import LandingPageContent from "./LandingPageContent";

import InvitacionBoda from "./InvitacionBoda";
import InvitacionXV from "./InvitacionXV";
import InvitacionBautizo from "./InvitacionBautizo";


function App() {
  return (
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
  );
}

export default App;
