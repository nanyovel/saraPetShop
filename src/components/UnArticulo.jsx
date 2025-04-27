import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import FotoItem from "./FotoItem";
import { BotonGeneral } from "./ElementosGenerales";
import { useNavigate } from "react-router";
import { Enlace } from "./GrupoTabla";
export default function UnArticulo({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Enlace2 to={"/articulos/" + item.codigo}>
      <CajaItems>
        <CajaImg
          onMouseEnter={() => setIsHovered(true)} // Muestra la imagen secundaria
          onMouseLeave={() => setIsHovered(false)} // Vuelve a la imagen principal
        >
          <StyledImage
            src={item.fotos[0]?.urlFoto}
            alt="Producto principal"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          <StyledImage
            src={item.fotos[1] ? item.fotos[1].urlFoto : item.fotos[0]?.urlFoto}
            alt="Producto alternativo"
            style={{ opacity: isHovered ? 1 : 0, position: "absolute" }} // Opuesto para la segunda imagen
          />
        </CajaImg>
      </CajaItems>
      <CajaDetalles>
        <CajitaDetalles>
          {/* <MontoPrecio className="tachado">{`RD$ ${item.precio}`}</MontoPrecio> */}
          <MontoPrecio>{`Codigo: ${item.codigo}`}</MontoPrecio>
          {/* <MontoPrecio>{`RD$ ${(item.precio * 0.8).toFixed(1)}`}</MontoPrecio> */}
          <MontoPrecio>{`RD$ ${item.precio}`}</MontoPrecio>
        </CajitaDetalles>
        <CajitaDetalles>
          <Titulo className="titulo" title={item.descripcion}>
            {item.descripcion}
          </Titulo>
        </CajitaDetalles>
        <CajitaDetalles>
          <Titulo className="parrafo">{item.descripcionDetallada}</Titulo>
        </CajitaDetalles>
        <CajitaDetalles>
          <BtnSimple onClick={() => navigate("/articulos/" + item.codigo)}>
            Comprar
          </BtnSimple>
        </CajitaDetalles>
      </CajaDetalles>
    </Enlace2>
  );
}
const Enlace2 = styled(Enlace)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  border: 1px solid ${Theme.neutral.neutral600};
  box-shadow: ${Theme.config.sombra};
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
  /* text-overflow: ellipsis; */

  /* white-space: nowrap; */
  /* overflow: hidden; */
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
  &.titulo {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Limitar a 2 líneas */
    overflow: hidden;
    text-overflow: ellipsis; /* Agregar puntos suspensivos (...) */
  }
`;
const BtnSimple = styled(BotonGeneral)``;
const CajaImg = styled.div`
  width: 99%;
  height: 100%;
  position: relative;
  /* transition: all 0.3s ease; */
  &:hover img {
    /* transform: scale(1.1); Efecto de zoom */
    opacity: 0.8; /* Cambia la opacidad */
  }
`;

// Imagen con estilos de transición y opacidad
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
  object-fit: cover;
  /* opacity: ${(props) => (props.isVisible ? 1 : 0)}; */
`;
