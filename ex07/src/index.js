// Creat lion object here
var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};
// End of lion object


function myFunction(propName) {
    // Only change code below this line
    delete lion[propName];
    return lion;
    // Only change code above this line
}
console.log(myFunction("roar")); // Change this line
module.exports = myFunction;