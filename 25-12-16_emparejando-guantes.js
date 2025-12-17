/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
// function matchGloves(gloves) {
//   let pairs = [];
//   for (let i = 0; i < gloves.length; i++) {
//     for (let j = i + 1; j < gloves.length; j++) {
//       const a = gloves[i].color;
//       const b = gloves[j].color;
//       if (
//         gloves[i].color === gloves[j].color &&
//         gloves[i].hand !== gloves[j].hand &&
//         gloves[i].color !== "matched"
//       ) {
//         const pair = {
//           color: gloves[i].color,
//           position: j,
//         };
//         pairs.push(pair);
//         gloves[i].color = "matched";
//         gloves[j].color = "matched";
//       }
//     }
//   }
//   const sorted = pairs.sort((a, b) => a.position - b.position);

//   return sorted.map((pair) => pair.color);
// }

function matchGloves(gloves) {
  let uneven = {}
  let pairs = {}
  gloves.forEach((glove, i)=>{
    const color = glove[color]
    if (uneven(color)) {
      if (uneven(color)[])
    }
  })
}

const gloves = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];

console.log(matchGloves(gloves));
// ["red", "green"]

const gloves2 = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];

console.log(matchGloves(gloves2));
// ["gold", "gold"]

const gloves3 = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];

console.log(matchGloves(gloves3));
// []

const gloves4 = [
  { hand: "L", color: "green" },
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
];

console.log(matchGloves(gloves4));
// []
