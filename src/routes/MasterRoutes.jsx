import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import Mascotas from "../page/Mascotas";
import Accesorios from "../page/Accesorios";
import Alimentos from "../page/Alimentos";
import Nosotros from "../page/Nosotros";
import Contacto from "../page/Contacto";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/accesorios" element={<Accesorios />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
