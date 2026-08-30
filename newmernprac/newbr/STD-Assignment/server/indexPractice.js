// const { createServer } = require('node:http');

// const server = createServer((req, res) => {
// res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(4000, '127.0.0.1', () => {
//     console.log('Listening on 127.0.0.1:4000');
// });
// above code was from nodejs official docs

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dbConnect = require("./src/db/connection");

const app = express();
// const port = 4000
app.use(express.json());
//above code means that it converts incoming data from db into json in express which is also called Body Parser
app.use(cors());

const saltRounds = 10;

dbConnect();
const { Schema } = mongoose;
mongoose.connect("mongodb://127.0.0.1:27017/npay");
// instant is database name

var jwt = require("jsonwebtoken");

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
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  const data = await User.find();
  res.send(data);
});

app.get("/users", (req, res) => {
  User.create({ name: "Ajitman", addr: "lalitpur" });
  res.send("Ok");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
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
});

app.post("/login", async (req, res) => {
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
        res.json({ msg: "Aunthenticated", token, user });
      } else {
        res.status(401).json({ msg: "Invalid Password" });
      }
    } else {
      res.status(401).json({ msg: "Phone Number not registered" });
    }
  } catch (err) {
    res.json({ msg: "Something went wrong" });
  }
});

const port = process.env.PORT || 4000;
require("dotenv").config();

// if product url is hit, ['Hawkins', 'Panasonic', 'Samsung'] is returned
// app.get('/products', (req, res) => {
//   res.send(['Hawkins', 'Panasonic', 'Samsung'])
// })

app.get("/", (req, res) => {
  res.send("Hello World! Nodejs & Express");
});

// const userList = [
//     'ajit', 'ram', 'gopal'
//  ]

// app.get('/users', (req, res) => {
// console.log(req);
// const searchedUser = userList.filter((item) => {
//     if(item[0] == req.query.startsWith) return item
// })
// res.send(searchedUser)
// })

// const userList = [
//     {id:1, name:'ajit', addr: 'ktm'},
//     {id:2, name:'ram', addr: 'bkt'},
//     {id:3, name:'gopal', addr: 'drn'},
//     {id:4, name:'shyam', addr: 'pkr'},
// ]
// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id)
//     const particularUser = userList.find((item) => {
//         if(item.id == req.params.id){
//             return item
//         }
//     })
//     res.send(particularUser)
// })

// app.get('/me', (req, res) => {
//     res.send({
//         name: 'Ajit',
//         balance: 1000,
//         rewardPoint: 100
//     })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
