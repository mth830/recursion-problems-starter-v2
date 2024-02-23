/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

***********************************************************************/

// your code here
function permutations(arr) {
  let sets = [];
  if (arr.length === 0) return [];
  let curr = arr[0];
  if (arr.length === 1) return [curr];
  arr.forEach((elem, i) => {
    let rest = [...arr.slice(0,i),...arr.slice(i+1)]
    let perms = permutations(rest);
    perms.forEach(perm => {
      if (Array.isArray(perm)) {
        sets.push([elem, ...perm])
      } else {
        sets.push([elem, perm])
      }
    })
  });
    return sets;
}
console.log(permutations([1, 2])) // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])) 
// [[1, 2, 3], [1, 3, 2],
// [2, 1, 3], [2, 3, 1],
// [3, 1, 2], [3, 2, 1]]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
