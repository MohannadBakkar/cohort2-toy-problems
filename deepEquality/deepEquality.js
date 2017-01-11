/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2)
    // seconed way to solve it
    var result = true
    var keysObj1 = Object.keys(obj1)
    var keysObj2 = Object.keys(obj2)
    var valObj1 = Object.values(obj1)
    var valObj2 = Object.values(obj2)
    for (var i = 0; i < keysObj1.length; i++) {
      if(keysObj1[i] === keysObj2[i])
        result = true
    }else{
      result = false
    }
    if(result === false){
      return false
    }else{
      for (var i = 0; i < valObj1.length; i++) {
        if(typeof valObj1[i] !== "object" && valObj2[i] !=="object" && valObj1[i] === valObj2[i]){
          result = true
        }else{
          deepEquals(valObj1,valObj2)
        }
      }
    }
    return result
  }