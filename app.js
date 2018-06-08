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
