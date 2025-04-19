import React from "react";
import styled from "styled-components";

import { Fragment } from "react";
import Theme from "../config/Theme";

export default function MenuPestannias({
  arrayOpciones,
  handlePestannias,
  ciclo,
}) {
  return (
    <CajaBarraOpciones>
      <ListaOpciones>
        {arrayOpciones.map((opciones, index) => {
          return (
            <Fragment key={index}>
              <OpcionLI
                key={index}
                // name={opciones.nombre}
                className={opciones.select ? " selected " : ""}
              >
                <AnchorText
                  data-id={index}
                  data-key={opciones.key}
                  name={opciones.nombre}
                  onClick={(e) => handlePestannias(e)}
                >
                  {opciones.nombre}
                </AnchorText>
              </OpcionLI>
            </Fragment>
          );
        })}
      </ListaOpciones>
    </CajaBarraOpciones>
  );
}

const CajaBarraOpciones = styled.div`
  color: ${Theme.neutral.blancoHueso};
  color: white;
  background-color: black;
  border-bottom: 1px solid ${Theme.secondary.azulTenue};
`;
const ListaOpciones = styled.ul`
  display: flex;
  list-style: none;
`;
const OpcionLI = styled.li`
  font-size: 1.1rem;
  margin-right: 3px;
  padding: 6px;
  border-bottom: 4px solid transparent;
  &.selected {
    border-bottom-color: ${Theme.primary.rojoBrillante};
    color: ${Theme.primary.rojoBrillante};
  }
`;
const AnchorText = styled.a`
  cursor: pointer;

  padding: 4px;
  &:hover {
    /* color: ${Theme.neutral.blancoHueso}; */
  }
`;
const ImgSimple = styled.img`
  width: 15px;
  object-fit: contain;
`;
