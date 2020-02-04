/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Truncate a String
    -----------------


    Challenge
    ---------

    Truncate a string (first argument) if it is longer than the given 
    maximum string length (second argument). Return the truncated string 
    with a ... ending.


    Expected Results
    ----------------
    truncateString("A-tisket a-tasket A green and yellow basket", 8) 
    should return "A-tisket...".
*/

/*
    Challenge Solution
    ------------------
*/

function truncateString(str, num) {

  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

/*
    Challenge Explanation
    ---------------------

    1. Create an if statement to decide one of two results.

    2. If the string length (str) is more prominent than the number (num), it gets shortened. 
    Then, a slice of the string is returned beginning at character 0, and ending 
    at num. Finally, '...' is appended onto the end of the string. 

    3. If the above circumstance is not valid, it implies the string length 
    is less than the truncation (num). As such, you can return the full length 
    of the string.
*/

