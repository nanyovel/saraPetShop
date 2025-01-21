import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import ImgKoi from "../../public/img/animales/koi2.png";
import ImgPerroFrances from "../../public/img/animales/perroFrances.png";
import ImgTurtle1 from "../../public/img/animales/turtle1.jpg";
import ImgPerro1 from "../../public/img/animales/perro1.jpg";
import ImgCat1 from "../../public/img/animales/cat1.png";
import ImgBird1 from "../../public/img/animales/bird1.png";
import { BotonGeneral } from "./ElementosGenerales";

export default function Escaparate() {
  const items = [
    {
      titulo: "Kois Asiaticos",
      subTitulo: "RD$ 100",
      rutaImg: ImgKoi,
    },
    {
      titulo: "Perros Frances",
      subTitulo: "RD$2000",
      rutaImg: ImgPerroFrances,
    },
    {
      titulo: "Tortugas bebes",
      subTitulo: "RD$500",
      rutaImg: ImgTurtle1,
    },
    {
      titulo: "Perros Peluches",
      subTitulo: "RD$1000",
      rutaImg: ImgPerro1,
    },
    {
      titulo: "Gatos Frances",
      subTitulo: "RD$800",
      rutaImg: ImgCat1,
    },
    {
      titulo: "Aves exoticas",
      subTitulo: "RD$600",
      rutaImg: ImgBird1,
    },
  ];

  const [claseCajaIzq, setClaseCajaIzq] = useState("");
  const [claseCajaDer, setClaseCajaDer] = useState("");
  const [listaItems, setListaItems] = useState({
    titulo: items[0].titulo,
    subTitulo: items[0].subTitulo,
    rutaImg: items[0].rutaImg,
  });
  const mover = (move) => {
    setClaseCajaIzq(move ? "arriba" : "");
    setClaseCajaDer(move ? "abajo" : "");
  };

  useEffect(() => {
    let numeroAux = 0;
    setInterval(() => {
      mover(true);
      setTimeout(() => {
        if (numeroAux + 1 == items.length) {
          numeroAux = 0;
        } else {
          numeroAux = numeroAux + 1;
        }

        setListaItems({
          titulo: items[numeroAux].titulo,
          subTitulo: items[numeroAux].subTitulo,
          rutaImg: items[numeroAux].rutaImg,
        });
        mover(false);
      }, 500);
    }, 7000);
  }, []);
  return (
    <Container>
      {/* {items.map((item) => { */}
      {/* return ( */}
      <>
        <CajaInterna
          onClick={() => mover()}
          className={`
                izq 
                ${claseCajaIzq}
                `}
        >
          <WrapTitulo>
            <TituloItem>{listaItems.titulo}</TituloItem>
          </WrapTitulo>
          <WrapSubtitulo>
            {/* <Circulo /> */}
            <Subtitulo>{listaItems.subTitulo}</Subtitulo>
            <BtnSimple>Mas info</BtnSimple>
          </WrapSubtitulo>
        </CajaInterna>
        <CajaInterna
          className={`
                der 
                ${claseCajaDer}
                `}
        >
          <Img src={listaItems.rutaImg} />
        </CajaInterna>
      </>
      {/* ); */}
      {/* })} */}
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CajaInterna = styled.div`
  /* width: 600px; */
  min-width: 450px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease all 1s;
  &.izq {
    flex-direction: column;
  }
  &.der {
    width: 400px;
    height: 400px;
    flex-direction: column;
  }
  &.arriba {
    transform: translate(0, -50vh);
    opacity: 0;
  }
  &.abajo {
    transform: translate(0, 50vh);
    opacity: 0;
  }
`;
const Img = styled.img`
  width: 400px;
  /* transform: translate(0, -50%); */
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  /* bottom: 0; */
  border-radius: 5px;
  -moz-box-shadow: ${Theme.config.sombra};
  -webkit-box-shadow: ${Theme.config.sombra};
  box-shadow: ${Theme.config.sombra};
`;
const TituloItem = styled.h2`
  text-align: center;
  font-size: 3.7rem;
  color: ${Theme.secondary.azulBrillante};
  /* font-weight: 400; */
`;
const WrapTitulo = styled.div`
  /* background-color: ${Theme.primary.rojoTenue}; */
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const WrapSubtitulo = styled.div`
  background-color: black;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  -moz-box-shadow: ${Theme.config.sombra};
  -webkit-box-shadow: ${Theme.config.sombra};
  box-shadow: ${Theme.config.sombra};
`;
const Circulo = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
const Subtitulo = styled.h3`
  text-align: center;
  font-size: 2.7rem;
  color: ${Theme.primary.rojoBrillante};
`;
const BtnSimple = styled(BotonGeneral)``;
