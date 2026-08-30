/*
    Completing Box Page
    
    16:00
    Learning Practical Usage of Redux in 'Add Favorite Items' -> STD-Assignment Folder
    
    Setting up Redux in STD-Assignment Folder and Learning to 'Add Favorite Items' Functionality

    If page is refreshed or reload then redux states are lost so for that we need to use middleware(called redux persist)
    
    persist meaning -> to persist the Redux store between sessions, ensuring that the application's state is saved 
                        and can be reloaded even after the app is restarted or the page is refreshed

    For installing persist,
        npm install redux-persist

        Storage Engines: 
            Local Storage: Data are not expired, stores data locally (Browser gives only 600MB)
            Session Storage: is only for single session
                        Data stored in session storage is accessible only as long as the browser tab or window is open. 
                        Once the tab or window is closed, the data is cleared. Session storage is commonly used for temporary 
                        data that is only relevant to the current browsing session, such as form data or navigation history 
                        within a single tab.
            Extension Storage: 
            Indexed DB: IndexedDB is a client-side storage mechanism for web applications that allows developers to store 
                        large amounts of data locally. at least 1 GB per domain and can reach upto 60% of remaining disk space
                        ~ is rarely used

                Local, Session, are related to browser
                Indexed DB are related to disks

                Cookies are related to server

            Cookies: Data are stored in browser but referred to send to the server
                Cookies, in the context of the internet, are small text files that websites store on your computer or device. 
                They are used to remember information about you, like your preferences or login details, and can improve your 
                browsing experience. 

        In npay, we will use local storage

        LogRocket Session Replay

        -> Lets proceed with redux persist (and Local Storage)

        Learning to store redux states like favorite items using redux/persist
        To combine the reducers, we may use combineReducers

        --> Follow LogRocket Redux Persist Documentation

    For redux persist practice,
        In the 'box', page use redux persist to store the current states in browser and if page is refreshed then
        also the box size should not be changed



*/