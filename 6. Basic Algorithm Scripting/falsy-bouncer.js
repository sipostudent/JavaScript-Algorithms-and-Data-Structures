/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Falsy Bouncer
    -------------


    Challenge
    ---------

    Remove all falsy values from an array.

    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

    Hint: Try converting each value to a Boolean.

    
    Expected Result
    ---------------

    bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
    
    bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
    
    bouncer([false, null, 0, NaN, undefined, ""]) should return [].
    
    bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
*/

/*
    Challenge Solution
    ------------------
*/

function bouncer(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
