
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	var obj = DIGIT_VALUES
	var arr = romanNumeral.split('')
	var total = 0
	// var elems = Object.values(obj)
	var num;
	// for(var key in obj){
	// 	for (var i = 0; i < arr.length; i++) {
	// 		if(arr[i] === key){
	// 			total += obj[key]
	// 			num = obj[key]
	// 		}
	// 	}
	// }
	// return total
	var arrKey = Object.keys(obj)
	var arrVal = Object.values(obj)
	for (var i = 0; i < arr.length; i++) {
		if(arrKey.indexOf(arr[i]) < arrKey.indexOf(arr[i+1])){
			total = 
		}
	}
}