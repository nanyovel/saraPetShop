import React from "react";
import styled, { keyframes } from "styled-components";
import Theme from "../../config/Theme";

export default function CarrucelMarcas({ invertido }) {
  const logos = [
    "https://static.miscota.com/media/1/brands/new/acana.png",
    "https://static.miscota.com/media/1/brands/new/grature.png",
    "https://static.miscota.com/media/1/brands/new/hantu.png",
    "https://static.miscota.com/media/1/brands/new/orijen.png",
    "https://static.miscota.com/media/1/brands/new/pro-plan.png",
    "https://static.miscota.com/media/1/brands/new/royal-canin.png",
    "https://static.miscota.com/media/1/brands/new/taste-of-the-wild.png",
    "https://static.miscota.com/media/1/brands/new/traveness.png",
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  return (
    <Container>
      <LogoTrack $invertido={invertido}>
        {duplicatedLogos.map((logo, index) => (
          <Logo key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </Logo>
        ))}
      </LogoTrack>
    </Container>
  );
}
const Container = styled.div`
  /* overflow: hidden; */
  width: 100%;
  background-color: ${Theme.neutral.blancoHueso};
  display: flex;
  align-items: center;
  height: 150px;
`;

const scroll = (invertido) => keyframes`
  0% {
    transform: translateX(0);
    /* transform: translateX(${invertido ? "0%" : "0"});; */
  }
  100% {
    /* transform: translateX(-100%); */
    transform: translateX(${invertido ? "100%" : "-100%"});
  }
`;
const LogoTrack = styled.div`
  display: flex;
  right: ${(props) => (props.$invertido ? "0" : "auto")};
  position: absolute;
  width: calc(200%);
  flex-direction: ${(props) => (props.$invertido ? "row-reverse" : "row")};
  animation: ${(props) => scroll(props.$invertido)} 25s linear infinite;
`;
// Cada logo
const Logo = styled.div`
  flex: 0 0 auto;
  width: 150px; /* Ajusta el tamaño del logo */
  height: 100px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
