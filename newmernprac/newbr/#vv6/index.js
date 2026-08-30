/*
    How HTML and JS are rendered in React?
    
    SEO is not needed for all websites. Like not needed in Attendance page of Broadway 8am class

    You cannot modify state values directly

    Inside JSX syntax, always only call functions
    
    Learning to Make Calculator App
    
    Eval -> evaluates the value
        Description
            The eval() method evaluates or executes an argument.
            If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, 
            eval() executes the statements.

        Do NOT use eval()

            Executing JavaScript from a string is an BIG security risk.
            With eval(), malicious code can run inside your application without permission.
            With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

    Try to do the following task In the calculator:
        1. When AC is clicked everything should be erased
        2. When Delete Key is pressed, last string mut be erased
        3. 9*+  -> This type of code must not be there in the calculator

*/