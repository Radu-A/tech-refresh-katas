
const numArray = [1, 2, 3, 4, 5];

// function invert(array) {
// 	for (let i=0; i<array.length; i++) {
// 		array.splice(i, 1, -array[i])
// 	}
// 	return array
// }

function invert(array) {
	return array.map(num => -num)
}

console.log(invert(numArray))