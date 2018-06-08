"use strict";
// Basic Types
// string
var myName = 'Andrés';
myName = 'Mauricio';
console.log(myName);
console.log(typeof myName);
// number
var myAge = 32;
myAge = 32.5;
console.log(myAge);
console.log(typeof myAge);
// boolean
var hasHobbies = false;
hasHobbies = true;
console.log(hasHobbies);
console.log(typeof hasHobbies);
// arrays
var hobbies = [
    "Cooking",
    "Reading",
    "Coding"
];
console.log(hobbies);
var anyArray = [
    "A string",
    true,
    25
];
anyArray.push(3.5);
console.log(anyArray);
// tuples
var nameAndAge = ["Mauricio", 32];
console.log(nameAndAge);
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);
// The Any type
var car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
// Functions
function printMyName() {
    return myName;
}
// void function
function printSomething() {
    console.log("Something, duh!");
}
// Argument types
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(printMyName());
printSomething();
console.log(multiply(25, 32));
// function types
var multiplyTwo;
multiplyTwo = multiply;
console.log(multiplyTwo(2, 5));
// Objects
var person = {
    name: "Mauricio",
    age: 32
};
console.log(person);
person = {
    name: "Ricardo",
    age: 34
};
console.log(person);
// A complex object
var complex = {
    data: [100, 3.1415, 32],
    output: function (none) {
        return this.data;
    }
};
console.log(complex);
