/*
  Multiple Picture Upload Using Multer

  How to loop an object?
    const obj = {
      math: 30,
      science: 40
    }

    for(let item in obj){
      console.log(obj[item])
    }

  Try to understand the following code of user-kyc/page.js for multiple file upload using multer:::
          <input
          className="mx-4"
          // below code uploads single picture e.target.files[0], for multiple upload -> e.target.filelist
          // to send image we are using e.target.files
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          />

  In the frontend also we need to maintain .env like PORT to which BE should be hit,
  For that, Make new file named '.env.local' in the client folder

  And inside that: Add the following code.
    NEXT_PUBLIC_API_URL=http://localhost:4000

    -> 4000 is the port address of the BACKEND running port

  To use it:
    Use this way:
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/user-kyc`,
            requestOptions
          );

  How to ignore some files not to be uploaded in the github?
  For that: in gitignore file add the following lines...

    /uploads
    //uploads/citizenship

  /uploads and /citizenship folder will not be uploaded in the github now...

  22th Minute
  Now working on the 'Transaction' Section of Npay

  Learning Modal Pop Up means that 'While Sending Money" New Div/Modal Popups
  Learning Formik Yup for validation/error message while sending money

  After making the FE part of FORM, go to the BE, make model, controller and routes for sending money test
  using postman then only test through FE

  For updating data in the database:
    2 options:
      PUT: For entire update, use PUT 
      PATCH: For updating only specific filed, use PATCH (Partial Update)

  From BE Postman, 
    sent as / -> req.params
    sent as ? -> req.query
    sent as body -> req.body

    Some Topics for Interview:
    
    Backtick, Question Mark
    Optional Chaining
    e.g name.address?.id -> if id is not there then also there wont come error
    Template Literal    ``
    Ternary Operator: 10 > 11 ? console.log("hi") ; console.log("hello");
    
    
  Learning Transaction Section: Not Completed Totally...


*/