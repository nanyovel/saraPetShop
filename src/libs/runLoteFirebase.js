import { collection, doc, writeBatch } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const cargarDatos = async (arrayCargar, nombreColeccion) => {
  console.log("corriendo");
  // const collectionRef = collection(db, "omarMiguel");
  const collectionRef = collection(db, nombreColeccion);
  const batch = writeBatch(db);
  console.log(arrayCargar);
  arrayCargar.forEach((item, index) => {
    const docRef = doc(collectionRef);
    batch.set(docRef, item);
  });

  try {
    batch.commit().then(() => {
      console.log("lote subido correctamente!");
    });
  } catch (error) {
    console.log(error);
  }
};
