/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Title Case a Sentence
    ---------------------


    Challenge
    ---------

    Return the provided string with the first letter of each word capitalized. 
    Make sure the rest of the word is in lower case.

    For the purpose of this exercise, you should also capitalize connecting 
    words like "the" and "of".


    Expected Result
    ---------------

    titleCase("I'm a little tea pot") should return a string.
    
    titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
    
    titleCase("sHoRt AnD sToUt") should return Short And Stout.
    
    titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

/*
    Challenge Solution
    ------------------
*/

function titleCase(str) {
  str = str.toLowerCase().split(' ');

  for (let i = 0; i < str.length; i++) {
  str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
}

return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

/*
    Challenge Explanation
    ---------------------

    1. Convert the whole string to lowercase. 

    2. Split the string into an array of words utilising as the delimiter. 

    3. Loop through each word in the array. 

    4. Capitalise the first letter, and lowercase the remainder of the string. 

    5. Consolidate the entirety of the words back together into a string.
*/
