// Task
// Write a function that chooses which option to take (A, B, C, or D) using the following rules:

// Never pick an option if its skill is in the blacklist.
// If at least one offered skill belongs to the preferred set, choose the one among them with the highest percentage.
// If no offered skill is preferred but at least one is neutral (not blacklisted and not preferred), choose the neutral one with the highest percentage.
// If all three skills are blacklisted, choose D (for money).
// If several options have the same highest percentage at the step you are in, you may return any of them.
// Note: Skills may appear multiple times, and pairs can include duplicates.

// Input:

// preferred: set of strings (skills you strongly prefer).
// blacklisted: set of strings (skills you should never take).
// options: tuple of exactly 3 pairs (skill, percentage), representing options A, B, and C in order.
// skill: a string with the name of the skill
// percentage: a positive integer between 10 and 100
// Output:

// A single character:
// "A", "B", or "C" → chosen option.
// "D" → if taking money.

const preferred = new Set(["attack", "defense"]);
const blacklisted = new Set(["luck"]);
const options = [
  ["luck", 25],
  ["speed", 20],
  ["defense", 15],
];
// const options = [
//   ["luck", 25],
//   ["defense", 15],
//   ["attack", 20],
// ];

function pick(preferred, blacklisted, options) {
  const abc = ["A", "B", "C"];
  for (let i = 0; i < abc.length; i++) {
    options[i].push(abc[i]);
  }
  const oSorted = options.sort((a, b) => a[1] - b[1]);
  console.log(preferred);
  console.log(blacklisted);
  console.log(options);

  let selected = options.filter((option) => preferred.has(option[0]));

  if (selected.length == 0) {
    selected = options.filter((option) => !blacklisted.has(option[0]));
  }
  console.log(selected);

  if (selected.length == 0) {
    return "D"; // show me the money!
  }
  const sorted = selected.sort((a, b) => a[1] - b[1]);
  return sorted[sorted.length - 1][2];
}

// function pick(preferred, blacklisted, options) {
//   console.log(preferred)
//   console.log(blacklisted)
//   console.log(options)
//   return "D"; // show me the money!
// }

console.log(pick(preferred, blacklisted, options));
