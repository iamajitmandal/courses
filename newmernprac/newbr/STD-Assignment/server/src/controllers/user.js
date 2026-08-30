const User = require("../models/user");
const UserKyc = require("../models/userKyc");

const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

const findAllUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.json(data);
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const registerUser = async (req, res) => {
  console.log(req);
  // console.log(req.body.phoneNumber);
  // Step 1: Check if phone number exists
  // if exist, msg already exist
  // if does not exist, the
  //     encrypt the password
  //     User.create(req.body)
  // const userExist = await User.exists({phoneNumber: req.body.phoneNumber})
  // later we'll do following code using mongoose or clause
  try {
    const hashPassword = await bcrypt.hash(req.body?.password, saltRounds);
    console.log(hashPassword);
    req.body.password = hashPassword;
    const phoneExist = await User.exists({ phone: req.body.phone });
    const emailExist = await User.exists({ email: req.body.email });

    if (phoneExist) {
      return res.status(409).json({ msg: "Phone Number already taken" });
    } else if (emailExist) {
      return res.status(409).json({ msg: "Email already taken" });
    } else {
      await User.create(req.body);
      res.json({ msg: "User Created Successfully" });
    }
    console.log(hashPassword);
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const logInUser = async (req, res) => {
  // STEP 1:
  // check if phone number exist
  //
  //No: res.json({msg: 'User Not Registered'})
  //Yes:
  //Check if password matches
  //No: res.json({msg: 'Incorrect Password'})
  //Yes: if password matches then
  //GENERATE -> TOKEN, SESSION
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (user) {
      const isMatched = await bcrypt.compare(req.body.password, user.password);
      if (isMatched) {
        const token = jwt.sign(
          { phone: req.body.phone },
          process.env.SECRET_KEY
        );
        console.log(process.env.SECRET_KEY);
        res.json({ msg: "Authenticated", token, user });
      } else {
        res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      res.status(401).json({ msg: "Phone Number not registered" });
    }
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const updateUserKyc = async (req, res) => {
  try {
    req.body.citizenshipPhoto = req.file.filename;
    req.body.kycVerifiedStatus = "pending";
    await UserKyc.create(req.body);
    console.log(req.body);
    res.json({ msg: "KYC Submitted! Please wait for verification!" });
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
};

const checkKycStatusByUserId = async (req, res) => {
  const kycDetails = await UserKyc.findOne({ userId: req.params.userId });
  if (!kycDetails) {
    return res.json({
      kycVerifiedStatus: "unverified",
    });
  }

  return res.json({
    kycVerifiedStatus: kycDetails.kycVerifiedStatus,
  });
  console.log(kycDetails);
};

const getUserKyc = async (req, res) => {
  const userKyc = await UserKyc.find();
  res.json(
    userKyc
  );
};

const getUserBalanceById = async (req, res) => {
  // console.log("hi")
  // console.log(req.params);
  const totalBalance = await User.findById(req.params.userId).select('totalBalance');
  res.json(
    totalBalance
  )  
};

module.exports = {
  findAllUsers,
  registerUser,
  logInUser,
  updateUserKyc,
  checkKycStatusByUserId,
  getUserKyc,
  getUserBalanceById
};
