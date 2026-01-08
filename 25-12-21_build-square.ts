// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

function generateShape(int: number): string {
  let shape: string = "";
  for (let i = 0; i < int; i++) {
    if (i !== int - 1) {
      shape = shape + "+".repeat(int) + "\n";
    } else {
      shape = shape + "+".repeat(int);
    }
  }

  return shape; // your code here
}

generateShape(3);
