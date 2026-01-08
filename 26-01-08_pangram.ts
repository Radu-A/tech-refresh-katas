// Your task is to figure out if a sentence is a pangram.

// A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

// For this exercise, a sentence is a pangram if it contains each of the 26 letters in the English alphabet.

const string = "The quick brown fox jumps over the lazy dog";

function isPangram(string: string): boolean {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  for (const letter of abc) {
    if (!string.toLocaleLowerCase().match(letter)) return false;
  }
  return true;
}
isPangram("The quick brown fox jumps over the lazy dog");
isPangram("a quick movement of the enemy will jeopardize five gunboats");
isPangram("five boxing wizards jump quickly at it");
isPangram("7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog");
