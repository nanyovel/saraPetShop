import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TituloPage from "../components/TituloPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { BotonGeneral, InputGeneral } from "../components/ElementosGenerales";

export default function ResetPassword() {
  const handleSubmit = () => {};
  const handleInputs = () => {};
  const [datos, setDatos] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [hasAlerta, setHasAlerta] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />

      <CajaContenido>
        <TituloPage titulo="Reestablecer contraseña" />
        <Subtitulo>
          Enviaremos un enlace a tu correo de reestablecimiento de contraseña.
        </Subtitulo>
        <form onSubmit={(e) => handleSubmit(e)}>
          <WrapInputs>
            <CajaInput>
              <TituloInput>Correo electronico</TituloInput>
              <Input
                value={datos.correo}
                onChange={(e) => handleInputs(e)}
                name="correo"
                placeholder="Correo electronico"
                type="text"
              />
            </CajaInput>

            {hasAlerta && (
              <CajaErrorAlEnviar>
                <Parrafo className="danger">{mensajeAlerta}</Parrafo>
              </CajaErrorAlEnviar>
            )}

            <CajaInput className="btn">
              <BtnSimple type="submit" onClick={() => handleSubmit()}>
                Enviar enlace
              </BtnSimple>
            </CajaInput>
          </WrapInputs>
        </form>
        {isLoading && <ModalLoading />}
      </CajaContenido>
      <Footer />
    </>
  );
}
const Subtitulo = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  color: ${Theme.primary.azulProfundo};
  text-decoration: underline;
`;

const CajaContenido = styled.div`
  min-height: 200px;
`;

const WrapInputs = styled.div`
  min-width: 400px;
  min-height: 200px;
  width: 400px;
  margin: auto;
  /* border: 1px solid ${Theme.secondary.azulBrillante}; */
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
    color: ${Theme.neutral.neutral500};
    border-bottom: 3px solid;
  }

  text-decoration: none;
`;
const TituloInput = styled.p`
  color: ${Theme.neutral.neutral650};
`;
const Input2 = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  outline: none;
  padding: 10px;
  color: ${Theme.secondary.azulBrillante};
  background-color: ${Theme.complementary.terracotaSuave};
  input::placeholder {
    color: gray; /* Cambia el color del placeholder */
    opacity: 1; /* Asegura que el color se vea bien en algunos navegadores */
  }
`;
const Input = styled(InputGeneral)``;
const BtnSimple = styled(BotonGeneral)`
  /* height: 40px; */
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
  color: ${Theme.primary.mostazaDorado};
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
