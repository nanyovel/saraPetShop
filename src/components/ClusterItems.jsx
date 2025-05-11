import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import FotoItem from "./FotoItem";
import { BotonGeneral, InputGeneral } from "./ElementosGenerales";
import { ArticulosLista } from "../DB/DB";
import UnArticulo from "./UnArticulo";
import { Enlace } from "./GrupoTabla";
import BotonQuery from "./BotonQuery";
import { soloNumeros } from "../libs/StringParsed";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { ModalLoading } from "./ModalLoading";

export default function ClusterItems({
  datos,
  userMaster,
  dbArticulos,
  noEditable,
}) {
  const [mensajeAlerta, setMensajeAlerta] = useState("");
  const [hasAlerta, setHasAlerta] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const tipo = "ofertas";

  const [itemParsed, setItemParsed] = useState([]);
  useEffect(() => {
    let itemsAux = ArticulosLista.map((item) => {
      return {
        ...item,
        hover: false,
      };
    });
    if (tipo == "ofertas") {
      itemsAux = itemsAux.filter((item, index) => {
        if (index < 5) {
          return item;
        }
      });
    }
    if (tipo == "masVendidos") {
      itemsAux = itemsAux.filter((item, index) => {
        if (index > 2) {
          return item;
        }
      });
    }

    setItemParsed(itemsAux);
  }, [ArticulosLista]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [datosEditable, setDatosEditable] = useState({});
  const editar = () => {
    if (noEditable) {
      return;
    }
    setModoEdicion(true);
    setDatosEditable({ ...datos });
  };
  const cancelarEdicion = () => {
    setModoEdicion(false);
    setDatosEditable({});
  };

  const handleInput = (e) => {
    if (noEditable) {
      return;
    }
    const { value, name } = e.target;
    setDatosEditable((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const quitarItem = (e) => {
    const { name, value } = e.target;
    const codigoDataset = e.target.dataset.codigo;
    setDatosEditable((prevState) => ({
      ...prevState,
      listaProductos: prevState.listaProductos.filter(
        (item, index) => item.codigo != codigoDataset
      ),
      codigoItems: prevState.codigoItems.filter(
        (item, index) => item != codigoDataset
      ),
    }));
  };

  const [valueAdd, setValueAdd] = useState("");
  const addItem = () => {
    if (noEditable) {
      return;
    }
    if (valueAdd == "") {
      setHasAlerta(true);
      setMensajeAlerta("Escribe el codigo a añadir.");
      return;
    }
    if (soloNumeros(valueAdd)) {
      const codigo = Number(valueAdd);
      const itemFind = dbArticulos.find((item) => item.codigo === codigo);
      const hasItemFind = datosEditable.listaProductos.find(
        (item) => item.codigo === codigo
      );
      if (hasItemFind) {
        setHasAlerta(true);
        setMensajeAlerta("Este items ya esta agregado.");
        return;
      }
      if (itemFind && !hasItemFind) {
        setDatosEditable((prevState) => ({
          ...prevState,
          listaProductos: [...prevState.listaProductos, itemFind],
          codigoItems: [...prevState.codigoItems, itemFind.codigo],
        }));
        setValueAdd("");
        setHasAlerta(false);
        setMensajeAlerta("");
        return;
      } else {
      }
    } else {
      setHasAlerta(true);
      setMensajeAlerta("Formato de codigo incorrecto.");
      return;
    }
  };

  const guardarCambios = async () => {
    if (noEditable) {
      return;
    }
    const clusterRef = doc(db, "grupoDeArticulos", datos.id);

    try {
      setIsLoading(true);

      await updateDoc(clusterRef, {
        codigoItems: datosEditable.codigoItems,
        enlaceBtn: datosEditable.enlaceBtn,
        subTitulo: datosEditable.subTitulo,
        titulo: datosEditable.titulo,
      });
      setModoEdicion(false);
      setDatosEditable({});
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setHasAlerta(true);
      setMensajeAlerta("Error con la base de datos.");
      setIsLoading(false);
      return;
    }
  };
  return (
    <Container>
      <BotonQuery datosEditable={datosEditable} />
      {modoEdicion ? (
        <Input
          name="titulo"
          className="titulo"
          onChange={(e) => handleInput(e)}
          value={datosEditable.titulo}
        />
      ) : (
        <TituloSeccion>{datos.titulo}</TituloSeccion>
      )}
      <WrapBarraProductos>
        <CajaBarraNegraSeccion className="top">
          {modoEdicion ? (
            <Input
              name="subTitulo"
              className="subTitulo"
              onChange={(e) => handleInput(e)}
              value={datosEditable.subTitulo}
            />
          ) : (
            <TituloBarra>{datos.subTitulo}</TituloBarra>
          )}
        </CajaBarraNegraSeccion>
        {hasAlerta && (
          <CajaAlerta>
            <TextoAlerta>{mensajeAlerta}</TextoAlerta>
          </CajaAlerta>
        )}
        {userMaster && !noEditable
          ? userMaster.permisos.includes("accessDashboard") && (
              <CajaControles>
                {modoEdicion ? (
                  <>
                    <BtnSimple onClick={() => cancelarEdicion()}>
                      {" "}
                      ✖️ Cancelar
                    </BtnSimple>
                    <BtnSimple onClick={guardarCambios}>💾 Guardar</BtnSimple>
                    <CajaInputAddItem>
                      <Input
                        value={valueAdd}
                        onChange={(e) => setValueAdd(e.target.value)}
                      />
                      <BtnSimple onClick={addItem}>➕ Add</BtnSimple>
                    </CajaInputAddItem>
                  </>
                ) : (
                  <BtnSimple onClick={() => editar()}>🖋️Editar</BtnSimple>
                )}
              </CajaControles>
            )
          : null}

        <ContainerItem>
          {modoEdicion
            ? datosEditable.listaProductos.map((item, index) => {
                return (
                  <WrapItem key={index}>
                    <UnArticulo index={index} item={item} />
                    <Xquitar
                      data-codigo={item.codigo}
                      onClick={(e) => quitarItem(e)}
                    >
                      ❌
                    </Xquitar>
                  </WrapItem>
                );
              })
            : datos?.listaProductos?.map((item, index) => {
                return (
                  <WrapItem key={index}>
                    <UnArticulo index={index} item={item} />
                  </WrapItem>
                );
              })}
        </ContainerItem>
        {datos.enlaceBtn && (
          <CajaVerMas>
            <BtnMasItems to={datos.enlaceBtn}>
              Ver todos →
              {/* <Icono className="marginLeft" icon={faArrowRight} /> */}
            </BtnMasItems>
          </CajaVerMas>
        )}
        {modoEdicion && (
          <CajaInputVerMas>
            <TituloVerMas>Link para el boton ver mas:</TituloVerMas>
            <Input
              name="enlaceBtn"
              placeholder="Link para el boton ver mas"
              onChange={(e) => handleInput(e)}
              value={datosEditable.enlaceBtn}
            />
          </CajaInputVerMas>
        )}
        <CajaBarraNegraSeccion className="bottom"></CajaBarraNegraSeccion>
      </WrapBarraProductos>
      {isLoading && <ModalLoading completa={true} />}
    </Container>
  );
}
const BtnMasItems = styled(Enlace)`
  font-size: 1rem;
  color: white;
  border-radius: 150px;
  width: 120px;
  text-align: center;
  vertical-align: center;
  align-content: center;
  height: 40px;
  background-color: black;
  margin-right: 10px;
  &.registrate {
    padding-left: 15px;
    &:hover {
      cursor: auto;
      text-decoration: none;
    }
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const Container = styled.div``;
const TituloSeccion = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
  &.white {
    color: white;
    text-align: center;
  }
`;

const WrapBarraProductos = styled.div`
  border-top: 5px solid ${Theme.primary.rojoBrillante};
  border-bottom: 5px solid ${Theme.primary.rojoBrillante};
  margin-bottom: 100px;
  background-color: ${Theme.neutral.blancoHueso};
`;
const CajaBarraNegraSeccion = styled.div`
  width: 100%;
  background-color: black;
  min-height: 50px;
  color: ${Theme.primary.rojoBrillante};
  padding: 8px;
  &.top {
    margin-bottom: 50px;
  }
  &.bottom {
    margin-top: 50px;
    display: flex;
    justify-content: end;
  }
`;
const TituloBarra = styled.h2`
  font-size: 1.8rem;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
const CajaVerMas = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: end;
  margin-top: 20px;
`;
const ContainerItem = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 0 40px;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid ${Theme.neutral.neutral600};
`;
const CajaControles = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const BtnSimple = styled(BotonGeneral)``;
const Input = styled(InputGeneral)`
  &.titulo {
    width: 100%;
    border-bottom: 2px solid black;
    height: 3rem;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  &.subTitulo {
    width: 100%;
    border-bottom: 2px solid black;
    font-size: 2rem;
    height: 100%;
  }
`;
const WrapItem = styled.div`
  height: 430px;
  height: 98%;
  width: 180px;
  position: relative;
`;
const Xquitar = styled.p`
  position: absolute;
  top: 0;
  font-size: 2rem;
  border: 1px solid ${Theme.neutral.neutral600};
  border-radius: 4px;
  background-color: ${Theme.neutral.neutral300};
  transition: ease all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
`;

const CajaInputAddItem = styled.div`
  /* width: 250px; */
  background-color: #a3b0bb;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const CajaAlerta = styled.div`
  width: 100%;
  background-color: ${Theme.primary.rojoCalido};
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextoAlerta = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: white;
`;
const CajaInputVerMas = styled.div``;
const TituloVerMas = styled.h3`
  margin-top: 10px;
  text-decoration: underline;
`;
