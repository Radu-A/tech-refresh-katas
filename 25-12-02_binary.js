// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base

// const arr = [1, 2, "a"];
const arr = [{}, 4, 42, true, 33];

function arr2bin(arr) {
  return arr
    .reduce(
      (acc, curr) => (typeof curr === "number" ? (acc += curr) : (acc += 0)),
      0
    )
    .toString(2);
}

console.log(arr2bin(arr));
