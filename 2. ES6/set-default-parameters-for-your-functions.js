/*
    ES6
    ===
*/

/*
    Set Default Parameters for Your Functions
    -----------------------------------------

    In order to help us create more flexible functions, ES6 
    introduces default parameters for functions.

    Check out this code:

        const greeting = (name = "Anonymous") => "Hello " + name;

        console.log(greeting("John")); // Hello John
        console.log(greeting()); // Hello Anonymous

    The default parameter kicks in when the argument is not specified 
    (it is undefined). As you can see in the example above, the parameter 
    name will receive its default value "Anonymous" when you do not provide 
    a value for the parameter. You can add default values for as many 
    parameters as you want.


    Challenge
    ---------

    Modify the function increment by adding default parameters so that it 
    will add 1 to number if value is not specified.


    Expect Results
    --------------

    The result of increment(5, 2) should be 7.

    The result of increment(5) should be 6.

    A default parameter value of 1 should be used for value.
*/

/*
    Challenge Solution
    ------------------
*/

const increment = (number, value =1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6



