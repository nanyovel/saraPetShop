import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BarraMensaje from "../components/BarraMensaje";
import Categorias from "../components/Categorias";
import Theme from "../config/Theme";
import Articulos from "../components/Articulos";
import ImagenBigSection from "../components/ImagenBigSection";

export default function Home() {
  return (
    <Container>
      <WrapHero>
        <Header home={true} />
        <Hero />
      </WrapHero>
      <Seccion>
        <BarraMensaje texto="En Sara Pet Shop encontrarás lo que necesitas… y lo que no sabías que querías." />
      </Seccion>
      <Seccion className="padding">
        <TituloSeccion>Categorias</TituloSeccion>
        <Categorias />
      </Seccion>
      <Seccion className="padding bgWhite">
        <TituloSeccion>En ofertas</TituloSeccion>
        <Articulos />
      </Seccion>
      <ImagenBigSection />
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
  margin-bottom: 70px;
  &.padding {
    padding: 0 ${Theme.config.paddingLateral};
  }
  &.bgWhite {
    background-color: white;
    min-height: 400px;
    align-content: center;
  }
`;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
`;
const WrapHeaderHero = styled.div`
  height: 100vh;
`;
const Icono = styled(FontAwesomeIcon)``;
