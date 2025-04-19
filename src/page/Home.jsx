import React, { useEffect } from "react";
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
import Footer from "../components/Footer";
import Servicios from "../components/Servicios";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Stats from "./Partes01Home/Stats";
import { getAuth } from "firebase/auth";
import CajaConfirmarEmail from "../components/CajaConfirmarEmail";
import { useNavigate } from "react-router";

export default function Home({ userMaster }) {
  const navegacion = useNavigate();
  const auth = getAuth();
  auth.languageCode = "es";
  const usuario = auth.currentUser;

  return (
    <Container>
      {!usuario?.emailVerified && location !== "/" && <CajaConfirmarEmail />}
      <WrapHero>
        <Header home={true} userMaster={userMaster} />
        <Hero />
      </WrapHero>
      <Seccion className="sinMargin sinPadding">
        <BarraMensaje texto="En Sara Pet Shop encontrarás hasta lo que no sabías que querías." />
      </Seccion>
      <Seccion className="padding">
        <TituloSeccion>Categorias</TituloSeccion>
        <Categorias />
      </Seccion>
      <Seccion className="padding bgWhite">
        <TituloSeccion>Alimentos</TituloSeccion>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>
              Alimentos para cualquier tipo de mascotas.
            </TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaVerMas>
            <TextoVerMas>
              Ver todos
              <Icono className="marginLeft" icon={faArrowRight} />
            </TextoVerMas>
          </CajaVerMas>
          <CajaBarraNegraSeccion className="bottom"></CajaBarraNegraSeccion>
        </WrapBarraProductos>
      </Seccion>
      <Seccion className=" bgRed">
        <TituloSeccion className="white">Servicios</TituloSeccion>
        <Servicios />
      </Seccion>
      <Seccion>
        <ImagenBigSection />
      </Seccion>
      <Seccion className="padding bgWhite">
        <TituloSeccion>Mascotas</TituloSeccion>
        <WrapBarraProductos>
          <CajaBarraNegraSeccion className="top">
            <TituloBarra>Tenemos todo tipo de mascotas</TituloBarra>
          </CajaBarraNegraSeccion>
          <Articulos tipo={"ofertas"} />
          <CajaVerMas>
            <TextoVerMas>
              Ver todos
              <Icono className="marginLeft" icon={faArrowRight} />
            </TextoVerMas>
          </CajaVerMas>
          <CajaBarraNegraSeccion className="bottom"></CajaBarraNegraSeccion>
        </WrapBarraProductos>
      </Seccion>
      {/*  */}
      {/*  */}
      {/*  */}
      <Seccion className=" bgRed2">
        <TituloSeccion className="white">Nuestras marcas</TituloSeccion>
        <CarrucelMarcas />
        <CarrucelMarcas invertido={true} />
      </Seccion>{" "}
      <Seccion>
        <Stats />
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
    @media screen and (max-width: 1200px) {
      padding-left: 100px;
      padding-right: 100px;
    }
    @media screen and (max-width: 1000px) {
      padding-left: 50px;
      padding-right: 50px;
    }
    @media screen and (max-width: 900px) {
      padding-left: 30px;
      padding-right: 30px;
    }
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
    margin-bottom: 20px;
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
  font-size: 1.8rem;
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

const CajaEmailNoVerfied = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: ${Theme.primary.azulSuave};
  border: 1px solid ${Theme.secondary.coralCalido};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;
const TextoEmailVerified = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Theme.primary.rojoBrillante};
  text-decoration: underline;
  &.parrafo {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.1rem;
    color: ${Theme.secondary.azulBrillante};
    width: 60%;
  }
`;
const Span = styled.span``;
