/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ].3
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

 var a = [
 [1,2,3,4],
 [5,6,7,8],
 [9,'A','B','C'],
 ['D','E','F','G']
 ];
 
 var aa = [
 		   [1,2,3,4],
           [5,6,7,8],
 		   [9,'A','B','C']
 		  ];
 

 var rotateMatrix =function (matrix) {

 	var arr = []

 	if(matrix.length !== matrix[0]){
 		for (var i = 0; i < matrix.length; i++) {
 			var testArr = []
 			for (var j = 0; j < matrix[i].length; j++) {
 				if(i === undefined){
 					break;
 				}
 				testArr.unshift(matrix[j][i])
 			}
 			arr.push(testArr)
 		}
 		return arr
 	}else{
 		for (var i = 0; i < matrix.length; i++) {
 			var testArr = []
 			for (var j = 0; j < matrix[i].length; j++) {
 				testArr.unshift(matrix[j][i])
 			}
 			arr.push(testArr)
 		}	
 	}
 	return arr;
 }

