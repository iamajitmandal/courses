/*
    To install node_modules, 
        -> npm i

    To know about the latest state update in console, use Logger, Redux DevTool is also not needed
    For Logger:
        npm i redux-logger

    The following code in configureStore keeps track of the states and shows in browser console.

        const store = configureStore({
            reducer: {
                counter: counterSlice,
                box: boxSlice,
            },
            middleware: () => new Tuple(logger)
        })

    Learning about Redux more through 'Box' Page






    



*/