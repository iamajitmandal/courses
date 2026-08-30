/*
  
  Different Scenarios in Transactions:

    Sender (KYC Verified):
      Sending -> 10000

    Receiver (KYC Not Verified)

    While sending money to the receiver, COMPANY should also earn so certain amount has to be gone to the 
    company too...
    For that, lets make a model for that named npayReserve.js in models folder and add codes as:
    (Not all models need routes, sometimes we need to make just models and intiliaze it in the main 
    index.js file as below to create 'Balance' account for the NPAY Company...)

      const mongoose = require("mongoose");
      const { Schema } = mongoose;
      
      const npayReserveSchema = new Schema(
        {
          npayBalance: { type: Number, default: 0 },
          npayServiceCharge: { type: Number, default: 10 },
        },
        {
          timestamps: true,
        }
      );
      
      const NpayReserve = mongoose.model("NPayReserve", npayReserveSchema);
      module.exports = NpayReserve;

  Lets initialize Npay Balance DB, for that:
    Make initializeNpay Folder in 'src' folder and inside it make script.js and add the following code there:
      const mongoose = require("mongoose");
      const { Schema } = mongoose;
      
      const npayReserveSchema = new Schema({
        npayBalance: Number,
        npayServiceCharge: {type: Number, default: 10}
        
      },
        {
          timestamps: true
        }
      );
      
      const User = mongoose.model("NPayReserve", npayReserveSchema);
      module.exports = Transaction;


    Call this script and run in the main 'index.js' of the MAIN BE folder..

      const initializeNPayBalanceAndCharge = require('./src/initializeNpay/script')

      initializeNPayBalanceAndCharge();

    Here no need to make route for this model, just we initialized the 'Balance' of the NPAY Company...

    Note:
      Transaction Service Charge + sending amount <= total Balance

    Learning 'Transaction' controllers of the BE...

    vvi -->
      Learning to UPDATE REAL TIME 'Balance' of the user --> after dashboard page is refreshed using redux...


*/