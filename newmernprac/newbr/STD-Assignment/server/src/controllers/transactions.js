const NpayReserve = require("../models/npayReserve");
const User = require("../models/user");
const Transactions = require("../models/transactions");

const updateBalance = async (req, res) => {
  const {npayIdSender, npayIdReceiver, amount, remarks} = req.body;
  // console.log(req.body)
  // First Find if the user is there or not
  const receiverUser = await User.findOne({ phone: npayIdReceiver });
  // console.log(receiverUser);
  const senderUser = await User.findOne({ phone: npayIdSender });

  // Transaction Service Charge + sending amount <= total Balance
  const npayReserve = await NpayReserve.find()
  const amountWithCharge = Number(amount) + npayReserve[0].npayServiceCharge/100 * Number(amount)
  // console.log(npayReserve[0].npayServiceCharge)
  // Transaction Service Charge + sending amount <= total Balance
  if (senderUser.totalBalance < amountWithCharge )
    return res.json({
      msg: "Insufficient Balance",
    });

  if (senderUser.isKycVerified || amount <= 1000) {
    senderUser.totalBalance = senderUser.totalBalance - amountWithCharge;
    senderUser.save();
    receiverUser.totalBalance = receiverUser.totalBalance + Number(amount);
    receiverUser.save();
    await NpayReserve.updateMany({}, {npayBalance: npayReserve[0].npayBalance + npayReserve[0].npayServiceCharge/100 * Number(amount)} )
  } else {
    return res.json({
      msg: "Your Transaction Limit is Rs 1000 only",
    });
  }

  const transactionDetail = await Transactions.create({
    sender: npayIdSender,
    receiver: npayIdReceiver,
    // amount: amount,
    // if LHS & RHS are equal then we can use following
    amount,
    // remarks: remarks
    remarks
  })
  console.log(transactionDetail);
  // console.log(senderUser);
  return res.json({
    msg: "Transaction Success",
    transactionId: transactionDetail._id,
    transactionDetail
  });
};

module.exports = { updateBalance };
