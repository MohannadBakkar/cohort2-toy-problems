/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var firstMax = Math.max(...array)
	var FI = array.indexOf(firstMax)
	array.splice(FI,1)
	// console.log(firstMax+ ' ' + FI)

	var secondMax = Math.max(...array)
	var SI = array.indexOf(secondMax)
	array.splice(SI,1)
	// console.log(secondMax + ' ' + SI )

	var thirdMax = Math.max(...array)
	var TI = array.indexOf(thirdMax)
	array.splice(TI,1)
	// console.log(thirdMax + ' ' + TI)
return firstMax * secondMax * thirdMax

	
};




