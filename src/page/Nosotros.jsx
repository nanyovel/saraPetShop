import React from "react";
import styled from "styled-components";
import Theme from "../config/Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgPets from "./../../public/img/animales/puppy-4732766_1280.jpg";
import ImgPets2 from "./../../public/img/animales/puppy-4608266_640.jpg";
import ImgPets3 from "./../../public/img/animales/dog-3061800_640.jpg";
import SeccionVenta from "../components/SeccionVenta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export default function Nosotros() {
  return (
    <>
      <Header />
      <ContainerContenido>
        <CajaImgHero>
          <CajaFrosting>
            <Titulo>¿Quienes somos?</Titulo>
          </CajaFrosting>
        </CajaImgHero>
      </ContainerContenido>
      <Seccion>
        <WrapInternal>
          <CajaInternal className="izq">
            <WrapContact>
              <Cajita>
                <SubTitulo>Sobre Sara Pet Shop:</SubTitulo>
                <Parrafo>
                  En <b>Sara Pet Shop</b>, llevamos 10 años ofreciendo alimentos
                  y productos de la más alta calidad, siempre pensando en el
                  bienestar de tu mejor amigo. Somos un espacio amigable con las
                  mascotas, donde cada producto es seleccionado con amor y
                  cuidado para garantizar su felicidad y salud. Nos apasiona
                  brindar un servicio excepcional porque sabemos que tu mascota
                  es parte de tu familia.
                </Parrafo>
                <Parrafo>
                  Además de ofrecer los mejores productos para <b>tu mascota</b>
                  , contamos con un servicio integral de cuidado que incluye
                  vacunación, desparasitación, corte de uñas, limpieza de oídos,
                  baños y peluquería. Nuestro equipo de profesionales se encarga
                  de cada detalle con dedicación y cariño, asegurando que tu
                  mascota reciba la atención que merece en un ambiente cómodo y
                  seguro.
                </Parrafo>
              </Cajita>
            </WrapContact>
          </CajaInternal>

          <CajaInternal>
            <Img src={ImgPets} />
          </CajaInternal>
        </WrapInternal>
      </Seccion>
      <Seccion>
        <WrapInternal className="reverse">
          <CajaInternal className="izq">
            <WrapContact>
              <Cajita>
                <SubTitulo>Historia:</SubTitulo>
                <Parrafo>
                  Nuestra tienda de mascotas nació en 2014 con el sueño de una
                  joven pareja apasionada por los animales, quienes vieron la
                  necesidad de ofrecer productos y servicios de calidad para el
                  bienestar de las mascotas en Santo Domingo.
                </Parrafo>
                <Parrafo>
                  Con el compromiso de brindar amor y cuidado a cada peludo,
                  iniciaron esta aventura con la misión de ser un lugar
                  confiable para los dueños que buscan lo mejor para sus
                  compañeros de vida. Desde entonces, hemos crecido junto a
                  nuestra comunidad, manteniendo siempre el mismo espíritu de
                  dedicación y cariño que nos vio nacer.
                </Parrafo>
                <br />
              </Cajita>
            </WrapContact>
          </CajaInternal>

          <CajaInternal>
            <Img src={ImgPets2} />
          </CajaInternal>
        </WrapInternal>
      </Seccion>
      <Seccion>
        <WrapInternal>
          <CajaInternal className="izq">
            <WrapContact>
              <Cajita>
                <SubTitulo>Mision:</SubTitulo>
                <Parrafo>
                  Brindar a las mascotas de Santo Domingo productos y servicios
                  de alta calidad, garantizando su bienestar, salud y felicidad.
                  Nos comprometemos a ofrecer un trato cercano y amoroso,
                  asegurando que cada mascota reciba el cuidado que merece.
                </Parrafo>
              </Cajita>
            </WrapContact>
            <WrapContact>
              <Cajita>
                <SubTitulo>Vision:</SubTitulo>
                <Parrafo>
                  Ser la tienda de mascotas líder en Santo Domingo, reconocida
                  por nuestra excelencia en productos, servicios y atención.
                  Buscamos seguir creciendo y expandiendo nuestra oferta,
                  siempre con el compromiso de mejorar la calidad de vida de las
                  mascotas y fortalecer el vínculo con sus dueños.
                </Parrafo>
              </Cajita>
            </WrapContact>
            <WrapContact>
              <Cajita>
                <SubTitulo>Valores:</SubTitulo>
                <Lista>
                  <Elemento>
                    <Black>Amor por los animales</Black> - Cada mascota es única
                    y merece el mejor cuidado.
                  </Elemento>
                  <Elemento>
                    <Black>Calidad y compromiso</Black> - Ofrecemos solo
                    productos y servicios confiables.
                  </Elemento>
                  <Elemento>
                    <Black>Atención personalizada</Black> - Escuchamos y
                    asesoramos a cada cliente con dedicación.
                  </Elemento>
                  <Elemento>
                    <Black>Honestidad y transparencia</Black> - Trabajamos con
                    integridad y responsabilidad.
                  </Elemento>
                  <Elemento>
                    <Black>Innovación y crecimiento</Black> - Buscamos siempre
                    mejorar y adaptarnos a las necesidades del mercado.
                  </Elemento>
                </Lista>
              </Cajita>
            </WrapContact>
          </CajaInternal>

          <CajaInternal>
            <Img src={ImgPets3} />
          </CajaInternal>
        </WrapInternal>
      </Seccion>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

const ContainerContenido = styled.div``;
const CajaImgHero = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("public/pets.jpg");
  background-image: url("./../../public/img/animales/cat-3699032_1280.jpg");
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

const CajaSubTitulo = styled.div`
  width: 100%;
  /* margin-bottom: 20px; */
`;
const SubTitulo = styled.h2`
  width: 100%;
  font-size: 1.4rem;
  color: ${Theme.secondary.azulBrillante};
  text-decoration: underline;
  &.mensaje {
    color: white;
  }
`;
const Seccion = styled.div`
  padding: 0 80px;
  margin-bottom: 100px;
  &.mensaje {
    background-color: ${Theme.neutral.marronOscuro};
    padding: 25px 100px;
  }
`;

//

const WrapInternal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  &.reverse {
    flex-direction: row-reverse;
  }
`;
const CajaInternal = styled.div`
  width: 45%;
  height: 500px;

  &.izq {
    padding: 10px 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    flex-direction: column;
  }
  &.der {
  }
`;

const WrapContact = styled.div`
  width: 100%;
  padding: 0 15px;
  margin-bottom: 15px;
`;

const Cajita = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  gap: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: ${Theme.config.sombra};
  border-radius: 6px;
`;
const Parrafo = styled.p`
  font-size: 1.1rem;
`;
const Lista = styled.ul`
  padding-left: 20px;
`;
const Elemento = styled.li``;
const Black = styled.b`
  color: ${Theme.primary.rojoBrillante};
`;
