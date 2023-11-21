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
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
;
console.log(Direction1.Up);
