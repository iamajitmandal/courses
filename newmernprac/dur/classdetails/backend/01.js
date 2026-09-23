/* Learning Backend (Node Express) */
/* 
    *** #v1 (Codes in API-Commerce) ***
    *** Learning to start backend codes and file structure, create server, learning basic routes/controllers ***

    Node and Express JS (Backend)
    API (Application Programming Interface)
    to test API, we use POSTMAN

    function like authentication, authorization, search, add to cart, admin panel,
    and payment gateway system will be used here

    Node will be used for the creation of server

    Express(Framework of Nodejs) will be used to built the whole system
    Database will be MongoDB(NoSQL) - We will use cloud database system to store data
    After the completion of the whole system it will then be integrated with frontend tools such as React

    We can integrate this API with any web system and mobile application

    API Project Started:
    1. Create one folder named API-Commerce and inside that folder:
        For package.json file,
            npm init -y

    2. For environment variables,
        npm install dotenv
        (Why dotenv is needed?) -> to set environment variables such as database connection, port no., mail settings

    3. Install Express 
        npm install express

    4. Create .env file in the API-commerce folder and inside it set 
        PORT = 8000

    5. Create .gitignore file inside API-commerce folder and inside .gitignore file, write the following lines:
        .env
        node_modules

    6. Make main server file named index.js inside 'API-commerce' folder and inside that:
        const express = require('express')
        require('dotenv').config()

        const app = express()

        const port = process.env.PORT || 8000

        listen to port
        app.listen(port, () => {
            console.log(`Server Started Successfully on port ${port}`)
        })
    
    7. In API-Commerce folder, run node index.js to run the main index file and start server

    8. lets make a route in index.js
        add following code after const app = express() code

        app.get('/welcome', (req, res) => {
            res.send('Welcome to express js to learn RESTAPI');
        })

        API & RESTAPI are same
        
        /welcome is url
        
        app.get('/url', (request, response) )   -> request and response are parameters

        go to your browser and see the response in the url: localhost:8000/welcome
    
    8. If you make some changes in the index.js then it it won't be loaded in the browser for that you have to start
        server again, to solve this problem install nodemon

        npm install nodemon

        again inside package.json file,
        change the following line inside scripts:
            "test": "echo \"Error: no test specified\" && exit 1"
        into:
            "start": "nodemon index.js"

        now to run the server use the following code:
            npm start

        In backend, pages should not be loaded automatically...
    
    9. In backend, We use MVC pattern
        M -> Model (Database Structure - Collections)
        V -> View (Frontend) ~ We should not make view
        C -> Controller (Functions)

        Route is also needed

        Now, make controllers, model and routes folder separately in API-Commerce folder

        Make categoryController.js inside controllers folder and inside that:
        
            exports.helloFunction = (req, res) => {
               res.send('this is a function controller');
            }
        
        controller function always takes two parameters (req, res), does take parameter while uploading files
                
        for routes install:
            npm install router

        Make categoryRoute.js inside routes folder and inside that:
            const express = require('express')
            const { helloFunction } = require('../controllers/categoryController');
            const router = express.Router()

            router.get('/test', helloFunction)

            module.exports = router

        Server(index.js) doesn't recognize the route so for that inside index.js:

            const categoryRoute = require('./routes/categoryRoute');

            routes ->
            app.use('/api', categoryRoute)          
            
            -> Why api above? above code can be run without api also as below:
            app.use('', categoryRoute)          

        Remove app.get('/welcome', .....) codes from index.js
*/