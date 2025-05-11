import React from "react";
import { Route, Routes } from "react-router";
import Home from "../page/Home";
import Nosotros from "../page/Nosotros";
import Contacto from "../page/Contacto";
import Login from "../auth/Login";
import Registrarse from "../auth/Registrarse";
import ResetPassword from "../auth/ResetPassword";
import CategoriasRoutes from "./CategoriasRoutes";
import { Perfil } from "../page/Perfil";
import Page404 from "../page/Page404";
import Dashboard from "../page/Dashboard";
import ArticulosView from "../view/ArticulosView";
import SubCategoriasRoutes from "./SubCategoriasRoutes";
import { RutaProtegida } from "../context/RutaProtegida";
import { RutaPrivilegiada } from "../context/RutaPrivilegiada";

export default function MasterRoutes({
  userMaster,
  dbArticulos,
  grupoCluster,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            userMaster={userMaster}
            dbArticulos={dbArticulos}
            grupoCluster={grupoCluster}
          />
        }
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
        element={
          <CategoriasRoutes
            userMaster={userMaster}
            dbArticulos={dbArticulos}
            grupoCluster={grupoCluster}
          />
        }
      />
      <Route
        path="/categorias/*"
        element={
          <CategoriasRoutes
            userMaster={userMaster}
            dbArticulos={dbArticulos}
            grupoCluster={grupoCluster}
          />
        }
      />
      <Route
        path="/subCategorias/*"
        element={
          <SubCategoriasRoutes
            userMaster={userMaster}
            dbArticulos={dbArticulos}
            grupoCluster={grupoCluster}
          />
        }
      />

      <Route
        path="/dashboard/*"
        element={
          <RutaProtegida>
            <RutaPrivilegiada
              userMaster={userMaster}
              privilegioReq="accessDashboard"
            >
              <Dashboard userMaster={userMaster} />
            </RutaPrivilegiada>
          </RutaProtegida>
        }
      />

      <Route
        path="/articulos/:id"
        element={
          <ArticulosView userMaster={userMaster} dbArticulos={dbArticulos} />
        }
      />
      <Route path="/perfil" element={<Perfil userMaster={userMaster} />} />
      <Route path="*" element={<Page404 userMaster={userMaster} />} />
    </Routes>
  );
}
