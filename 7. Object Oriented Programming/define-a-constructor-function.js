/*
    Object Oriented Programming
    ===========================
*/

/*
    Define a Constructor Function
    -----------------------------

    Constructors are functions that create new objects. 
    They define properties and behaviors that will belong 
    to the new object. Think of them as a blueprint for the 
    creation of new objects.

    function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    }

    This constructor defines a Bird object with properties 
    name, color, and numLegs set to Albert, blue, and 2, respectively.
    Constructors follow a few conventions:

    Constructors are defined with a capitalized name to distinguish 
    them from other functions that are not constructors.
    Constructors use the keyword this to set properties of the object 
    they will create. Inside the constructor, this refers to the new object it will create.
    Constructors define properties and behaviors instead of returning a value as other functions might.


    Challenge
    ---------

    Create a constructor, Dog, with properties name, color, 
    and numLegs that are set to a string, a string, and a number, respectively.


    Expected Results
    ----------------

    Dog should have a name property set to a string.

    Dog should have a color property set to a string.

    Dog should have a numLegs property set to a number.

*/

/*
    Challenge Solution
    ------------------
*/

function Dog() {
  (this.name = "Spot"), 
  (this.color = "Brown"), 
  (this.numLegs = 4);
}