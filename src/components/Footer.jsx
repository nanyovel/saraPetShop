import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

export default function Footer() {
  return (
    <Container>
      <Columna>
        <Img src="https://i.ibb.co/D5fV0HY/logo-sara-pet-shop.png" />
        <TituloSara>Sara Pet Shop</TituloSara>
        <SubTituloSara>
          Si los animales pudieran escribir reseñas, ¡tendríamos 5 estrellas de
          todas las especies!
        </SubTituloSara>
      </Columna>

      <Columna>
        <Titulo>Enlaces de interes</Titulo>
        <Lista>
          <Item>
            <Enlace to={"/nosotros"}>¿Quienes somos?</Enlace>
          </Item>

          <Item>
            <Enlace to={"/contacto"}>Contacto</Enlace>
          </Item>

          <Item>
            <Enlace to={"/registro"}>Registrarte</Enlace>
          </Item>
          <Item>
            <Enlace to={"/login"}>Iniciar Sesion</Enlace>
          </Item>
          <Item>
            <Enlace to={"/recuperar"}>Olvide mi contraseña</Enlace>
          </Item>
        </Lista>
        <Titulo>Redes sociales</Titulo>
        <CajaRRSS>
          <Enlace to={"https://www.instagram.com/sarapetshoprd/"}>
            <Icono icon={faInstagram} />
          </Enlace>

          <Enlace to={"https://www.facebook.com/VentaKoi"}>
            <Icono icon={faFacebook} />
          </Enlace>
          <Enlace
            target="_blank"
            to={
              "https://api.whatsapp.com/send?phone=+18099732098&text=Hola,%20quisiera%20por%20favor%20ser%20asistido."
            }
          >
            <Icono icon={faWhatsapp} />
          </Enlace>
        </CajaRRSS>
      </Columna>

      <Columna className="sinBordes">
        <MapaGoogle
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.2052664499835!2d-69.96978869860301!3d18.44643171493444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea5613c2a220561%3A0x1de015d80f0a4924!2sSara%20Pet%20Shop!5e0!3m2!1ses-419!2sdo!4v1735508295128!5m2!1ses-419!2sdo"
          width="600"
          height="450"
          //   style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Columna>
    </Container>
  );
}
const Container = styled.footer`
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    padding: 25px;
  }
`;
const Columna = styled.section`
  width: 30%;
  /* border-left: 2px solid ${Theme.primary.rojoBrillante}; */
  border-right: 2px solid ${Theme.primary.rojoBrillante};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.sinBordes {
    border: none;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 25px;
    border-bottom: 2px solid ${Theme.primary.rojoBrillante};
    border-right: none;
  }
`;
const TituloSara = styled.h1`
  color: ${Theme.primary.rojoBrillante};
`;
const SubTituloSara = styled.h2`
  color: white;
  font-weight: 400;

  width: 100%;
  text-align: center;
  font-size: 1.2rem;
`;
const Titulo = styled.h3`
  color: ${Theme.primary.rojoBrillante};
  width: 100%;
  text-align: start;
  /* font-weight: lighter; */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 2px;
  margin-bottom: 14px;
  text-decoration: underline;
  /* font-size: 1rem; */
`;
const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  @media screen and (max-width: 800px) {
    width: 100px;
  }
`;
const Lista = styled.ul`
  color: ${Theme.neutral.neutral600};
  color: white;
  /* border: 1px solid white; */
  width: 100%;
  padding-left: 30px;
  margin-bottom: 30px;
`;
const Item = styled.li`
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const MapaGoogle = styled.iframe`
  width: 95%;
  margin: 0;
  display: block;
  /* margin: auto; */
  height: 500px;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -1px rgba(0, 0, 0, 0.43);
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
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;

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
const Enlace = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
