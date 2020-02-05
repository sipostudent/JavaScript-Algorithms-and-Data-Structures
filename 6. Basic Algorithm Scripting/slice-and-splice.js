/*
    Basic Algorithm Scripting
    =========================
*/

/*
    Slice and Splice
    ----------------


    Challenge
    ---------

    You are given two arrays and an index.

    Use the array methods slice and splice to copy each element 
    of the first array into the second array, in order.

    Begin inserting elements at index n of the second array.

    Return the resulting array. The input arrays should remain 
    the same after the function runs.


    Expected Result
    ---------------

    frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
*/

/*
    Challenge Solution
    ------------------
*/

function frankenSplice(arr1, arr2, n) {
  let resultArray = [];

  resultArray.push(...arr2.slice(0, n));
  resultArray.push(...arr1);
  resultArray.push(...arr2.slice(n, arr2.length));

  return resultArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

