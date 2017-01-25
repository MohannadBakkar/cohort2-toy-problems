/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
    */

    var spiralTraversal = function(matrix){
    	var arr = []
    	for (var i = 0; i < matrix.length; i++) {
    		for (var j = 0; j < matrix.length; j++) {
    			if(i === matrix.length-1){
    				arr.push(matrix[i].pop())
    			}else if(i>0){
    				arr.push(matrix[i].pop())
    				i++
    			}else{
    				arr.push(matrix[i].shift())
    			}
    		}
    	}	
    	return arr

    };
var spiralTraversal1 = function(matrixs){
  var arr = [];
    var insideArr = function(matrix) {
        if (matrix.length === 0) {
            return
        }
        arr = arr.concat(matrix.shift());
        for (var i=1; i < matrix.length - 1; i++) {
            arr.push(matrix[i].pop());
        }
        arr = arr.concat(matrix.pop().reverse());
        for (var j=matrix.length -2; j > 0; j--) {
            arr.push(matrix[j].shift());
        }
        return insideArr(matrix);
    };
    insideArr(matrixs);
    return arr;
};