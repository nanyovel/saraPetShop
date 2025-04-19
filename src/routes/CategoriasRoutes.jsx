import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PerrosCat from "../page/PerrosCat";
import GatosCat from "../page/GatosCat";

export default function CategoriasRoutes({ userMaster }) {
  return (
    <>
      <Routes>
        <Route path="/perros" element={<PerrosCat userMaster={userMaster} />} />
        <Route path="/gatos" element={<GatosCat userMaster={userMaster} />} />
      </Routes>
    </>
  );
}
const Titulo = styled.h1``;
