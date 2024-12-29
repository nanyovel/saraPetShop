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
      <Seccion className="padding bgWhite">
        <TituloSeccion>En ofertas</TituloSeccion>
        <Articulos tipo={"ofertas"} />
      </Seccion>
      <Seccion>
        <ImagenBigSection />
      </Seccion>
      <Seccion className=" bgWhite">
        <TituloSeccion>Mas vendidos</TituloSeccion>
        <Articulos tipo={"masVendidos"} />
      </Seccion>
      <Seccion className=" bgWhite">
        <TituloSeccion>Nuestras marcas</TituloSeccion>
        <CarrucelMarcas />
        <CarrucelMarcas invertido={true} />
      </Seccion>
      <Seccion className=" bgWhite">
        <TituloSeccion>Forma parte</TituloSeccion>
        <Registrarse />
      </Seccion>
      <Seccion className="probando"></Seccion>
    </Container>
  );
}

const Container = styled.div``;
const WrapHero = styled.div`
  position: relative;
  width: 100vw;
  /* border: 2px solid black; */
  /* display: flex; */
  /* flex-direction: column; */
`;
const Seccion = styled.div`
  /* margin-bottom: 150px; */
  padding-top: 100px;
  padding-bottom: 100px;
  &.padding {
    padding-left: ${Theme.config.paddingLateral};
    padding-right: ${Theme.config.paddingLateral};
  }
  &.bgWhite {
    background-color: white;
    /* min-height: 400px; */
    align-content: center;
  }
  &.sinMargin {
    margin: 0;
  }
  &.sinPadding {
    padding: 0;
  }
  &.probando {
    width: 100%;
    background-color: red;
    height: 200px;
  }
`;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  font-size: 2rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
`;
const WrapHeaderHero = styled.div`
  height: 100vh;
`;
const Icono = styled(FontAwesomeIcon)``;
