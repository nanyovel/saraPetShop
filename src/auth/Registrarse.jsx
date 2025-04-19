import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router";
import { BotonGeneral, InputGeneral } from "../components/ElementosGenerales";
import BotonQuery from "../components/BotonQuery";
import { UserSchema } from "../schema/userSchema";
import db, { autenticar, storage } from "../firebase/firebaseConfig";
import { ES6AFormat } from "../libs/FechaFormat";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ModalLoading } from "../components/ModalLoading";

export default function Registrarse({ userMaster }) {
  const navigate = useNavigate();
  const auth = getAuth();
  auth.languageCode = "es";
  const usuario = auth.currentUser;
  useEffect(() => {
    if (usuario) {
      navigate("/");
    }
  }, [usuario]);
  // ******************** NEW CODE ************
  // ************** MANEJANDO CORTE DE IMAGENES FOTO DE PERFIL **************
  // ************** datos del Paquete react easy crop **************
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };
  const [fileFotoPerfil, setFileFotoPerfil] = useState(null);
  const [urlLocalFotoPerfil, setUrlLocalFotoPerfil] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setUrlLocalFotoPerfil(imgUrl);
      setFileFotoPerfil(file);
    }
  };

  const initialDatosUser = {
    ...UserSchema,
    password: "",
    repetirPassword: "",
  };
  const [datosUser, setDatosUser] = useState({
    ...initialDatosUser,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [hasAlerta, setHasAlerta] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setDatosUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    // Todos los campos llenos
    // Formato de correo
    // Password iguales
    // Password seguras

    // Si existen campos vacios
    let fallo = false;
    const camposObligatorios = [
      "nombre",
      "apellido",
      "correo",
      "password",
      "repetirPassword",
    ];
    camposObligatorios.forEach((campo, index) => {
      if (datosUser[campo] == "") {
        fallo = true;
      }
    });
    if (fallo) {
      setMensajeAlerta("Por favor, complete todos los campos.");
      setHasAlerta(true);
      setIsLoading(false);
      return;
    }
    // Si el correo no es valido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datosUser.correo)) {
      setMensajeAlerta("Por favor, ingrese un correo electrónico válido.");
      setHasAlerta(true);
      setIsLoading(false);
      return;
    }
    // Si las contraseñas no son iguales
    if (datosUser.password != datosUser.repetirPassword) {
      setMensajeAlerta("Contraseñas distintas.");
      setHasAlerta(true);
      return "";
    }

    // Validacion de complejidad de contraseña:
    //  1- Al menos 8 caracteres.
    //  2- Contiene al menos una letra mayúscula.
    //  3- Contiene al menos una letra minúscula.
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regex.test(datosUser.password) == false) {
      setMensajeAlerta(
        "La contraseña debe contener al menos 8 caracteres, una letra mayuscula y una letra minuscula."
      );
      setHasAlerta(true);
      return "";
    }

    try {
      setIsLoading(true);
      setHasAlerta(false);
      setMensajeAlerta("");
      await createUserWithEmailAndPassword(
        autenticar,
        datosUser.correo,
        datosUser.password
      );
      // Guardar el usuario en la base de datos
      const { password, repetirPassword, ...datosSinPassword } = datosUser;
      const user = autenticar.currentUser;
      const newUserEnviar = {
        ...UserSchema,
        ...datosSinPassword,
        createdAt: ES6AFormat(new Date()),
        correo: user.email,
        userName: user.email.split("@")[0],
      };

      await setDoc(doc(db, "usuarios", user.uid), newUserEnviar);

      try {
        console.log("Antes de cargar la foto de perfil");
        setTimeout(() => {
          setIsLoading(false);
          setDatosUser({ ...initialDatosUser });
        }, 1000);
        const nombreFoto = "avatars/fotoPerfil" + newUserEnviar.userName;

        const storageRefFoto = ref(storage, nombreFoto);
        const usuarioActualizar = doc(db, "usuarios", user.uid);
        if (fileFotoPerfil) {
          await uploadBytes(storageRefFoto, fileFotoPerfil).then(() => {}); // Ahora entregame la url de la foto de perfil y colocasela en una propiedad del objeto de este usuario en la base de datos
          getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
            updateDoc(usuarioActualizar, {
              urlFotoPerfil: url,
            })
          );
        }
        console.log("Foto de perfil superada");
        navigate("/");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setMensajeAlerta("Error con la db al cargar foto de perfil.");
        setHasAlerta(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setMensajeAlerta("Error al registrarse, intente nuevamente.");
      setHasAlerta(true);
      setIsLoading(false);

      switch (error.code) {
        case "auth/email-already-in-use":
          setMensajeAlerta("Ya existe una cuenta con este email.");
          setHasAlerta(true);
          break;
        case "auth/weak-password":
          setMensajeAlerta("La contraseña debe tener mas de 6 caracteres.");
          setHasAlerta(true);
          break;
        case "auth/invalid-email":
          setMensajeAlerta("Correo no valido");
          setHasAlerta(true);
          break;
        default:
          setMensajeAlerta("Error con la base de datos");
          setHasAlerta(true);
          break;
      }
    }
  };

  return (
    <>
      <Header userMaster={userMaster} />
      <BotonQuery datosUser={datosUser} />
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>Registrate</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      <CajaContenido>
        <WrapInputs>
          {hasAlerta && <CajaError>{mensajeAlerta}</CajaError>}
          <SeccionFotoPerfil>
            <CajaFotoPerfil>
              <FotoPerfil src={urlLocalFotoPerfil} />
              <CajaIcono>
                <Icono
                  onClick={clickFromIcon}
                  icon={faCloudArrowUp}
                  title="Cargar foto de perfil"
                />
                <Parrafo2 className="fotoPerfil">Foto de perfil</Parrafo2>
              </CajaIcono>
              <Input
                type="file"
                ref={inputRef}
                autoComplete="off"
                accept="image/*"
                onChange={handleFile}
                className="none"
              />
            </CajaFotoPerfil>
          </SeccionFotoPerfil>
          <CajaInput>
            <TituloInput>Nombre</TituloInput>
            <Input
              value={datosUser.nombre}
              onChange={(e) => handleInputs(e)}
              name="nombre"
              placeholder="Nombre"
              type="text"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Apellido</TituloInput>
            <Input
              value={datosUser.apellido}
              onChange={(e) => handleInputs(e)}
              name="apellido"
              placeholder="Apellido"
              type="text"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Correo</TituloInput>
            <Input
              value={datosUser.correo}
              onChange={(e) => handleInputs(e)}
              name="correo"
              placeholder="Email"
              type="text"
              autoComplete="off"
            />
          </CajaInput>
          <CajaInput>
            <TituloInput>Contraseña</TituloInput>
            <CajaInternaInput>
              <Input
                value={datosUser.password}
                onChange={(e) => handleInputs(e)}
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
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
                value={datosUser.repetirPassword}
                onChange={(e) => handleInputs(e)}
                name="repetirPassword"
                placeholder="Repetir Contraseña"
                autoComplete="off"
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
        {isLoading && <ModalLoading completa={true} />}
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
const Input = styled(InputGeneral)`
  &.none {
    display: none;
  }
`;
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

const SeccionFotoPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  border-radius: 1px solid red;
`;
const CajaFotoPerfil = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const FotoPerfil = styled.img`
  border-radius: 50%;
  border: 4px solid ${Theme.secondary.coralCalido};
  height: 150px;
  width: 150px;
  object-fit: contain;
`;
const CajaIcono = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Parrafo2 = styled.p`
  &.fotoPerfil {
    color: ${Theme.primary.rojoBrillante};
    background-color: ${Theme.neutral.neutral600};
    /* padding: 1px; */
    text-decoration: underline;
  }
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border: 1px solid ${Theme.primary.azulSuave};
  padding: 4px;
  cursor: pointer;
  transition: ease all 0.2s;
  background-color: ${Theme.secondary.coralCalido};
  &:hover {
    border-radius: 4px;
    color: ${Theme.primary.azulBrillante};
  }
`;
const CajaError = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  background-color: ${Theme.primary.rojoBrillante};
  color: white;
`;
