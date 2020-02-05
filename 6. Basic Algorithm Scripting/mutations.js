/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Mutations
    ---------


    Challenge
    ---------

    Return true if the string in the first element of the array contains
    all of the letters of the string in the second element of the array.

    For example, ["hello", "Hello"], should return true because all of the
    letters in the second string are present in the first, ignoring case.

    The arguments ["hello", "hey"] should return false because the string
    "hello" does not contain a "y".

    Lastly, ["Alien", "line"], should return true because all of the letters
    in "line" are present in "Alien".


    Expected Results
    ----------------

    mutation(["hello", "hey"]) should return false.
    
    mutation(["hello", "Hello"]) should return true.
    
    mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
*/

/*
    Challenge Solution
    ------------------
*/

function mutation(arr) {
  let secondElement = arr[1].toLowerCase();
  let firstElement = arr[0].toLowerCase();
  
  for (var i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));