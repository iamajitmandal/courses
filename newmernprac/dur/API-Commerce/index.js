const express = require('express');
require('dotenv').config();

const db = require('./database/connection')
const bodyParser = require('body-parser')

const categoryRoute = require('./routes/categoryRoute');

const app = express();

// below code is for learning purpose at the beginning
// app.get('/welcome', (req, res) => {
//     res.send('Welcome to Express JS to learn RESTAPI');    
// })

// middleware
app.use(bodyParser.json())

// routes
// app.use('', categoryRoute)
app.use('/api', categoryRoute)

const port = process.env.PORT || 8000

//listen to port
app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`);    
})