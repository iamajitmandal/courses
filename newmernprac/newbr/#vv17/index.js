/*
    Lets revise about Redux:
        initialState        => initial values of global states 
                            => stores as an object
        ReducerFunctions    => pure function that changes old state to new state
                            => old state-----action------new state
        reducerSlices       => Slices is optional. But to manage the code, reducerSlices is made here to separate 
                                the global states in the store
                                eg. user details in userSlice.js, product details in productSlice.js\
        Store               => to configure everything
                            => combine all the slices
                            => extra features: e.g may be if page is refreshed, i may need all old states, 
                                            like add persistence, 


    Try to understand the following code: learn about createSlice which takes 3 parameter: countername, initialstate
    and reducers(object of all reducer functions)\

        import { createSlice } from '@reduxjs/toolkit'

        const initialState = { value: 0 }

        const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
            increment(state) {
            state.value++
            },
            decrement(state) {
            state.value--
            },
            incrementByAmount(state, action) {
            state.value += action.payload
            },
            reset(state){
                state.value=0
            }
        },
        })

        export const { increment, decrement, incrementByAmount, reset} = counterSlice.actions
        export default counterSlice.reducer

    In store folder,
        create configureStore.js and inside that add the following code:

        import { configureStore } from "@reduxjs/toolkit"
        import counterSlice from "../reducerSlices/counterSlice"

        const store = configureStore({
            reducer: {
                counter: counterSlice
            }
        })

        export default store

    Now lets learn the following concepts:
        Higher Order Component
        Learn from HOC -> in STD-Assignment/hoc

    After slices are made and store is configure, now we send the redux data to the component who need
    For that, we wrap the Root Layout Element with <Provider/> i.e. 
        <Proivder store={store}>
            {children}
        </Proivder>
    Instead of adding above code in the Root Layout.js,
    we add those code to the ReduxProvider.js inside redux folder as below:

        import React from 'react'
        import { Provider } from 'react-redux'
        import store from './store/configureStore'

        const ReduxProvider = ({children}) => {
        return (
            <Provider store={store}>{children}</Provider>

        }

        export default ReduxProvider

    After this, wrap the root children in the root layout.js as below:
        
        <ReduxProvider>{children}</ReduxProvider>

    Redux is setup...


    



*/