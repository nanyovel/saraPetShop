import React from "react";
import Header from "../components/Header";
import Hero from "./Partes01Home/Hero";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarraMensaje from "../components/BarraMensaje";
import Categorias from "../components/Categorias";
import Theme from "../config/Theme";
import Articulos from "../components/Articulos";
import ImagenBigSection from "../components/ImagenBigSection";
import CarrucelMarcas from "./Partes01Home/CarrucelMarcas";
import Registrarse from "../components/Registrarse";
import Footer from "../components/Footer";
import Servicios from "../components/Servicios";
// import { NavLink } from "react-router";

export default function Home() {
  return (
    <Container>
      <WrapHero>
        <Header home={true} />
        <Hero />
      </WrapHero>
      <Seccion className="sinMargin sinPadding">
        <BarraMensaje texto="En Sara Pet Shop encontrarás lo que necesitas… y lo que no sabías que querías." />
      </Seccion>
      <Seccion className="padding">
        <TituloSeccion>Categorias</TituloSeccion>
        <Categorias />
      </Seccion>
      <Seccion className=" bgRed">
        <TituloSeccion className="white">Servicios</TituloSeccion>
        <Servicios />
      </Seccion>
      <Seccion className="padding bgWhite">
        <TituloSeccion>Alimentos</TituloSeccion>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Alimentos para perros:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver todos...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Alimentos para gatos:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver todos...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Otros alimentos:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver mas...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>
      </Seccion>
      <Seccion>
        <ImagenBigSection />
      </Seccion>
      <Seccion className="padding bgWhite">
        <TituloSeccion>Mascotas</TituloSeccion>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Perros:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver todo...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>

        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Peces:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver todo...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Otras mascotas:</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaBarraNegraSeccion className="bottom">
            <TextoVerMas>Ver todo...</TextoVerMas>
          </CajaBarraNegraSeccion>
        </WrapBarraProductos>
      </Seccion>

      <Seccion className=" bgRed2">
        <TituloSeccion className="white">Nuestras marcas</TituloSeccion>
        <CarrucelMarcas />
        <CarrucelMarcas invertido={true} />
      </Seccion>
      <Seccion className=" bgWhite">
        <TituloSeccion>Forma parte</TituloSeccion>
        <CajaBarraNegraSeccion className="">
          <TextoVerMas className="registrate">
            Registrate y aprovecha descuentos en todos los productos y otros
            beneficios.
          </TextoVerMas>
        </CajaBarraNegraSeccion>
        <Registrarse />
        <CajaBarraNegraSeccion className=""></CajaBarraNegraSeccion>
      </Seccion>

      <Footer />
    </Container>
  );
}

const Container = styled.div``;
const WrapHero = styled.div`
  position: relative;
  width: 100vw;
`;
const Seccion = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  &.padding {
    padding-left: ${Theme.config.paddingLateral};
    padding-right: ${Theme.config.paddingLateral};
  }
  &.bgWhite {
    background-color: white;
    align-content: center;
  }
  &.sinMargin {
    margin: 0;
  }
  &.sinPadding {
    padding: 0;
  }
  &.bgRed {
    width: 100%;
    background-color: ${Theme.primary.rojoTenue};
    min-height: 200px;
  }
  &.bgRed2 {
    width: 100%;
    background-color: ${Theme.primary.rojoTenue};
    min-height: 200px;
  }
`;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
  &.white {
    color: white;
    text-align: center;
  }
`;
const SubtituloSeccion = styled.h3`
  width: 100%;
  text-align: start;
  color: ${Theme.primary.rojoCalido};
  font-size: 2rem;
  margin-bottom: 30px;
  padding: 15px;
`;

const Icono = styled(FontAwesomeIcon)``;
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
    margin-bottom: 80px;
  }
  &.bottom {
    margin-top: 80px;
    display: flex;
    justify-content: end;
  }
`;
const TituloBarra = styled.h2`
  font-size: 1.8rem;
`;
const TextoVerMas = styled.p`
  font-size: 1.5rem;
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
