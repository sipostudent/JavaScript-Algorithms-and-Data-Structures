/*
    Basic Data Structures
    =====================
*/

/*
    Copy Array Items Using slice()
    ------------------------------

    let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

    let todaysWeather = weatherConditions.slice(1, 3);
    // todaysWeather equals ['snow', 'sleet'];
    // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

    In effect, we have created a new array by extracting elements from an existing array.

    We have defined a function, forecast, that takes an array as an argument. 
    Modify the function using slice() to extract information from the argument 
    array and return a new array that contains the elements 'warm' and 'sunny'.
*/

function forecast(arr) {
    // change code below this line
    let extractedForecast = arr.slice(2, 4);
    return extractedForecast;
  }
  
  // do not change code below this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
