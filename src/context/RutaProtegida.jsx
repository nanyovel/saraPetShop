// La funcion de este componente es que el usuario no tiene su sesion iniciada sea dirigido a la pagina acceder

import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

export const RutaProtegida = ({ children }) => {
  const { usuario } = useAuth();

  if (usuario?.emailVerified) {
    return children;
  } else {
    return <Navigate replace to="/" />;
  }
};
