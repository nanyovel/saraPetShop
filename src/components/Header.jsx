import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { faCartShopping, faPencil } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header({ home }) {
  return (
    <Container className={home ? "home" : ""}>
      <CajaLogoTel>
        <CajitaInterna className="izq">
          <Img src="https://i.ibb.co/D5fV0HY/logo-sara-pet-shop.png" />
        </CajitaInterna>
        <WrapTel>
          <TextoTel className="tel">
            <Ancla
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+18099732098&text=Hola%20equipo%20BreakKoi,%20quisiera%20por%20favor%20ser%20asistido."
            >
              <Icono icon={faWhatsapp} />
              <SpanTel>Tel:</SpanTel>
              809-973-2098
            </Ancla>
          </TextoTel>
          <TextoTel className="tel">
            <Ancla
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+18099732098&text=Hola%20equipo%20BreakKoi,%20quisiera%20por%20favor%20ser%20asistido."
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
          <NavItem>Home</NavItem>
          <NavItem>Mascotas</NavItem>
          <NavItem>Accesorios</NavItem>
          <NavItem>Alimentos</NavItem>
          <NavItem>Ofertas</NavItem>
          <NavItem>Contactos</NavItem>
        </NavList>
        <CajaLog className="carrito">
          <Icono className="user" icon={faCartShopping} />
          Carrito
          {/* <TextoSingle>Login</TextoSingle> */}
        </CajaLog>
        <CajaLog>
          <Icono className="user" icon={faUser} />
          Cuenta
          {/* <TextoSingle>Login</TextoSingle> */}
        </CajaLog>
      </NavBar>
    </Container>
  );
}
// const Container = styled(ContenedorMaster)`
const Container = styled.header`
  width: 100vw;
  height: 90px;
  /* background-color: ${Theme.primary.rojoCalido}; */
  /* color: ${Theme.neutral.blancoHueso}; */
  /* background-color: #ee3b1f8f; */
  background-color: black;
  color: ${Theme.primary.rojoBrillante};
  z-index: 2;
  padding: 1px ${Theme.config.paddingLateral};
  &.home {
    position: absolute;
    top: 0;
  }
  display: flex;
  justify-content: space-between;
`;

const CajaLogoTel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const WrapTel = styled.div``;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  color: ${Theme.primary.rojoBrillante};
`;
const Img = styled.img`
  width: 80px;
  border-radius: 50%;
`;
const CajitaInterna = styled.div`
  height: 100%;
  &.izq {
    align-content: center;
  }
  &.der {
    align-content: center;
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
`;
const SpanTel = styled.span``;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
`;
const CajaLog = styled.div`
  margin-right: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid ${Theme.primary.rojoBrillante};
  padding: 4px;
  &:hover {
    color: ${Theme.primary.azulSuave};
    text-decoration: underline;
  }
  &.carrito {
    border: none;
  }
`;
