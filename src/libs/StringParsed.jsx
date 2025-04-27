export function extraerPrimerNombreApellido(nombre, apellido) {
  // Dividir el nombre completo en partes
  const partesNombre = nombre.trim().split(" ");

  const partesApellido = apellido.trim().split(" ");

  // Retornar el primer nombre y el primer apellido
  return `${partesNombre[0]} ${partesApellido[0]}`;
}

export const soloNumeros = (valor) =>
  valor === "" || /^[0-9]+(\.[0-9]+)?$/.test(valor);

export const fechaHora = (fechaForma) => {
  if (typeof fechaForma == "string") {
    return fechaForma.slice(0, 16) + fechaForma.slice(-2).toLocaleLowerCase();
  }
};

// Si el valor termina en un punto entonces esta funciona ejecuta y devuelve un string,
// En caso contrario, esta funcion no actua
// Se debe tomar en cuenta que hacer si el usuario intenta hacer algo con el input con punto al final, ejemplo quitar el foco o enviar el documento, el punto deberia limpiarse
export const puntoFinal = (str) => {
  const ultimoCaracter = str.charAt(str.length - 1);
  const ultimosDos = str.slice(-2);
  const hasPunto = str.includes(".");
  if (
    (ultimoCaracter == "." && ultimosDos != ".." && !hasPunto) ||
    str == "0."
  ) {
    return str;
  } else {
    return Number(str);
  }
};

export const formatoDOP = (valor) => {
  const formateandoHaciaDOP = new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  });
  if (isNaN(valor)) {
    return "";
  } else {
    return formateandoHaciaDOP.format(valor);
  }
};
