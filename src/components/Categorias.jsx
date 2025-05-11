import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { CategoriasLista, ArticulosLista } from "../DB/DB";
import { Link } from "react-router";

export default function Categorias() {
  return (
    <Container>
      {CategoriasLista.map((cate, index) => {
        return (
          <CajaCategorias to={cate.link} key={index}>
            <CajaImg>
              <Img src={cate.urlPortada} />
            </CajaImg>
            <CajaTitulo>
              <Titulo>{cate.nombre}</Titulo>
            </CajaTitulo>
          </CajaCategorias>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: auto;
  /* border: 2px solid red; */
  display: flex;
  gap: 20px;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    gap: 15px;
  }
  @media screen and (max-width: 1000px) {
    gap: 10px;
  }
  @media screen and (max-width: 900px) {
    gap: 5px;
  }
  @media screen and (max-width: 850px) {
    gap: 15px;
    flex-wrap: wrap;
  }
`;
const CajaCategorias = styled(Link)`
  width: calc(100% / 6 - 20px);
  border: 1px solid black;
  box-shadow: ${Theme.config.sombra};
  -moz-box-shadow: ${Theme.config.sombra};
  -webkit-box-shadow: ${Theme.config.sombra};
  overflow: hidden;
  cursor: pointer;
  transition: ease 0.2s all;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    border-radius: 10px;
    /* -moz-box-shadow: 3px 7px 11px 0px rgba(177, 54, 54, 0.75); */
    /* -webkit-box-shadow: 3px 7px 11px 0px rgba(177, 54, 54, 0.75); */
    box-shadow: ${Theme.config.sombraAzul1};
  }
  @media screen and (max-width: 1200px) {
    width: calc(100% / 6 - 15px);
  }
  @media screen and (max-width: 1000px) {
    width: calc(100% / 6 - 10px);
  }
  @media screen and (max-width: 900px) {
    width: calc(100% / 6 - 5px);
  }
  @media screen and (max-width: 850px) {
    width: calc(100% / 3 - 15px);
  }
  @media screen and (max-width: 630px) {
    width: calc(100% / 2 - 15px);
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
const CajaImg = styled.div`
  width: 100%;
  height: 150px;
  @media screen and (max-width: 430px) {
    height: 200px;
    width: 100%;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const CajaTitulo = styled.div``;
const Titulo = styled.h2`
  width: 100%;
  text-align: center;
  color: ${Theme.primary.rojoCalido};
  &:hover {
    text-decoration: underline;
  }
`;
const Enlace = styled(Link)``;
