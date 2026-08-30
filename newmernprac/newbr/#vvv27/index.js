/*
  While sending data to BE from FE through socket we only need sender and receiver name so, change the following code as:

    socket.emit("transactions", {
      "npayIdReceiver": values.npayIdReceiver,
      "npayIdSender": userDetails.phone,
    });


  Understand the following code: io.emit sends '321' to the socket named 'hi'

    io.on('connection', (socket) => {
    socket.on('transactions', (transactions) => {  // --> this line is like : app.post('/transactions', (req, res)) => {}
      io.emit('hi', 321)                          // --> in app.post, we used to hit route, here we use socket named 'transactions'
    })
  });


    Add the following code in the dashboard page,

      useEffect(() => {
        socket.on('hi', (info) => {
        console.log(info)
      })
      }, [socket])

      Above code means that whenever 'socket' named dependency is changed 
      In above code whatever information comes in 'hi' is show in console

      The following is the main socket update code in the dashboard page:
      It says that if any changes occurs it 'transactions' socket, then it automatically calls checkUserBalance function
      which in turn updates the balance of the receiver without refreshing the page...

            useEffect(() => {
              socket.on('updateDetails', (transactions) => {
              // console.log(transactions)
              const {npayIdReceiver, npayIdSender} = transactions;
              if(userDetails.phone == npayIdReceiver || userDetails.phone == npayIdSender){
                checkUserBalance()
                }
              })
            }, [socket])

      This finally updates the cash of the receiver without refreshing and simple basic socket is over...
      After balance comes in the receivers account, it should show transaction details for that lets make
      transactions details page...

  Following code was added in the 'transaction' controller to store the transactions database:

      await Transactions.create({
        sender: npayIdSender,
        receiver: npayIdReceiver,
        // amount: amount,
        // if LHS & RHS are equal then we can use following
        amount,
        // remarks: remarks
        remarks


  lottiefiles ---> for animated GIFs


  Saving Transaction Details in the backend---> 

  Working on Statement Sections ---> 
    Assignment: In statement page, render the statements done by a particular user




  







*/