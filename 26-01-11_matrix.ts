class Matrix {
  string: string;
  constructor(string: string) {
    this.string = string;
  }

  get rows(): number[][] {
    let matrix: number[][] = [];
    const strArr = this.string.split("\n");
    for (const str of strArr) {
      const row = str.split(" ").map(value=>Number(value))
      matrix.push(row);
    }
    return matrix;
  }

  get columns(): number[][] {
    let matrix: number[][] = [];
    if (this.rows.length! && this.rows[0]) {
      matrix = this.rows[0].map((_, i) => {
        const row = this.rows.map((row) => row[i]);
        return row;
      });
    }
    return matrix;
  }
}

const first = new Matrix("1 2\n3 4");
console.log(first.rows[1]);
console.log(first.columns[1]);
const second = new Matrix("1 2\n10 20");
console.log(second.rows[1]);
console.log(second.columns[1]);
