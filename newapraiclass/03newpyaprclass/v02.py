# 13th April, 2026
'''
    # Sir Notes Discussion
      Python Package Index (PyPI): is a repository of software for the Python programming language.

    # Learning to install and check python installed or not
      python --version

      While installing, don't forget to 'Add to Path'

      For Checking in Terminal,
      python
      # You can type python codes directly from the terminal

      virtualenvironmentconcept.png -> Check this image once
      for virtual environment

        Make One Folder and open it with vs code
        Don't use powershell (because many shells are disabled there, use command prompt)
        for making virtual envornment -> python3 -m venv env or python3 -m venv folderName
        new folder structure will be created which is different for MAC and Windows
          bin in mac, scripts in windows
          packages in lib

        to activate virtual env,
          source venv/scripts/activate

        to deactivate,
          deactivate

    ### Setting Virtual Environment for Python Project ###

        To install and set up a virtual environment in an already existing Python project,
        follow these steps to isolate your dependencies:

    1. Create the Virtual Environment
        Navigate to your project's root directory in your terminal and run the standard Python venv module.

            Command: python -m venv venv

        This creates a folder named venv (you can use any name, but venv or .venv is standard) containing a fresh Python interpreter.

    2. Activate the Environment
        Activation depends on your operating system and shell:

            Windows (Command Prompt): venv\Scripts\activate
            Windows (PowerShell): .\venv\Scripts\Activate.ps1
            macOS / Linux: source venv/bin/activate

        Once active, your terminal prompt will show (venv) at the beginning.

    3. Sync Existing Dependencies
        If your project has a requirements.txt file, install the listed packages into your new environment.

            Command: pip install -r requirements.txt

        If you do not have a requirements file yet, you must manually install your packages using pip install <package_name>
        while the environment is active.

    4. Configure Your IDE
        Ensure your editor uses the new environment's interpreter rather than the global one:
        VS Code: Open the Command Palette (Ctrl+Shift+P), search for Python: Select Interpreter,
                and choose the one located in your project's venv folder.
        PyCharm: Go to Settings > Project > Python Interpreter, click Add Interpreter, select Local Interpreter,
                and point to the existing venv folder.

    5. Finalizing Setup
        Ignore for Git: Add venv/ to your .gitignore file to avoid uploading the entire environment to version control.
        Generate Requirements: If you installed packages manually, run pip freeze > requirements.txt to save the state for others.

    # Learning to code
    # Learning about variables
    # Variables Introduction

      data = 1
      DATA = 100  (python is case sensitive)
      data = 2

    # variable creation rules: for variables only one symbol is used i.e. underscore
    _test
    test_test (this is preferable: all small letters, connected by _ )
    test_

    CamelCase: fName, LName

    # variables cannot be used starting with number: 1test is invalid, but test1 is valid
    # Reserved Words can be used, but if used once, then its built in work is destroyed
    # means if you use len as a variable name, then you cannot further use len function

    # Python Comments using #, ctrl + / for commenting all

    # for running file, python fileName
    # print function

      print("Hello")
      print("Nepal","is","a","beautiful", "country")

    # learning to print variable
    print(my_name) # gives "Name Error" if my_name is not defined

    # Python Enhancement Proposals (PEPs): PEP8 is styling guideline for python
    # https://peps.python.org › pep-0008
    This document gives coding conventions for the Python code comprising the standard library in the main Python distribution.

    # flake8
    It is not possible to remember all PEP8 guidelines so for that we use flake8 package

    Flake8 is a powerful Python command-line utility for linting, enforcing style consistency (PEP 8), and detecting coding errors.
    It wraps three tools—PyFlakes (logical errors), pycodestyle (style guide), and McCabe (complexity)—into a single, easy-to-use package,
    installable via:
      pip install flake8

    VS CODE Extension: black formatter (by Microsoft)

    To ignore certain code by flake8: # noqa: error_code

    # Learning about DataTypes
    # DataTypes:

      name = "Ajit"
      age = 25
      pi = 3.14
      is_active = True
      number = None

    # Type() function:
'''