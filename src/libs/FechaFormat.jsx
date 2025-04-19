import { format } from "date-fns";
import { es } from "date-fns/locale";

const formato = "dd/MM/yyyy hh:mm:ss:SSS aa";
const localidad = es;

export const ES6AFormat = (fechaES6) => {
  return format(fechaES6, formato, {
    locale: localidad,
  });
};

// Recibe este formato 20/11/2024
export const formatAES6 = (fechaFormat) => {
  const annio = fechaFormat.slice(6, 10);
  const mes = fechaFormat.slice(3, 5) - 1;
  const dia = fechaFormat.slice(0, 2);

  return new Date(annio, mes, dia);
};

// Recibe fecha en formato ES6 y tambien en este formato 20/11/2024
export const hoyManniana = (fechaUser, hasHora) => {
  let diaHoyManniana = null;
  let isFechaES6 = true;
  let fechaParsed = fechaUser;
  const hora = fechaUser.slice(11, 16) + " " + fechaUser.slice(-2);
  if (fechaParsed instanceof Date == false) {
    isFechaES6 = false;
    fechaParsed = formatAES6(fechaParsed);
  }
  const hoy = new Date();
  const manniana = new Date(hoy); // Copia de la fecha actual
  manniana.setDate(hoy.getDate() + 1); // Agrega 1 día
  const ayer = new Date(hoy);
  ayer.setDate(hoy.getDate() - 1); // Agrega 1 día

  if (
    fechaParsed.getFullYear() === hoy.getFullYear() &&
    fechaParsed.getMonth() === hoy.getMonth() &&
    fechaParsed.getDate() === hoy.getDate()
  ) {
    diaHoyManniana = "Hoy";
  } else if (
    fechaParsed.getFullYear() === manniana.getFullYear() &&
    fechaParsed.getMonth() === manniana.getMonth() &&
    fechaParsed.getDate() === manniana.getDate()
  ) {
    diaHoyManniana = "Mañana";
  } else if (
    fechaParsed.getFullYear() === ayer.getFullYear() &&
    fechaParsed.getMonth() === ayer.getMonth() &&
    fechaParsed.getDate() === ayer.getDate()
  ) {
    diaHoyManniana = "Ayer";
  } else {
    if (isFechaES6 == false) {
      diaHoyManniana = fechaUser.slice(0, 10);
    } else {
      diaHoyManniana = ES6AFormat(fechaParsed).slice(0, 10);
    }
  }
  if (hasHora) {
    return diaHoyManniana + " a las " + hora;
  } else {
    return diaHoyManniana;
  }
};
