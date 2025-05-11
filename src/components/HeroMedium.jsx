import React from "react";
import styled from "styled-components";

export default function HeroMedium({ titulo, imgBg }) {
  return (
    <ContainerContenido>
      {/* <CajaImgHero $imgFondo="/img/animales/cat-468232_640.jpg"> */}
      <CajaImgHero $imgFondo={imgBg}>
        <CajaFrosting>
          <Titulo>{titulo}</Titulo>
        </CajaFrosting>
      </CajaImgHero>
    </ContainerContenido>
  );
}
const ContainerContenido = styled.div``;
const CajaImgHero = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${(props) => (props.$imgFondo ? props.$imgFondo : "")});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 70px;
  background-position: 50% 30%;
  position: relative;
`;
const CajaFrosting = styled.div`
  width: 100%;
  height: 100%;
  background-color: #921a1a7e;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;
const Titulo = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 5rem;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;
