/*
  Learning make new folder in BE named 'controller' inside src folder
  Make routes in route folder, routes logic in controller folder...

  Working on Npay Dashboard Page and Income Section in Dashboard Page:

  tailblocks.cc

  Working for income on BE:
    Making balance.js file inside models folder
    Making new schema named balanceSchema:

    Schema for balance was added in User Schema and balance.js was deleted:
        totalBalance: { type: Number, require: true, default: 1000 },
        income: Number,
        expense: Number,
        rewardPoint: Number,

      So when new user is registered then totalBalance, income, expense, rewardPoint is automatically generated...

      Make transaction.js file inside models folder...
        const mongoose = require("mongoose");
        const { Schema } = mongoose;
        
        const transactionSchema = new Schema({
          sender: Number,
          receiver: Number,
          amount: {type: Number, required: true},
        
        },
          {
            timestamps: true
          }
        );
        
        const User = mongoose.model("balance", transactionSchema);
        module.exports = Transaction;

    Task:
      When user is logged it then balance of the user must be picked up from the database and shown in the database page



  


*/