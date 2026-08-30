/*
    Revision a bit about PostMan, & Mongodb Compass

    Revising about making Schema and Model from Mongoose Documentation
    Making some routes and learning about PostMan

    Proceeding towards Signup:
        When we are sending some data to save to the server, we neither use query nor path params
        We use body:

    Following Npay Project along with Sir: For that I have 'Client' and 'Server' Folder in STD-Assignment Folder
        Making Userschema for Npay Project:

        const userSchema = new Schema({
            phoneNumber: String,
            fullName: String,
            email: String,
            password: String,
            // if you have to choose anyone of the given items then use enum: below code is enum mongoose
            gender: {
                type: String,
                enum: ["male", "female", "other" ],
                default: "female"
            },
              // role is also enum
            role: {
                type: String,
                enum: ["admin", "user"],
                default: "user"
            }
        });

        Add the following code in index.js and create user through postman, and check whether datas are saved in db or not
        app.post('/register', (req, res) => {
            console.log(req.body)
            User.create(req.body)
            res.send('Ok');
        })
        // In above code req.body is not shown in console for that to covert all incoming data into JSON, 
        // we need to add following code in index.js:
            app.use(express.json())
        //above code means that it converts incoming data from db into json in express which is also called
        // Body Parser


    1:02
    Designing Signup Page in Npay Project

        useStates may be handled by useFormik

    



*/