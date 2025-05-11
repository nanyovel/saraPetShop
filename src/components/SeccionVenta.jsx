import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Articulos from "./Articulos";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SeccionVenta({ titulo, subtitulo, btnMasDisabled }) {
  return (
    <Container>
      {titulo && <TituloSeccion>{titulo}</TituloSeccion>}
      <WrapBarraProductos>
        <CajaBarraNegraSeccion className="top">
          <TituloBarra>{subtitulo}</TituloBarra>
        </CajaBarraNegraSeccion>
        {/* <Articulos tipo={"ofertas"} /> */}
        {!btnMasDisabled && (
          <CajaVerMas>
            <TextoVerMas>
              Ver todos
              <Icono className="marginLeft" icon={faArrowRight} />
            </TextoVerMas>
          </CajaVerMas>
        )}
        <CajaBarraNegraSeccion className="bottom"></CajaBarraNegraSeccion>
      </WrapBarraProductos>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const TituloSeccion = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
  text-align: start;
  width: 100%;
  &.white {
    color: white;
    text-align: center;
  }
`;

const Icono = styled(FontAwesomeIcon)`
  &.marginLeft {
    margin-left: 10px;
  }
`;
const WrapBarraProductos = styled.div`
  border-top: 5px solid ${Theme.primary.rojoBrillante};
  border-bottom: 5px solid ${Theme.primary.rojoBrillante};
  margin-bottom: 100px;
  background-color: ${Theme.neutral.blancoHueso};
`;
const CajaBarraNegraSeccion = styled.div`
  width: 100%;
  background-color: black;
  min-height: 50px;
  color: ${Theme.primary.rojoBrillante};
  padding: 8px;
  &.top {
    margin-bottom: 50px;
  }
  &.bottom {
    margin-top: 50px;
    display: flex;
    justify-content: end;
  }
`;
const TituloBarra = styled.h2`
  font-size: 1.9rem;
  color: white;
`;
const CajaVerMas = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: end;
  margin-top: 20px;
  /* min-height: 100px; */
`;
const TextoVerMas = styled.p`
  font-size: 1rem;
  color: white;
  border-radius: 150px;
  width: 120px;
  text-align: center;
  vertical-align: center;
  align-content: center;
  height: 40px;
  background-color: black;
  margin-right: 10px;
  &.registrate {
    padding-left: 15px;
    &:hover {
      cursor: auto;
      text-decoration: none;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
