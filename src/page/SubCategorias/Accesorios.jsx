import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImgPets from "./../../../public/img/animales/accesorios.jpg";
import HeroMedium from "../../components/HeroMedium";
import SideBarCategorias from "../../components/SideBarCategorias";
import ClusterItems from "../../components/ClusterItems";

export default function Accesorios({
  userMaster,
  dbArticulos,
  grupoCluster,
  idGruposItems,
}) {
  const [datosParsed, setDatosParsed] = useState(false);

  const [grupoItems1, setGrupoItems1] = useState([]);
  const [grupoItems2, setGrupoItems2] = useState([]);
  const [grupoItems3, setGrupoItems3] = useState([]);
  const [grupoItems4, setGrupoItems4] = useState([]);

  useEffect(() => {
    if (dbArticulos.length > 0 && grupoCluster.length > 0) {
      // Buscando los cluster deseado
      const grupo1Find = grupoCluster.find(
        (item) => item.id == idGruposItems[0]
      );
      const grupo2Find = grupoCluster.find(
        (item) => item.id == idGruposItems[1]
      );
      const grupo3Find = grupoCluster.find(
        (item) => item.id == idGruposItems[2]
      );
      const grupo4Find = grupoCluster.find(
        (item) => item.id == idGruposItems[3]
      );

      // Buscando los articulos en la coleccion de items, segun el array de articulos del cluster
      const articuloGrupo1 = dbArticulos.filter((item) =>
        grupo1Find.codigoItems.includes(item.codigo)
      );
      const articuloGrupo2 = dbArticulos.filter((item) =>
        grupo2Find.codigoItems.includes(item.codigo)
      );
      const articuloGrupo3 = dbArticulos.filter((item) =>
        grupo3Find.codigoItems.includes(item.codigo)
      );
      const articuloGrupo4 = dbArticulos.filter((item) =>
        grupo4Find.codigoItems.includes(item.codigo)
      );

      // Asignando los datos en cada esado
      setGrupoItems1({
        ...grupo1Find,
        listaProductos: articuloGrupo1.sort((a, b) => a.codigo - b.codigo),
      });
      setGrupoItems2({
        ...grupo2Find,
        listaProductos: articuloGrupo2.sort((a, b) => a.codigo - b.codigo),
      });
      setGrupoItems3({
        ...grupo3Find,
        listaProductos: articuloGrupo3.sort((a, b) => a.codigo - b.codigo),
      });
      setGrupoItems4({
        ...grupo4Find,
        listaProductos: articuloGrupo4.sort((a, b) => a.codigo - b.codigo),
      });
    }
    setDatosParsed(true);
  }, [dbArticulos, grupoCluster]);

  return (
    <>
      <Header userMaster={userMaster} />
      <HeroMedium imgBg={ImgPets} titulo={"Accesorios"} />

      <WrapMaster>
        <CajaSideBar>
          <SideBarCategorias />
        </CajaSideBar>
        <WrapSecciones>
          <Seccion className="">
            {datosParsed && grupoItems1?.id && (
              <ClusterItems
                datos={grupoItems1}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion className="">
            {datosParsed && grupoItems2?.id && (
              <ClusterItems
                datos={grupoItems2}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion className="">
            {datosParsed && grupoItems3?.id && (
              <ClusterItems
                datos={grupoItems3}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion className="">
            {datosParsed && grupoItems4?.id && (
              <ClusterItems
                datos={grupoItems4}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
        </WrapSecciones>
      </WrapMaster>
      <Footer />
    </>
  );
}

const Seccion = styled.div``;
const WrapMaster = styled.div`
  display: flex;
  padding: 0 70px;
  gap: 20px;
  @media screen and (max-width: 1150px) {
    padding: 0 30px;
    /* background-color: red; */
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column-reverse;
    align-items: center;
    /* background-color: red; */
  }
`;
const CajaSideBar = styled.div`
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
const WrapSecciones = styled.div`
  width: calc(80% - 20px);
  min-height: 200px;
  @media screen and (max-width: 1050px) {
    width: 100%;
  }
`;
