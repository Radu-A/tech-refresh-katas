// Write a function that checks if a given string (case insensitive) is a palindrome.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

const string = "maam"

function isPalindrome(x) {
	x = x.toUpperCase()
	const i = x.length / 2
	const first = x.slice(0, i)
	const second = i % 2 == 0 ? x.slice(i,x.length) : x.slice(i+1,x.length)
	const secondInverted = second.split("").reverse().join("")
	console.log(first);
	console.log(secondInverted);
	return first == secondInverted ? true : false
}

console.log(isPalindrome(string));
