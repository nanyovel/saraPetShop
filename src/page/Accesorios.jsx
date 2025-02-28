import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgPets from "./../../public/img/animales/pets.jpg";
import SeccionVenta from "../components/SeccionVenta";

export default function Accesorios() {
  return (
    <>
      <Header />
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>Accesorios</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      <Seccion className="padding">
        <SeccionVenta titulo={"Accesorios para perros"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Accesorios para Gatos"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Accesorios para Peces"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Accesorios para Aves"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Accesorios para Reptiles"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Otros"} />
      </Seccion>
      <Footer />
    </>
  );
}

const ContainerContenido = styled.div``;
const CajaImgHero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("/img/animales/accesorios.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 70px;
  background-position: center;
  position: relative;
`;
const CajaFrosting = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7f00007b;
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
`;

const Seccion = styled.div`
  &.padding {
    padding-left: ${Theme.config.paddingLateral};
    padding-right: ${Theme.config.paddingLateral};
  }
`;
