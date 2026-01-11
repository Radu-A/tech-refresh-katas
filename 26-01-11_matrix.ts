class Matrix {
  string: string;
  constructor(string: string) {
    this.string = string;
  }

  get rows(): object[] {
    let rows: object[] = [];
    const strArr = this.string.split("\n");
    for (const str of strArr) {
      const row = str.split(" ");
      rows.push(row);
    }
    return rows;
  }

  get columns(): unknown {
    throw new Error("Remove this line and implement the function");
  }
}

const first = new Matrix("1 2\n3 4");
console.log(first.rows[0]);

