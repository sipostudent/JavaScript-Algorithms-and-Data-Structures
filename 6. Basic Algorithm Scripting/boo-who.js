/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Boo Who
    -------


    Challenge
    ---------

    Check if a value is classified as a boolean primitive. Return true or false.

    Boolean primitives are true and false.


    Expected Results
    ----------------

    booWho(null) should return false.
    booWho(true) should return true.
    booWho(false) should return true.
    booWho([1, 2, 3]) should return false.
*/

/*
    Challenge Solution
    ------------------
*/

function booWho(bool) {

  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
