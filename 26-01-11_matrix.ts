class Matrix {
  string: string;
  constructor(string: string) {
    this.string = string;
  }

  get rows(): string[][] {
    let matrix: string[][] = [];
    const strArr = this.string.split("\n");
    for (const str of strArr) {
      const row = str.split(" ");
      matrix.push(row);
    }
    return matrix;
  }

  get columns(): string[][] {
    let matrix: string[][] = [];
    if (this.rows !== undefined) {
      for (let i = 0; i < this.rows.length; i++) {
        let column: string[] = [];
        for (let j = 0; j < this.rows[i]!.length; j++) {
          column.push(this.rows[j]![i]!);
        }
        matrix.push(column);
      }
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
