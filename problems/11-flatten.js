/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/

// your code here
let flatten = function (arr) {
  let result = [];
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result.push(...flatten(element))
    } else {
      result.push(element)
    }
  });
  return result;
}
//console.log(flatten([])); // []
//console.log(flatten([1, 2])); // [1, 2]
//console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
//console.log(flatten([1, [2, 3,[4,5,[6,7,8]]]])); // [1, 2, 3, 4, 5, 6, 7, 8]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
