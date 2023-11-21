// compile ts to js file command: tsc

// primitive types
let myName: string = "Nick";
let isOld: boolean = true;
let myAge: number = 42;
console.log(`Name: ${myName}, is old? ${isOld}`);

// any type
let x: any = "Hi there!";
x = 45;

// arrays
let nums: number[] = [1,3,5,6];
let jobs: string[] = ["dealer", "trash man", "poker dealer"];

// tuple
let person: [number, string, boolean] = [42, "Nick", true];
// tuple array
let employee: [number, string][];
employee = [
    [1, "Nick"],
    [2, "jack"],
    [3, "john"]
]

// unions
let id: string | number = 22;
id = "12";

// enums
enum Direction1 {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
};

console.log(Direction1.Up);
