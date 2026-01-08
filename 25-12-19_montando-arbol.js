/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */

function drawTree(height, ornament, frequency) {
  const lineLength = 1 + 2 * (height - 1);
  const half = Math.floor(lineLength / 2);
  let tree = "";
  let count = 1;
  for (let i = 0; i < height; i++) {
    const whiteSpaces = " ".repeat(half - i);
    const leafs = 1 + i * 2;
    let pattern = "";
    for (let j = 0; j < leafs; j++) {
      if (count % frequency !== 0) {
        pattern += "*";
      } else {
        pattern += ornament;
      }
      count++;
    }
    tree += whiteSpaces + pattern + "\n";
  }
  const trunk = " ".repeat(half) + "#";
  tree += trunk;
  return tree;
}

drawTree(5, "o", 2);
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, "@", 3);
//   *
//  *@*
// *@**@
//   #

drawTree(4, "+", 1);
//    +
//   +++
//  +++++
// +++++++
//    #
