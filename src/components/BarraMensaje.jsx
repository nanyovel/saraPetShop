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
  min-height: 80px;
  padding: 15px 0;
  align-content: center;
  background-color: ${Theme.primary.rojoBrillante};
  background-color: black;
  text-align: center;
`;
const Texto = styled.h2`
  color: ${Theme.primary.rojoBrillante};
  font-size: 2.5rem;
  padding: 0 10px;
  @media screen and (max-width: 1200px) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: 1020px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 940px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 860px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 750px) {
    font-size: 1.4rem;
  }
`;
