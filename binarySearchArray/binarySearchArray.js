/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

 var binarySearch = function (array, target) {
 	var middle = Math.floor(array.length / 2) 
 	if(target === array[middle] ){
 		return middle
 	}else if(target < array[middle]){
 		var arr = []
 		arr = array.slice(0,middle)
 		binarySearch(arr,target)
 	}else{
 		var arr = []
 		arr = array.slice(middle+1 , array.length)
 		binarySearch(arr,target)
 	}	
 };

