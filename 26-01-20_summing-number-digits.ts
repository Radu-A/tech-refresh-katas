// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// function sumDigits(n: number): number {
//   return n
//     .toString()
//     .split("")
//     .filter((item) => item !== "-")
//     .reduce((acc, curr) => (acc += Number(curr)), 0);
// }

function sumDigits(number: number): number {
  return Math.abs(number).toString().split('').reduce((acc, digit) => parseInt(digit) + acc, 0)
}

// sumDigits(10);
// sumDigits(99);
sumDigits(-32);
