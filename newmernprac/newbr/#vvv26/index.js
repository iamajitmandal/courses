/*
  Lets discuss the theory about 'Socket.io'

  There is one server in the system...

  A -> 

  B ->                            Server

  C -> 


  In normal flow, server is requested and server sends response to those who requested
  If A request Server, then Server gives response to A

  But it may not always be true, like in chat app, if A request Server, it may send response to B also or C,D... in
  group chat

  API which we have made till now is REST API means the one who sends request will get response
    e.g REST API -> If user request ask list of user then all list of user is given as response to user
  
  Next is Web Socket i.e. A sends request other clients may get response
    e.g Web Socket e.g. -> If user A sends 'Hi' then that 'Hi' may not be sent as response to 'A' may be sent to B
                            like in chat app
    e.g. Ride Sharing: e.g. Driver should send the coordinates to the server when it has reached each second and
                            that coordinates is updated each second to the 'Passenger' map
          Client triggers some event
          This is bidirectional ::: i.e. Information flow from client to server and server to other clients may be
        
  Another is also there like SSE(Server Sent Events) -> Server itself gives new info to the client like in
          For this some event has to be triggered
          More example may be : Notifications about 'Some Sale' in Daraz App
          Like in Downloading, some % of of download each second is shown to the user

          This is unidirectional ::: i.e. Server to Client :::: Server -----> Client

          Why web socket?
          -> to update 'Balance Amount' automatically if someone sends balance without refresh
          -> in chat app, to update messages without refresh

          Not All modules need REAL TIME....

          ENGLISH MEANING OF SOCKET -> a hollow part or piece for receiving and holding some part or thing
            A socket is one endpoint of a two way communication link between two programs running on the network.

          Web Socket in NOdejs is ---> very popular, lightweight, highly fast and highly efficient

          Go to socket.io documentation:
          For installation: 
            npm install socket.io

          Add following codes in BE index.js:
            const { Server } = require('socket.io');

          Here websocket is different server and we are use express as our server in the BE
          So there will be two servers in the BE since websocket and express are different library
          Now we need to join these two servers

          Try to understand the following code: (Add these codes in BE Index.js)
            const express = require('express');
            const { createServer } = require('node:http');      ->  extracting createServer functionality
            const { join } = require('node:path');
            const { Server } = require('socket.io');            -> Server from socket.io

            const app = express();
            const server = createServer(app);                   -> server from express
            const io = new Server(server);                      -> server and Server are being joined

            io.on('connection', (socket) => {
              console.log('a user connected', socket.id) ;
            });
            // a user connected will only be shown when user is connected from the FE side

        What is cors?
            
            -> npm i socket.io-client
            Install in the client side::

        How to use socket.io with react? --> Search documentation and follow as below:
        Add following code in BE for React:

          const io = new Server(server, {
            cors: {
              origin: "http://localhost:3000"
            }
          });


      Make new folder socket in src folder of client side and inside it make socket.js
      Add the following code inside it:

        import { io } from 'socket.io-client';

        // "undefined" means the URL will be computed from the `window.location` object
        const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

        export const socket = io(URL);

      Import and use this socket in the react file where you want it:

            useEffect(() => {
            socket.on("connection");
          }, []);


    Above code MAKES THE SOCKET ON, but now we need to make different sockets for different tasks

    Try to understand the following code:
      io.on('connection', (socket) => {
      console.log('a user connected', socket.id) ;

      // below code is make a socket 'named' transactions
      socket.on('transactions', (transactions) => {
        console.log(transactions);
        })
      });

    Try to understand the following code:

        const { data } = await axios.patch("http://localhost:4000/transactions", {
          "npayIdReceiver": values.npayIdReceiver,
          "npayIdSender": userDetails.phone,
          "amount": values.amount,
          "remarks": values.remarks,
           });
        toast.success(data.msg);
        // below code emits socket named 'transaction'
        // socket.emit('transactions', 'hi');

        // below code sends the data to the server in BE through socket named 'transactions'
        socket.emit("transactions", {
          "npayIdReceiver": values.npayIdReceiver,
          "npayIdSender": userDetails.phone,
          "amount": values.amount,
          "remarks": values.remarks,
          });

    Try to understand the following code: 

    // Below code receives data coming from the FE through the socket named 'transactions'
        socket.on('transactions', (transactions) => {
          // console.log(transactions); //we'll get hi initially
          console.log(transactions); 
        })


  For editor tools in the Web: codesandbox, zodit react, ckeditor




  







*/