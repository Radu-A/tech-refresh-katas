const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function invertMatrix(init: number[][]): number[][] {
  if (!init.length || !init[0]) return [];
  let inverted: number[][] = [];
  const colNumber = init[0];
  for (let i = 0; i < colNumber.length; i++) {
    let row = [];
    for (let j = 0; j < init.length; j++) {
      row.push(init[j][i]);
    }
    inverted.push(row);
  }
  return inverted;
}

console.log(invertMatrix(matrix));
