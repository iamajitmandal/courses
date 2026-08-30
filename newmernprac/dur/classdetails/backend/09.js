/*
    Learning Server Side Validation:

    For that we need one package named: express-validator (ZOD for typescript)

    Make one folder named 'validation' in main server folder and inside it, make index.js

    eg. is shown below
*/
   // next means to go to other defined function after productValidation
exports.productValidation=(req, res,next)=>{
    req.check('product_name', 'Product name is required').notEmpty()
    req.check('product_price', 'Price is required').notEmpty().isNumeric().withMessage('Price only accepts numeric value')
    req.check('countInStock', 'Stock value is required').isNumeric().withMessage('Stock value only contains numeric characters')
    req.check('product_description', 'Product description is required').notEmpty().isLength({min: 20}).withMessage('Description must be more than 20 characters')
    req.check('category', 'Category is required').notEmpty()

    //ValidationErrors is predefined and reads all errors
    const errors = req.validationErrors()
    if(errors){
        // to show first error use [0]
        const showError = errors.map(error=>error.msg)[0]
        // to show all errors don't use [0]
        // const showError = errors.map(error=>error.msg)
        return res.status(400).json({error: showError})
    }
    //if this function is okay, then go to next function
    next()
}

// Now go to productRoute for implementation
// use productValidation after image upload
// router.post('/postproduct', upload.single('product_image'), productValidation, postProduct);

// import productValidation in the index.js
// upside
// const expressValidator = require('express-validator');
// in middleware
// app.use(expressValidator());



