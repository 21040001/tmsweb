import React from "react";
import Main from "./pages/Main"; // Main bileşenini içe aktar
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Ims from "./projects/Ims";
import Lokomotif from "./projects/Lokomotif";
import TestBench from "./projects/TestBench";
import TmsQr from "./projects/TmsQr.js";
import TmsPortal from "./projects/tmsPortal.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/ims" element={<Ims />} />
        <Route path="/project/qr" element={<TmsQr />} />
        <Route path="/project/portal" element={<TmsPortal />} />
        <Route path="/project/lokomotif" element={<Lokomotif />} />
        <Route path="/project/testBench" element={<TestBench />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
