/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Find the Longest Word in a String
    ---------------------------------


    Challenge
    ---------

    Return the length of the longest word in the provided sentence.

    Your response should be a number.


    Expected Results
    ----------------

    findLongestWordLength("The quick brown fox jumped over the lazy dog") 
    should return a number.

    findLongestWordLength("The quick brown fox jumped over the lazy dog") 
    should return 6.

    findLongestWordLength("May the force be with you") should return 5.

    findLongestWordLength("Google do a barrel roll") should return 6.

    findLongestWordLength("What is the average airspeed velocity of an unladen swallow")
    should return 8.

    findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") 
    should return 19.
*/

/*
    Challenge Solution
    ------------------
*/

function findLongestWordLength(str) {
  let longestWord = "";
  let words = str.split(" ");

  for(let i = 0; i < words.length; i += 1) {
    let seperateWord = words[i];
    if (seperateWord.length > longestWord.length) {
      longestWord = seperateWord;
    }
  }

  return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
