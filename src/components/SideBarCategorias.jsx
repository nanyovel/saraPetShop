import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { CategoriasLista, subCategorias } from "../DB/DB";
import { Enlace } from "./GrupoTabla";

export default function SideBarCategorias() {
  const CategoriasParsed = CategoriasLista.map((cat, index) => {
    return {
      ...cat,
    };
  });
  return (
    <Container>
      <CajaInterna>
        <Titulo>Categorias</Titulo>
        <Lista>
          {CategoriasParsed.map((cat, index) => {
            return (
              <Elemento key={index}>
                <Enlace2 to={"/categorias/" + cat.key}>{cat.nombre}</Enlace2>
              </Elemento>
            );
          })}
        </Lista>
      </CajaInterna>
      <CajaInterna>
        <Titulo>Sub categorias</Titulo>
        <Lista>
          {subCategorias.map((cat, index) => {
            return (
              <Elemento key={index}>
                <Enlace2 to={"/subCategorias/" + cat.key}>{cat.nombre}</Enlace2>
              </Elemento>
            );
          })}
        </Lista>
      </CajaInterna>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid ${Theme.neutral.neutral600};
  padding: 18px;
`;
const CajaInterna = styled.div``;
const Titulo = styled.h2`
  color: ${Theme.secondary.azulMarino};
  text-decoration: underline;
  font-weight: 400;
  margin-bottom: 6px;
`;
const Lista = styled.ul`
  padding-left: 35px;
`;
const Elemento = styled.li`
  margin-bottom: 4px;
  font-size: 1.2rem;
  color: ${Theme.primary.rojoCalido};
`;
const Enlace2 = styled(Enlace)``;
