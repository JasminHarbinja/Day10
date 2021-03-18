// Only change code below this line
var myFood = {
    vegatable: "carrot",
    fruit: "orange",
    drink: "water"
};

function myFunction(myFood) {
    var vegatableValue = myFood["vegatable"];
    var fruitValue = myFood["fruit"];
    var drinkValue = myFood["drink"];

    return { vegatableValue, fruitValue, drinkValue };
}

// Only change code above this line
console.log(myFunction(myFood)); // Change this line
module.exports = myFunction(myFood);