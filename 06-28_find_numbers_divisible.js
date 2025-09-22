
const numArray = [1, 2, 3, 4, 5, 6];
num = 3;

// function divisibleBy(numbers, divisor) {
//   divisibleNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % divisor == 0) {
//       divisibleNumbers.push(numbers[i]);
//     }
//   }
//   return divisibleNumbers;
// }

function divisibleBy(numbers, divisor) {
  return numbers.filter(num => num%divisor == 0)
}

console.log(divisibleBy(numArray, num));
