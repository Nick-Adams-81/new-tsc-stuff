"use strict";
// compile ts to js file command: tsc
// primitive types
let myName = "Nick";
let isOld = true;
let myAge = 42;
console.log(`Name: ${myName}, is old? ${isOld}`);
// any type
let x = "Hi there!";
x = 45;
// arrays
let nums = [1, 3, 5, 6];
let jobs = ["dealer", "trash man", "poker dealer"];
// tuple
let person = [42, "Nick", true];
// tuple array
let employee;
employee = [
    [1, "Nick"],
    [2, "jack"],
    [3, "john"]
];
// unions
let id = 22;
id = "12";
// enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up);
const User = {
    id: 2,
    name: "donnie"
};
// type assertion
let cid = 1;
let customerId = cid;
let customId = cid;
// functions
const add = (a, b) => {
    return a + b;
};
console.log(add(4, 6));
const log = (message) => {
    console.log(message);
};
console.log(log("hello"));
;
const user1 = {
    id: 23,
    name: "John Doe",
    age: 22
};
const add2 = (x, y) => x + y;
const subtract = (x, y) => x - y;
// classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const nick = new Person(1, "Nick");
const dave = new Person(2, "Dave");
console.log(dave.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(5, "Jane Doe", "manager");
console.log(emp.register());
