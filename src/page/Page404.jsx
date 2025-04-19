import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgError from "./../../public/img/error404.png";
import styled from "styled-components";
import Theme from "../config/Theme";

export default function Page404({ userMaster }) {
  return (
    <>
      <Header userMaster={userMaster} />
      <Titulo>Pagina no encontrada</Titulo>
      <ContenedorImg>
        <Img src={ImgError} />
      </ContenedorImg>
      <Footer />
    </>
  );
}

const Titulo = styled.h2`
  margin: 25px auto;
  width: 600px;
  text-align: center;
  font-size: 2rem;
  color: ${Theme.secondary.coralCalido};
  text-decoration: underline;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const ContenedorImg = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;
  /* background-color: ${Theme.secondary.azulTenue}; */
`;

const Img = styled.img`
  width: 40%;
  margin: auto;
`;
