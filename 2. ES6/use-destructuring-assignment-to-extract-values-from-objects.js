/*
    ES6
    ===
*/

/*
    Use Destructuring Assignment to Extract Values from Objects
    -----------------------------------------------------------

    Destructuring assignment is special syntax introduced in ES6, for neatly 
    assigning values taken directly from an object.

    Consider the following ES5 code:

        const user = { name: 'John Doe', age: 34 };

        const name = user.name; // name = 'John Doe'
        const age = user.age; // age = 34

    Here's an equivalent assignment statement using the ES6 destructuring syntax:

    const { name, age } = user;
    // name = 'John Doe', age = 34

    Here, the name and age variables will be created and assigned the values of 
    their respective values from the user object. You can see how much cleaner 
    this is.

    You can extract as many or few values from the object as you want.


    Challenge
    ---------

    Replace the two assignments with an equivalent destructuring assignment. 
    It should still assign the variables today and tomorrow the values of today 
    and tomorrow from the HIGH_TEMPERATURES object.


    Expected Results
    ----------------

    You should remove the ES5 assignment syntax.

    You should use destructuring to create the today variable.

    You should use destructuring to create the tomorrow variable.
*/

/*
    Challenge Solution
    ------------------
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// change code below this line

const {
    today,
    tomorrow
} = HIGH_TEMPERATURES;
const {
    yesterday
} = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80