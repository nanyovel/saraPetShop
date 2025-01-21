import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { CategoriasLista, ArticulosLista } from "../DB/DB";

export default function Categorias() {
  return (
    <Container>
      {CategoriasLista.map((cate, index) => {
        return (
          <CajaCategorias key={index}>
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
  height: 200px;
  /* border: 2px solid red; */
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const CajaCategorias = styled.div`
  width: 200px;
  border: 1px solid black;
  box-shadow: ${Theme.config.sombra};
  -moz-box-shadow: ${Theme.config.sombra};
  -webkit-box-shadow: ${Theme.config.sombra};
  overflow: hidden;
  cursor: pointer;
  transition: ease 0.2s all;
  &:hover {
    transform: scale(1.1);
    border-radius: 10px;
    /* -moz-box-shadow: 3px 7px 11px 0px rgba(177, 54, 54, 0.75); */
    /* -webkit-box-shadow: 3px 7px 11px 0px rgba(177, 54, 54, 0.75); */
    box-shadow: ${Theme.config.sombraAzul1};
  }
`;
const CajaImg = styled.div`
  width: 100%;
  height: 150px;
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
