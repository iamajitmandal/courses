/*
    *** React Render HTML ***
        React's goal is in many ways to render HTML in a web page.
        React renders HTML to the web page via a container, and a function called createRoot().

    *** The Container ***
        React uses a container to render HTML in a web page.
        Typically, this container is a <div id="root"></div> element in the index.html file.

        index.html in the root directory of your project:
            <!doctype html>
            <html lang="en">
            <body>
                <div id="root"></div>
                <script type="module" src="/src/main.jsx"></script>
            </body>
            </html>

    *** The createRoot Function ***
        The createRoot function is located in the main.jsx file in the src folder, and is a built-in function that is used to 
        create a root node for a React application.

        The createRoot() function takes one argument, an HTML element.
        The purpose of the function is to define the HTML element where a React component should be displayed.

        main.jsx:
            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import './index.css'
            import App from './App.jsx'

            createRoot(document.getElementById('root')).render(
                <StrictMode>
                    <App />
                </StrictMode>
            )

        or,
            import { createRoot } from 'react-dom/client'

            createRoot(document.getElementById('root')).render(
                <h1>Hello React!</h1>
            ) 

    *** The render Method ***
        Did you notice the render method?
        The render method defines what to render in the HTML container.

        The result is displayed in the <div id="root"> element.

    Note: the element id does not have to be "root", but this is the standard convention.

    *** The Root Node ***
        The root node is the HTML element where you want to display the result.
        It is like a container for content, managed by React.

        It does NOT have to be a <div> element and it does NOT have to have the id='root':

*/

/*
    *** Exercises ***
    1. What is true about the container element for React rendering?

        It must always have the ID 'root'
        It can have any ID, but 'root' is a common convention
        It must be a div element

                                                                                    -> option 2
                                                                                    
    2. Complete the import statement for React rendering:

        import { _________  } from '_______________'
                                                            
                                                                                    -> import { createRoot  } from 'react-dom/client'

    3. What happens when you use createRoot() to render content?

        It replaces the entire HTML document
        It renders content inside the specified container element
        It adds content at the end of the body

                                                                                    -> option 2

    4. Which file contains the root container element in a React application?

        App.jsx
        main.jsx
        index.html
        
                                                                                    -> index.html
*/