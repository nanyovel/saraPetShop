import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { BotonGeneral, InputGeneral } from "../components/ElementosGenerales";

export default function Registrarse() {
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
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>Registrate</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      <CajaContenido>
        <form onSubmit={(e) => handleSubmit(e)}>
          <WrapInputs>
            <CajaInput>
              <TituloInput>Nombre</TituloInput>
              <Input
                value={datos.correo}
                onChange={(e) => handleInputs(e)}
                name="correo"
                placeholder="Nombre"
                type="text"
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Apellido</TituloInput>
              <Input
                value={datos.correo}
                onChange={(e) => handleInputs(e)}
                name="correo"
                placeholder="Apellido"
                type="text"
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Correo</TituloInput>
              <Input
                value={datos.correo}
                onChange={(e) => handleInputs(e)}
                name="correo"
                placeholder="Email"
                type="text"
              />
            </CajaInput>
            <CajaInput>
              <TituloInput>Contraseña</TituloInput>
              <CajaInternaInput>
                <Input
                  value={datos.password}
                  onChange={(e) => handleInputs(e)}
                  name="password"
                  placeholder="Contraseña"
                  type={showPassword ? "text" : "password"}
                />
                <CajaEye>
                  <IconoEye
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </CajaEye>
              </CajaInternaInput>
            </CajaInput>
            <CajaInput>
              <TituloInput>Repetir Contraseña</TituloInput>
              <CajaInternaInput>
                <Input
                  value={datos.password}
                  onChange={(e) => handleInputs(e)}
                  name="password"
                  placeholder="Repetir Contraseña"
                  type={showPassword ? "text" : "password"}
                />
                <CajaEye>
                  <IconoEye
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </CajaEye>
              </CajaInternaInput>
            </CajaInput>
            {hasAlerta && (
              <CajaErrorAlEnviar>
                <Parrafo className="danger">{mensajeAlerta}</Parrafo>
              </CajaErrorAlEnviar>
            )}

            <CajaInput className="btn">
              <BtnSimple type="submit" onClick={() => handleSubmit()}>
                Registrarse
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
  background-image: url("/img/animales/rabbits-2174679_1280.jpg");
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
