import React from "react";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PerrosCat from "../page/Categorias/PerrosCat";
import GatosCat from "../page/Categorias/GatosCat";
import PecesCat from "../page/Categorias/PecesCat";
import Aves from "../page/Categorias/Aves";
import Reptil from "../page/Categorias/Reptil";
import Otros from "../page/Categorias/Otros";

export default function CategoriasRoutes({
  userMaster,
  dbArticulos,
  grupoCluster,
}) {
  const idGruposItemsAvex = [
    "49Ey0A1q97A9LPAgAA1Q",
    "V11UAig9UFGBdaz7OGi5",
    "SQ8IgZiRjnWlZ3bXNibg",
    "05qVlbof61RNjRpSGnmq",
  ];
  const idGruposItemsGatos = [
    "noFEmW6N0ZkTLCS0gSnv",
    "wDdpX6u7xx9Kr19LGAFO",
    "Is65hFr5ZufzzxXq9a5s",
    "ifpxi1rfYh2pKdojNU7U",
  ];
  const idGruposItemsPerros = [
    "Ze3ekNH054pjOfV7jYB3",
    "1h37EOwOnDNY3pEMeFDV",
    "mCrZQnvhsIfsIo3YEmUK",
    "INUmpzrX0z4dpId7SPeH",
  ];
  const idGruposItemsPeces = [
    "xPo98FgsD0OlmlN5SEHk",
    "dMFA3WSfMfu9Vam7njKy",
    "mXvKm8OQ1uwjC3bY23YF",
    "PyId4sZhRgmC1eFFgXw6",
  ];
  const idGruposItemsReptil = [
    "FPvg4l66NpMwJkAr9OFE",
    "As4EQNnEnKVjg9flZmOe",
    "orQp4G3KHgjL6CkYY3qj",
    "KFgAYHC08TBYs8u0sSay",
  ];
  const idGruposItemsOtros = [
    "TeJ04MBlnsnCMlsGmKOF",
    "hQNMjFAgDLPRR4zwYoJU",
    "8AvnoadoVi0IZud6Iul1",
    "cb3MqAE8MbnvSaZ9Ss1q",
  ];

  return (
    <>
      <Routes>
        <Route
          path="/perros"
          element={
            <PerrosCat
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsPerros}
            />
          }
        />
        <Route
          path="/gatos"
          element={
            <GatosCat
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsGatos}
            />
          }
        />
        <Route
          path="/peces"
          element={
            <PecesCat
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsPeces}
            />
          }
        />
        <Route
          path="/aves"
          element={
            <Aves
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsAvex}
            />
          }
        />
        <Route
          path="/reptiles"
          element={
            <Reptil
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsReptil}
            />
          }
        />
        <Route
          path="/otros"
          element={
            <Otros
              userMaster={userMaster}
              dbArticulos={dbArticulos}
              grupoCluster={grupoCluster}
              idGruposItems={idGruposItemsOtros}
            />
          }
        />
      </Routes>
    </>
  );
}
const Titulo = styled.h1``;
