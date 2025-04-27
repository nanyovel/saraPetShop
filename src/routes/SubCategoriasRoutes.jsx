import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Mascotas from "../page/SubCategorias/Mascotas";
import Accesorios from "../page/SubCategorias/Accesorios";
import Alimentos from "../page/SubCategorias/Alimentos";

export default function SubCategoriasRoutes({
  userMaster,
  dbArticulos,
  grupoCluster,
}) {
  const idGruposItemsMascotas = [
    "KGsqZ3Is76oxMwamnSKP",
    "OMSGQrLsXcXhePrYSdwc",
    "KOJIGyK6NTmgFwiKeRai",
    "r9zdDK0QwzbIIKvX3V9C",
  ];
  const idGruposItemsAccesorios = [
    "gBHklkDlNMgQ6rZZgjtW",
    "pLUBOb5o2N07NkD54SNi",
    "3AN8Dz9pp3wxlljgW0E4",
    "83Oh247lxtTrUWONjSwI",
  ];
  const idGruposItemsAlimentos = [
    "pNwoQ5M8cRmRSKNlcS6h",
    "T82EFmgwXpOQoGAM8xCW",
    "QdEMMeei4tSUnJXEkW2R",
    "turDHROd2pvQ66TUkm4O",
  ];

  return (
    <>
      <Routes>
        <Route
          path="/mascotas"
          element={
            <Mascotas
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsMascotas}
            />
          }
        />
        <Route
          path="/accesorios"
          element={
            <Accesorios
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsAccesorios}
            />
          }
        />
        <Route
          path="/alimentos"
          element={
            <Alimentos
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsAlimentos}
            />
          }
        />
      </Routes>
    </>
  );
}
const Titulo = styled.h1``;
