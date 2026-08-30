/*
    Revising Git Flow as we did in the earlier class from GIT Website
    
    Now learning To Create Git Repo and Pushing Code to GITHUB from local VS code

    1. Install Git
        git -v                  -> to check git version and installed or not
        git config --list       -> To check if my email is in config

        For first time git installed and after running git config --list code 
        if username and email is not same as username and email in your github account then run the following code:

            git config --global user.email "theajitmandal@gmail.com"

    Steps:
        Create a repo in github and then,
            1. Create new folder on local drive
            2. Open that folder in vscode
            3. Now, we clone the gitrepo from the github.com that we want to clone
            5. To clone the github repo in your local machine
                    git clone clonelink(from github)
                Git Repo will be pasted inside the folder where above code is run inside a 
                projectname(Github project) folder

                git checkout -b branchName              To create a new branch: 
                git add .                               To add updated file
                git commit -m "commit message"          To commit changes with commit message
                git push -u origin branchName           To push the code from local repo to github repo

                Make Branch and ACP

                What is upstream in github?
                    “Upstream” refers to another remote repository that is not the original repository you cloned from. 
                    It is often used when you want to keep track of changes made in the original repository or want to contribute 
                    changes back to the original repository.
                What is downstream in github?
                    On the other hand, the downstream repository is a copy of the upstream repository to which you have made changes. 
                    This could be a fork of the upstream repository, or it could be a branch that you have created based on the 
                    upstream repository.

                    Learn more about upstream and downstream from the picture in this folder.

                    In this diagram, the upstream branch is at the top, and each downstream repository is connected to
                    it. The vertical line on the top represents git pull or git fetch, which is used to bring changes 
                    from the upstream repository into the local downstream repository. The bottom vertical lines 
                    represent git push, which is used to send changes from the local downstream repository back up to 
                    the upstream repository.

                    When a change is made in the Upstream Branch, all downstream repositories need to be updated. 
                    To do this, we use git pull or git fetch. Once the changes have been fetched, the downstream 
                    repositories need to apply the changes locally, and then use git push to send the changes back 
                    up to the upstream branch.

                    Here is an example of how to do this in practice:

                    Clone the upstream repository
                    When you clone a repository, you are creating a downstream copy of the repository which in turn 
                    becomes the upstream repository. When you make changes to your local copy of the repository 
                    and push them back to the server, you are updating the upstream repository with changes made 
                    to the downstream repository




*/