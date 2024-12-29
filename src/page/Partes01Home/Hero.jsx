import React from "react";
import styled from "styled-components";
import Theme from "../../config/Theme";
import Escaparate from "../../components/Escaparate";

export default function Hero() {
  return (
    <Container>
      <Escaparate />
      {/* <Escaparate /> */}
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  /* position: absolute; */
  /* top: 0; */
  /* background-color: black; */
  background-color: ${Theme.primary.azulSuave};
  width: 100vw;
`;
