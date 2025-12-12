// Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

// Tu misión es escribir una función que reciba:

// fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
// takeOffTime → la misma fecha de despegue, también en formato elfo.
// La función debe devolver:

// Los segundos completos que faltan para el despegue.
// Si ya estamos en el despegue exacto → 0.
// Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
// 🎯 Reglas
// Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
// Usa diferencias en segundos, no en milisegundos.
// Redondea siempre hacia abajo (floor): solo segundos completos.

const takeoff = "2025*12*25@00|00|00 NP";

const from1 = "2025*12*24@23|59|30 NP";
const from2 = "2025*12*25@00|00|00 NP";
const from3 = "2025*12*25@00|00|12 NP";

function timeUntilTakeOff(fromTime, takeOffTime) {
  function converse(date) {
    return new Date(
      date
        .replaceAll("*", "-")
        .replaceAll("@", "T")
        .replaceAll("|", ":")
        .replaceAll(" NP", "")
    );
  }
  const convertedFrom = converse(fromTime);
  const convertedTakeOff = converse(takeOffTime);
  return (convertedTakeOff - convertedFrom) / 1000;
}

console.log(timeUntilTakeOff(from1, takeoff));
