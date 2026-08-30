/*
  When your friend made some changes in a new 'branch' and you want to pull that code in your end then:

  You must move to that branch
  But your vs code does not know about that branch name
  For that:
    git fetch -> makes vscode update about new branches made
  
    Then checkout to the branch
    then git pull origin main

  If you don't want the latest code made, then git stash

  Always use try...catch in the BE code to avoid server crash error

  Configuring redux persist: to save the login details even after refresh

  Organizing/Segregating BE pages...
  In server folder,  
    Make models folder inside src folder and copy all models there
    Make routes inside src folder and copy all routes there


*/