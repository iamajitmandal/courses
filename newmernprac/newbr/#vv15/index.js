/*
    Readme Template Generator for Github is also there ...
    Learning to update and prepare Read Me File...

    Making SideBar for n-pay project

    All the small pieces are not needed to be made in Components Folder, e.g. Dashboard Main section will be used only
    in dashboard page, so Dashboard Main Section component can be made inside Dashboard folder and it should be 
    imported and used in page.js of Dashboard folder

    E.g. page.js of Dashboard Folder (Dashboard folder should be made in app folder)
            <div>
                <Navbar/>                       -> inside component folder
                <div className = 'flex'>         
                    <Sidebar/>                  -> inside component folder
                    <MainSection/>              -> inside dashboard folder
                </div>
            </div>

    Learning about Redux:
        What is props drilling?
            Prop drilling refers to the process of passing down props through multiple layers of components, 
            even when some of those components do not directly use the props.

            In project, we should avoid props drilling as much as possible, to avoid props drilling we may use some
            tools like Redux

    Lets Learn from example:
        In Parent Component,
                <SideBar chocolate="Kitkat"/>

        In Child Component (E.g. Sidebar),
            const Sidebar = (props) => {
                return(
                    <div>
                        This is sidebar
                        Parent gave me {props.chocolate}
                    </div>
                )
                }
        
        UniDirectional Data FLow in React -->

        57:50

        What is Redux? (Very important for FrontEnd Engineer)
            -> Library
            -> solves the problem of props drilling
            -> Global State Management

            Redux is a JavaScript library used for managing the state of a web application, 
            particularly popular in the React ecosystem. It provides a predictable and maintainable way to handle 
            global application state, ensuring consistency and simplifying debugging. Redux is often used in larger, 
            more complex applications where managing shared data between components becomes challenging.


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
                    

        Why is Redux needed?
        Alternative of redux: 

    Try to understand some topics:
        Alternative of redux
        Global State
        Initial State
        Action Types
        Store
        Reducer Functions

*/