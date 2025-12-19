/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */

const array = [
  ["    *    "],
  ["   ***   "],
  ["  *****  "],
  [" ******* "],
  ["*********"],
  ["    #    "],
];

function drawTree(height, ornament, frequency) {
  const lineLength = 1 + (2 * (height - 1)); // Ojo!!!!!!!!
  const half = Math.floor(lineLength / 2);
  const tree = []
  for (let i = 0; i < height; i++) {
	const whiteSpaces = half - j;
	const leafs = 1 + (j * 2);
	const line = ' '.repeat(whiteSpaces) + '*'.repeat(leafs) + ' '.repeat(whiteSpaces);
	tree.push(line);
  }
  return "";
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
