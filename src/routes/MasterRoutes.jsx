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
import CategoriasRoutes from "./CategoriasRoutes";
import { Perfil } from "../page/Perfil";
import Page404 from "../page/Page404";
import Dashboard from "../page/Dashboard";
import Articulos from "../components/Articulos";
import ArticulosView from "../view/ArticulosView";

export default function MasterRoutes({ userMaster }) {
  return (
    <Routes>
      <Route path="/" element={<Home userMaster={userMaster} />} />
      <Route
        path="/subCategorias/mascotas"
        element={<Mascotas userMaster={userMaster} />}
      />
      <Route
        path="/subCategorias/accesorios"
        element={<Accesorios userMaster={userMaster} />}
      />
      <Route
        path="/subCategorias/alimentos"
        element={<Alimentos userMaster={userMaster} />}
      />
      <Route path="/nosotros" element={<Nosotros userMaster={userMaster} />} />
      <Route path="/contacto" element={<Contacto userMaster={userMaster} />} />
      <Route path="/login" element={<Login userMaster={userMaster} />} />
      <Route
        path="/registro"
        element={<Registrarse userMaster={userMaster} />}
      />
      <Route
        path="/recuperar"
        element={<ResetPassword userMaster={userMaster} />}
      />
      <Route
        path="/categorias/*"
        element={<CategoriasRoutes userMaster={userMaster} />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard userMaster={userMaster} />}
      />
      <Route
        path="/articulos/:id"
        element={<ArticulosView userMaster={userMaster} />}
      />
      <Route path="/perfil" element={<Perfil userMaster={userMaster} />} />
      <Route path="*" element={<Page404 userMaster={userMaster} />} />
    </Routes>
  );
}
