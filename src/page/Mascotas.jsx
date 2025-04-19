import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgPets from "./../../public/img/animales/pets.jpg";
import SeccionVenta from "../components/SeccionVenta";

export default function Mascotas({ userMaster }) {
  return (
    <>
      <Header userMaster={userMaster} />
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>Mascotas</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      <Seccion className="padding">
        <SeccionVenta titulo={"Perros"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Gatos"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Peces"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Aves"} />
      </Seccion>
      <Seccion className="padding">
        <SeccionVenta titulo={"Reptiles"} />
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
  background-image: url("/img/animales/pets.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 70px;
  background-position: center;
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
`;

const Seccion = styled.div`
  &.padding {
    padding-left: ${Theme.config.paddingLateral};
    padding-right: ${Theme.config.paddingLateral};
  }
`;
