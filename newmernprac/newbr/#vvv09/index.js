/*
      Learning to figure out where I have got issue in FULL STACK (FE or BE)

      To check what will be the value of e:::
        onChange={(e)=>console.log(e)}

      After signup is done, user must be notified about the SUCCESSFULL SIGNUP MESSAGE, for that we need to use toast:
      For that go to react hot toast documentation, and use it:

      Import in main layout.js file,
              <Toaster/>

        const registerUser = async (values) => {
          const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        };
        const response = await fetch(
          "http://localhost:4000/register",
          requestOptions
        );
        const data = await response.json();
        // alert(data.msg);
        if(response.statusText == 'OK'){
          toast.success(data.msg);
        }
        };

      Revising above code using status codes: below is FE code
          const registerUser = async (values) => {
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };
            const response = await fetch(
              "http://localhost:4000/register",
              requestOptions
            );
            const data = await response.json();
            // alert(data.msg);
            if(response.status == '200'){
              toast.success(data.msg);
            }else{
              toast.error(data.msg);
            }
          };

      Below is BE code:
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
            await User.create(req.body)
            res.json({ msg: "User Created Successfully" });
          }
          console.log(hashPassword);
        });

      Status Message is 200 be default: you can set different in the BE for different works

      Signup is done, now we proceed to login...

        After Signup, learning to login
        and after login learning to navigate to other page...





*/