/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 


Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
1. Those that do not contain 3 (all of these are subsets of [1, 2]).
2. For every subset that does not contain 3, there is also a corresponding
subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr){
  let allSets =[[]]
  if( arr.length === 0) return allSets;
  arr.forEach((x,i)=>{
  let first = x;
  let after = [...arr.slice(i+1)];
  let rest = subsets(after)
  rest.forEach(elem=>{
    allSets.push([first,...elem])
  })
})
  return allSets;  
}
//console.log(subsets([])) // [[]]
//console.log(subsets([1])) // [[], [1]]
//console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
//console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
