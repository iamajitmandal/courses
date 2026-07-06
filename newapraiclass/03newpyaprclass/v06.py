# 19th April, 2026
# Learning about Git

'''
    Local - PC, Laptop
    Remote - Server, github, gitlab, bitbucket
    Remote URL - server url
    repo - server project folder

    public key and private key:
        public key: to encrypt, openly shared
        private key: to decrypt, is kept secret

        whatsapp e.g. -> end to end encrypted

    ssh-keygen - auth public github
        MAC passphrase -> ajit123

        LOCAL REPO
        REMOTE REPO

    Learning to PUSH to github and CLONE github repo
'''

'''
    *** How To Install Git ***
    Installing Git on Windows is a fairly straightforward process and involves the following steps:
    
        Download the Windows installer
    
        Please go to the official Git website to automatically initiate the download of the latest Git installer for Windows.
    
    Run the installer
    
        Open the downloaded installer and proceed through the installation wizard. Grant permission for the application 
        to make changes to your device by selecting "Yes" in response to the User Account Control dialog.
    
    Verify installation
    
        To ensure that Git has been installed correctly, open Git Bash and type the following command:  
        
            git --version
            
    *** Create SSH keys using ssh-keygen ***
        To create SSH keys on OS, use the 
        
                ssh-keygen 
                
        command. It is recommended to setup your SSH keys into the 
        .ssh directory of your home directory. Storing them there is more convenient if multiple developers are 
        working on the same repository.

    *** ssh-keygen ***
        In order to add an SSH key to your GitHub account, head over to the settings of your account and select 
        the “SSH and GPG keys” option in the left menu.
        
    *** Proper steps to add existing code to GitHub ***
        The proper way to push a new project into an existing GitHub repository follows these steps:

        *** Git Initialization and Push Workflow (Detailed with Examples) ***
        This guide explains each Git command, why it is used, and provides real examples.

        🔹 1. Initialize Git Repository
                git init .
        
            What it does:
                Creates a hidden .git folder
                Turns your project into a Git-tracked repository
            
            Example:
                mkdir my_project
                cd my_project
                git init
            
            Now my_project is under Git version control.
            
        2. Create .gitignore File
                touch .gitignore
            
            What it does:
                Prevents sensitive or unnecessary files from being tracked
            
            Example .gitignore file:
                .env
                __pycache__/
                node_modules/
                db.sqlite3
            
            👉 These files will never be added even if you run git add .
            
        🔹 3. Check Git Status
                git status
                
            What it does:
                Shows untracked files
                Shows staged files
                Shows branch name
            
            Example Output:
                Untracked files:
                  main.py
                  
        🔹 4. Track Files (Stage Files)
                git add .
            
            What it does:
                Adds all files (except ignored ones) to staging area
            
            Example:
                git add main.py
                Adds only main.py
                
        🔹 5. Commit Changes
                git commit -m "Initial commit"
            
            What it does:
                Saves a snapshot of your project
                Message explains what was done
            
            Good commit message examples:
                Add user login feature
                Fix API response bug
                
        
        🔹 6. Check Remote Repository
                git remote -v
                
            What it does:
                Shows connected remote repositories
            
            Example Output:
                origin  git@github.com:username/repo.git (fetch)
                origin  git@github.com:username/repo.git (push)
            
            If nothing shows → remote is not added yet.
            
        🔹 7. Add Remote Repository (GitHub)
                git remote add origin <remote-url>
                
            What it does:
                Connects local Git to GitHub repository
                
            Example (SSH):
                git remote add origin git@github.com:sudanbhandari/my_project.git
                
        🔹 8. Verify Remote
                git remote -v
            
            Confirms remote was added correctly.
            
        🔹 9. Check Branch Name
                git branch
                
            Common branches:
            
                master (old default)
                main (current GitHub default)
            
            Rename to main (recommended):
            
                git branch -M main
                
        🔹 10. Push Code to GitHub
                    git push  origin main
                
                What it does:
                
                    Uploads code to GitHub
                    -u links local branch to remote branch
                
                After this, you can simply use:
                
                    git push
                    
        ✅ Final Real-Life Example Flow
            git init
            touch .gitignore
            git add .
            git commit -m "Initial commit"
            git remote add origin git@github.com:username/repo.git
            git branch -M main
            git push -u origin main
            
        🎯 Result:
                Your local project is now fully connected and pushed to GitHub.
'''

# some codes
print("Hello")
print("Hello Python Developer")