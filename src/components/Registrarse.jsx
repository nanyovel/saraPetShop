import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { BotonGeneral, InputGeneral } from "./ElementosGenerales";

export default function Registrarse() {
  return (
    <Container>
      <WrapSimple>
        <CajaInput>
          <TituloInput>Nombre</TituloInput>
          <InputSimple />
        </CajaInput>
        <CajaInput>
          <TituloInput>Telefono</TituloInput>
          <InputSimple />
        </CajaInput>
        <CajaInput>
          <TituloInput>Correo</TituloInput>
          <InputSimple />
        </CajaInput>
        <BtnSimple>Aceptar</BtnSimple>
      </WrapSimple>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.neutral.blancoHueso};
`;
const WrapSimple = styled.div`
  width: 600px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CajaInput = styled.div``;
const TituloInput = styled.p`
  color: ${Theme.neutral.neutral600};
`;
const InputSimple = styled(InputGeneral)`
  width: 300px;
  height: 40px;
`;
const BtnSimple = styled(BotonGeneral)``;
