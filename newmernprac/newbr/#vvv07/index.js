/*
    Assigning Task Through GITHUB Project Management Section    

    After Your Assigned Task is completed:
        Push to a new branch
    
            -> Create a new branch -> git checkout -b homeUI
        
        Make some changes in code
            -> ACP

            -> git add .
            -> git commit -m "Login UI Change"
            -> git push -u origin homeUI
            
            Create Pull Request

    Example if you have done task of 'Change Password'
        -> git checkout -b changePassword
        -> git add .
        -> git commit -m "Change Password Task Done"
        -> git push -u origin changePassword

        Create Pull Request

    Learning to Hash Password for Login -->
        Example Algorithm -- blowfish, bcrypt

    Learning About Bcrypt from Bcrypt Documentation:

    Install bcrypt in backend:
        npm install bcrypt

    Learning to Hash Password:

        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

    Just bcrypt.hash -> encrypts the password

    Learning to Complete Signup Module:
        app.post("/register", async (req, res) => {
          // console.log(req.body.phoneNumber);
          // Step 1: Check if phone number exists
          // if exist, msg already exist
          // if does not exist, the
          //     encrypt the password
          //     User.create(req.body)
          // const userExist = await User.exists({phoneNumber: req.body.phoneNumber})
          // later we'll do following code using mongoose or clause
          const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
          console.log(hashPassword);
          req.body.password = hashPassword;
          const phoneExist = await User.exists({ phoneNumber: req.body.phoneNumber });
          const emailExist = await User.exists({ email: req.body.email });
          if (phoneExist) {
            return res.json({ msg: "Phone Number already taken" });
          } else if (emailExist) {
            return res.json({ msg: "Email already taken" });
          } else {
            await User.create(req.body);
            res.json({ msg: "User Created Successfully" });
          }
        });

    Starting Login Module:



*/