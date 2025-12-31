// A leap year (in the Gregorian calendar) occurs:

// In every year that is evenly divisible by 4.
// Unless the year is evenly divisible by 100, in which case it's only a leap year if the year is also evenly divisible by 400.
// Some examples:

// 1997 was not a leap year as it's not divisible by 4.
// 1900 was not a leap year as it's not divisible by 400.
// 2000 was a leap year!

function isLeap(year: number): boolean {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}
// function isLeap(year: number): boolean {
//   if (year % 4 == 0) {
//     if (year % 400 == 0) {
//       return true;
//     } else if (year % 100 == 0) {
//       return false;
//     } else {
//       return true;
//     }
//   } else {
//     return false;
//   }
// }

isLeap(1997);
isLeap(1900);
isLeap(2000);
