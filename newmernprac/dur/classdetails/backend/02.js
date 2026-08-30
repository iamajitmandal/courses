/* Learning Backend (Node Express) */
/* 
    *** #v2 (Codes in API-Commerce) ***
    *** Learning to create MongoDB Atlas and ***

    Create mongodb account and create cluster
    Close the pop up box
    Go to Network Access under security on the left side
    Then click on Add IP Address
    Click on Allow Access From Everywhere
    Click on confirm
    Cluster must be pending or active (Refresh the page if necessary)
    Now,
    Go to database access
    Add New Database User
        Remember Username(ajit) and Password(ajit12345)
    Click on Add User
    
    Now go to the clusters, browse collections and click on Create Database or Add My Own Data
    Insert the following fields:
        Database Name: ecommerce-database
        Collection Name: ecommerce-database

    Go to Clusters and Click on Connect
    Then go to Connect to your application
    Now Copy the connection code from there

    mongodb+srv://ajit:<db_password>@cluster0.oxfvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    Go to the environment variables and set database connections there...
    Replace <db_password> with the password for the ajit database user.

     DATABASE = mongodb+srv://ajit:ajit12345@cluster0.oxfvs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    Now go the main project folder and create new folder named "database"
    and inside that make connection.js file

    Install mongoose
        npm install mongoose

    Again go to the connection.js, add the following code:
        const mongoose = require('mongoose')
        mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('database connected'))
        .catch((err) => console.log(err))
    
    Go to the index.js, add the following code after require('dotenv').config() code:
        const db = require('./database/connection')

    Now run the server, you must get the message that "database connected"

    Create a new file categoryModel.js inside model folder and add the following code in it:
        const mongoose = require('mongoose')
        
        const categorySchema = new mongoose.Schema({
            category_name: {
                type: String,
                required: true,         -> remove this in the latest version of express to run code successfully
                trim: true
            }
        }, {timestamps: true})
        // createdAt
        // updatedAT
        
        module.exports = mongoose.model('Category', categorySchema)

    Add the following code in categoryController.js inside the controllers folder
        exports.postCategory = async(req, res) => {
            let category = new Category(req.body);
            category = await category.save();
            if(!category){
                return res.status(400).json({error: 'Something went wrong'});
            }
            res.json({category})
        }

    Add the following code in the categoryRoute.js inside the routes folder
        
        const { postCategory } = require('../controllers/categoryController');
                    
        router.post('/postcategory', postCategory);

    Add the following codes in index.js:

        // after db connection
        const bodyParser = require('body-parser')
    
        // before routes
        // middleware
        app.use(bodyParser.json())

    Now, open postman and learn to post some Category and see the output
*/