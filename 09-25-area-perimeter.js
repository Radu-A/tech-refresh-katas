// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const polygon = [ 3, 5 ];
// const polygon = [ 4, 4 ];

const areaOrPerimeter = function(l , w) {
  return l == w ? l * w : (l + w) * 2
};

// const areaOrPerimeter = function(l , w) {
//   if (polygon[0] == polygon[1]) {
//     return polygon[0]*polygon[1]
//   } else {
//     return polygon[0]+polygon[1]
//   }
// };

console.log(areaOrPerimeter(...polygon));
