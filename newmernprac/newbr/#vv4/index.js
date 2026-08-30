/*
    All the frameworks of react(E.g. Nextjs) are installed in node_modules
    
    All the packages are installed in node_modules but the installed packages are shown in package.json file

    When gitignore is done, node_modules are ignored, so they are not pushed in the github

    Components and Pages:
        Components -> Small Reusable Pieces which will not be viewed individually e.g. navbar, sidebar
        Pages -> Larger Pieces which will be viewed individually e.g Home Page, Product Page

        Global Layouts Can also be done, we will learn that later


    React Fragments: <> </> -> All the components must be enclosed inside react fragment 
    
    'use client' -> Nextjs is both client and server,so 'use client' is used when you want your page to be client page
        If used 'use client' then console.log output can be seen in the console in the browser window

    Parent Component and Child Component:
        In Login Component,
            There may be Navbar Component and Form Component
            Inside Navbar, there may be Logo and NavItems

            Navbar and Form are Siblings
            Navbar and Form are children of Login Component

    Props: Props are arguments(Object i.e. key:value pair) passed into React components.
            Props are passed to components via HTML attributes.
            props stands for properties.

            In the above example, props can be passed from Login Component to Navbar Component
            Again, props can be passed from Navbar Component to Logo Component

            In the above example, How to pass props from Logo to Navbar or Logo to Login

            Props can be send from upper level(parent) to lower level(child)

    Props Drilling: Prop drilling refers to the process of passing down props through multiple layers of components, 
            even when some of those components do not directly use the props.

        In project, we should avoid props drilling as much as possible, to aovid props drilling we may use some
        tools like Redux

    Usages of Props:
        1. used for sending data to children
        2. use it inside tags
        3. children should notify that the props is coming e.g const logo = (props) => { }
        4. parent ------
           props ----->
           grandchild ---->
           props ------> 
           great grandchild ---> 
           
           Passing props from parent to grandchild and from grandchild to great grandchild and continuing is called
           Props Drilling.

           We have to omit props drilling

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
           





*/