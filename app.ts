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


// Functions
function printMyName(): string {
    return myName;
}

// void function
function printSomething(): void {
    console.log("Something, duh!");
}

// Argument types
function multiply(n1: number, n2: number): number {
    return n1 * n2;
}
console.log(printMyName());
printSomething();
console.log(multiply(25, 32));

// function types
let multiplyTwo: (a: number, b: number) => number;
multiplyTwo = multiply;
console.log(multiplyTwo(2, 5));

// Objects
let person: { name: string, age: number } = {
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
let complex: { data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.1415, 32],
    output: function(none: boolean): number[] {
        return this.data;
    }
};
console.log(complex);
