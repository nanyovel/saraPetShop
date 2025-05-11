// Este componente lo utilizo para saber si el usuario tiene privilegio para estar en la ruta que esta aunque tenga sesion iniciada

import { Navigate } from "react-router";

export const RutaPrivilegiada = ({ children, userMaster, privilegioReq }) => {
  if (userMaster) {
    const hasPrivilegio = userMaster.permisos.includes(privilegioReq);
    if (hasPrivilegio) {
      return children;
    } else {
      return <Navigate replace to="/" />;
    }
  }
};
