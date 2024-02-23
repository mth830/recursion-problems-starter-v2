/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:
console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

***********************************************************************/

// your code here
function reverse(str) {
  if (str.length === 0) return "";
  let letter = str[0];
  let rest = str.slice(1);
  return reverse(rest) + letter;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
