import React from "react";
import styled from "styled-components";

import Theme from "../config/Theme";
import { BotonGeneral } from "./ElementosGenerales";

export default function BotonQuery(props) {
  const consulta = () => {
    console.log(props);
  };
  return (
    <BtnSimple
      className={Theme.config.modoDev == false ? "none" : ""}
      onClick={() => consulta()}
    >
      Consulta
    </BtnSimple>
  );
}
const BtnSimple = styled(BotonGeneral)`
  &.none {
    display: none;
  }
`;
