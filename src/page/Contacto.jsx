import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgPets from "./../../public/img/animales/DALL funny.webp";
import ImgMSG from "./../../public/img/chat.png";
import SeccionVenta from "../components/SeccionVenta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FormContact from "../components/FormContact";
import ImgBac from "./../../public/img/animales/dog-7866708_1280.jpg";
import { Link } from "react-router";
import HeroMedium from "../components/HeroMedium";
export default function Contacto({ userMaster }) {
  return (
    <>
      <Header userMaster={userMaster} />
      <HeroMedium imgBg={ImgBac} titulo={"Contactos"} />

      <Seccion>
        <CajaSubTitulo>
          <SubTitulo>Contactos:</SubTitulo>
        </CajaSubTitulo>
        <WrapInternal>
          <CajaInternal className="izq">
            <WrapContact>
              <CajaTitulito>
                <Titulito>Telefonos:</Titulito>
              </CajaTitulito>
              <Cajita className="numeros">
                <CajaNumeros>
                  <Icono icon={faWhatsapp} />
                  <Numeros>809-973-2098</Numeros>
                </CajaNumeros>
                <CajaNumeros>
                  <Icono icon={faWhatsapp} />
                  <Numeros>809-375-7647</Numeros>
                </CajaNumeros>
              </Cajita>
            </WrapContact>
            <WrapContact>
              <CajaTitulito>
                <Titulito>Redes Sociales:</Titulito>
              </CajaTitulito>
              <CajaRRSS>
                <Enlace to={"https://www.instagram.com/sarapetshoprd/"}>
                  <Icono icon={faInstagram} />
                </Enlace>

                <Enlace to={"https://www.facebook.com/VentaKoi"}>
                  <Icono icon={faFacebook} />
                </Enlace>
                <Enlace
                  to={
                    "https://api.whatsapp.com/send?phone=+18099732098&text=Hola,%20quisiera%20por%20favor%20ser%20asistido."
                  }
                >
                  <Icono icon={faWhatsapp} />
                </Enlace>
              </CajaRRSS>
            </WrapContact>
            <WrapContact>
              <CajaTitulito>
                <Titulito>Direccion:</Titulito>
              </CajaTitulito>
              <Cajita>
                <Parrafo>
                  Calle Salvador Espinal N° 13 Frente a Plaza Monaco.
                </Parrafo>
              </Cajita>
            </WrapContact>
          </CajaInternal>

          <CajaInternal className="imgPerro">
            <Img src={ImgPets} />
          </CajaInternal>
        </WrapInternal>
      </Seccion>
      <Seccion className="mensaje">
        <CajaSubTitulo>
          <SubTitulo className="mensaje"> Envianos un mensaje:</SubTitulo>
        </CajaSubTitulo>
        <WrapInternal>
          <CajaInternal className="izq">
            <Img src={ImgMSG} />
          </CajaInternal>
          <CajaInternal className="der contact">
            <CajaForm>
              <FormContact />
            </CajaForm>
          </CajaInternal>
        </WrapInternal>
      </Seccion>
      <Footer />
    </>
  );
}

const ContainerContenido = styled.div``;
const CajaImgHero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/img/animales/dog-7866708_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 70px;
  background-position: center;
  position: relative;
`;
const CajaFrosting = styled.div`
  width: 100%;
  height: 100%;
  background-color: #921a1a7e;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
const Titulo = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
`;
const Seccion = styled.div`
  padding: 0 100px;
  margin-bottom: 100px;
  &.mensaje {
    background-color: ${Theme.neutral.marronOscuro};
    padding: 25px 100px;
    @media screen and (max-width: 1000px) {
      padding: 0 50px;
    }
    @media screen and (max-width: 800px) {
      padding: 0 30px;
    }
    @media screen and (max-width: 600px) {
      padding: 0 30px;
    }
    @media screen and (max-width: 400px) {
      padding: 0 15px;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 30px;
  }
  @media screen and (max-width: 400px) {
    padding: 0 15px;
  }
`;
const WrapInternal = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 25px;
    padding: 15px 0;
  }
`;
const CajaInternal = styled.div`
  width: 48%;
  height: 500px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
    &.imgPerro {
      display: flex;
      justify-content: center;
    }
  }

  &.izq {
    padding: 0 15px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    flex-direction: column;
  }
  &.contact {
    display: flex;
    justify-content: center;
  }
`;
const CajaForm = styled.div`
  width: 80%;
  @media screen and (max-width: 450px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
const WrapContact = styled.div`
  box-shadow: ${Theme.config.sombra};
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  min-height: 100px;
  border-radius: 8px;
`;
const CajaRRSS = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  height: 60px;
  padding: 4px;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
const Cajita = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  gap: 15px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const CajaSubTitulo = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const SubTitulo = styled.h2`
  width: 100%;
  font-size: 2rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
  &.mensaje {
    color: white;
  }
`;
const CajaTitulito = styled.div`
  width: 100%;
`;
const Titulito = styled.h3`
  color: ${Theme.secondary.azulBrillante};
`;
const CajaNumeros = styled.div`
  color: ${Theme.primary.rojoBrillante};
  display: flex;
  align-items: center;
`;
const Numeros = styled.h3`
  font-size: 1.5rem;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 1.5rem;

  color: ${Theme.primary.rojoBrillante};
  cursor: pointer;
  border: 2px solid;
  padding: 5px;
  border-radius: 4px;
  transition: ease 0.4s;
  &:hover {
    background-color: ${Theme.neutral.neutral300};
    color: ${Theme.neutral.neutral600};
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: ${Theme.config.sombra};
  border-radius: 6px;
  @media screen and (max-width: 800px) {
    height: 400px;
    width: auto;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    height: auto;
  }
`;
const Parrafo = styled.p``;
const Enlace = styled(Link)``;
