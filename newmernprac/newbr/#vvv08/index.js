/*
    Continuing into Login Module:
    
      For Login, After Password Matched:
        some token is given to user like jsonwebtoken

      For generating token,
        jsonwebtoken

      jsonwebtoken documentation:
        npm i jsonwebtoken

      Authorized person like BE has secret key
      JSONWEBTOKEN generates token based on username and password of the user if password is matched
      This token is compared with the secret key for authorization

      REPL
      Type NODE in terminal and you can type js codes...

      This is nodejs code that generates random number which has high security
        require('crypto').randomBytes(16).toString('hex')

      Set up SECRET KEY and store in .env file

        SECRET_KEY = 815d3dddcc08cb1c27133195363d3db95d5f4342ddeef508b4d34559846b42d72c1c467c25a7ff71f9cc0023464f7702e63e411ccfd070d2d6b76730081d515b

      Login Module is completed as below:
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
          const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
          if(user){
            const isMatched = await bcrypt.compare(req.body.password, user.password);
            if(isMatched){
              const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
              console.log(process.env.SECRET_KEY);
              res.json({ msg: "Aunthenticated", token });
            }else{
              res.json({ msg: "Invalid Password" });
            }
          }else{
            res.json({ msg: "Phone Number not registered" });
            }
        });

      Learning CORS:
      
      Learning to HIT BE FROM FE using fetch API,

    Try to understand the following code:
      const signup = () => {
      const formik = useFormik({
        initialValues: {
          phoneNumber: "",
          fullName: "",
          email: "",
          password: "",
          gender:""
        },
        onSubmit: (values) => {
          // alert(JSON.stringify(values, null, 2));
          registerUser(values);
          console.log(values);
        },
      });

      const registerUser = async (values) => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        };
        // Using fetch to hit the backend url which takes 2 arguments backend route/endpoints & datas to be send
        const response = await fetch(
          "http://localhost:4000/register",
          requestOptions
        );
      };

      return (
        <>
          UI CODE HERE
          When a submit button is her clicked, registerUser(values) function is executed
        </>
      )




      




*/