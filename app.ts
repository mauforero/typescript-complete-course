// Basic Types
// string
let myName: string = 'Andrés';
myName = 'Mauricio';
console.log(myName);
console.log(typeof myName);

// number
let myAge: number = 32;
myAge = 32.5;
console.log(myAge);
console.log(typeof myAge);

// boolean
let hasHobbies: boolean = false;
hasHobbies = true;
console.log(hasHobbies);
console.log(typeof hasHobbies);

// arrays
let hobbies: string[] = [
    "Cooking",
    "Reading",
    "Coding"
];
console.log(hobbies);

let anyArray: any[] = [
    "A string",
    true,
    25
];
anyArray.push(3.5);
console.log(anyArray);

// tuples
let nameAndAge: [string, number] = ["Mauricio", 32];
console.log(nameAndAge);

// enum
enum Color {
    Gray,
    Green = 100,
    Yellow = 2,
    Blue
};
let myColor = Color.Green;
console.log(myColor);
myColor = Color.Blue;
console.log(myColor);

// The Any type
let car: any = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);