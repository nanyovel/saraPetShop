import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ImgTrompeteo from "./../../../public/img/iconos/stats/trompeteo.png";
import ImgMarca from "./../../../public/img/iconos/stats/marca.png";
import ImgAlimento from "./../../../public/img/iconos/stats/alimento.png";
import CardStats from "../../components/CardStats";
import Theme from "../../config/Theme";

export default function Stats() {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Se activa cuando al menos el 50% del elemento es visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <Container ref={elementRef}>
      <CajaImg />
      <CajaFrosting>
        {isVisible && (
          <>
            <CardStats qty={8} titulo="Años en el mercado" img={ImgTrompeteo} />
            <CardStats qty={12} titulo="Marcas" img={ImgMarca} />
            <CardStats
              qty={47}
              titulo="Productos disponibles"
              img={ImgAlimento}
            />
          </>
        )}
      </CajaFrosting>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${Theme.primary.mostazaDorado};
  width: 100%;
  min-height: 100px;
  position: relative;
`;
const CajaImg = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url("/img/quirofano4.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const CajaFrosting = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #d5a14196;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 250px;
  height: 70%;
  border: 1px solid ${Theme.primary.azulProfundo};
  box-shadow: ${Theme.config.sombra};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`
  width: 40%;
`;
const QtyCreciente = styled.h2`
  font-size: 2.4rem;
  color: #22427a;
  color: #fff;
`;
const Titulo = styled.h2`
  color: ${Theme.primary.azulProfundo};
  font-size: 1.4rem;
`;
