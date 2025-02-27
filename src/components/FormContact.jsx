import React, { useState } from "react";
import styled from "styled-components";

import {
  BotonGeneral,
  InputGeneral,
  TextAreaGeneral,
} from "./ElementosGenerales";
import Theme from "../config/Theme";

export default function FormContact({}) {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  return (
    <Container>
      {mensajeEnviado && <Parrafo>Gracias, su mensaje sera atendido.</Parrafo>}
      <CajaInput>
        <TituloInput>Nombre</TituloInput>
        <Input
          type="text"
          // value={datos.nombre}
          name="nombre"
          // onChange={(e) => handleInput(e)}
          placeholder="Nombre"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Telefono</TituloInput>
        <Input
          type="text"
          // onChange={(e) => handleInput(e)}
          name="telefono"
          // value={datos.telefono}
          placeholder="Telefono"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Correo</TituloInput>
        <Input
          type="text"
          // onChange={(e) => handleInput(e)}
          name="correo"
          // value={datos.correo}
          placeholder="Correo"
        />
      </CajaInput>
      <CajaInput>
        <TituloInput>Mensaje</TituloInput>
        <TextArea
          type="text"
          // onChange={(e) => handleInput(e)}
          name="mensaje"
          // value={datos.mensaje}
          placeholder="Mensaje"
        />
      </CajaInput>
      <BtnSimple
      // onClick={() => enviarMensaje()}
      >
        Enviar
      </BtnSimple>
    </Container>
  );
}

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 100%;
  /* display: inline-block; */
  /* width: 400px; */
  margin: auto;
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 600px) {
    min-width: 300px;
    width: 300px;
  }
  @media screen and (max-width: 400px) {
    width: 260px;
    min-width: 250px;
  }
`;
const CajaInput = styled.div`
  width: 100%;
`;
const TituloInput = styled.p`
  color: white;
  /* color: red; */
`;

const Input = styled(InputGeneral)``;
const TextArea = styled(TextAreaGeneral)``;

const BtnSimple = styled(BotonGeneral)`
  border: 1px solid ${Theme.primary.azulProfundo};
`;

const Parrafo = styled.p`
  color: ${Theme.primary.azulProfundo};
  font-weight: bold;
`;
