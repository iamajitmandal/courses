/*
  For Verifying KYC,  
    In userSchema, add new flag named 'isKycVerified'.

  Learning to make "Very Kyc" for users.

  Try to understand the following code: to upload file
    <form>
              <div className="mt-2">
              <input className="mx-4" onChange={(e)=>console.log(e.target.files[0])} type="file" />
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
    </form>

    To store images in mongodb BE or database, 
      images should be stored in text form for that some library is there called 'grid fs'
      But it will be complex

    So we upload images in directory and provide link of that image in the BE

    We use MULTER for upload file tomorrow




  


*/