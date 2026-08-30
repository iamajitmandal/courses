/* 
    Revision of what we learned:
        JS is Synchronous

        Operators: + - * /
            'ram'/'thapa' => NaN
            'ram' + 'thapa' => ramthapa -> This is called concatenation
        
        Comparison:
            ==, ===

        Learned about var, let and const:

    Data Structure:

    In Job Interview: Smartness Testing is there

    To be a good programmer, 2 things are very important:
        1. Reading Documentation
        2. Learning Debugging

    Old Pure JS is called: Vanilla JS
    New JS i called Modern JS or ECMAScript

    Data Structure: Structure of Data (Data Dhaanchaa, Data Samrachana)
        Stack, LinkedList, Queue, Heap
    
    Queue: FIFO     -> 1, 2, 3, 4   -> Bank Queue
                    Enqueue, Dequeue

    Stack: LIFO     ->  1
                        2
                        3      3 is inserted after 4 and resides before 4, 3 comes out of memory at first than 4
                        4      4 is inserted at first and resides at the bottom of stack

        Stack Real Life Example: Chairs, Badminton Cock
        Push and Pop Operations


    Functions:
        let a = 10
        a = a + 1

    Block: codes inside -> {}

    let a = 10
    function increase(){
        a = a + 1
    }
    increase()
    console.log(a)

    -> Code Reuse

    function increase(){
        console.log(3000)
    }

    const z = increase()
    console.log(z)
    
    -> In the above code the value of z will be undefined since the function has not returned any value to
       the variable z since the return keyword is missing there
    -> Codes written below return keyword will not run

    -> Learning to run the code Debugger

    -> Global Execution Context (GEC) in JS

    -> First Scanning Phase is there (Global Contexts are prepared)
    -> See the behaviour of Outer and Inner function in index2.html for learning how GEC works and Stack Data Structure
       works in these two functions
    -> Learn about Call Stack there
    -> See the behaviour of Outer function and increment function, how it comes and goes from Call Stack
    -> While outer function is running in call stack there, codes of increment functions sits in queue and after
       outer function has completed executing then also increment function comes in the Call Stack and executes

    -> This entire process is called Event Loop

    // Event Loop

    // Outsourced Foreign Company
    // Outsource Nepal Based
    // Remote Work
    // Nepal Startup
    // Freelancing

    Tomorrow's Topic: Closures



    

*/

