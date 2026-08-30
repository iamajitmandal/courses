const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema({
  sender: Number,
  receiver: Number,
  amount: {type: Number, required: true},
  remarks: String
},
  {
    timestamps: true
  }
);

const Transactions = mongoose.model("Transactions", transactionSchema);
module.exports = Transactions;