/*
    Learning Add to Wishlist Functionality in Product Page
    Adding Next UI Toast to show the success message

    Revising the 'Add to Favorite' and 'Add to Wishlist' functionality and adding Toast to alert messages

    19:00 -> 
    Starting Backend Part
    
    Make New Folder named 'Server'
    Backend is always is easy for beginners level project when infrastructure becomes large then only backend is difficult

    Make index.js inside server folder
    Go to Nodejs folder and copy the official code from there and change it a little:
    
        const { createServer } = require('node:http');

        const server = createServer((req, res) => {
            res.end('Hello World!\n');
        });

        // starts a simple http server locally on port 3000
        server.listen(4000, '127.0.0.1', () => {
            console.log('Listening on 127.0.0.1:4000');
        });

    Nodejs is light weight so it very popular for making ARDINO, ROBOTICS, Microservice

    URL VS URI
        -> Upto Basic / URL
        -> After URL there is URI
    All our backend are hosted on URL

    https://completion.amazon.in/api/2017/suggestions?limit=11

    https -> protocol
    completion.amazon.in -> Host Name/Domain Name   e.g in our end -> localhost:4000/2017

    In, https://localhost:4000/users/12
        https -> protocol
        localhost:4000 -> hostname
        users -> endpoint/routes

    API VS RESTAPI

    The codes that we copied from nodejs website, will not be sufficient for developing project so we use
    framework of node i.e. Express
    Express simplifies us the structure in easy way to build database, routers, etc
    We will use nodejs on the top of Express

    Frameworks of Nodejs: Express, Nest Js              -> Next JS(FE + BE)

    To install Express -> 

    Go to Express Documentation and follow the documentation:
        -> npm init 

    Now install express -> npm install express
    After you install express, node_modules can be seen there in the folder

    Copy Hello World code from express docs and paste in the Server/index.js

    Go got packaged.json file, inside scripts add: -> "dev": "node index.js"
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "node index.js"
        },

    Frontend can be on different ends like mobile, computer, laptop, different browsers
    Server is always same or one...
    Database is on the server side

    Chrome            Firefox               |            Server          
    React             React                 |            Express         Database
    Client            Client                |            Nodejs

    Client Sends request to the server
    Server sends response to the one who sends request

    Sometimes response can be sent to someone else who hasn't sent request
    E.g. Sending notifications of Daraz referring offer, 

    We are going to learn REST API

    Web Socket: Real Time Connection, Bidirectional Communication
    SSE: Server Sent Events: Server will initiate (or decide whom to send response)

    // Tasks for tomorrow:
        -> Install Postman (Alternative of Postman: Thunder)
        -> Install DB TOOL: MONGODB COMPASS
        -> Install MONGOD COMMUNITY SERVER









*/