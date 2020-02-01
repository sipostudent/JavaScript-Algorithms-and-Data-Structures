/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Reverse a String
    ----------------

    Reverse the provided string.

    You may need to turn the string into an array before you can reverse it.

    Your result must be a string.
*/

/*
    Challenge Solution (using Methods)
    ----------------------------------
*/

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));
// console.log(reverseString('Howdy'));
// console.log(reverseString('Greetings from Earth'));

/*
    Challenge Solution (using Algorithm Scripting)
    ----------------------------------------------
*/

function reverseString(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }

  return result;
}

console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));