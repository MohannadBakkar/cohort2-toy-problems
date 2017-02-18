/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
<<<<<<< HEAD
 */
=======
*/
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
<<<<<<< HEAD
 */

 Array.prototype.isSubsetOf = function (arr) {
 	console.log(this)
 	var result = false;
 	for (var i = 0; i < this.length; i++) {
 		if(!Array.isArray(arr[i])){

 			if(arr.includes(this[i])){
 				result = true;
 			}else{
 				result = false;
 			}
 		}else{
 			for(var key in arr[i]){
 				if(arr[i][key] === this[i]){
 					result = true;
 				}else{
 					result = false;
 				}
 			}
 		}
 	}
 	return result;
 }
=======
*/

Array.prototype.isSubsetOf = function (arr) {

}
>>>>>>> ec1197ded368e7aad2cc2c29d5059a3905f42645
