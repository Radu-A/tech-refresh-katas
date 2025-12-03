// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Example
// input: "abcd", [0, 3, 1, 2]
// output: "acdb"

function scramble(str, arr) {
  const sort = [];
  for (i = 0; i < str.length; i++) {
    const index = arr.indexOf(i);
    sort.push(str[index]);
  }
  return sort.join("");
}

console.log(scramble("abcd", [0, 3, 1, 2]));
