// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const phrase = "The quick brown fox jups over the lazy dog";

const isPangram = (phrase: string): boolean => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  for (const letter of letters) {
    if (phrase.toLocaleLowerCase().indexOf(letter) < 0) {
      return false;
    }
  }
  return true;
};

isPangram(phrase);

// const isPangram = (phrase: string): boolean => {
//   for (let i = 97; i <= 122; i++) {
//     for (const char of phrase) {

//     }
//   }
//   return true;
// };
