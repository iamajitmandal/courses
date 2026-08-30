/*
*** GitHub ***
    For code organization

    Create GitHub Account/ Signin if you already have (Signup/Signin)

    Microsoft acquired GitHub for $7.5 billion in stock on June 4, 2018, and the deal closed on October 26, 2018.

    Github Free Account Size : 2GB

    Learning to create a new repository
        Repository Name
        Public/Private
        ReadME file -> guidelines/description of the project
        gitignore -> preventing unwanted files to be pushed to the github (gitignore template is NODE)
        license -> You can choose license for your project
        Initially, main will be the default branch

        Repo will be made.

        Readme File
        Commit  -> After some code is changed/added
        Commit Message -> Write commit message clearly about the work done
        Commit to a new branch (Don't commit on the main branch)

        PR (Pull Request):
        To merge the code from your branch to the main branch, you have to create PR (Pull Request)
        Tech Lead, Supervisor, or Senior Developer checks the code and accepts the Request

        New Pull Request:
            main branch <- login branch (if feature made was on login branch)

        1. Create Repo
        2. Add some code
        3. Commit changes on new branch
        4. Create Pull Request

    How to work in a company?
            main branch
        Developers should build the give task in their own branch (name of branch should be matching with given task)

                                main branch             -> www.bhatbhateni.com                  -> prod (production)
                                                    -> CI/CD (if any code is added in main, it will be directly
                                                        deployed in the production or live project)

                        'develop/staging' branch         -> www.f1softdev.bhatbhateni.com       -> QA Team/Tester
        
        feature/login               feature/register        feature/pricecalculation            -> developer branch

        The features developed in feature/login, feature/register are pushed to the 'develop/staging' branch from
        where the senior developers (or QA team) push them to the main branch after checking/confirming the code.

        After all the features of login, register, pricecalculation are fixed/tested properly then only codes are
        deployed in the main branch or live project.

        Sometimes issues may also be encountered in the main branch. QA tests the code in both production phase
        also and developing/staging phase also then only after fixing errors codes are deployed in live project.

        Hotfix:
        If my friends send all their assigned task and their codes are correct, but if QA find issues in my code
        in the production phase and then I have to re-fix the issues and push it again through next new branch called
        hotfix. (May Depend on company to company)

    1. What is git?
        -> version control
        Git is a free, open-source, and widely used distributed version control system (VCS) 
        that tracks changes to files and facilitates collaboration in software development, 
        allowing developers to manage and organize their codebase, track modifications, and revert to previous versions. 

        Git is a distributed version control system that tracks versions of files. It is often used to control source code 
        by programmers who are developing software collaboratively.

    2. What is github?
        -> platform that uses git
        -> add codebase (or upload your code)
        -> collab with others
        -> open source
        GitHub is a web-based platform that allows developers to store, share, and collaborate on code using Git, 
        a version control system, making it easier to track changes, manage projects, and work together on software 
        development. 

    3. What are the alternatives of github?
        All below platforms use GIT.
        GitLab, Bitbucket, Azure DevOps, Gitea and Gogs

    4. What is repository?
        -> space to store a code
        A repository is the most basic element of GitHub. It's a place where you can store your code, your files, 
        and each file's revision history. Repositories can have multiple collaborators and can be either public, 
        internal, or private.

    5. What are branches in git?
        In Git, a branch is a new/separate version of the main repository.

    6. What is open source?
        Open-source software is computer software that is released under a license in which the copyright holder 
        grants users the rights to use, study, change, and distribute the software and its source code to anyone 
        and for any purpose. Open-source software may be developed in a collaborative, public manner.

        The restrictions are all written in the LICENSE.

        React is MIT License.
        
    One Tool is used to make another tool. Example: JS is made using JAVA and C.

    7. What is main branch? (or may also be called master branch)
        Unless you specify a different branch, the default branch in a repository is the base branch for new pull 
        requests and code commits. By default, GitHub names the default branch main in any new repository.

    8. What is feature branch?
        The core idea behind the Feature Branch Workflow is that all feature development should take place in a 
        dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to 
        work on a particular feature without disturbing the main codebase.

    Conflicts may occur, so for that branches are made.

    Assignment:
        1. Install Git -> To push from local machine

*/