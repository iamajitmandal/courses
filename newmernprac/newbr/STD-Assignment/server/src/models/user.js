const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phone: String,
  name: String,
  email: String,
  password: String,
  // if you have to choose anyone of the given items then use enum: below code is enum mongoose
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "female",
  },
  // role is also enum
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  totalBalance: { type: Number, require: true, default: 1000 },
  isKycVerified: { type: Boolean, default: false },
  income: Number,
  expense: Number,
  rewardPoint: Number,
  citizenshipPhoto: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
