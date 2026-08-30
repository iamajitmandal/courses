/*
    Installing React, Routers

    Outside src make .env file,
        .env -> environment variables

    Inside .env, (Below is the BE API address)
        REACT_APP_API_URL=http://localhost:8000/api 

    (Storing BE endpoint here in config.js)
    Inside src, make config.js 
    Inside config.js
        export const API = process.env.REACT_APP_API_URL

    Make components, pages folder inside 'src' folder
    Learning about Routers but this is not required in NEXT JS PAGE ROUTER
    (Homepage was made HomePage.js during router section)

    Inside Pages, make HomePage.js

    Make Navbar.js inside components folder and import it in the home page
        In Navbar -> Logo on LHS, Search on MHS, Signup, Signup & Cart Buttons on RHS
    Make nav.css inside components folder to design Navbar
    Learning to Design Navbar

    Make Carousel.js inside components folder and import it in the homepage
        In Carousel.js, Just Hero 3 Images are there which keeps sliding after 2 to 3 seconds
        Carousel was made using 'React-Slick'
    
    Make Card.js inside components folder and import it in the homepage

    Note: Navbar, Carousel and Card all was made while studying react so we use those components
    here and import them in the homepage
*/