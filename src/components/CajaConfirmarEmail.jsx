import React, { useState } from "react";
import Theme from "../config/Theme";
import styled from "styled-components";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { BotonGeneral } from "./ElementosGenerales";
import { useNavigate } from "react-router";

export default function CajaConfirmarEmail() {
  const navegacion = useNavigate();
  const auth = getAuth();
  const usuario = auth.currentUser;

  // // ******************** CONFIRMAR EMAIL ******************** //
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [dispathcAlerta, setDispatchAlerta] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState("");
  const [exito, setExito] = useState(null);
  const confirmarEmail = () => {
    var actionCodeSettings = { url: "https://sarapetshop.com" };
    sendEmailVerification(usuario, actionCodeSettings)
      .then(function () {
        setMensajeAlerta("Email enviado.");
        setDispatchAlerta(true);
        setTipoAlerta("normal");
        setExito(true);
      })
      .catch(function (error) {
        console.log(error);
        setMensajeAlerta("Error con la base de datos.");
        setTipoAlerta("error");
        setDispatchAlerta(true);
        setExito(false);
      });
  };
  return (
    usuario && (
      <CajaEmailNoVerfied>
        {dispathcAlerta && (
          <CajaMensajeEnviado className={exito === false ? "noEnviado" : ""}>
            {exito === true && (
              <TextoEmailVerified className="enviado">
                Enlace enviado!
              </TextoEmailVerified>
            )}
            {exito === false && (
              <TextoEmailVerified className="enviado">
                Error al enviar enlace!
              </TextoEmailVerified>
            )}
          </CajaMensajeEnviado>
        )}
        <TextoEmailVerified>Verifica tu email</TextoEmailVerified>
        <TextoEmailVerified className="parrafo">
          Necesitas confirmar que eres el propietarios del email
          <b>{" " + usuario.email}</b>, por favor haz click en el siguiente
          boton para enviar un enlace de confirmacion a tu correo, luego abre tu
          correo y haz click en el enlace enviado.
          <BotonGeneral onClick={() => confirmarEmail()}>
            Enviar enlace
          </BotonGeneral>
        </TextoEmailVerified>
      </CajaEmailNoVerfied>
    )
  );
}

const CajaEmailNoVerfied = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: ${Theme.primary.azulSuave};
  border: 1px solid ${Theme.secondary.coralCalido};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px;
`;
const TextoEmailVerified = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Theme.primary.rojoBrillante};
  text-decoration: underline;
  &.parrafo {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.1rem;
    color: ${Theme.secondary.azulBrillante};
    width: 70%;
  }
  &.enviado {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
  }
`;
const Span = styled.span``;
const CajaMensajeEnviado = styled.div`
  width: 100%;
  padding: 10px;
  background-color: red;
  display: flex;
  justify-content: center;
  background-color: ${Theme.complementary.success};
  &.noEnviado {
    background-color: ${Theme.complementary.danger};
  }
`;
