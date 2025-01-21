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
  return (
    <Container>
      <Card
        data-numero={0}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgVacuna} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Vacunacion</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[0] ? "grande" : ""}>
            ¡Protege la salud de tu <b>mascota</b>! Nuestras vacunas aprobadas
            aseguran que tu compañero peludo esté protegido contra enfermedades
            comunes. Ofrecemos un ambiente seguro y profesional para que cada
            visita sea tranquila y efectiva. ¡Agenda tu cita hoy!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
      <Card
        data-numero={1}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgUnnia} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Corte de uñas</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[1] ? "grande" : ""}>
            Mantén las patas de tu <b>mascota</b> saludables con nuestro
            servicio de corte de uñas. Unas uñas bien cortadas no solo son
            estéticamente agradables, sino que también previenen molestias y
            lesiones. ¡Ven y deja que nuestros expertos cuiden de tu peludo!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
      <Card
        data-numero={2}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgOidos} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Limpieza oidos</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[2] ? "grande" : ""}>
            La salud auditiva es esencial para tu <b>mascota</b>. Nuestro
            servicio de limpieza de oídos elimina la cera y la suciedad,
            ayudando a prevenir infecciones. Expertos en cuidado de{" "}
            <b>mascota</b> a tu servicio. ¡Agenda tu cita para una limpieza
            segura y efectiva!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
      <Card
        data-numero={3}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgBannio} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Baños</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[3] ? "grande" : ""}>
            ¡Porque tu mascota también merece un spa! Ofrecemos baños
            reparadores que dejan a tu peludo limpio, fresco y feliz. Utilizamos
            productos de calidad, ideales para su tipo de piel y pelaje. ¡Haz
            que cada baño sea un placer!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
      <Card
        data-numero={4}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgPelo} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Peluqueria</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[4] ? "grande" : ""}>
            Dale a tu <b>mascota</b> un nuevo look con nuestro servicio de corte
            de pelo. Nuestros estilistas experimentados brindan cortes que se
            adaptan a la raza y estilo de vida de tu amigo. ¡Salud y estética en
            un solo lugar!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
      <Card
        data-numero={5}
        onMouseEnter={(e) => growBox(e)}
        onMouseLeave={(e) => lessBox(e)}
      >
        <CajaIcono>
          <Img src={ImgParasito} />
        </CajaIcono>
        <CajaTitulo>
          <Titulo>Desparasitacion</Titulo>
        </CajaTitulo>
        <CajaCopy>
          <TextoCopy className={hasHover[5] ? "grande" : ""}>
            Mantén a raya a los indeseables con nuestro servicio de
            desparacitación. Protegemos la salud de tu <b>mascota</b> de
            parásitos internos y externos con tratamientos seguros y efectivos.
            ¡Haz que tu amigo esté libre de parásitos y feliz!
          </TextoCopy>
        </CajaCopy>
        <CajaBoton>
          <BtnSimple>Mas info</BtnSimple>
        </CajaBoton>
      </Card>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  padding: 0 30px;
  gap: 10px;
`;
const Card = styled.div`
  width: 20%;
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
    width: 28%;
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
