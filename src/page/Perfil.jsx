import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { getAuth, sendEmailVerification, signOut } from "firebase/auth";
import db, { autenticar } from "../firebase/firebaseConfig.js";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

import { ModalLoading } from "../components/ModalLoading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faUserLock,
  faUserPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import {
  BotonGeneral,
  InputGeneral,
  MenuDesplegable,
} from "../components/ElementosGenerales.jsx";
import { useLocation, useNavigate } from "react-router";
import avatarMale from "./../../public/img/maleAvatar.svg";
import Header from "../components/Header.jsx";
import CajaNotificacion from "../components/CajaNotificacion";
import Theme from "../config/Theme.js";
import HeroMedium from "../components/HeroMedium.jsx";
import imgLizar from "./../../public/img/animales/reptil.jpg";
import Footer from "../components/Footer.jsx";

export const Perfil = ({ userMaster }) => {
  useEffect(() => {
    document.title = "Sara Pet Shop - Perfil";
    return () => {
      document.title = "Sara Pet Shop";
    };
  }, []);
  // // ******************** RECURSOS GENERALES ******************** //

  const [dispatchAlerta, setDispatchAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [tipoAlerta, setTipoAlerta] = useState("");

  const navegacion = useNavigate();
  const storage = getStorage();

  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();
  auth.languageCode = "es";
  const usuario = auth.currentUser;
  useEffect(() => {
    if (!usuario) {
      navegacion("/");
    }
  }, [usuario]);

  // ******************** MANEHANDO LOS INPUTS ******************** //
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserEditable((prevEstado) => ({
      ...prevEstado,
      [name]: value,
    }));
  };

  // // ******************** EDITAR ******************** //
  const [modoEditar, setModoEditar] = useState(false);
  const [userEditable, setUserEditable] = useState();
  const editar = () => {
    setModoEditar(true);
    setUserEditable(userMaster ? userMaster : {});
  };

  // **************MANEJANDO FOTO DE PERFIL**************
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };
  const [fileFotoPerfil, setFileFotoPerfil] = useState(null);
  const [urlLocalFotoPerfil, setUrlLocalFotoPerfil] = useState(null);
  const [fotoPerfilInitial, setFotoPerfilInitial] = useState(null);
  useEffect(() => {
    if (userMaster) {
      const auxFotoPerfil = userMaster?.urlFotoPerfil
        ? userMaster?.urlFotoPerfil
        : avatarMale;
      setUrlLocalFotoPerfil(auxFotoPerfil);
      setFotoPerfilInitial(auxFotoPerfil);
    }
  }, [userMaster]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setUrlLocalFotoPerfil(imgUrl);
      setFileFotoPerfil(file);
    }
  };
  // // ******************** GUARDAR CAMBIOS ******************** //
  const guardarCambios = async () => {
    // Cargar foto de perfil
    const nombreFoto = "avatars/fotoPerfil" + userMaster.userName;
    const storageRefFoto = ref(storage, nombreFoto);

    // Esto es lo normal que el userMaster exista
    if (userMaster) {
      console.log(userMaster);
      const usuarioActualizar = doc(db, "usuarios", userMaster.id);
      setIsLoading(true);
      // return
      try {
        // Primero actualiza los valores mas importantes
        await updateDoc(usuarioActualizar, userEditable);
        // Ahora sube la foto de perfil solamente si el usuario la cargo

        if (fileFotoPerfil) {
          await uploadBytes(storageRefFoto, fileFotoPerfil).then(() => {});
          // Ahora entregame la url de la foto de perfil y colocasela en una propiedad del objeto de este usuario en la base de datos
          getDownloadURL(ref(storage, storageRefFoto)).then((url) =>
            updateDoc(usuarioActualizar, {
              urlFotoPerfil: url,
            })
          );
          setIsLoading(false);
        }
        setMensajeAlerta("Usuario actualizado correctamente.");
        setTipoAlerta("success");
        setDispatchAlerta(true);
        setTimeout(() => {
          setDispatchAlerta(false);
        }, 3000);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.error("Error con la base de datos");
        setIsLoading(false);
        setMensajeAlerta("Error con la base de datos.");
        setTipoAlerta("error");
        setDispatchAlerta(true);
        setTimeout(() => {
          setDispatchAlerta(false);
        }, 3000);
      }
    }
    // Esto no deberia ejecutarse pero se debe colocar, dado que al momento de registrar el usuario Caeloss realiza dos peticiones a la base de datos:
    // 1-Crear usuario an Auth
    // 2-Crear el usuario en la base de datos
    //
    // Aunque lo veo dificil es posible que se cumpla la primera y la segunda no, para esos posibles casos tenemos este else if()
    else if (!userMaster) {
      setIsLoading(true);
      try {
        addDoc(collection(db, "usuarios"), userEditable);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setMensajeAlerta("Error con la base de datos");
        setTipoAlerta("error");
        setDispatchAlerta(true);
        setTimeout(() => {
          setDispatchAlerta(false);
        }, 3000);
      }
    }

    setModoEditar(false);
  };

  const cerrarSesion = async () => {
    try {
      await signOut(autenticar);
      window.location.href = "/";
      // navegacion("/");
    } catch (error) {
      console.log(error);
      setMensajeAlerta("Error al cerrar sesion.");
      setTipoAlerta("error");
      setDispatchAlerta(true);
      setTimeout(() => {
        setDispatchAlerta(false);
      }, 3000);
    }
  };

  // useEffect(() => {
  //   console.log(userEditable);
  // }, []);

  const [datosIncompletos, setDatosIncompletos] = useState(false);

  const [departamentoAux, setDepartamentoAux] = useState("");
  const handleInputDepartamento = (e) => {
    // setDepartamentoAux(e.target.value);
    setUserEditable({
      ...userEditable,
      dpto: e.target.value,
    });
  };
  const dptoParsed = [];
  const cancelarEdicion = () => {
    setModoEditar(false);
    setUrlLocalFotoPerfil(fotoPerfilInitial);
    setFileFotoPerfil(null);
  };

  return (
    <>
      <Header userMaster={userMaster} />
      <HeroMedium titulo="Perfil" imgBg={imgLizar} />
      {dispatchAlerta && (
        <CajaNotificacion tipo={tipoAlerta} texto={mensajeAlerta} />
      )}
      <CajaPerfil>
        <CajaUsuario>
          <SeccionFotoPerfil>
            <CajaFotoPerfil>
              <FotoPerfil src={urlLocalFotoPerfil} />
              {modoEditar && (
                <>
                  <CajaIcono>
                    <IconoFoto
                      onClick={clickFromIcon}
                      icon={faCloudArrowUp}
                      title="Cargar foto de perfil"
                    />
                    <Parrafo className="fotoPerfil">Foto de perfil</Parrafo>
                  </CajaIcono>
                  <Input
                    type="file"
                    ref={inputRef}
                    accept="image/*"
                    onChange={handleFile}
                    className="none"
                  />
                </>
              )}
            </CajaFotoPerfil>
          </SeccionFotoPerfil>

          <CajaDatos>
            <div>
              <CajitaDatos
                className={userMaster?.nombre == "" ? "obligatorio" : ""}
              >
                <Texto>Nombre:</Texto>

                {modoEditar ? (
                  <InputEditable
                    type="text"
                    value={userEditable?.nombre}
                    name="nombre"
                    autoComplete="off"
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    placeholder="Indica tu nombre"
                  />
                ) : (
                  <Texto className="detalle">{userMaster?.nombre}</Texto>
                )}
              </CajitaDatos>
              <CajitaDatos
                className={userMaster?.apellido == "" ? "obligatorio" : ""}
              >
                <Texto>Apellido:</Texto>
                {modoEditar ? (
                  <InputEditable
                    type="text"
                    value={userEditable?.apellido}
                    name="apellido"
                    autoComplete="off"
                    onChange={(e) => {
                      handleInput(e);
                    }}
                    placeholder="Indica tu apellido"
                  />
                ) : (
                  <Texto className="detalle">{userMaster?.apellido}</Texto>
                )}
              </CajitaDatos>

              <CajitaDatos>
                <Texto>Username:</Texto>
                <Texto className="detalle">
                  {auth.currentUser?.email
                    ? auth.currentUser.email.split("@")[0]
                    : ""}
                </Texto>
              </CajitaDatos>
              <CajitaDatos>
                <Texto>Correo:</Texto>
                <Texto className="detalle">
                  {auth.currentUser?.email ? auth.currentUser.email : ""}
                </Texto>
              </CajitaDatos>
            </div>
            <CajaBtn>
              {modoEditar ? (
                <>
                  <BtnSimple onClick={() => guardarCambios()}>
                    <Icono icon={faFloppyDisk} />
                    Guardar
                  </BtnSimple>
                  <BtnSimple
                    className="cancelar"
                    onClick={() => cancelarEdicion()}
                  >
                    <Icono icon={faXmark} />
                    Cancelar
                  </BtnSimple>
                </>
              ) : (
                <>
                  <BtnSimple onClick={() => cerrarSesion()}>
                    <Icono icon={faUserLock} />
                    Cerrar sesion
                  </BtnSimple>
                  <BtnSimple onClick={() => navegacion("/recuperar")}>
                    Reiniciar contraseña
                  </BtnSimple>

                  <BtnSimple onClick={() => editar()}>
                    <Icono icon={faUserPen} />
                    Editar
                  </BtnSimple>
                </>
              )}
            </CajaBtn>
          </CajaDatos>
        </CajaUsuario>
      </CajaPerfil>

      <Footer />

      {isLoading ? <ModalLoading completa={true} /> : ""}
    </>
  );
};

const CajaPerfil = styled.div`
  padding: 15px;
  /* border: 1px solid red; */
`;
const CajaAviso = styled.div`
  padding: 15px;
`;
const CajaUsuario = styled.div`
  border: black;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;

  width: 50%;
  margin: auto;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  margin-bottom: 70px;
  color: red;
`;

const CajaDatos = styled.div``;

const CajitaDatos = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  height: 30px;
  @media screen and (max-width: 330px) {
    height: 40px;
    /* font-size: 14px; */
  }
  &.obligatorio {
    border-bottom: 1px solid red;
  }
`;

const Texto = styled.h2`
  font-size: 1rem;
  height: 20px;

  width: auto;
  &.detalle {
    text-align: end;
    font-weight: normal;
    @media screen and (max-width: 360px) {
      font-size: 14px;
    }
  }
  &.fotoPerfil {
  }
  &.file {
    height: auto;
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

const InputEditable = styled(InputGeneral)`
  width: 50%;
  &.obligatorio {
    border: none;
    border-bottom: 2px solid #92434b;
  }
`;

const CajaBtn = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
`;
const BtnSimple = styled(BotonGeneral)`
  width: auto;
  padding: 5px;
  &.cancelar {
    background-color: red;
    &:hover {
      color: red;
      background-color: white;
    }
  }
`;

const Icono = styled(FontAwesomeIcon)`
  margin-right: 7px;
`;

const SeccionFotoPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;
const CajaFotoPerfil = styled.div`
  position: relative;
`;
const FotoPerfil = styled.img`
  border-radius: 50%;
  border: 4px solid blue;
  height: 200px;
  width: 200px;
  object-fit: contain;
`;
const CajaIcono = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Parrafo = styled.p`
  width: 100%;
  &.danger {
    color: red;
  }
  &.fotoPerfil {
    color: white;
    background-color: black;
    padding: 8px;
    /* padding: 1px; */
    text-decoration: underline;
  }
`;
const Input = styled(InputGeneral)`
  height: 30px;
  outline: none;
  background-color: transparent;
  color: red;
  padding: 10px;
  width: 100%;
  &.none {
    display: none;
    background-color: red;
  }

  &.fijado {
    color: black;
  }
  @media screen and (max-width: 360px) {
    width: 90%;
  }
`;
const IconoFoto = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border: 1px solid red;
  padding: 4px;
  cursor: pointer;
  transition: ease all 0.2s;
  &:hover {
    border-radius: 4px;
    color: red;
  }
`;
const MenuDesp = styled(MenuDesplegable)`
  width: 50%;
`;
