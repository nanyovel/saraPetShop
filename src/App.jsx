import React from "react";
import styled from "styled-components";
import "./app.css";
import Theme from "./config/Theme";
import Home from "./page/Home";
import MasterRoutes from "./routes/MasterRoutes";

export default function App() {
  return (
    <>
      <MasterRoutes />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
const Titulo = styled.h1``;
