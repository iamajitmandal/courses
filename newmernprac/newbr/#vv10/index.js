/*
    Continuing Yup Formik
    NextUI -> Clear is not working

    Learning about DOM

    Basic Fundamental of React:
        State -> Changing the values to update in the UI
        props -> Passing data from parent -> child
        refs -> non-changing value(value persists between renders)

    If some issues are not working in nextui or formik then check the issues of it in github

    Using UseRef Hook to clear the input form of nextui
    useRef Hook: useRef is not much used in the project

    useRef: The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
            It can be used to access a DOM element directly.
        
        Example of useRef:
            // The below code can be used to focus the input field when the page first loads
            // const page = () => {
            //     const inputRef = useState(null)
            //     useEffect(()=>{
            //         if(inputRef.current){
            //             inputRef.current.focus()
            //         }
            //     }, [])
            //     return (
            //         <div>
            //             <input ref={inputRef} placeholder="Enter name"/>
            //         </div>
            //     )
            // }

        Sometimes, when a page loads, the page should scroll on a certain section of the page, is such case 
        we can use useRef

    useEffect Hook in react:
        The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        
        useEffect accepts two arguments. The second argument is optional.
            useEffect(<function>, <dependency>)

        -> Handles sideEffect during renders (update)
        -> function
        -> accepts two arguments
        -> first argument --> function
        --> second argument --> dependency [is in the form of array]

        Syntax:
            useEffect( () => {}, [])

        For Example: When facebook is logged in, at first all the active online users are loaded for such task where any 
        function has to run when the page first loads, useEffect can be used

        useEffect can be used in three different ways:

        Controlling side effects in useEffect:
            1. To run useEffect on every render do not pass any dependency
                    
                    The below code runs whenever any state present in the whole code file changes
                useEffect(()->{
                        // Example Code
                })

            2. 2. To run useEffect only once on the first render pass any empty array in the dependency

                useEffect(()->{
                        // Example Code
                }, [] )

            3. 3. To run useEffect on change of a particular value. Pass the state and props in the dependency array

                useEffect(()->{
                    // Example Code
                }, [props, state] )

                Example: The below code runs when the state [userName] changes
                      useEffect( () => {
                        console.log('Hi');      
                    }, [userName])


    Let us build some mini project using useEffect : We are building a lottery using useEffect


    setTimeOut
    setInterval

    Home Assignment:
        When the pause button is clicked, then the lottery game should pause.

*/