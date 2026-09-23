/*
    Learning to delete Category

    Using Morgan to see which 'endpoint' or route has be hit from the FE or Postman
    That endpoint is seen only in the console in the development environment
    later when hosted this endpoint is not seen

    in the main index.js file,
        const morgan = require('morgan')

        // middleware
        app.use(morgan('dev))

    Now, whenever you hit any route from the postman, you will see that endpoint in the terminal

*/