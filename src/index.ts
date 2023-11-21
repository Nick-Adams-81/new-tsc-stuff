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

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

console.log(Direction1.Up);

// objects
// custom type
type User = {
    id: number,
    name: string
}
const User: User = {
    id: 2,
    name: "donnie"
}

// type assertion
let cid: any = 1;

let customerId = <number>cid;
let customId = cid as number;

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(4, 6));

const log = (message: string | number): void => {
    console.log(message);
}

console.log(log("hello"));

// interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
};

const user1: UserInterface = {
    id: 23,
    name: "John Doe",
    age: 22
};

interface mathFunc {
    (x: number, y: number): number;
} 

const add2: mathFunc = (x: number, y: number): number => x + y;
const subtract: mathFunc = (x: number, y: number): number => x - y;

// classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id,
        this.name = name
    }

    register() {
        return `${this.name} is now registered`;
    }
}

const nick = new Person(1, "Nick");
const dave = new Person(2, "Dave");

console.log(dave.register());

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(5, "Jane Doe", "manager");
console.log(emp.register());



