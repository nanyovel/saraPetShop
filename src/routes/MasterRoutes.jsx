import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import Mascotas from "../page/Mascotas";
import Accesorios from "../page/Accesorios";
import Alimentos from "../page/Alimentos";
import Nosotros from "../page/Nosotros";
import Contacto from "../page/Contacto";
import Login from "../auth/Login";
import Registrarse from "../auth/Registrarse";
import ResetPassword from "../auth/ResetPassword";

export default function MasterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mascotas" element={<Mascotas />} />
      <Route path="/accesorios" element={<Accesorios />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registrarse />} />
      <Route path="/recuperar" element={<ResetPassword />} />
    </Routes>
  );
}
