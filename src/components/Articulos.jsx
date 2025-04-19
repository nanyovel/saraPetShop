import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import { ArticulosLista, CategoriasLista } from "../DB/DB";
import Articulo from "./Articulo";
import { BotonGeneral } from "./ElementosGenerales";

export default function Articulos({ tipo }) {
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

  return (
    <Container>
      {itemParsed.map((item, index) => {
        return (
          <Wrap key={index}>
            <CajaItems key={index}>
              <Articulo imagenes={item.fotos} />
            </CajaItems>
            <CajaDetalles>
              <CajitaDetalles>
                <MontoPrecio className="tachado">{`RD$ ${item.precio}`}</MontoPrecio>
                <MontoPrecio>{`RD$ ${(item.precio * 0.8).toFixed(
                  1
                )}`}</MontoPrecio>
              </CajitaDetalles>
              <CajitaDetalles>
                <Titulo title={item.nombre}>{item.nombre}</Titulo>
              </CajitaDetalles>
              <CajitaDetalles>
                <Titulo className="parrafo">{item.textoCopy}</Titulo>
              </CajitaDetalles>
              <CajitaDetalles>
                <BtnSimple>Comprar</BtnSimple>
              </CajitaDetalles>
            </CajaDetalles>
          </Wrap>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const Wrap = styled.div`
  width: 300px;
  width: 180px;
  border: 1px solid ${Theme.neutral.neutral600};
  box-shadow: ${Theme.config.sombra};
`;
const CajaItems = styled.div`
  width: 180px;
  height: 200px;

  cursor: pointer;
`;
const CajaDetalles = styled.div`
  width: 100%;
  /* height: 70px; */
  padding-bottom: 10px;
  background-color: ${Theme.neutral.arenaSand};
  text-align: center;
  color: ${Theme.neutral.neutral600};
`;
const CajitaDetalles = styled.div``;
const MontoPrecio = styled.h2`
  font-weight: 400;
  font-size: 1.1rem;
  &.tachado {
    text-decoration: line-through;
  }
`;
const Titulo = styled.p`
  font-weight: bold;
  text-overflow: ellipsis;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  &.parrafo {
    font-size: 0.9rem;
    /* width: 280px; */
    font-weight: normal;
    text-overflow: ellipsis;

    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número de líneas */
    -webkit-box-orient: vertical;
  }
`;
const BtnSimple = styled(BotonGeneral)``;
