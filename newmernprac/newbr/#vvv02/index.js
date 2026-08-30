/*
    Revision Protocol, Domain/HostNam, Endpoints/Routes

    Learning to install/start server (means backend folder structure setup)

    Install Nodemon -> for automatically refreshing server and in package.json file add:
            
        "dev": "nodemon index.js"

    Learning to use POSTMAN:    

    HTTP METHODS:
        GET -> retrieve/request the data from he server
        POST -> send new data/create
        PUT -> entire update ~ e.g. FB edit account details
        PATCH -> partial update ~ e.g. Editing comments
        DELETE -> remove the data

        PUT replaces the entire resource, while PATCH only modifies specific fields. 

        For Ride Sharing App, some fields may be:
            {
                riderID: 3321,
                passengerID: 401,
                distance: 15,
                price: 998,
                pickUp: 'Kathmandu',
                destination: 'bhk,
                status: 'pending'
                // status: 'PICKED UP'
            }
            If status is only to be updated after rider has picked up passenger, then you can use patch

    http://localhost:4000/users?orderBy=asc

    SWAGGER UI: REST API DOCUMENTATION

    Query Params:
        - ?
        - optional
        - used to filter, search, and sort the data
        - we can add multiple params

    GET: http://localhost:5000/products?searchText=k            -> to search products with name 'k'
    GET: http://localhost:5000/page=3&limit=5                   -> data of page 3 and only 5 datas
    GET: http://localhost:5000/page=3&limit=5&orderBy=price     -> data of page 3 and only 5 datas, ordered by Price also

    Path Params:
        - /
        - its required to add it in the endpoint
        - used to identify a specific resource
        - for e.g. to get specific id resource
        - returned data are normally object

    GET: http://localhost:4000/products/21                      -> to get data of product number 21

    Try to understand the following code: Query Params
    // Run below code and hit the url 'http://localhost:4000/users?startsWith=r' through postman and see the result
        const userList = [
            'ajit', 'ram', 'gopal'
        ]

        app.get('/users', (req, res) => {
        console.log(req);
        const searchedUser = userList.filter((item) => {
            if(item[0] == req.query.startsWith) return item
        })
        res.send(searchedUser)
        })

    Try to understand the following code: Path Params
    // Run below code and hit the url 'http://localhost:4000/users/2' through postman and see the result
        const userList = [
            {id:1, name:'ajit', addr: 'ktm'},
            {id:2, name:'ram', addr: 'bkt'},
            {id:3, name:'gopal', addr: 'drn'},
            {id:4, name:'shyam', addr: 'pkr'},
        ]
        app.get('/users/:id', (req, res) => {
            console.log(req.params.id)
            const particularUser = userList.find((item) => {
                if(item.id == req.params.id){
                    return item
                }
            })
            res.send(particularUser)
        })

    Loop, filters, map, reduce are rarely used in backend, Why?
    Database gives the queries then so it will be easy...

    Task:
        Setup client and server in your project and Start Building Your Project

    











*/