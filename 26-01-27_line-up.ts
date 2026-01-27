// function format(name: string, number: number): string {
//   const start = `${name}, you are the ${number}`;
//   const finish = " customer we serve today. Thank you!";
//   if (number % 10 === 1 && number !== 11) return start + "st" + finish;
//   if (number % 10 === 2 && number !== 12) return start + "nd" + finish;
//   if (number % 10 === 3 && number !== 13) return start + "rd" + finish;
//   return start + "th" + finish;
// }

function format(name: string, number: number): string {
  const start = `${name}, you are the ${number}`;
  const finish = " customer we serve today. Thank you!";
  if (number % 10 === 1 && number % 100 !== 11) return start + "st" + finish;
  if (number % 10 === 2 && number % 100 !== 12) return start + "nd" + finish;
  if (number % 10 === 3 && number % 100 !== 13) return start + "rd" + finish;
  return start + "th" + finish;
}

console.log((112 / 100) % 1);

console.log(format("Bosta", 1));
console.log(format("Bosta", 11));
console.log(format("Bosta", 21));
console.log(format("Bosta", 2));
console.log(format("Bosta", 12));
console.log(format("Bosta", 22));
console.log(format("Bosta", 3));
console.log(format("Bosta", 13));
console.log(format("Bosta", 23));
console.log(format("Bosta", 112));
