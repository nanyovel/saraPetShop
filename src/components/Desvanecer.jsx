import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Img1 from "./../../public/img/fondo/koi5.jpg";
import Img2 from "./../../public/img/fondo/koi7.jpg";
import Img3 from "./../../public/img/fondo/koi8.jpg";
import Img4 from "./../../public/img/fondo/koi10.jpg";
import Img5 from "./../../public/img/fondo/koi11.jpg";
// import Img6 from "./../../public/img/fondo/goldenPerro.jpg";
import Img7 from "./../../public/img/fondo/shitzuPerro.jpg";
import { BotonGeneral } from "./ElementosGenerales";

export default function Desvanecer() {
  const items = [
    {
      titulo: "Sara Pet Shop",
      subTitulo:
        "¡Dale a tu mejor amigo un refugio cómodo y seguro! 🐶💚 Encuentra la caja perfecta para su descanso feliz.",
      rutaImg: Img7,
    },
    {
      titulo: "Sara Pet Shop",
      subTitulo: "La estrella aqui es tu mascota.",
      rutaImg: Img2,
    },
    {
      titulo: "Sara Pet Shop",
      subTitulo: "Perros, Gatos, Aves, Peces, Roedores y mas...",
      rutaImg: Img3,
    },
    {
      titulo: "Sara Pet Shop",
      subTitulo: "Alimentos, juguetes y mas...",
      rutaImg: Img4,
    },
    {
      titulo: "Sara Pet Shop",
      subTitulo:
        "Vacunas, deparasitacion, tratamientos medicos, corte de pelo, limpieza de oidos, corte de uñas y mas...",
      rutaImg: Img5,
    },
  ];
  const [imagenes, setImagenes] = useState([...items]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [claseColocar, setClaseColocar] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      // setHasFrosting(false);
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [imagenes]);

  // Frostin  inicial
  useEffect(() => {
    setTimeout(() => {
      setClaseColocar("colocar");
    }, 1000);
  }, [activeIndex]);

  return (
    <Container>
      {imagenes.map((foto, index) => (
        <React.Fragment key={index}>
          <Imagen
            key={index}
            src={foto.rutaImg}
            alt={`Hero image ${index + 1}`}
            $isActive={index === activeIndex}
          />

          <Frosting
            className={index === activeIndex ? claseColocar : ""}
          ></Frosting>

          <CajaTexto $isActive={index === activeIndex}>
            <WrapLogoNombre>
              <Titulo1>Sara PetShop</Titulo1>
            </WrapLogoNombre>
            <WrapSubtitulo>
              <SubTitulo>{foto.subTitulo}</SubTitulo>
            </WrapSubtitulo>
            <CajaBtn>
              <BtnSimple>Mas info.</BtnSimple>
            </CajaBtn>
          </CajaTexto>
        </React.Fragment>
      ))}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const Imagen = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  width: 100%;
  height: 100%;
  transition: opacity 1.5s ease-in-out;
  object-fit: cover;
`;

// Cristal opaco
const Frosting = styled.div`
  width: 55%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  position: absolute;
  left: -400px;
  /* background-color: #3498db; */
  clip-path: polygon(0% 0%, 30% 0%, 100% 100%, 0% 100%);
  transition: all 1s ease;
  &.colocar {
    opacity: 0.7;
    left: -50px;
  }
`;

const CajaTexto = styled.div`
  width: 400px;
  min-height: 100px;
  /* background-color: blue; */
  position: absolute;
  top: ${(props) => (props.$isActive ? "400px" : "250px")};
  left: 80px;
  bottom: 100px;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: all 1.5s ease;
  /* transition: top 1.4s ease; */
  background-color: #000000b0;
  border-radius: 5px;
  box-shadow: ${Theme.config.sombra};
  z-index: 100;
`;
const WrapLogoNombre = styled.div`
  width: 100%;
  display: flex;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: center;
  /* gap: 15px; */
  flex-direction: column;
`;

const Titulo1 = styled.h1`
  font-size: 4rem;
  /* font-weight: 200; */
  color: white;
`;
const WrapSubtitulo = styled.div`
  width: 100%;
  min-height: 50px;
`;
const SubTitulo = styled.h2`
  /* background-color: black; */
  width: 100%;
  text-align: center;
  color: white;
  font-weight: 400;
`;
const CajaBtn = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
`;
const BtnSimple = styled(BotonGeneral)`
  z-index: 10000;
`;
