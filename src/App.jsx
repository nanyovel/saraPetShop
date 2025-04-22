import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./app.css";
import Theme from "./config/Theme";
import Home from "./page/Home";
import MasterRoutes from "./routes/MasterRoutes";
import { useLocation } from "react-router";
import { doc, onSnapshot } from "firebase/firestore";
import db from "./firebase/firebaseConfig";
import { useAuth } from "./context/AuthContext";

export default function App() {
  // ******************** RECURSOS GENERALES ******************** //
  const romo = useAuth();
  const userAuth = useAuth().usuario;
  // como
  const [usuario, setUsuario] = useState(userAuth);
  const [userMaster, setUserMaster] = useState();

  useEffect(() => {
    setUsuario(userAuth);
  }, [userAuth]);

  let location = useLocation();
  let lugar = location.pathname;
  // ************************** DAME SOLO UN DOC POR ID**************************
  const useDocById = (collectionName, setState, idUsuario) => {
    useEffect(() => {
      if (usuario) {
        const unsub = onSnapshot(doc(db, collectionName, idUsuario), (doc) => {
          setState({ ...doc.data(), id: doc.id });
        });
        // Devolver una función de limpieza para detener la escucha cuando el componente se desmonte
        return () => unsub();
      }
    }, [collectionName, setState, idUsuario]);
  };
  let idUsuario = usuario?.uid ? usuario.uid : "00";
  useDocById("usuarios", setUserMaster, idUsuario);

  return (
    <>
      <MasterRoutes userMaster={userMaster} />
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 200px;
`;
const Titulo = styled.h1``;
