// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.
// If a word starts with a number or special character, skip the word and leave it out of the result.
// Input String will not be empty.
// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

string = "hey You, Sort me Already!";

function capitalsFirst(str) {
  let words = str.split(" ");
  let orderedWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/^[A-Z]/gm)) {
      orderedWords.push(words[i]);
    }
  }
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/^[a-z]/gm)) {
      orderedWords.push(words[i]);
    }
  }
  return orderedWords.join(" ");
}

console.log(capitalsFirst(string));
