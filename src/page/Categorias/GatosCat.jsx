import styled from "styled-components";
import Theme from "../../config/Theme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImgGatos from "./../../../public/img/animales/cuteCat.jpg";
import HeroMedium from "../../components/HeroMedium";

import React, { useEffect, useState } from "react";
import ClusterItems from "../../components/ClusterItems";
import SideBarCategorias from "../../components/SideBarCategorias";

export default function GatosCat({
  userMaster,
  dbArticulos,
  grupoCluster,
  idGruposItems,
}) {
  const [grupoItems1, setGrupoItems1] = useState([]);
  const [grupoItems2, setGrupoItems2] = useState([]);
  const [grupoItems3, setGrupoItems3] = useState([]);
  const [grupoItems4, setGrupoItems4] = useState([]);

  const [datosParsed, setDatosParsed] = useState(false);
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
      <HeroMedium imgBg={ImgGatos} titulo={"Gatos"} />
      <WrapMaster>
        <CajaSideBar>
          <SideBarCategorias />
        </CajaSideBar>
        <WrapSecciones>
          <Seccion>
            {datosParsed && grupoItems1?.id && (
              <ClusterItems
                datos={grupoItems1}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion>
            {datosParsed && grupoItems2?.id && (
              <ClusterItems
                datos={grupoItems2}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion>
            {datosParsed && grupoItems3?.id && (
              <ClusterItems
                datos={grupoItems3}
                userMaster={userMaster}
                dbArticulos={dbArticulos}
              />
            )}
          </Seccion>
          <Seccion>
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
`;
const CajaSideBar = styled.div`
  width: calc(20% - 20px);
  /* border: 1px solid red; */
`;
const WrapSecciones = styled.div`
  /* border: 1px solid blue; */
  width: calc(80% - 20px);
  min-height: 200px;
`;
