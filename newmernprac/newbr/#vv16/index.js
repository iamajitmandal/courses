/*
    Designing Navbar of Npay Project

    20 min:
    Starting About Redux
        In Parents Page, named Dashboard, there are 4 components : Navbar, Sidebar, LoginSection, MainSection
        Inside MainSection, there is Card
        What is the relationship between LoginSection and Card

        What if LoginSection has to send props to Card?
        To send props to Card from Dashboard, Dashbaord should send to MainSection, then MainSection to Card
        Data flow is unidirectional in React.
        This is called Props Drilling.
        To solve the above problem we need to use Redux.
                                
                                            Dashboard

        Navbar              Sidebar             LoginSection                MainSection

                                                                                Card
        
        1. Instead of creating component level states, we are trying to create a global state
            Inside src folder we make new folder name 'redux' which will be globally available for all
        2. 

        Why is Redux needed?

        Alternative of redux: 

    Try to understand some topics:
        Alternative of redux
        Global State
        Initial State
        Action Types
        Store
        Reducer Functions

    1. Redux GlobalState -> 
        Redux works by storing state in a separate component known as a store, and allowing all components 
        access to the store. This changes state into a global variable. No more passing down endless props!

    2. Redux InitialState 
        -> global states initialValues
        -> stores as an object

        // const [chit, setChit] = useState('')
        // const [color, setColor] = useState('')

        Instead of writing above codes, the following codes will be equivalent in Redux.

        const initialState = {
            chit: '',
            color: '',
            count: '',
            cartItems: [],
            isLoggedin: false,
            token: '',
            selectedProduct: null
        }

        UserRelated Module: isLoggedin, token
        ProductRelated Module: cartItems, selectedProduct

    3. Actions Types:
        -> Types of actions to be performed
        -> It is automatically determined by the reducer functions

        Actions:
            count/increment
            count/decrement
            count/reset
            count/

    4. Reducer Function:
        -> function
        -> old state --> new state
        -> pure function 
        -> accepts initialState + actionType ----- Updation ---> returns new state
            means changes old state to new state after applying some actions/updation

        In Redux, the state is a plain JavaScript object, and the reducer is a pure function that takes the 
        previous state and an action and returns the next state. It's important to note that if the reducer receives 
        an undefined state, it must return the application's initial state.

    Differences between pure and impure function:
        let sum = 0
        function changeSum = () => {
                sum = sum + 1
            }
        changeSum()     -> This changes outside variable so is impure function


        function changeSum = (sum) => {
                sum = sum + 1
            }
        changeSum(0)     -> This changes the value of argument, so is pure function, means changes argument passed

        Start with FreeCodeCamp Basics for Javascript:

        In context of reduce,
            const arr = [3, 5, 1]

            arr.reduce((sum, item) => {
                sum = sum + item
            })

                        const arr = [3, 5, 1]

            arr.reduce((sum, item) => {
                sum = sum + item
            }, 0)           -> Initial value of sum is 0

            This is example of pure function

            We usually should use pure function.

    5. Global Store:
        All reducers and states will be configured here

    6. SlicedReducer: We will create pieces of our reducers (slice means pieces)
        Using Reducer we will convert the following code:
                   const initialState = {
            chit: '',
            color: '',
            count: '',
            cartItems: [],
            isLoggedin: false,
            token: '',
            selectedProduct: null
        }

        After Conversion,
            const GLOBALSTATES = {
                product: {
                    selectedProduct: null,
                    cartItems: []
                },
                user: {
                    isLoggedIn: false,
                    token: ''
                },
            }


    Lets install Redux:
        npm install react-redux @reduxjs/toolkit

    Make redux folder inside app and inside that
        Make reducerSlices Folder
        Make slice Folder
        Make ReduxProvider.js File

    There may be productSlice, userSlice, transactionSlice files inside reducerSlice Folder

*/