/*
  Query & Path Params

  Learning to checkKycStatus of user:

  Add following code in router.js (BE):
    router.get('/kyc-status/:userId', checkKycStatusByUserId)

  For Data Fetching from BE,
  we now use axios:
    search and follow axios documentation:

    Checking kycStatus of user is 'pending', 'verified' or 'unverified' in the first render in dashboard page:

      useEffect(() => {
        checkKycStatus();
      }, []);
    
      const checkKycStatus = async () => {
        const {data} = await axios.get(`http://localhost:4000/kyc-status/${userDetails._id}`);
        console.log(data);
      }

      In redux, userSlice.js,
      Adding kycVerifiedStatus as a new field as below:

        const initialState = {
          isLoggedIn: false,
          token: "",
          userDetails: {},
          kycVerifiedStatus: ''
      };

      & Making new function named setUserKycVerifiedStatus as below in the same page,

          setUserKycVerifiedStatus(state, actions) {
          return {
            ...state,
            kycVerifiedStatus: actions.payload
          }
        }

      Change the following code in dashboard/page.js:

        const checkKycStatus = async () => {
          const {data} = await axios.get(`http://localhost:4000/kyc-status/${userDetails._id}`);
          dispatch(setUserKycVerifiedStatus(data.KycVerifiedStatus));
      }

      Means that we are saving the kycStatus of the user in the redux.

      Now,
      In dashboard page.js,
      call the following function to display the KYC details in the dashboard page:

        {generateKycDiv()}
      
        Inside above code,

            const generateKycDiv = () => {
            if (kycVerifiedStatus === "unverified") {
              return (
                <p className="p-2 bg-orange-200 ml-2 rounded-lg">
                  User KYC is not verified, <Link href="/user-kyc">Verify Now</Link>
                </p>
              );
            } else if (kycVerifiedStatus === "pending") {
              return (
                <p className="p-2 bg-orange-200 ml-2 rounded-lg">
                  User KYC is submitted. Please wait for admin approval.
                </p>
              );
            } else if (kycVerifiedStatus === "rejected") {
              return (
                <p className="p-2 bg-orange-200 ml-2 rounded-lg">
                  Your KYC was rejected. <Link href="/user-kyc">Re-submit Now</Link>
                </p>
              );
            }

    kycVerifiedStatus -> this variable is received from the redux...

    Now working on the admin side, New Incognito Window::

    Login from admin side...

    Make two pages to load on admin side: Admin Dashboard and Verify-Kyc::

    For fetching all the user kyc data in the admin panel,
    Make one route in the BE,

      router.get('/user-kyc', getUserKyc)

    Make getUserkyc function in the controller,

      const getUserKyc = async (req, res) => {
        const userKyc = await UserKyc.find();
        res.json({
          userKyc,
        });
      };

      In above code, response is sent in the form of array, what if it is send without array form like below:

        const getUserKyc = async (req, res) => {
        const userKyc = await UserKyc.find();
        res.json(
          userKyc,
        );
      };

    Go to the postman and check if it is working or not.
    If it works then try to hit the same link from FE and get all the data from the DB...

    The following code will show all the kyc data from DB in the verify-kyc page of admin side...

    "use client";
import axios from "axios";
import React, { useEffect } from "react";

  const page = () => {
      useEffect(() => {
        getKycList();
      }, []);

      const getKycList = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/user-kyc`
      );
      console.log(data);
    };

    return (
      <div className="flex m-4">
        Verify KYC
      </div>
    );
  };

  This data need not to be saved in redux since it may not be needed in any other pages...
  We can make component level state named kycList and show the data in the page as below...

"use client";
import axios from "axios";
import React, { useEffect , useState } from "react";

const page = () => {
    useEffect(() => {
      getKycList();
    }, []);
    //above code runs useEffect in first load, runs getKycList function
    // getKycList fetches all data from BE and save data in a state named kycList
    // kycList is shown in the string form in the body of this page which is done by below code
    //          {JSON.stringify(kycList)}

    const [kycList, setKycList] = useState([])
    const getKycList = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/user-kyc`
    );
    setKycList(data);
    // console.log(data);
  };

  return (
    <div className="flex m-4">
      Verify KYC
      {JSON.stringify(kycList)}
    </div>
  );
};

export default page;

Now fetched data can be used some css to be shown in the attractive way...

The body part can be changed as follow instead of this line: {JSON.stringify(kycList)}:

  <div className="flex m-4">
      Verify KYC
      // {JSON.stringify(kycList)}
      <div className="p-2 m-2">
        <table>
          <thead>
            <tr>
              <th>DOB</th>
              <th>Father's Name</th>
              <th>Permanent Address</th>
            </tr>
          </thead>
          <tbody>
            {kycList.length > 0 &&
              kycList.map((item) => {
                return (
                  <tr>
                    <td>{item.dob}</td>
                    <td>{item.fathersName}</td>
                    <td>{item.permanentAddress}</td>
                    <td>{item.kycVerifiedStatus}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>










  


*/