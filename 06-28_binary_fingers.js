binString = "101";

function binaryFingers(binString) {
  fingersArray = ["Thumb", "Index", "Middle", "Ring", "Pinkie"];
  hand = [];
  for (let i = binString.length; i > 0; i--) {
    if (binString[i-1] == 1) {
      hand.push(fingersArray[i-1]);
    }
  }
  return hand;
}

console.log(binaryFingers(binString));
