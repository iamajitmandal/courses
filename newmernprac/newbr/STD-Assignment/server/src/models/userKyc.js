const mongoose = require("mongoose");
const { Schema } = mongoose;

const userKycSchema = new Schema({
  citizenshipPhoto: String,
  dob: String,
  fathersName: String,
  panNumber: Number,
  permanentAddress: String,
  temporaryAddress: String,
  kycVerifiedStatus: {
    type: String,
    enum: ['unverified', 'pending', 'verified'],
    default: 'unverified'
  },
  userId: String
});

const UserKyc = mongoose.model("UserKyc", userKycSchema);
module.exports = UserKyc;
