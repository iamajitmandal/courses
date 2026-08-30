/*
    1. Comments
    2. Output -> console.log
        To show the string as output:
            Single Quote, Double Quote, Template Literal

        Most of the companies have coding-guidelines for their developers
        airbnb -> airbnb is the most popular javascript coding guidelines
*/

/*

    // this is used to print output in js
    console.log("Hello")
    console.log('Hello')
    console.log(`Hello`)

    // data type: string, number

    console.log(6)

    // arithmetic operators + - / * %
    console.log(64+62)
    console.log(5-2)
    console.log(5*3)
    console.log(8/2)
    console.log(50%10)

    // In js, + is used in strings as well as numbers (concatenation operator)
    console.log('ajit'/'mandal')
    console.log('ajit'*'mandal')
    console.log('ajit'-'mandal')
    console.log('ajit'+'mandal')

    // comparison == === != !== > < >= <=

    a = 10
    // console.log(10 = 10) -> SyntaxError: Invalid left-hand side in assignment expression.

    console.log(10 == 10)
    console.log(10 == '10')
    console.log(10 === '10')
    console.log(10 != '10')
    console.log(10 != 10)
    console.log(10 !== '10')

    console.log(10 > 12)
    console.log(10 < 12)
    console.log(10 >= 12)
    console.log(10 <= 12)

    // Variables : value varies

    var a = 10
    a = 50

    // constant : value remains same e.g. g = 9.8
    // const PI = 3.14 (throughout the program value remain same)

    // let vs var

    var b = 5
    var b = 4
    console.log(b)

    let c = 6
    let c = 8
    // console.log(c) -> SyntaxError: Identifier 'c' has already been declared.

    // There were lots of problem in var. Modern JS is called ES6.
    // ES6+ -> Modern JS (After ES6 all are Modern JS)

    // ES6 introduced var and const
    1. redeclare
    2. variable -> let   constant -> const

    Why let?
    let vs const vs var

    // var
    // Problems with var are as follows:
        1. redeclare
        2. We can use the variable without declare
        3. Its not a block scope
        4. It will always pollute the global scope (means it stays in the global scope whenever it is made)

    let and const are in TDZ (Temporary Dead Zone) unless assigned a value

    let, var and const all are hoisted but since let and const are in TDZ, we cannot access it. 
*/

/*
    Synchronous Vs Asynchronous
    Which language is JS?

    Synchronous -> Codes run line by line
    Asynchronous -> Some codes can run in the background 

    -> JS as a language is always synchronous but we can make is asynchronous using the features of browser or nodejs

    const a = 10 (direct js -> is fast)
    const a = database bata aaucha 10 (using nodejs and is slow process)
    
*/

/* 
    1. Learning to create HTML page in VS Code, add some JS code there and run it in the browser
    2. Learning about debugger

    In interview, out of any 10 questions, answer few questions in such a way that it makes your overally outstanding

    Chrome Engine -> V8 Engine
    Firefox Engine -> SpiderMonkey
*/

// What is hoisting in JS?

/* 
    First there is scanning phase, means it scans all the variables and makes their scope ready
*/

// Try to explain about let, var and const and also about hoisting in terms of code

// Some homework:
// See about Data Structures: Stack, Queue & Functions in js
