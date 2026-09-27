/*
    1. What is hook?
        Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

        React hooks are special functions that allow you to use state and other React features without writing a class. 
        Introduced in version 16.8, they enable functional components to "hook into" React’s internal state and lifecycle methods, 
        which was previously only possible in class components.

    2. Why We Need Hooks?
        Hooks were created to solve several recurring problems in React development
        
        a. Logic Reusability: Before hooks, sharing stateful logic between components required complex patterns like Higher-Order Components 
            or Render Props. Custom hooks make it easy to extract and reuse logic across multiple components.

        b. Simpler Components: Class components often became "bloated" with unrelated logic spread across lifecycle methods 
            (like componentDidMount and componentDidUpdate). Hooks like useEffect allow you to group related logic together.

        c. No "this" Keyword: Beginners often find the this keyword and binding event handlers in JavaScript classes confusing. 
            Hooks allow you to use React features using only simple functions.

        d. Performance: Functional components are generally easier for tools like Babel to optimize and result in smaller bundled code.

    *** Common Built-in Hooks ***
            Hook                        Purpose
        useState                    Adds state variables to your functional component.
        useEffect                   Handles "side effects" like fetching data or manually changing the DOM.
        useContext                  Accesses data from the React Context API without passing props through every level.
        useRef                      Creates a reference to a DOM node or a value that persists between renders.
        useMemo                     Caches the result of an expensive calculation to improve performance.

    *** Hook Rules ***
        There are 3 rules for hooks:

            Hooks can only be called inside React function components.
            Hooks can only be called at the top level of a component.
            Hooks cannot be conditional

        Note: Hooks will not work in React class components.

    *** Custom Hooks ***
        If you have stateful logic that needs to be reused in several components, you can build your own custom Hooks.

*/