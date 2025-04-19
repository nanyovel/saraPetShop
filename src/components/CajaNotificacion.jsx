import React from "react";
import Theme from "../config/Theme";
import styled from "styled-components";

export default function CajaNotificacion({ tipo, texto }) {
  return (
    <Contenedor className={tipo}>
      <Mensaje>{texto}</Mensaje>
    </Contenedor>
  );
}
const Contenedor = styled.div`
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: center;
  &.error {
    background-color: ${Theme.complementary.danger};
  }
  &.warning {
    background-color: ${Theme.complementary.warning};
  }
  &.success {
    background-color: ${Theme.complementary.success};
  }
`;
const Mensaje = styled.p`
  color: white;
`;
