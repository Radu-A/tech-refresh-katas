
numArray=[13, 11, 12, 4, 67, 82, 3, 44];


function pairSum(arr) {
	sum = 0;
	for (let i=0; i < numArray.length; i++) {
		if ( arr[i]%2 == 0) {
			sum = sum + arr[i]
		}
	}
	return sum
}

console.log(pairSum(numArray));

