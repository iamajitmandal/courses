# 1st June, 2026
# Learned File Handling

# File Handling: File handling in Python is managed using the built-in open() function to create, read, update,
# and delete files on your local file system.

# Discussing through ppt

# open the file
# file = open("sample.txt", "r")

# read the content
# content = file.read()
# print(content)

# close the file
# file.close() # close statement is optional

# creating new file
# file = open("demo.txt", "w")
# file.write("Hello World!\n")
# file.write("Welcome to Python File Handling")
# file.close # close statement is optional

# Modes of File Handling
# Write Mode
# Create Mode
# Append Mode
# Read Mode

# Write Mode
# 2 Features: 1. If file doesnot exist, then it creates new file
#               2. If file exists, then it erases all its contents

# file = open("demo.txt", "w")
# file.write("Name: Ajit")
# file.close()

# Create Mode (x)
# file = open("newfile.txt", "x")
# file.write("This is newly created file")
# file.close()

# Difference between write and create mode - because both does the same action
# Don't open the sensitive files in write mode because it may override the files, so better to use create mode

# Append Mode: Add at the end
# file = open("demo.txt", "a")
# file.write("\nOccupation: Engineer\nAge: 20")
# file.close() # close statement is optional

# Read Mode: Reads and gives the content of the file
# file = open("demo.txt", "r")
# content = file.read()
# print(content)

# Best Practice: with open(), here no need to close the file
# with open("newfile.txt", "r") as file:
#     print(file.read())

# r+ mode: read as well as write
# This mode don't overwrite the existing old file contents
# writing starts from the current file pointer
# doesn't work if file doesn't exist

# with open("sample.txt", "r+") as file:
#     print("Before Writing:")
#     print(file.read())
#
#     file.write("\nWelcome to the second class of File Handling")

# w+ mode: write and read
# This mode deletes the existing the old file contents if old file exists

# with open("sample.txt", "w+") as file:
#     file.write("Python Handling")
#
#     print(file.read())
# above code doesn't print anything on the screen, so use file.seek(0)
# In Python, file.seek(0) moves the file pointer (or cursor) back to the very beginning of the file

# with open("sample.txt", "w+") as file:
#     file.write("Python Handling")
#
#     file.seek(0)
#
#     print(file.read())

# a+ mode: append and read
with open("sample.txt", "a+") as file:
    file.write("\nProgramming")
    file.seek(0)
    print(file.read())

# rb - read binary
# wb - write binary



