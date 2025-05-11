import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function CardStats({ qty, img, titulo }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // Duración en milisegundos
    const increment = qty / (duration / 16); // Aumento por frame (asumiendo 60fps)

    const interval = setInterval(() => {
      start += increment;
      if (start >= qty) {
        start = qty;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16); // Aproximadamente 60fps

    return () => clearInterval(interval);
  }, [qty]);
  return (
    <Card>
      <Img src={img} />
      <QtyCreciente>{count}</QtyCreciente>
      <Titulo>{titulo}</Titulo>
    </Card>
  );
}

const Card = styled.div`
  flex: 1 1 calc(33.33% - 15px);
  height: 70%;
  /* box-shadow: ${Theme.config.sombra}; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Media query para pantallas móviles */
  @media (max-width: 768px) {
    height: auto;
    border-bottom: 1px solid black;
    margin-bottom: 15px;
    flex: 1 1 100%; /* En móviles, ocupa el 100% del ancho */
  }
`;
const Img = styled.img`
  width: 40%;

  box-shadow: ${Theme.config.sombra};
  border-radius: 50%;
  padding: 10px;
  @media screen and (max-width: 720px) {
    width: 30%;
  }
`;
const QtyCreciente = styled.h2`
  font-size: 2.4rem;
  color: #fff;
  color: ${Theme.primary.rojoBrillante};
`;
const Titulo = styled.h2`
  color: ${Theme.secondary.azulBrillante};
  font-size: 1.4rem;
  width: 100%;
  text-align: center;
`;
