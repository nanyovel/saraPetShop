import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { faCartShopping, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { getAuth } from "firebase/auth";
import CajaConfirmarEmail from "./CajaConfirmarEmail";

export default function Header({ home, userMaster }) {
  const navegacion = useNavigate();
  const auth = getAuth();
  const usuario = auth.currentUser;

  const location = useLocation().pathname;
  return (
    <>
      <Container className={home ? "home" : ""}>
        <CajaLogoTel>
          <CajitaInterna className="izq">
            <Img src="https://i.ibb.co/D5fV0HY/logo-sara-pet-shop.png" />
          </CajitaInterna>
          <WrapTel>
            <TextoTel className="tel">
              <Ancla
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+18093757647&text=Hola%20equipo%SaraPetShop,%20quisiera%20por%20favor%20ser%20asistido."
              >
                <Icono icon={faWhatsapp} />
                <SpanTel>Tel:</SpanTel>
                809-375-7647
              </Ancla>
            </TextoTel>
            <TextoTel className="tel">
              <Ancla
                target="_blank"
                href="https://api.whatsapp.com/send?phone=+18099732098&text=Hola%20equipo%SaraPetShop,%20quisiera%20por%20favor%20ser%20asistido."
              >
                <Icono icon={faWhatsapp} />
                <SpanTel>Tel:</SpanTel>
                809-973-2098
              </Ancla>
            </TextoTel>
          </WrapTel>
        </CajaLogoTel>
        <NavBar>
          <NavList>
            <NavItem>
              <Enlace to={"/"}>Home</Enlace>
            </NavItem>
            <NavItem>
              <Enlace to={"/mascotas"}>Mascotas</Enlace>
            </NavItem>
            <NavItem>
              <Enlace to={"/accesorios"}>Accesorios</Enlace>
            </NavItem>
            <NavItem>
              <Enlace to={"/alimentos"}>Alimentos</Enlace>
            </NavItem>

            <NavItem>
              <Enlace to={"/contacto"}>Contacto</Enlace>
            </NavItem>
            {userMaster?.permisos.includes("accessDashboard") && (
              <NavItem>
                <Enlace to={"/dashboard"}>Dashboard</Enlace>
              </NavItem>
            )}
          </NavList>
          {/* <CajaLog className="carrito">
          <Icono className="user" icon={faCartShopping} />
          Carrito
        </CajaLog> */}
          {!usuario && (
            <Enlace to={"/login"}>
              <CajaLog>
                <Icono className="user" icon={faUser} />
                Iniciar Sesion
              </CajaLog>
            </Enlace>
          )}
          {userMaster && (
            <Enlaces className={"perfil"} to={"/perfil"}>
              <CajaPerfil>
                {/* {userMaster.urlFotoPerfil ? ( */}
                {userMaster ? (
                  <CajaAvatar>
                    <ImgAvatar src={userMaster.urlFotoPerfil} />
                    {/* <ImgAvatar src={'https://firebasestorage.googleapis.com/v0/b/caelossoficial.appspot.com/o/avatars%2FfotoPerfiljperez?alt=media&token=92293807-c372-490d-a633-9a14d7f38dcf'} /> */}
                  </CajaAvatar>
                ) : (
                  <CajaAvatar>
                    <ImgAvatar
                      className="icon"
                      src={
                        userMaster.genero == "Femenino"
                          ? Theme.config.userFemale
                          : Theme.config.userMale
                      }
                    />
                  </CajaAvatar>
                )}

                <CajaNombrePerfil>
                  <NombrePerfil>{userMaster.nombre}</NombrePerfil>
                </CajaNombrePerfil>
              </CajaPerfil>
            </Enlaces>
          )}
        </NavBar>
      </Container>
      {!usuario?.emailVerified && location !== "/" && <CajaConfirmarEmail />}
    </>
  );
}
// const Container = styled(ContenedorMaster)`
const Container = styled.header`
  width: 100vw;
  height: 90px;
  background-color: black;
  color: ${Theme.primary.rojoBrillante};
  color: white;
  z-index: 2;
  padding: 1px ${Theme.config.paddingLateral};
  &.home {
    position: absolute;
    top: 0;
  }
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    padding: 1px 100px;
  }
  @media screen and (max-width: 1100px) {
    padding: 1px 50px;
  }
  @media screen and (max-width: 680px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 1px 30px;
  }
  @media screen and (max-width: 420px) {
    padding: 1px 5px;
  }
`;

const CajaLogoTel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
  @media screen and (max-width: 680px) {
    margin-bottom: 10px;
  }
`;
const WrapTel = styled.div`
  @media screen and (max-width: 680px) {
    display: flex;
    gap: 10px;
  }
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* color: ${Theme.primary.rojoBrillante}; */
  color: #fff;
  @media screen and (max-width: 680px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const Img = styled.img`
  width: 80px;
  border-radius: 50%;
  @media screen and (max-width: 900px) {
    width: auto;
    height: 100%;
  }
  @media screen and (max-width: 680px) {
    height: 50px;
  }
`;
const CajitaInterna = styled.div`
  height: 100%;
  &.izq {
    align-content: center;
    @media screen and (max-width: 900px) {
      width: auto;
      height: 50%;
    }
  }
  &.der {
    align-content: center;
    @media screen and (max-width: 900px) {
      width: auto;
      height: 50%;
    }
  }
`;
const Icono = styled(FontAwesomeIcon)`
  margin-right: 5px;
  &.user {
    &:hover {
      cursor: pointer;
      color: ${Theme.primary.azulSuave};
    }
  }
`;

const TextoTel = styled.h2`
  font-size: 1.1rem;
  font-weight: normal;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.9rem;
  }
`;
const Ancla = styled.a`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
  @media screen and (max-width: 900px) {
  }
`;
const Enlace = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;
const SpanTel = styled.span``;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  align-items: center;
  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 8px;
  }
  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.9rem;
    border: 1px solid white;
    padding: 4px;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.8rem;
    padding: 2px;
  }
`;
const CajaLog = styled.div`
  margin-right: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* border: 1px solid ${Theme.primary.rojoBrillante}; */
  border: 1px solid #fff;
  padding: 4px;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
  &.carrito {
    border: none;
  }
  @media screen and (max-width: 780px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

const ContenedorHeader = styled.header`
  /* background-color: ${Theme.primary.turquoise}; */
  background-color: rgba(26, 188, 156, 0.8);
  width: 100vw;
  color: ${Theme.primary.white};
  /* padding: 16px; */
  height: 60px;
  padding: 0 150px;
  z-index: 150;
  &.absolute {
    position: absolute;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 80px;
  }
  @media screen and (max-width: 1000px) {
    padding: 0 60px;
  }
  @media screen and (max-width: 980px) {
    height: 100px;
  }
  @media screen and (max-width: 620px) {
    padding: 10px 0;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    padding: 4px 0;
  }
`;

const CajaInternaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  &.nav {
    padding: 8px;
    @media screen and (max-width: 620px) {
      transition: ease all 0.2s;
      flex-direction: column-reverse;
      position: fixed;
      height: 500px;
      top: 0;
      right: 0;
      transform: translate(100%);
      overflow-x: scroll;
      background-color: ${Theme.primary.turquoise};
      border: 1px solid black;
      padding: 0 10px;
      z-index: 20;
      /* min-width: 50vw; */
      min-width: 300px;
      &.open {
        transform: translate(0);
      }
    }
    @media screen and (max-width: 720px) {
      /* padding-left: 45px; */
    }
  }
`;
const Enlaces = styled(NavLink)`
  &.menu {
    color: white;
    display: block;
    transition: color 25ms;
    border-bottom: 3px solid transparent;
    &:hover {
      color: ${Theme.primary.sand};
      border-bottom: 3px solid;
    }
    text-decoration: none;
    &.active {
      color: white;
    }
    @media screen and (max-width: 620px) {
      white-space: nowrap;
      width: 100%;
      text-align: center;
    }
  }
  &.logo {
    height: 100%;
    display: block;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.perfil {
    color: white;
    text-decoration: none;
    @media screen and (max-width: 620px) {
      position: absolute;
      top: 0;
    }
    &:hover {
      color: ${Theme.primary.sand};
    }
    &.active {
      color: white;
    }
  }
  &.login {
    display: flex;
    justify-content: center;
    padding: 4px;
    gap: 5px;
    align-items: center;
  }
`;
const CajaLogo = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CajaArrowVIcon = styled.div`
  display: flex;
  align-items: end;
`;
const CajaIdiomas = styled.div`
  width: 200px;
  min-height: 100px;
  background-color: ${Theme.secondary.coral};
  position: absolute;
  top: 25px;
`;
const Lista = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  padding: 5px;
  height: 40px;
  border-bottom: 1px solid black;
  align-content: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: ${Theme.secondary.coral};
    background-color: ${Theme.primary.sand};
    background-color: white;
  }
`;
const ImgFlag = styled.img`
  width: 30px;
`;

const CajaPerfil = styled.div`
  min-width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease 0.2s all;

  @media screen and (max-width: 620px) {
    display: flex;
    /* flex-direction: row; */
    border: 1px solid black;
    margin: 5px;
    border-radius: 4px;
    padding: 3px;
  }

  &:hover {
    /* border: 1px solid ${Theme.secondary.coral}; */
    border-radius: 4px;
    box-shadow: ${Theme.config.sombra};
  }
`;

const CajaAvatar = styled.div`
  width: 40px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
`;
const ImgAvatar = styled.img`
  width: 80%;
  border-radius: 50%;
`;
const CajaNombrePerfil = styled.div``;
const NombrePerfil = styled.h3`
  /* text-overflow: ; */
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  /* border-bottom: 3px transparent; */
`;
const CajaTopCelMovil = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  background-color: ${Theme.primary.turquoise};
  /* min-height: 60px; */
`;

const NamePage = styled.div`
  padding: 0 30px 0 30px;
  display: flex;

  width: 100%;
  border-bottom: 3px solid ${Theme.primary.turquoiseBrillante};
  height: 60px;
  h2 {
    margin-bottom: 7px;
    font-weight: 200;
  }
  @media screen and (max-width: 620px) {
    background-color: transparent;
  }
`;

const BoxBarsMenu = styled.div`
  width: 30px;
  height: 0px;
  position: absolute;
  left: 18px;
  margin-top: 10px;
  margin-right: 5px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  display: none;
  @media screen and (max-width: 620px) {
    display: inline-block;
    border: 1px solid ${Theme.azul2};
    /* background-color: ${Theme.primary.turquoise}; */
    background-color: ${Theme.primary.neutral200};
    border-radius: 3px;
    padding: 2px;
    width: 40px;
    height: 35px;
    left: auto;
    right: 10px;
    top: 40px;
    position: absolute;
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
