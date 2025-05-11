import React, { useState } from "react";
import Theme from "../config/Theme";
import styled from "styled-components";
import { BotonGeneral } from "./ElementosGenerales";
import ImgVacuna from "./../../public/img/iconos/perro.png";
import ImgUnnia from "./../../public/img/iconos/manicura.png";
import ImgOidos from "./../../public/img/iconos/limpieza-de-oidos.png";
import ImgBannio from "./../../public/img/iconos/banos.png";
import ImgPelo from "./../../public/img/iconos/gato.png";
import ImgParasito from "./../../public/img/iconos/parasito.png";
import BotonQuery from "./BotonQuery";
import { Enlace } from "./GrupoTabla";
import { ServiciosLista } from "../DB/DB";

export default function Servicios() {
  const [hasHover, setHasHover] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const growBox = (e) => {
    const { numero } = e.target.dataset;
    setHasHover(
      hasHover.map((opcion, index) => {
        return index == numero;
      })
    );
  };
  const lessBox = (e) => {
    const { numero } = e.target.dataset;
    setHasHover(
      hasHover.map((opcion, index) => {
        return false;
      })
    );
  };

  function separarTexto(texto, palabraClave) {
    const indiceInicio = texto.indexOf(palabraClave);

    // Si no encuentra la palabra clave, devuelve el texto completo como "antes"
    if (indiceInicio === -1) {
      return {
        antes: texto,
        palabra: "",
        despues: "",
      };
    }

    const indiceFinal = indiceInicio + palabraClave.length;

    const antes = texto.slice(0, indiceInicio);
    const palabra = texto.slice(indiceInicio, indiceFinal);
    const despues = texto.slice(indiceFinal);

    return { antes, palabra, despues };
  }
  const generaLinkWA = (servicio) => {
    const apiWhatsApp =
      "https://api.whatsapp.com/send?phone=+18099732098&text=";
    const textoSaludo =
      "Hola equipo de Sara Pet Shop, me interesa su servicio de ";
    return apiWhatsApp + encodeURIComponent(textoSaludo + servicio) + ".";
  };
  const serviciosParsed = ServiciosLista.map((item) => {
    return {
      ...item,
      palabraClave: {
        antes: separarTexto(item.textoCopy, "mascota").antes,
        despues: separarTexto(item.textoCopy, "mascota").despues,
        palabra: separarTexto(item.textoCopy, "mascota").palabra,
      },
    };
  });

  return (
    <Container>
      {serviciosParsed.map((service, index) => {
        return (
          <Card
            key={index}
            data-numero={index}
            onMouseEnter={(e) => growBox(e)}
            onMouseLeave={(e) => lessBox(e)}
          >
            <CajaIcono>
              <Img src={service.icono} />
            </CajaIcono>
            <CajaTitulo>
              <Titulo>{service.nombre}</Titulo>
            </CajaTitulo>
            <CajaCopy>
              <TextoCopy className={hasHover[index] ? "grande" : ""}>
                {service.palabraClave.antes}
                <b>{service.palabraClave.palabra}</b>
                {service.palabraClave.despues}
              </TextoCopy>
            </CajaCopy>
            <CajaBoton>
              <Enlace2 target="_blank" to={generaLinkWA(service.nombre)}>
                Mas info
              </Enlace2>
            </CajaBoton>
          </Card>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  padding: 0 30px;
  gap: 10px;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex: 1;
  height: 300px;
  border: 1px solid ${Theme.neutral.blancoHueso};
  border-radius: 5px;
  transition: ease box-shadow 0.2s;
  transition: ease all 0.2s;
  box-shadow: ${Theme.config.sombra};
  &:hover {
    cursor: pointer;
    box-shadow: ${Theme.config.sombraAzul1};
    height: 350px;
    /* flex: 1.3; */
    flex: 1 1 calc(((100% - 20px) / 3) * 1.2);
  }
  @media screen and (max-width: 1000px) {
    flex: 1 1 calc((100% - 20px) / 3);
  }
  @media screen and (max-width: 640px) {
    flex: 1 1 calc((100% - 20px) / 2);
  }
  @media screen and (max-width: 460px) {
    flex: 1 1 100%;
  }
`;
const CajaIcono = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding: 5px;
`;
const Img = styled.img`
  height: 100%;
  box-shadow: ${Theme.config.sombra};
  border-radius: 50%;
  padding: 10px;
`;
const CajaTitulo = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${Theme.primary.rojoBrillante};
  background-color: black;
  display: flex;
  justify-content: center;
  color: white;
`;
const Titulo = styled.h2``;
const CajaCopy = styled.div`
  width: 100%;
  height: 40%;
  border-color: ${Theme.secondary.coralCalido};
`;
const TextoCopy = styled.p`
  height: 100%;
  width: 100%;
  padding: 6px;

  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  color: ${Theme.neutral.neutral300};
  &.grande {
    -webkit-line-clamp: initial;
    text-overflow: initial;
  }
`;
const CajaBoton = styled.div``;
const BtnSimple = styled(BotonGeneral)``;
const Enlace2 = styled(Enlace)`
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  border-radius: 5px;
  min-width: 100px;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: ${Theme.primary.rojoBrillante};
  color: white;
  box-shadow: 3px 3px 3px -1px rgba(0, 0, 0, 0.43);
  display: inline-block;
  min-height: 30px;
  &:focus {
    background-color: ${Theme.primary.rojoCalido};
    color: #fff;
  }

  &:hover {
    background-color: #fff;
    color: ${Theme.primary.rojoCalido};
  }
  &:active {
    background-color: ${Theme.secondary.coralCalido};
    color: #fff;
  }
`;
