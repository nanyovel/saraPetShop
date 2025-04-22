import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";
// ****************** DOCUMENTOS CON ESCUCHADOR **********************
export const useDocByCondition = (
  collectionName,
  setState,
  exp1,
  condicion,
  exp2,
  dbEstablecida
) => {
  const userAuth = useAuth().usuario;

  const [usuario, setUsuario] = useState(userAuth);
  useEffect(() => {
    // Este condicional es para que si el usuario ya descargo la base de datos pues que no vuelva a cargar, aunque el componente de desmonte y se vuelva a montar
    if (dbEstablecida?.length > 0) {
      return;
    }
    if (usuario) {
      console.log("DB 😐😐😐😐😐" + collectionName);
      let q;

      if (exp1) {
        q = query(collection(db, collectionName), where(exp1, condicion, exp2));
      } else {
        q = query(collection(db, collectionName));
      }

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const coleccion = [];
        querySnapshot.forEach((doc) => {
          coleccion.push({ ...doc.data(), id: doc.id });
        });
        // console.log(coleccion);
        setState(coleccion);
      });

      // Limpieza de la escucha al desmontar
      return () => unsubscribe();
    }
  }, [collectionName, setState, exp1, condicion, exp2, usuario]);
};

