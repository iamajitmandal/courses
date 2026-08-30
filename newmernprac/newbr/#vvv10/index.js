/*
  First Test BE Code, then only we move to FE

  Finding error in someone's code:

  Use Try...Catch in the BE if you want your backend app not to crash

  If you get issues While doing git checkout main:
    if you made any changes in code:
      1. if you need that code then make new branch and ACP
      2. otherwise if you want to ignore those changes then -> git stash

  Learning to DESIGN UI and Creating Dashboard Page, Using Logo in the UI...
  Proceeding to the NPAY TASK...

  Learning to Make DYNAMIC SIDEBAR:::
    For that make 'config' folder in src 'folder' amd inside config, make sideBarItems.json and inside that:
        {
      "admin": {

      },
      "user": [
          {"id":1, "name":"Dashboard", "link": "/dashboard"},
          {"id":2, "name":"Send", "link": "/send"},
          {"id":3, "name":"Statement", "link": "/statement"},
          {"id":4, "name":"Profile", "link": "/profile"}
          ]
      }
    Now, use this json file to make the sidebar dynamic for user and admin

    Learning to group the related pages:
      For that make (user)  folder in main app folder, and inside (user) folder, make folder of pages you want:
      E.g. inside (user) folder, there may be transaction, send, profile, dashboard for user

    Follow DRY CONCEPT:

    Make common'layout.js' for all common pages:
      Now all transaction, send, profile, dashboard pages will follow the common layout from layout.js
      e.g sidebar may be there in all these 4 pages.










*/