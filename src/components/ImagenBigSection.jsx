import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgPerro from "./../../public/img/animales/perro4.jpg";
import BarraMensaje from "./BarraMensaje";

export default function ImagenBigSection() {
  return (
    <Container>
      <CajaBarra>
        <BarraMensaje
          texto={" Todo para tu mascotas, menos excusas para no consentirlas."}
        />
      </CajaBarra>
      <CajaImg>{/* <Img src={ImgPerro} /> */}</CajaImg>
      <CajaBarra>
        <BarraMensaje
          texto={
            "¡Tenemos tanto para tu mascota que incluso nosotros queremos ser mascotas!"
          }
        />
      </CajaBarra>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  /* border: 1px solid red; */
`;
const CajaBarra = styled.div``;
const Texto = styled.h2`
  width: 100%;
  text-align: center;
  background-color: #000;
  color: ${Theme.primary.rojoBrillante};
  font-size: 3rem;
`;
const CajaImg = styled.div`
  width: 100%;
  height: auto;
  height: 80vh;
  margin-bottom: -4px;
  background-image: url("./../../public/img/animales/perro4.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Img = styled.img`
  width: 100%;
  margin: 0%;
  height: 90vh;
  top: 0;
  position: fixed;
`;
