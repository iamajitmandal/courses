/*
  Starting NPAY Project

    1. First create Repo named n-pay with 'nepali' name
    2. Add ReadMe & GitIgnore
    3. Clone Repo
      
      Inside N-pay folder, there must be gitignore and Readme.file

    4. Install React Project with named 'client' (Project will be made inside 'client' folder)


    Project Discussion of N-pay E-wallet:
      For proceeding we need to take reference : Esewa, Khalti -> We are taking reference of Esewa for n-pay

      EWALLET (N-pay):

      The features of the N-pay app should be written in README file:

      # PANELS:
        Admin - ADMIN Panel
        User - User Panel

      # Phase 1
        1. Authentication (Login Register) -> (Password Hashing, JWT Token, Save Details in Database)
        2. KYC (Image Upload)
        3. Admin Approve KYC WAllet( Wallet Features Unlock) -> Multi User Login
            In Admin Panel Side Bar --> 
                      0. Dashboard
                      1. KYC Validate (Send Email to User after successfully validation)
                      2. Add Institution (like Khanepani, Traffic Police)

        1. 100 Rs. Balance at the beginning (Default value set in Database)
        2. 4 Sections: (Multiple layout) -> Different Layout for User and Admin
          2.1 Dashboard (Graph and Reward Point)
              -> Bar Graph to Display the daily expenditure
              -> Expense Tracker
          2.2 Transactions -> (Transactions limit) 
                           -> pay from userA to userB  
                           -> pay from userA to Institution (like Khanepani, Traffic Police)
          2.3 Statement/History (PDF Generate Feature)
        3. Real Time Cash Update (without Refresh Like Cash Deducted without refreshing) -> Web Socket
        5. Map to display the transaction location (Google Map)
        
        Just was in the project discussion:
          You can also Map to Trigger New Device/New Browser Warning ()

      # Phase 2
        1. Integrate Esewa
        2. Google Login
        3. Support
        4. Deployment

      Assignment: Search and Create one png logo for N-pay.


*/