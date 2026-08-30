// let a = 10
// a = 'ram'  -> invalid code in ts because a is number not string

// ES6 -> converted into Vanilla JS

// let b = 10;
// let c: Number = 10;

// let address: string = 'Kathmandu';
// const age: number = 40;
// const isMale: boolean = true

// Using TS, codes will be lengthy but is more readable and easier to debug


// 7 primitive data types in JS


// dynamic data type in TS but below code is not suggested
// let x: any = 'hello'

// Literal Types
// below code means that statusCode is 200 and cannot be changed later
// let statusCode: 200 
// statusCode = 300

// below code directly adds value to statusCode
// let statusCode: 200 | 500 | 400
// statusCode = 200 //ok
// statusCode = 300 // gives error because status code is assignable to 200 500 or 400 only

// Union Type (Below code means that cords can be number also string also)
// type cords = number | string
// let id: cords = 40
// let id: cords = '40'

// const latitude: cords = 4.123
// const longitude: cords = '5.622'
// const longitude: cords = null // gives error says null is not assignable to type cords

// we made dynamic type called numberString whose value can be either number or string
// type numberString = number | string
// type annotation
// const latitude1: numberString = 4.123
// const longitude2: numberString = '5.622'

// arrays
// let numb: number[] = [1, 2, 6, 8]
// let str: string[] = ['1','2','6','8']
// numb.push(4)
// str.push(4) // gives error

// How to make arrays which can take both number also string
// let option: (string | number)[] = [3, 4, 'ram', 5]

// but if you use any then it is Javascript
// let option1: (any)[] = [3,4, 'ram', 5]

// tuple in TS -> tuple is popular in python but not in JS
// let arr: [string, string, boolean, number] = ['3', '67', true, 5];

// let person1 : [string, string, boolean, number] = ['Kathmandu', 'Ajit', true, 25]
// let person2 : [string, boolean][]

// person2 = [
//     ['ram', true],
//     ['gopal', false]
// ]

// enums
// collection of constants
// organize code in TS

// enum Earth {
//     GRAVITATION = 9.8,
//     SPEED
// }
// console.log(Earth.GRAVITATION);

// to see console.log here first run tsc index.ts, and then node index.js
// this will be hassle so for that we need one package named ''
// need to install package.json for that: npm i -g ts-node

// interfaces
// we will use for object

// interface User {
//     name: string;
//     address: string;
//     age: number
// }

// Person takes all properties of User
// interface Person extends User{
//     hat: String
// }

// const userDetails: User = {
//     name: 'ram',
//     address: 'Kathmandu',
//     age: 30
// }

// const personDetails: Person = {
//     name: 'ram',
//     address: 'Kathmandu',
//     age: 30,
//     hat: 'red'
// }

// let result: number = 10;
// if (Math.random() < 0.5) {
//     result = 43
// }

// let result1: number | string = 10;
// if (Math.random() < 0.5) {
//     result1 = 'he'
// }

// functions
// we need to know type of argument and type of return statement also
// in below code string represents return type of 'return' statement because string + number when 
// concatenated gives string
// function multiply(num: number): string{
//     return "Your Number is " + num;
// }

// in below function when we don't need any return type voidis used
// let p: number = 0
// function increment(num: number): void{
//     p = p + 1
// }
// increment(2)
// console.log(p)

// generics (It is bit difficult)
// when arguments &  return types are unknown
// when you want to make it dynamic

// interface Measurement {
//     length: number
// }

// const generateLength = (value: string) => {
//     console.log(value.length);
// }

// generateLength('Ajit Mandal') -> string can also be sent as an argument
// generateLength(['A', 'j', 'i', 't']) -> array can also be sent an an argument
// in such case we use generics

// const generateLength =<T extends Measurement> (value: T) => {
//     console.log(value.length);
// }

// generateLength('Ajit Mandal')
// generateLength(['A', 'j', 'i', 't'])
// generateLength(<number[]>([2, 4, 6]))

// below code is more understandable
// const generateLength =<T> (value: T) => {
//     console.log(value.length);
// }

// upto here of BR practice

// from here self practice
//generics

interface IAuthor {
    id: number,
    username: string
}

interface ICategory {
    id: number,
    title: string
}

interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor [] | ICategory[];
}

interface IPostBetter<T> {
    id: number,
    title: string,
    desc: string,
    extra: T[]
}

const testMe: IPostBetter<string> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: ['str', 'str2']
}

interface IPostEvenBetter <T extends object> {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: T[];
}

const testMe2: IPostEvenBetter<{id: number, username: string}> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{id: 1, username: 'john'}]
}

const testMe3: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{id: 1, username: 'john'}]
}

const testMe4: IPostEvenBetter<ICategory> = {
    id: 1,
    title: 'post title',
    desc: 'post desc',
    extra: [{id: 1, title: 'cat'}]
}

// Generics allow you to create reusable components (functions, classes, etc.) that work with any data type 
// while maintaining type safety.

// 1. Basic Generic Function
// A simple identity function that returns whatever is passed in
    function identity<T>(arg: T): T {
        return arg;
    }

    // Usage
    let output1 = identity<string>("Hello");
    let output2 = identity<number>(42);
    let output3 = identity("TypeScript infers the type"); // Type inference

// 2. Generic Array Function
    function getFirstElement<T>(arr: T[]): T {
        return arr[0];
    }

    const first = getFirstElement<number>([10, 20, 30]); // 10

    // More Array Example
    // Function that works with arrays of any type
    function logArray<T>(items: T[]): void {
        items.forEach(item => console.log(item));
    }

    // Usage
    logArray<string>(["apple", "banana", "orange"]);
    logArray<number>([1, 2, 3, 4]);

    //3. Generic Interface Example
    // A generic interface for a key-value pair
    interface KeyValuePair<K, V> {
        key: K;
        value: V;
    }

    // Usage
    let pair1: KeyValuePair<number, string> = { key: 1, value: "One" };
    let pair2: KeyValuePair<string, boolean> = { key: "isActive", value: true };

    // 4. Generic Class Example: Not understood (Read Later)
    // A simple generic stack class
    class Stack<T> {
        private items: T[] = [];
        
        push(item: T): void {
            this.items.push(item);
        }
        
        pop(): T | undefined {
            return this.items.pop();
        }
    }

    // Usage
    const numberStack = new Stack<number>();
    numberStack.push(1);
    numberStack.push(2);
    console.log(numberStack.pop()); // 2

    const stringStack = new Stack<string>();
    stringStack.push("hello");
    stringStack.push("world");
    console.log(stringStack.pop()); // "world"

    // 5. Merge Type Variables
    // Function that takes two different types
    function merge<U, V>(obj1: U, obj2: V): U & V {
        return { ...obj1, ...obj2 };
    }

    // Usage
    const merged = merge(
        { name: "Alice" },
        { age: 30 }
    );
    console.log(merged); // { name: "Alice", age: 30 }

    // 6. Generic Constraints
    // Constrain the generic type to have a length property
    interface Lengthwise {
        length: number;
    }

    function logLength<T extends Lengthwise>(arg: T): void {
        console.log(arg.length);
    }

    // Usage
    logLength("hello"); // 5 (strings have length)
    logLength([1, 2, 3]); // 3 (arrays have length)
    // logLength(42); // Error - numbers don't have length

    // 7. Default Generic Type
    // Generic with a default type
    function createArray<T = string>(length: number, value: T): T[] {
        return Array(length).fill(value);
    }

    // Usage
    const stringArray = createArray(3, "hi"); // string[]
    const numberArray = createArray<number>(4, 10); // number[]










