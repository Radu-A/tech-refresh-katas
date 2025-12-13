// Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

// [1++][2-][3+][<]
// Escribe una función que descifre el PIN a partir del código.

// El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

// Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

// Las operaciones se aplican en orden al número y son:

// + suma 1
// - resta 1
// El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

// También existe el bloque especial [<], que repite el dígito del bloque anterior.

// Si al final hay menos de 4 dígitos, se debe devolver null.

const code1 = "[1++][2-][3+][<]";
const code2 = "[9+][0-][4][<]";
const code3 = "[1+][2-]";

function decodeSantaPin(code) {
  const arr = code.slice(0, -1).replaceAll("[", "").split("]");
  if (arr.length != 4) return null;
  const decodeArr = arr.map((block, i) => {
    console.log(block);
    console.log(block.length);

    let num = 0;
    let operation = null;
    if (block == "<") {
      block = arr[i - 1];
    }
    if (block.length == 2) {
      num = parseInt(block[0]);
      if (block[1] == "+") {
        return (num += 1);
      } else if (block[1] == "-") {
        return (num -= 1);
      }
    } else if (block.length == 3) {
      num = parseInt(block[0]);
      if (block[1] == "+") {
        return (num += 2);
      } else if (block[1] == "-") {
        return (num -= 2);
      }
    } else {
      num = parseInt(block[0]);
      return num;
    }
  });
  return decodeArr;
}

console.log(decodeSantaPin(code1));
