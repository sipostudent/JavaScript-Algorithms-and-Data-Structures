/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Chunky Monkey
    -------------


    Challenge
    ---------

    Write a function that splits an array (first argument) into groups the 
    length of size (second argument) and returns them as a two-dimensional array.

    
    Expected Results
    ----------------

    chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

    chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

*/

/*
    Challenge Solution
    ------------------
*/

function chunkArrayInGroups(arr, size) {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));


