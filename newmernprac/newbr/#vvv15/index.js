/*
    Before moving to any branch, at first say vscode about the latest updates in git..

      git fetch
    Then you can do git checkout to other branches

    10:00 min -> Starting to learn about folder upload...

    Make userKycSchema in new file named userKyc.jc inside models folder in BE,
    Then define the routes for it in routes/user.js and define function for it in Controllers Folder

    Axios can also be used instead of fetch...
    Axios is simplified than fetch but fetch is easier to be used for beginners...

    Images should be uploaded before saving in the database for that we need to use one middleware which is called multer

    MULTER:
    Go to Multer DOcumentation Install it....

    We can use disk storage to store files on the disk...

    To upload image from FE in DB,
    Uploading Image Object to DB cannot be done in 'json/application' form as we did in signup/register
    for this we need to use 'form-data', search react form-data to upload image in DB from FE.
    Because we are sending STRING also and image also and they cannot be sent in JSON format

    Learning to Join Model Field (since there is connection between userModel and userKycModel),
    Here, 'userId' key is same in both model, so for that we use ref -> reference to join the models
    for this we have mongoose populate (But it is not necessary)

    Checking kycDetails after login: So adding following code in login function in BE controller:  
      const kycDetails = await UserKyc.findOne({userId: user._id});
      console.log(kycDetails, user._id);

    Learned to save KYC Details in DB, and to relate which user updated to KYC Details.





  


*/