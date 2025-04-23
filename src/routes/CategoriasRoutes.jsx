import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PerrosCat from "../page/Categorias/PerrosCat";
import GatosCat from "../page/Categorias/GatosCat";
import PecesCat from "../page/Categorias/PecesCat";
import Aves from "../page/Categorias/Aves";
import Reptil from "../page/Categorias/Reptil";
import Otros from "../page/Categorias/Otros";

export default function CategoriasRoutes({ userMaster }) {
  return (
    <>
      <Routes>
        <Route path="/perros" element={<PerrosCat userMaster={userMaster} />} />
        <Route path="/gatos" element={<GatosCat userMaster={userMaster} />} />
        <Route path="/peces" element={<PecesCat userMaster={userMaster} />} />
        <Route path="/aves" element={<Aves userMaster={userMaster} />} />
        <Route path="/reptiles" element={<Reptil userMaster={userMaster} />} />
        <Route path="/otros" element={<Otros userMaster={userMaster} />} />
      </Routes>
    </>
  );
}
const Titulo = styled.h1``;
