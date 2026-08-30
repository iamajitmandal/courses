/*
    Revising the previous Github commands

    Note:
    After cloning gir repo
        1. Create a new file
        2. Add some code
        3. Create a new branch
        4. ACP to your branch

    to check the available branches
        git branch
    
    To notify the latest updates:
        git fetch

    To checkout to other's branches:
        git checkout branchName (first update the vscode using git fetch)
        e.g:
            git checkout samsher/obj -> to go to the samsher's branch -> this will bring samsher's code to your vscode

    Sceneraio 1:
        If you make change in other's branch, then you are trying to switch to other branch
        Condition1: If you need the new changes you made, then ACP
        Condition2: If you don't need the new changes you made or you need previous code, then 
            git stash   -> After that you can move to other branch

    Sceneraio 2:
            If you are in branch named 'login' and your friend made some changes in 'login' branch the changes 
            made will not be available in your vs code so for that:
            
            To pull the latest code,
                git pull origin

    Difference between git fetch and git pull: git fetch just notifies the latest changes while git pull brings the
    latest code to your vs code

    Sceneraio 3:
        If two developers are on the same branch, if one codes the value of a to 5 (let a = 5) and other
        codes the value of a to 7(let a = 7), if ones pushes the code to the same branch 1min ago and
        other pushes the code after 1min then:
            Git first the second developer that: Do you know the latest update? for that, pull all codes to vscode
                git pull origin branchName
            Now conflict occurs since, both codes the same line the value of a(a = 5 or a = 7)
            
            BranchA -> Created by Ram
            Shyam Checkout to BranchA
            
            Ram made a change 1min ago and pushed to the branch
            WIll Shyam VSCode know that Ram made update? -> NO

            Now if Shyam wants to make some changes and push, he will be shown an error:
            Error says that Remote(GIthub) has some changes which you don't have?
            
            What should Shyam do now?   -> Shyam should update his vscode
                                            git pull origin BranchA

            Next Scenario:
            IF Ram made a change 1min ago (in line 1) and pushed to the branch
            WIll Shyam VSCode know that Ram made update? -> NO

            Now if Shyam wants to make some changes in (line 1) and push, he will be shown an error:
            Line 1 will conflict:
                There occurs:
                    1. Accept Current Change
                    2. Accept Incoming Change
                    3. Accept Both Changes
                Choose one option and after that you can push code and checkout

            Git asks the following: GIT CONFLICT

        
*/