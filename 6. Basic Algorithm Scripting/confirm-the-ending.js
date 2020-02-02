/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Confirm the Ending
    ------------------


    Challenge
    ---------

    Check if a string (first argument, str) ends with the given 
    target string (second argument, target).

    This challenge can be solved with the .endsWith() method, which was 
    introduced in ES2015. But for the purpose of this challenge, we would 
    like you to use one of the JavaScript substring methods instead.


    Expected Results
    ----------------

    confirmEnding("Bastian", "n") should return true.
   
    confirmEnding("Congratulation", "on") should return true.
   
    confirmEnding("Connor", "n") should return false.
*/

/*
    Challenge Solution
    ------------------
*/

function confirmEnding(str, target) {

  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));