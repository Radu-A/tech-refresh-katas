// Este ejercicio es clave porque en el mundo real los objetos-mapa no siempre tienen lo que buscamos. Vamos a manejar la incertidumbre.

// El reto:

// Crea un objeto ERROR_MESSAGES que mapee estos códigos:

// NOT_FOUND -> "El recurso no existe."

// UNAUTHORIZED -> "No tienes permisos para acceder."

// SERVER_ERROR -> "Hubo un problema en el servidor."

// Crea una función getErrorMessage(code: string).

// Atención: Aquí el parámetro code es un string genérico (porque viene de una API y no sabemos qué traerá).

// Objetivo: Si el código existe en el objeto, devuélvelo. Si no existe, devuelve un mensaje genérico: "Error desconocido".

// Pista: Para comprobar si una clave existe en un objeto antes de usarla, puedes usar el operador in: if (code in ERROR_MESSAGES) { ... }

const ERROR_MESSAGES = {
  NOT_FOUND: "El recurso no existe.",
  UNAUTHORIZED: "No tienes permisos para acceder.",
  SERVER_ERROR: "Hubo un problema en el servidor.",
};

function getErrorMessage(code: string): string {
  if (code in ERROR_MESSAGES) {
    return ERROR_MESSAGES[code as keyof typeof ERROR_MESSAGES];
  }
  return "Error desconocido";
}
