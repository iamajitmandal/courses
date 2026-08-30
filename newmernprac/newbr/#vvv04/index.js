/*
    Learning about Environment Variables

    Setting up .env files
        Make .env file and add:
            PORT = 500

    In index.js, see conosle.log(process.env ->
    
    In index.js,
            process.env.port
    
    We need separate package -> npm install dotenv
    .env will not be pushed to the server

    Now change index.js as:
        require('dotenv').config()

        const port = 4000
        console.log(process.env)    -> just to see the result in console

    When projects are cloned from github, .env and node_modules are not cloned
    For that we have to type:
        npm install -> in both server and client

    Use HomeBrew for MAC

    Mongoose -> ODM for MongoDB
        -> npm install mongoose

    Go to  mongoose docs, and try to connect your app to DB
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://127.0.0.1:27017/npay');
        // npay is database name (project name)
    
    Lets organise the server folder now:
        Make src folder inside server folder
            Inside src folder, make db
            Inside src folder, make routes
    
    Inside db folder, make connection.js:
        Move the database codes to connection.js

        Add the following codes in connection.js:

            const dbConnect = async() => {
            try{
                const connection = await mongoose.connect('mongodb://127.0.0.1:27017/edtechspark');
            // console.log(connection);
            if(connection) console.log("Connected to MongoDB");
            }catch(err){
                console.log(err)
                process.exit()
            }

            first connection variable, then async...await, then try{}catch{}

        module.exports = dbConnect
        
    Import dbconnect in index.js:
        const dbConnect = require('./database/connection')
        dbConnect()

    Top Level Await: 

    In server, try{}catch{} is important

    SENTRY:
        For Error Tracking, QA team uses SENTRY that sends email if any app crashes in the server

    Learning to create one Schema, then Model and learning to add the data to mongodb database...



*/