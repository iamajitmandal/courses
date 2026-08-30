/*
    JSX 
    XML 

    Why we are using 'use client'?
    'use client' -> Nextjs is both client and server,so 'use client' is used when you want your page to be client page
        If used 'use client' then console.log output can be seen in the console in the browser window

    States in React:

        'use client'
        import React from 'react'

        const page = () => {
            let number = 3
            const increment = () => {
            number = number + 1
            console.log(number)
            }
            const decrement = () => {
            number = number - 1
            console.log(number)
            }
        return (
            <>
                <button onClick={increment}>+</button>
                {number}
                <button onClick={decrement}>-</button>
            </>
        )
        }

        export default page

        In the above code the value of number will not be seen in the UI or the browser only seen in the conosle.
        for that we need states in React.

        States:
            React components has a built-in state object.
            The state object is where you store property values that belong to the component.
            When the state object changes, the component re-renders.

            -> to store property of a component
            -> state -> changes component re-renders

        State of Matter : Solid, Liquid and Gas

        React should be notified whenever there is change in UI, so for that the value 'number' must be made state
        For that we need HOOK.

        Previously we React used 'Class' components to build UI.
        But now we use Function Components.

        Why Class Components are not used in React?
            -> Because React Official Documentation says to use functional components

    Using React States:
        Try Building Calculator
        Try Building Facebook Like Buttons

*/