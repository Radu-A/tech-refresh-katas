// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// The order does not have to be strict: a sorted array can contain consecutive duplicates, e.g. [1, 1, 2, 3] is sorted in ascending order.

// It is guaranteed that there will always be a unique valid answer. More precisely:

// there will be no arrays with less than 2 elements
// there will be no arrays where all elements are equal

function isSortedAndHow(array: number[]): string {
  const asc = [...array].sort((a, b) => a - b);
  const desc = [...array].sort((a, b) => b - a);
  if (JSON.stringify(array) === JSON.stringify(asc)) {
    return "yes, ascending";
  } else if (JSON.stringify(array) === JSON.stringify(desc)) {
    return "yes, descending";
  } else {
    return "no";
  }
}

// console.log(isSortedAndHow([1, 3, 9, 4]));
// console.log(isSortedAndHow([4, 3, 1, 9]));
// console.log(isSortedAndHow([1, 2, 3, 4]));
// console.log(isSortedAndHow([4, 3, 2, 1]));
isSortedAndHow([1, 3, 9, 4]);
isSortedAndHow([4, 3, 1, 9]);
isSortedAndHow([1, 2, 3, 4]);
isSortedAndHow([4, 3, 2, 1]);
