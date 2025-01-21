import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function Articulo({ imagenes }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CajaImg
      onMouseEnter={() => setIsHovered(true)} // Muestra la imagen secundaria
      onMouseLeave={() => setIsHovered(false)} // Vuelve a la imagen principal
    >
      <StyledImage
        src={imagenes[0].url}
        alt="Producto principal"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      <StyledImage
        src={imagenes[1] ? imagenes[1].url : imagenes[0].url}
        alt="Producto alternativo"
        style={{ opacity: isHovered ? 1 : 0, position: "absolute" }} // Opuesto para la segunda imagen
      />
    </CajaImg>
  );
}

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
  /* opacity: ${(props) => (props.isVisible ? 1 : 0)}; */
`;
