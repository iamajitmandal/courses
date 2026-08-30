/*
    First Data First not UI
    Means that BE codes are checked through postman then only we go to design UI

    Learrning Backend Validation
    Designing Signup Form

    In signup form, one input field must be unique
    Learning to Create User and store in the database

    Before creating new User,
        Step 1: Check if phone number exists
            if exist, msg already exist
            if does not exist, the
                encrypt the password
                User.create(req.body)

    // Synchronous Vs Asynchronous JS:
    // In BE, we use async...await for asynchronous so that if some action takes time in backend then programs must go on
    side by side

    const a = 10
    const a = db bata aaucha 10 -> means for such type of we may use async...await

    Or...clause in mongoose  -> Mongoose Query syntax

    // lets think for login condition:
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
    });



*/