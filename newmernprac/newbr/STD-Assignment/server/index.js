const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 4000;

const dbConnect = require("./src/db/connection");
dbConnect();

const userRoute = require('../server/src/routes/user')
const transactionRoute = require('../server/src/routes/transactions')

const initializeNPayBalanceAndCharge = require('./src/initializeNpay/script')

const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// io.on('connection', (socket) => {
//   console.log('a user connected', socket.id) ;

//   // below code is make a socket 'named' transactions
//   socket.on('transactions', (transactions) => {
//     // console.log(transactions); //we'll get hi initially

//     // Below code receives data coming from the FE through the socket named 'transactions'
//     console.log(transactions); 
//   })
// });
// a user connected will only be shown when user is connected from the FE side


// io.on('connection', (socket) => {
//   socket.on('transactions', (transactions) => {  // --> this line is like : app.post('/transactions', (req, res)) => {}
//     io.emit('hi', 321)                          // --> in app.post, we used to hit route, here we use socket named 'transactions'
//   })
// });

io.on('connection', (socket) => {
  socket.on('transactions', (transactions) => {  
    io.emit('updateDetails', transactions)                          
  })
});

require("dotenv").config();
app.use(express.json());
// Cross-Origin Resource Sharing -> BE is at 8000 and Fe is at 3000 that data will come in BE from different origin
app.use(cors());

initializeNPayBalanceAndCharge();

app.use(userRoute)
app.use(transactionRoute)

// app.listen is changed into server.listen as we are using socket.io now...
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
