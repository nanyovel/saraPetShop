import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { itemSchema } from "../schema/itemSchema";
import styled from "styled-components";
import SideBarCategorias from "../components/SideBarCategorias";
import imgCatBlack from "./../../public/img/animales/catBlack.jpg";
import imgDestacada from "./../../public/img/animales/cat1.png";
import img1 from "./../../public/img/animales/cat-3699032_1280.jpg";
import img2 from "./../../public/img/animales/catBlack.jpg";
import img3 from "./../../public/img/animales/cat2.jpg";
import HeroMedium from "../components/HeroMedium";
import ImageGallery from "react-image-gallery";
import BotonQuery from "../components/BotonQuery";
import "react-image-gallery/styles/css/image-gallery.css";
import Theme from "../config/Theme";
import ImgStar from "./../../public/img/iconos/estrella.png";
import {
  BotonGeneral,
  InputGeneral,
  MenuDesplegable,
  Opciones,
} from "../components/ElementosGenerales";
import MenuPestannias from "../components/MenuPestannias";
import { Enlace, EnlaceButton } from "../components/GrupoTabla";
import {
  useDocByCondition,
  useDocByConditionSinUser,
} from "../libs/firebaseLibs";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { CategoriasLista, subCategorias } from "../DB/DB";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import db, { storage } from "../firebase/firebaseConfig";
import { doc, updateDoc, writeBatch } from "firebase/firestore";
import { ModalLoading } from "../components/ModalLoading";
import ClusterItems from "../components/ClusterItems";
import ReactImageGallery from "react-image-gallery";

export default function ArticulosView({ userMaster, dbArticulos }) {
  const param = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [itemsDB, setItemsDB] = useState([]);
  const [itemMaster, setItemMaster] = useState({});
  const [datosParsed, setDatosParsed] = useState(false);
  // useDocByCondition("articulos", setItemsDB, "codigo", "==", param.id);
  useDocByConditionSinUser(
    "articulos",
    setItemsDB,
    "codigo",
    "==",
    Number(param.id)
  );

  useEffect(() => {
    if (itemsDB.length > 0) {
      console.log(itemsDB[0]);
      setItemMaster(itemsDB[0]);
      setDatosParsed(true);
    }
  }, [itemsDB]);

  const [arrayOpciones, setArrayOpciones] = useState([
    {
      select: true,
      nombre: "Detalles",
      key: "detalles",
    },
    {
      select: false,
      nombre: "Caracteristicas",
      key: "caracteristicas",
    },
  ]);

  const handlePestannias = (e) => {
    let index = Number(e.target.dataset.id);
    setArrayOpciones((prevOpciones) =>
      prevOpciones.map((opcion, i) => ({
        ...opcion,
        select: i === index,
      }))
    );
  };

  const [listaImagenes, setListaImagenes] = useState([]);

  useEffect(() => {
    if (datosParsed) {
      const imgParsed2 = itemMaster.fotos.map((img) => {
        return {
          original: img.urlFoto,
          thumbnail: img.urlFoto,
          description: "",
        };
      });

      setListaImagenes(imgParsed2);
    }
  }, [itemMaster, itemsDB]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [itemEditable, setItemEditable] = useState({});
  const activarEdicion = () => {
    setItemEditable(itemMaster);
    setModoEdicion(true);
    setListaImgEdit([...itemMaster.fotos]);
  };
  const cancelarEdicion = () => {
    setItemEditable({});
    setModoEdicion(false);
  };

  const quitarFoto = (e) => {
    const indexDataset = parseInt(e.target.dataset.index, 10);
    setListaImgEdit((prevState) =>
      prevState.filter((_, index) => index !== indexDataset)
    );
    setItemEditable((prevState) => ({
      ...prevState,
      fotos: prevState.fotos.filter((foto, index) => index != indexDataset),
    }));
  };
  // ************** MANEJANDO CORTE DE IMAGENES  **************
  // ************** datos del Paquete react easy crop **************
  const inputRef = useRef(null);
  const clickFromIcon = () => {
    inputRef.current.click();
  };
  const [fileList, setFileList] = useState([]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setFileList([...fileList, file]);
      setListaImgEdit([...listaImgEdit, { urlFoto: imgUrl, destacada: false }]);
    }
  };

  const [listaImgEdit, setListaImgEdit] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    const indexDataset = parseInt(e.target.dataset.index, 10);
    const indexSubDataset = parseInt(e.target.dataset.subindex, 10);
    const nombreDataset = e.target.dataset.nombre;
    const grado = e.target.dataset.grado;

    console.log(value);
    const ignorar = ["add", "minus", "detalles", "caracteristicas"];
    if (ignorar.includes(name)) {
      return;
    }

    if (grado == "segundo") {
      setItemEditable((prevState) => ({
        ...prevState,
        detalles:
          nombreDataset == "detalles"
            ? prevState.detalles.map((parrafo, index) => {
                if (index === indexDataset) {
                  return {
                    ...parrafo,
                    [name]: value,
                  };
                }
                return parrafo;
              })
            : prevState.detalles,
        caracteristicas:
          nombreDataset == "caracteristicas"
            ? prevState.caracteristicas.map((cat, index) => {
                if (index === indexDataset) {
                  return {
                    ...cat,
                    titulo: name == "titulo" ? value : cat.titulo,
                    items:
                      name == "items"
                        ? cat.items.map((item, i) => {
                            if (i === indexSubDataset) {
                              return value;
                            }
                            return item;
                          })
                        : cat.items,
                  };
                }
                return cat;
              })
            : prevState.caracteristicas,
      }));
    } else {
      setItemEditable((prevState) => ({
        ...prevState,
        [name]: value,
        detalles:
          nombreDataset == "detalles"
            ? prevState.detalles.map((parrafo, index) => {
                if (index === indexDataset) {
                  return {
                    ...parrafo,
                    [name]: value,
                  };
                }
                return parrafo;
              })
            : prevState.detalles,
        caracteristicas:
          nombreDataset == "caracteristicas"
            ? prevState.caracteristicas.map((cat, index) => {
                if (index === indexDataset) {
                  return {
                    ...cat,
                    titulo: name == "titulo" ? value : cat.titulo,
                    items:
                      name == "items"
                        ? cat.items.map((item, i) => {
                            if (i === indexSubDataset) {
                              return value;
                            }
                            return item;
                          })
                        : cat.items,
                  };
                }
                return cat;
              })
            : prevState.caracteristicas,
      }));
    }
  };
  const agregarElemento = (e) => {
    const { name, value } = e.target;
    const nombreDataset = e.target.dataset.nombre;
    console.log(value);
    setItemEditable((prevState) => ({
      ...prevState,
      detalles:
        nombreDataset == "detalles"
          ? name == "add"
            ? prevState[nombreDataset].concat({
                titulo: "",
                texto: "",
              })
            : prevState[nombreDataset].slice(0, -1)
          : prevState.detalles,
      caracteristicas:
        nombreDataset == "caracteristicas"
          ? name == "add"
            ? prevState[nombreDataset].concat({
                titulo: "",
                items: ["", "", ""],
              })
            : prevState[nombreDataset].slice(0, -1)
          : prevState.caracteristicas,
    }));
  };
  const addItemsFt = (e) => {
    const { name, value } = e.target;
    const indexDataset = parseInt(e.target.dataset.index, 10);
    setItemEditable((prevState) => ({
      ...prevState,
      caracteristicas: prevState.caracteristicas.map((cat, index) => {
        if (index === indexDataset) {
          return {
            ...cat,
            items:
              name == "add"
                ? cat.items.concat("")
                : cat.items.filter((_, i) => i !== cat.items.length - 1),
          };
        }
        return cat;
      }),
    }));
  };
  const guardarCambios = async () => {
    setModoEdicion(false);
    const urlsImgs = [];
    try {
      setIsLoading(true);
      const docRef = doc(db, "articulos", itemMaster.id);
      console.log(urlsImgs);
      await updateDoc(docRef, {
        descripcion: itemEditable.descripcion,
        descripcionDetallada: itemEditable.descripcionDetallada,
        detalles: itemEditable.detalles,
        caracteristicas: itemEditable.caracteristicas,
        cat: itemEditable.cat,
        subCat: itemEditable.subCat,
        precio: itemEditable.precio,
        unidadMedida: itemEditable.unidadMedida,
        fotos: itemEditable.fotos,
      });
      const batch = writeBatch(db);
      let fotosUp = [...itemMaster.fotos];

      fileList.forEach(async (file, index) => {
        const storageRef = ref(storage, `items/${file.name}+ ${new Date()}`);
        await uploadBytes(storageRef, file).then(() => {
          console.log("Imagen subida correctamente");
          getDownloadURL(ref(storage, storageRef)).then((url) => {
            console.log(url);
            fotosUp.push({
              urlFoto: url,
              destacada: false,
            });

            console.log(fotosUp);
            if (index == fileList.length - 1) {
              console.log("llego");
              setTimeout(() => {
                updateDoc(docRef, {
                  fotos: fotosUp,
                });
              }, 2000);
            }
          });
        });
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log("Error al guardar los cambios", error);
      setIsLoading(false);
    }
  };
  const desactivar = async (e) => {
    const name = e.target.name;
    setIsLoading(true);
    const docRef = doc(db, "articulos", itemMaster.id);
    try {
      await updateDoc(docRef, {
        isActived: name == "activar" ? true : false,
      });
      setIsLoading(false);
    } catch (error) {
      console.log("Error al guardar los cambios", error);
      setIsLoading(false);
    }
  };
  const [itemsRelacionados, setItemsRelacionados] = useState({});
  useEffect(() => {
    const itemsRelax = dbArticulos
      .filter(
        (item) =>
          item.cat === itemMaster.cat && item.subCat === itemMaster.subCat
      )
      .sort(() => Math.random() - 0.5) // Mezcla aleatoriamente
      .slice(0, 10); // Limita a los primeros 10 items

    console.log(itemsRelax);
    setItemsRelacionados({
      listaProductos: itemsRelax,
    });
  }, [dbArticulos, itemMaster]);

  const generaLinkWA = (codigo) => {
    const apiWhatsApp =
      "https://api.whatsapp.com/send?phone=+18099732098&text=";
    const textoSaludo =
      "Hola equipo de Sara Pet Shop, estoy interesado en comprar este producto ";
    const path = "https://sarapetshop.com/articulos/";
    return apiWhatsApp + encodeURIComponent(textoSaludo + path + codigo);
  };
  return (
    datosParsed && (
      <>
        <Header userMaster={userMaster} />
        <HeroMedium titulo="Producto" imgBg={imgCatBlack} />
        <BotonQuery itemMaster={itemMaster} listaImagenes={listaImagenes} />
        <Container>
          <CajaSideBar>
            <SideBarCategorias />
          </CajaSideBar>
          <ContenedorItem>
            <CajaControles>
              {modoEdicion ? (
                <>
                  <BotonGeneral onClick={() => cancelarEdicion()}>
                    Cancelar
                  </BotonGeneral>
                  <BotonGeneral onClick={() => guardarCambios()}>
                    Guardar
                  </BotonGeneral>
                </>
              ) : (
                <BotonGeneral onClick={() => activarEdicion()}>
                  Editar
                </BotonGeneral>
              )}

              {itemMaster.isActived ? (
                <BotonGeneral onClick={(e) => desactivar(e)} name="desactivar">
                  Desactivar
                </BotonGeneral>
              ) : (
                <BotonGeneral onClick={(e) => desactivar(e)} name="activar">
                  Activar
                </BotonGeneral>
              )}
            </CajaControles>
            {itemMaster.isActived ? (
              <></>
            ) : (
              <CajaItemDesactivado>
                <TituloItemDesactivado>
                  Articulo desactivado
                </TituloItemDesactivado>
              </CajaItemDesactivado>
            )}
            <WrapTop>
              <CajaImagenes>
                {!modoEdicion ? (
                  <>
                    {listaImagenes.length > 0 && (
                      <ContainerGalleri>
                        <ReactImageGallery items={listaImagenes} />
                        {!itemMaster.isActived && <BackFilter />}
                      </ContainerGalleri>
                    )}
                    {itemMaster.fotos.length == 0 && (
                      <CajaTextoSinFoto>
                        <TextoSinFoto>~ Sin fotos ~</TextoSinFoto>
                      </CajaTextoSinFoto>
                    )}
                  </>
                ) : (
                  <>
                    <CajaFotosEdicion>
                      {listaImgEdit.map((foto, index) => {
                        return (
                          <WrapItemFoto key={index}>
                            <ImgItemFoto src={foto.urlFoto} />
                            <XquitarFoto
                              data-index={index}
                              onClick={(e) => quitarFoto(e)}
                            >
                              ❌
                            </XquitarFoto>
                            {/* <XquitarFoto
                              data-index={index}
                              onClick={(e) => quitarFoto(e)}
                            >
                              ✅
                            </XquitarFoto> */}
                          </WrapItemFoto>
                        );
                      })}
                    </CajaFotosEdicion>
                    <CajaBtnUpFile>
                      <Input
                        type="file"
                        ref={inputRef}
                        autoComplete="off"
                        accept="image/*"
                        onChange={handleFile}
                        className="none"
                      />
                      <CajaIcono>
                        <Icono
                          onClick={clickFromIcon}
                          icon={faCloudArrowUp}
                          title="Cargar foto de perfil"
                        />
                        <Parrafo2 className="fotoPerfil">Agregar foto</Parrafo2>
                      </CajaIcono>
                    </CajaBtnUpFile>
                  </>
                )}
              </CajaImagenes>

              <CajaDetalles>
                {!modoEdicion && (
                  <TituloItem>{itemMaster.descripcion}</TituloItem>
                )}
                {modoEdicion && (
                  <TextAreaText
                    name="descripcion"
                    className="titulo"
                    onChange={(e) => handleInput(e)}
                    value={itemEditable.descripcion}
                  />
                )}
                <CajaPadding>
                  {!modoEdicion && (
                    <SubTituloItem>
                      {itemMaster.descripcionDetallada}
                    </SubTituloItem>
                  )}
                  {modoEdicion && (
                    <TextAreaText
                      className="small"
                      name="descripcionDetallada"
                      onChange={(e) => handleInput(e)}
                      value={itemEditable.descripcionDetallada}
                    />
                  )}
                  <WrapCat className={modoEdicion ? "column" : ""}>
                    <CajaCategoria>
                      <TituloCat>SKU:</TituloCat>
                      <TituloCat className="texto">
                        {itemMaster.codigo}
                      </TituloCat>
                    </CajaCategoria>
                    <CajaCategoria>
                      <TituloCat>Categoria:</TituloCat>
                      {!modoEdicion ? (
                        <TituloCat className="texto">
                          {itemMaster.cat}
                        </TituloCat>
                      ) : (
                        <MenuDesp>
                          <Opciones value={""} disabled>
                            Seleccione categoria
                          </Opciones>
                          {CategoriasLista.map((cat, index) => {
                            return (
                              <Opciones key={index} value={cat.nombre}>
                                {cat.nombre}
                              </Opciones>
                            );
                          })}
                        </MenuDesp>
                      )}
                    </CajaCategoria>
                    <CajaCategoria>
                      <TituloCat>SubCategoria:</TituloCat>
                      {!modoEdicion ? (
                        <TituloCat className="texto">
                          {itemMaster.subCat}
                        </TituloCat>
                      ) : (
                        <MenuDesp>
                          <Opciones value={""} disabled>
                            Seleccione sub categoria
                          </Opciones>
                          {subCategorias.map((cat, index) => {
                            return (
                              <Opciones key={index} value={cat.nombre}>
                                {cat.nombre}
                              </Opciones>
                            );
                          })}
                        </MenuDesp>
                      )}
                    </CajaCategoria>
                  </WrapCat>
                  {!modoEdicion && (
                    <CajaPrecio>
                      <TituloPrecio>Precio:</TituloPrecio>
                      <TextoPrecio>{"RD$ " + itemMaster.precio}</TextoPrecio>
                    </CajaPrecio>
                  )}
                  {modoEdicion && (
                    <CajaPrecio>
                      <TituloPrecio>Precio:</TituloPrecio>
                      <Input
                        value={itemEditable.precio}
                        autoComplete="off"
                        name="precio"
                        onChange={(e) => handleInput(e)}
                        placeholder="Precio"
                        type="number"
                        min={0}
                        step={0.01}
                        className="small"
                      />
                    </CajaPrecio>
                  )}
                  {!modoEdicion && (
                    <CajaPrecio>
                      <TituloPrecio className="small">U/M:</TituloPrecio>
                      <TextoPrecio className="small">
                        {itemMaster.unidadMedida}
                      </TextoPrecio>
                    </CajaPrecio>
                  )}
                  {modoEdicion && (
                    <CajaPrecio>
                      <TituloPrecio>U/M:</TituloPrecio>
                      <Input
                        value={itemEditable.unidadMedida}
                        autoComplete="off"
                        name="unidadMedida"
                        onChange={(e) => handleInput(e)}
                        placeholder="Unidad de medida"
                        className="small"
                      />
                    </CajaPrecio>
                  )}
                  <CajaStar>
                    <ImgEstrella src={ImgStar} />
                    <ImgEstrella src={ImgStar} />
                    <ImgEstrella src={ImgStar} />
                    <ImgEstrella src={ImgStar} />
                    <ImgEstrella src={ImgStar} />
                  </CajaStar>
                  {!modoEdicion && (
                    <CajaCTA>
                      <EnlaceButton
                        target="_blank"
                        to={generaLinkWA(itemMaster.codigo)}
                      >
                        Comprar
                      </EnlaceButton>
                    </CajaCTA>
                  )}
                  <CajaDetallesFinal>
                    <MenuPestannias
                      handlePestannias={handlePestannias}
                      arrayOpciones={arrayOpciones}
                    />

                    {arrayOpciones[0].select && (
                      <CajaDetallesDes>
                        {!modoEdicion &&
                          itemMaster.detalles.map((parrafo, index) => {
                            return (
                              <Fragment key={index}>
                                {parrafo.titulo && (
                                  <TituloDetalleFinal>
                                    {parrafo.titulo}
                                  </TituloDetalleFinal>
                                )}
                                {parrafo.texto && (
                                  <DescripcionDF>{parrafo.texto}</DescripcionDF>
                                )}
                                <br />
                              </Fragment>
                            );
                          })}
                        {modoEdicion &&
                          itemEditable.detalles.map((parrafo, index) => {
                            return (
                              <Fragment key={index}>
                                <InputText
                                  autoComplete="off"
                                  data-index={index}
                                  data-nombre="detalles"
                                  data-grado="segundo"
                                  value={parrafo.titulo}
                                  onChange={(e) => handleInput(e)}
                                  name="titulo"
                                />

                                <TextAreaText
                                  autoComplete="off"
                                  data-index={index}
                                  data-nombre="detalles"
                                  data-grado="segundo"
                                  value={parrafo.texto}
                                  className="small"
                                  onChange={(e) => handleInput(e)}
                                  name="texto"
                                />

                                <br />
                              </Fragment>
                            );
                          })}
                        {modoEdicion && (
                          <CajaBtnFinal>
                            <BotonGeneral
                              data-nombre="detalles"
                              name="add"
                              onClick={(e) => agregarElemento(e)}
                            >
                              +
                            </BotonGeneral>
                            <BotonGeneral
                              data-nombre="detalles"
                              name="minus"
                              onClick={(e) => agregarElemento(e)}
                            >
                              -
                            </BotonGeneral>
                          </CajaBtnFinal>
                        )}
                      </CajaDetallesDes>
                    )}
                    {arrayOpciones[1].select && (
                      <CajaInterna>
                        {!modoEdicion &&
                          itemMaster.caracteristicas.map((cat, index) => {
                            return (
                              <Fragment key={index}>
                                <TituloDetalleFinal>
                                  {cat.titulo}
                                </TituloDetalleFinal>
                                <Lista>
                                  {cat.items.map((list, i) => {
                                    return <Elemento key={i}>{list}</Elemento>;
                                  })}
                                </Lista>
                              </Fragment>
                            );
                          })}
                        {modoEdicion &&
                          itemEditable.caracteristicas.map((cat, index) => {
                            return (
                              <Fragment key={index}>
                                <InputText
                                  autoComplete="off"
                                  data-index={index}
                                  data-grado="segundo"
                                  data-nombre="caracteristicas"
                                  name="titulo"
                                  value={cat.titulo}
                                  onChange={(e) => handleInput(e)}
                                />
                                <Lista>
                                  {cat.items.map((list, i) => {
                                    return (
                                      <TextAreaText
                                        autoComplete="off"
                                        name="items"
                                        data-index={index}
                                        data-grado="segundo"
                                        data-subindex={i}
                                        data-nombre="caracteristicas"
                                        className="xsmall"
                                        key={i}
                                        value={list}
                                        onChange={(e) => handleInput(e)}
                                      />
                                    );
                                  })}
                                </Lista>
                                <CajaBtnFinal className="itemsFt">
                                  <BtnSmall
                                    data-index={index}
                                    className="itemsFt"
                                    name="add"
                                    onClick={(e) => addItemsFt(e)}
                                  >
                                    +
                                  </BtnSmall>
                                  <BtnSmall
                                    data-index={index}
                                    className="itemsFt"
                                    name="minus"
                                    onClick={(e) => addItemsFt(e)}
                                  >
                                    -
                                  </BtnSmall>
                                </CajaBtnFinal>
                              </Fragment>
                            );
                          })}
                        {modoEdicion && (
                          <CajaBtnFinal>
                            <BotonGeneral
                              data-nombre="caracteristicas"
                              name="add"
                              onClick={(e) => agregarElemento(e)}
                            >
                              +
                            </BotonGeneral>
                            <BotonGeneral
                              data-nombre="caracteristicas"
                              name="minus"
                              onClick={(e) => agregarElemento(e)}
                            >
                              -
                            </BotonGeneral>
                          </CajaBtnFinal>
                        )}
                      </CajaInterna>
                    )}
                  </CajaDetallesFinal>
                </CajaPadding>
              </CajaDetalles>
            </WrapTop>
            <WrapBottom>
              <ClusterItems
                datos={itemsRelacionados}
                dbArticulos={dbArticulos}
              />
            </WrapBottom>
          </ContenedorItem>
        </Container>
        <Footer />
        {isLoading && <ModalLoading />}
      </>
    )
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 70px;
  gap: 20px;
  margin-bottom: 35px;
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1200px) {
    padding: 0 35px;
  }
`;
const CajaSideBar = styled.div`
  width: calc(20% - 20px);
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const ContenedorItem = styled.div`
  width: calc(80% - 20px);
  min-height: 200px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const WrapTop = styled.div`
  display: flex;
  min-height: 500px;
  width: 100%;
  border: 1px solid ${Theme.neutral.neutral600};
  overflow: hidden;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const WrapBottom = styled.div``;
const CajaImagenes = styled.div`
  height: 100%;
  width: calc(50% - 20px);
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const CajaDetalles = styled.div`
  width: calc(50% - 20px);

  border: 1px solid ${Theme.neutral.neutral600};
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const CajaImgDestacada = styled.div`
  width: 100%;
  height: 80%;
`;
const ImagenDestacada = styled.img``;
const CajaOtrasImg = styled.div`
  width: 100%;
  height: 80%;
`;
const ImgOtras = styled.img``;
const TituloItem = styled.h1`
  padding: 8px;
  font-size: 2rem;
  margin-bottom: 15px;
  color: ${Theme.neutral.neutral600};
  background-color: ${Theme.primary.rojoCalido};
  color: white;
`;
const SubTituloItem = styled.p`
  color: ${Theme.neutral.neutral600};
  margin-bottom: 10px;
`;
const WrapCat = styled.div`
  display: flex;
  margin-bottom: 8px;
  width: 100%;
  flex-wrap: wrap;
  &.column {
    flex-direction: column;
  }
`;
const CajaCategoria = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;
const TituloCat = styled.h3`
  margin-right: 5px;
  font-size: 1.1rem;
  &.texto {
    font-weight: 400;
  }
`;
const CajaStar = styled.div``;
const ImgEstrella = styled.img`
  width: 30px;
`;
const CajaCTA = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100px;
  align-items: center;
`;
const CajaDetallesFinal = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 300px;
  overflow: auto;
`;
const TituloDetalles = styled.h2``;
const CajaDetallesDes = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 8px;
  color: ${Theme.neutral.neutral600};
`;
const TituloDetalleFinal = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  text-decoration: underline;
`;
// Detalle final
const DescripcionDF = styled.p`
  margin-bottom: 5px;
`;
const CajaInterna = styled.div`
  padding: 8px;
`;
const Titulo = styled.h2`
  color: ${Theme.secondary.azulMarino};
  text-decoration: underline;
  font-weight: 400;
  margin-bottom: 6px;
`;
const Lista = styled.ul`
  padding-left: 35px;
`;

const Elemento = styled.li`
  margin-bottom: 4px;
  font-size: 1rem;

  color: ${Theme.primary.rojoCalido};
`;
const Enlace2 = styled(Enlace)``;
const CajaTextoSinFoto = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextoSinFoto = styled.h2`
  width: 100%;
  text-align: center;
  height: 100%;
  font-size: 2rem;
  color: ${Theme.neutral.neutral600};
`;
const CajaControles = styled.div`
  width: 100%;
  border: 1px solid ${Theme.neutral.neutral600};
  height: 80px;
`;

const CajaFotosEdicion = styled.div`
  width: 100%;
  /* background-color: #d83c3c6e; */
  height: 400px;
  overflow-y: auto;
  border: 1px solid ${Theme.neutral.neutral600};
`;
const WrapItemFoto = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${Theme.neutral.neutral600};
`;
const ImgItemFoto = styled.img`
  width: 30%;
  height: 100px;
  object-fit: contain;
`;
const XquitarFoto = styled.p`
  font-size: 2rem;
  cursor: pointer;
  padding: 4px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid red;
  }
`;
const CajaIcono = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
const Icono = styled(FontAwesomeIcon)`
  font-size: 2rem;
  border: 1px solid ${Theme.primary.azulSuave};
  padding: 4px;
  cursor: pointer;
  transition: ease all 0.2s;
  background-color: ${Theme.secondary.coralCalido};
  border-radius: 4px;
  &:hover {
    color: white;
    background-color: ${Theme.primary.rojoBrillante};
  }
`;
const Input = styled(InputGeneral)`
  &.none {
    display: none;
  }
`;
const Parrafo2 = styled.p`
  color: ${Theme.primary.rojoBrillante};
`;
const CajaBtnUpFile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`;
const TextAreaText = styled.textarea`
  height: auto;
  font-size: 2rem;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  resize: vertical;

  &.small {
    font-size: 1rem;
    height: 80px;
    padding: 4px;
  }
  &.xsmall {
    font-size: 0.9rem;
    height: 40px;
    padding: 2px;
  }
`;
const InputText = styled(InputGeneral)``;
const MenuDesp = styled(MenuDesplegable)``;
const CajaBtnFinal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  &.itemsFt {
    flex-direction: column;
    align-items: center;
  }
`;
const BtnSmall = styled(BotonGeneral)`
  width: 100%;
  font-size: 0.8rem;
  padding: 4px;
  background-color: ${Theme.primary.azulSuave};
  color: black;
  border: 1px solid ${Theme.neutral.neutral600};
  margin: 2px;
`;
const CajaItemDesactivado = styled.div`
  padding: 8px;
  background-color: #5f5f5f;
`;
const TituloItemDesactivado = styled.h2`
  color: ${Theme.neutral.neutral600};
  color: #c4c4c4;
  text-decoration: underline;
  font-weight: 400;
  margin-bottom: 6px;
`;
const CajaPrecio = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;
const TituloPrecio = styled.h2`
  font-size: 1.2rem;
  display: inline;
  &.small {
    font-size: 1rem;
  }
`;
const TextoPrecio = styled.p`
  font-size: 1.4rem;
  color: ${Theme.secondary.azulBrillante};
  margin-bottom: 10px;
  display: inline;
`;
const ContenedorItemSimilares = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  background-color: ${Theme.neutral.neutral300};
  margin-top: 20px;
  box-shadow: ${Theme.config.sombra};
`;

const TituloRelacionados = styled.h2`
  color: ${Theme.primary.rojoBrillante};
  text-decoration: underline;
  /* color: red; */
  font-size: 2.4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
`;
const WrapItemsSimilares = styled.div`
  width: 100%;
  height: 80%;
`;
const CajaPadding = styled.div`
  width: 100%;
  padding: 8px;
`;
const ContainerGalleri = styled.div`
  position: relative;
`;
const BackFilter = styled.div`
  position: absolute;
  top: 0;
  /* background-color: red; */
  width: 100%;
  z-index: 99999999999999999999999999999999;
  height: 100%;
  backdrop-filter: grayscale(100%);
  -webkit-backdrop-filter: grayscale(100%);
  pointer-events: none; /* permite clics en la imagen */
`;
