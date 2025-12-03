// TODO: Refactor and shorten the function
const age = 25;

function describeAge(age) {
  return (
    "You're a(n) " +
    (age < 13
      ? "kid"
      : age > 17
      ? age > 64
        ? "elderly"
        : "adult"
      : "teenager")
  );
}

console.log(describeAge(age));
