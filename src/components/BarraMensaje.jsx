import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function BarraMensaje({ texto }) {
  return (
    <Container>
      <Texto>{texto}</Texto>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 80px;
  align-content: center;
  background-color: ${Theme.primary.rojoBrillante};
  background-color: black;
  text-align: center;
`;
const Texto = styled.h2`
  color: ${Theme.primary.rojoBrillante};
  font-size: 2.5rem;
`;
