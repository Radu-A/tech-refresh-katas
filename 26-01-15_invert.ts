const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function invertMatrix(init: number[][]): number[][] {
  let inverted: number[][] = [];
  for (let i = 0; i < init.length; i++) {
    let row: number[] = [];
    for (let j = 0; j < init[i]!.length; j++) {
      row.push(init[j]![i]!);
    }
    inverted.push(row);
  }
  return inverted;
}

console.log(invertMatrix(matrix));
