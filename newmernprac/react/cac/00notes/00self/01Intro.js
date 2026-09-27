/*
    1. What is React?
        React is a front-end JavaScript library.
        React was developed by the Facebook Software Engineer Jordan Walke.
        React is also known as React.js or ReactJS.
        React is a tool for building UI components.

    Main Answer:
        React is an open-source JavaScript library developed by Meta Platforms for building fast and interactive 
        user interfaces. It uses a component-based architecture, where the UI is divided into reusable pieces, 
        and a virtual DOM to efficiently update only the parts of the page that change.

    2. Why React specifically is called a library?

        Because:

        1. It only solves one main problem: building UI.
        2. It doesn’t enforce:
            Routing
            State management approach
            Folder structure
            Data fetching strategy
        3. You can use it inside other frameworks.

        But here’s the nuance (important)

        In real-world use, React often feels like a framework because:
            Ecosystem tools (React Router, Redux, etc.) fill the gaps
            Frameworks like Next.js wrap React and become the framework

        So:
            React alone → library
            React + ecosystem → “framework-like”
            Next.js (built on React) → actual framework

        Simple analogy
            Library = toolbox (you pick tools)
            Framework = assembly line (it tells you how to build)

    3. Differentiate between library and framework.

        ✅ Library vs Framework (Simple Definition)

        Library:
        A collection of pre-written code that you call when needed.

        Framework:
        A complete structure that calls your code and controls the flow of your application.

        🔑 Core Difference (Most Important Line for Interview)

        In a library, you are in control. In a framework, the framework is in control.
        (This is called Inversion of Control.)

        🧠 Real-Life Analogy (Easy to Remember)
            📦 Library → Like a toolbox
                You pick tools when needed (hammer, screwdriver)
                You decide how to build the house

                👉 Example: Using React

                You choose:
                    routing (React Router)
                    state management (Redux, Context API)
                    project structure

            🏗️ Framework → Like a ready-made construction system
                It gives rules, structure, and workflow
                You must follow its way of building

                👉 Example: Using Angular

                Predefined structure
                Built-in routing, forms, HTTP handling
                Strict patterns

        📊 Comparison Table (Interview Gold)
                    Feature	            Library (React)	                    Framework (Angular / Next.js)
                Control	            Developer controls flow	                    Framework controls flow
                Scope	            Solves specific problem (UI)	            Full solution
                Flexibility	        High	                                    Moderate (structured)
                Setup	            Choose your tools	                        Predefined setup
                Learning curve	    Easier to start	                            Steeper initially

    4. Differentiate between npm and npx
        npm and npx are important tools used in Node.js for managing and running JavaScript packages.
        Although they are related, they serve different purposes in development.

        npm (Node Package Manager) is used to install, manage, and update project dependencies.
        npx (Node Package Execute) is used to execute Node.js packages directly without installing them globally.
        npm manages packages permanently in a project, whereas npx runs packages temporarily when needed.

            npm -v

            npx -v
        
        If npx is not installed you can install that separately by running the below command.

            npm install -g npx

            npm (Node Package Manager):
            npx (Node Package eXecute): 

                                npm	                                                            npx
        A package manager used to install, update, and manage dependencies.	    A package runner that executes Node.js packages 
                                                                                without installing them globally.

        Installs packages (locally or globally) into the project.	            Runs a package directly without installation, 
                                                                                useful for one-time use commands.

        Requires explicit installation of packages via npm install.	            Automatically downloads and executes packages if not 
                                                                                installed locally.

        For global package execution, packages must be installed globally.	    No need to install packages globally to run them 
                                                                                (e.g., npx create-react-app).

        Used to add, update, or remove dependencies in package.json.	        Executes packages on-the-fly without affecting package.json.

        Often used to define and run scripts through the package.json file.     Typically used for one-off scripts or commands without 
                                                                                permanent installation.

        Available as a part of Node.js installation and also comes with npm.	Introduced with npm 5.2.0+ and available as part of npm.

        Manages versions through package.json and package-lock.json.	        Automatically resolves the latest or specified version to execute.

        Managing dependencies, updating libraries,                              Running commands like create-react-app, eslint, 
        running scripts from package.json.                                      or running any command from the npm registry directly.

        When to Use npm Vs npx ?

        Use npm When:
            You need to install packages (locally or globally) for your project.
            You want to manage dependencies and ensure they are tracked in your package.json.
            You are working on a long-term project where you’ll frequently use the same packages and libraries.

        Use npx When:
            You want to execute a package without permanently installing it.
            You’re running one-off commands like create-react-app, eslint, or package binaries.
            You need to run a specific version of a package or command without modifying your existing setup.

    5. How React Works?

        Learn React Render in depth... 02ReactRender.js

        React creates a VIRTUAL DOM in memory.

        Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, 
        where it does all the necessary manipulating, before making the changes in the browser DOM.

        React only changes what needs to be changed!

        React finds out what changes have been made, and changes only what needs to be changed.

        or,
        Explain the react workflow.
            JS also runs inside the HTML file
            SPA
            There is only one index.html file in react app
            React creates its own DOM called Virtual DOM

            In vite,
                there is one index.html file and that index.html file imports the scripts from the main.jsx (js file)
                the main.jsx file renders the app.jsx in the root of the index.html

        What is the work of ReactDOM.createRoot?

            ReactDOM.createRoot connects your React application to the browser's Document Object Model (DOM). 
            It creates a dedicated React root container, replacing the older ReactDOM.render method. 
            This root manages the rendering of components and unlocks performance features like Concurrent Rendering and automatic batching.
            
            How it Works? 
                The function takes a standard HTML DOM element and prepares it to display React components. 
                It returns a "root" object with built-in methods for rendering and unmounting your app.
                
                createRoot: Initializes the root container inside a standard HTML element.
                render(component): Mounts or updates your React components within that root.
                unmount(): Removes all mounted React components from the DOM and cleans up state/event handlers.

    6. Explain the history of react?

        Latest version of React.JS is 19.0.0 (December 2024).
        Initial release to the Public (version 0.3.0) was in July 2013.
        React.JS was first used in 2011 for Facebook's Newsfeed feature.
        Facebook Software Engineer, Jordan Walke, created it.

    7. What is SPA? Is react SPA?
        SPA stands for Single Page Application. It is a web application that loads only one HTML document and then dynamically 
        updates the content of that page as the user interacts with it, rather than loading entire new pages from a server.
        
        Is React an SPA?
            Yes, React is primarily used to build Single Page Applications.While React itself is technically a JavaScript 
            library for building user interfaces, its architecture is designed to support the SPA model. 
            By using supplemental tools like React Router, it can handle navigation and "page" changes entirely on the 
            client side without ever refreshing the browser.
            
            How React SPAs Work?
            
            Initial Load: The browser downloads a single index.html file along with the necessary JavaScript and CSS.
            
            Dynamic Updates: When you click a link or button, React uses its Virtual DOM to swap out only the parts of the 
            page that need to change.
            
            Client-Side Routing: Instead of the server sending a new page for every URL change, a routing library 
            (like React Router) intercepts the URL change and renders the correct component instantly.

    8. React Fragments:
        <>
        </>

    9. What is JSX?
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup 
        directly inside a JavaScript file.

        Core Concepts:
            What it does: It lets you describe what the user interface (UI) should look like using a familiar HTML structure 
            within your logic.
            
            How it works: Browsers cannot read JSX directly. It must be "transpiled" (converted) into regular JavaScript by tools 
            like Babel before it can be executed.

            .jsx vs. .js
                The .jsx file extension is specifically used to signal to developers and build tools that the file contains JSX syntax.
                    js: Generally used for standard JavaScript logic, utility functions, or hooks that don't contain markup.
                    jsx: Used for files that define UI components using JSX

                Example:
                In a .jsx file, you can write:
                
                jsx:
                    const element = <h1>Hello, world!</h1>;
                
                This is transformed into a standard JavaScript function call that the browser can understand:
                
                javascript:
                    const element = React.createElement("h1", null, "Hello, world!");

        
*/