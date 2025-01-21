import React from "react";
import styled from "styled-components";

import Theme from "../../config/Theme";
import Escaparate from "../../components/Escaparate";
import Desvanecer from "../../components/Desvanecer";

export default function Hero() {
  return (
    <Container>
      {/* <Escaparate /> */}
      <Desvanecer />
    </Container>
  );
}
const Container = styled.div`
  /* padding-top: 100px; */
  height: 100vh;
  /* position: absolute; */
  /* top: 0; */
  /* background-color: black; */
  background-color: ${Theme.primary.azulSuave};
  width: 100vw;
`;
