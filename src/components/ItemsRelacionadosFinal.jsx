import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";
import { NavLink } from "react-router";
import CardCajaFinal from "./CardCajaFinal";
import { useAuth } from "../../context/AuthContext";
import { fetchFindAnyContains } from "../../libs/FetchFirebase";

export default function CajaFinal({ relacionados }) {
  return (
    <Container>
      <Titulo>Articulos relacionados</Titulo>

      <CajaCard>
        {relacionados.map((post, index) => {
          return <CardCajaFinal key={index} blog={post} />;
        })}
      </CajaCard>
    </Container>
  );
}
const Container = styled.div`
  box-shadow: ${theme.config.sombra};
  margin-bottom: 100px;
`;
const Enlace = styled(NavLink)`
  text-decoration: none;
`;
const Titulo = styled.h2`
  color: ${theme.secondary.coral};
  font-size: 2.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;
const CajaCard = styled.div`
  width: 100%;
  min-height: 400px;
  /* background-color: red; */
  padding: 10px;
  display: flex;
  gap: 25px;
  @media screen and (max-width: 1200px) {
    gap: 10px;
    flex-wrap: wrap;
    min-height: 200px;
  }
  @media screen and (max-width: 1100px) {
    gap: 10px;
  }
`;
