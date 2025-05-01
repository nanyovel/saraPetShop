import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { BotonGeneral, InputGeneral } from "../components/ElementosGenerales";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import CajaNotificacion from "../components/CajaNotificacion";

export default function ResetPassword({ userMaster }) {
  const [correo, setCorreo] = useState("");
  const [hasAlerta, setHasAlerta] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDispatchAlerta(false);
    if (correo == "") {
      setMensajeAlerta("Colocar correo.");
      setTipoAlerta("warning");
      setDispatchAlerta(true);
      return "";
    }
    try {
      await sendPasswordResetEmail(auth, correo);
      setMensajeAlerta("Enlace enviado.");
      setTipoAlerta("success");
      setDispatchAlerta(true);
      setCorreo("");
    } catch (error) {
      console.log(error);

      switch (error.code) {
        case "auth/invalid-email":
          setMensajeAlerta("No existe cuenta registrada con este email.");
          setTipoAlerta("error");
          setDispatchAlerta(true);
          break;

        default:
          setMensajeAlerta("Error con la base de datos.");
          setTipoAlerta("error");
          setDispatchAlerta(true);
          break;
      }
    }
  };
  const handleInputs = (e) => {
    setCorreo(e.target.value);
  };

  // Reiniciar cuando el usuario tiene sesion iniciada
  const reiniciarPass = async () => {
    try {
      await sendPasswordResetEmail(auth, usuario.email);
      setMensajeAlerta("Enlace enviado.");
      setTipoAlerta("success");
      setDispatchAlerta(true);
    } catch (error) {
      console.log(error);
      setMensajeAlerta("Error con la base de datos.");
      setTipoAlerta("error");
      setDispatchAlerta(true);
    }
  };

  // ******************** ENVIANDO A LA BASE DE DATOS******************** //
  const auth = getAuth();
  auth.languageCode = "es";
  const usuario = auth.currentUser;
  return (
    <>
      <Header userMaster={userMaster} />
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>Recuperar contraseña</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      {dispatchAlerta && (
        <CajaNotificacion tipo={tipoAlerta} texto={mensajeAlerta} />
      )}
      {usuario ? (
        <UserIniciado>
          <CajaTexto>
            <CajaInterna>
              <TextoMensaje>
                Si deseas reiniciar tu contraseña, haz click en el siguiente
                botón y se te enviará un enlace a tu correo para restablecer.
              </TextoMensaje>
            </CajaInterna>
          </CajaTexto>
          <BtnSimple onClick={() => reiniciarPass()}>Enviar enlace</BtnSimple>
        </UserIniciado>
      ) : (
        <UserNoIniciado>
          <CajaTextoWeSend>
            <TextoWeSend>
              Enviaremos un enlace a tu correo de reestablecimiento de
              contraseña.
            </TextoWeSend>
          </CajaTextoWeSend>
          <CajaContenido>
            <form onSubmit={(e) => handleSubmit(e)}>
              <WrapInputs>
                <CajaInput>
                  <TituloInput>Correo</TituloInput>
                  <Input
                    value={correo}
                    onChange={(e) => handleInputs(e)}
                    name="correo"
                    placeholder="Email"
                    type="text"
                  />
                </CajaInput>

                {hasAlerta && (
                  <CajaErrorAlEnviar>
                    <Parrafo className="danger">{mensajeAlerta}</Parrafo>
                  </CajaErrorAlEnviar>
                )}

                <CajaInput className="btn">
                  <BtnSimple type="submit" onClick={(e) => handleSubmit(e)}>
                    Enviar enlace
                  </BtnSimple>
                </CajaInput>
              </WrapInputs>
            </form>
            {isLoading && <ModalLoading />}
          </CajaContenido>
        </UserNoIniciado>
      )}
      <Footer />
    </>
  );
}
const UserNoIniciado = styled.div``;
const CajaContenido = styled.div`
  min-height: 200px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
  -moz-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 7px 11px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  @media screen and (max-width: 600px) {
    min-width: 200px;
    width: auto;
  }
`;
const CajaInput = styled.div`
  width: 100%;
  margin-bottom: 8px;
  &.btn {
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  &.links {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

const Enlaces = styled(Link)`
  color: ${Theme.neutral.neutral600};
  display: block;
  position: relative;
  transition: color 25ms;
  border-bottom: 3px solid transparent;
  &:hover {
    color: ${Theme.neutral.neutral300};
    color: black;
    border-bottom: 3px solid;
  }

  text-decoration: none;
`;
const TituloInput = styled.p`
  color: ${Theme.primary.rojoBrillante};
`;
const Input2 = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${Theme.secondary.azulBrillante};
  background-color: ${Theme.secondary.azulMarino};
  input::placeholder {
    color: gray; /* Cambia el color del placeholder */
    opacity: 1; /* Asegura que el color se vea bien en algunos navegadores */
  }
`;
const Input = styled(InputGeneral)``;
const BtnSimple = styled(BotonGeneral)`
  /* height: 40px; */
  width: 200px;
  height: 40px;
  margin: auto;
  margin-bottom: 100px;
`;
const CajaEye = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  /* background-color: red; */
`;

const IconoEye = styled(FontAwesomeIcon)`
  color: inherit;
  cursor: pointer;
`;
const CajaInternaInput = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const CajaErrorAlEnviar = styled.div`
  width: 100%;
`;
const Parrafo = styled.p`
  width: 100%;
  &.danger {
    color: red;
  }
`;
const Titulo = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
`;

const ContainerContenido = styled.div``;
const CajaImgHero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/img/animales/lizard-4763351_1280.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 70px;
  background-position: center;
  position: relative;
`;
const CajaFrosting = styled.div`
  width: 100%;
  height: 100%;
  background-color: #921a1a7e;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
const CajaTextoWeSend = styled.div`
  width: 100%;
`;
const TextoWeSend = styled.h3`
  text-align: center;
  color: ${Theme.primary.rojoBrillante};
  text-decoration: underline;
  margin-bottom: 20px;
`;
const CajaTexto = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  border-radius: 10px 0 10px 0;
`;
const UserIniciado = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CajaInterna = styled.div`
  padding: 10px;
  min-height: 100px;
  margin-bottom: 25px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextoMensaje = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 1.2rem;
`;
