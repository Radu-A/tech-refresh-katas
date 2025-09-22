"Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.";

// const example = ["Keep", "Remove", "Keep", "Remove", "Keep"];
const example = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// const example = ["h", "s", "g", "2"];

function removeEveryOther(arr) {
  for (i = arr.length; i >= 0; i--) {
    if (i % 2 != 0) {
      arr.splice(i, 1);
    }
  }
  return arr
}

console.log(removeEveryOther(example));
