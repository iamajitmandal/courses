# 2nd June, 2026
# Learned binary files, pickle, os module

# Creating and Writing a binary file
# data = b"Hello, Python" # b means bytes
# with open("sample.bin", "wb") as file:
#     file.write(data)
#
# print("Binary Data File is created successfully")
#
# # Reading binary file
# with open("sample.bin", "rb") as file:
#     content = file.read()
#
# print(content)

# Example:
# numbers = bytes([10, 20, 30, 40, 50])
# with open("numbers.bin", "wb") as file:
#     file.write(numbers)
#
# with open("numbers.bin", "rb") as file:
#     content = file.read()
# print(content) # gives data in binary form
# print(list(content)) # gives original data

# pickle module: used to convert python object into bytes
# The built-in Python pickle module is used to serialize and deserialize Python object structures.
# Pickling converts an in-memory Python object into a binary byte stream so it can be saved to disk or transmitted over a network.
# Unpickling is the reverse process that reconstructs the original Python object from that byte stream

# pickle.dump(obj, file): Serializes an object directly into an open binary file.
# pickle.load(file): Deserializes and returns an object from an open binary file.
# pickle.dumps(obj): Converts an object into a bytes string in memory.
# pickle.loads(bytes_obj): Converts a bytes string back into a Python object.

# Storing a python object using pickle
import pickle
student = {
    "name": "ram",
    "age": 25,
    "course": "Python"
}

with open("student.dat", "wb") as file:
    pickle.dump(student, file)

print("Object Saved")

# Read the binary file (Reading the original data stored in binary file)
import pickle
with open("student.dat", "rb") as file:
    student = pickle.load(file)

print(student)

# use of python pickle library in ML:
# In machine learning, the Python pickle library is primarily used for model serialization and deserialization,
# allowing you to save a trained model to a file so you can make predictions later without retraining.

# Reading image in binary format and copying it
with open("deer1.jpg", "rb") as source:
    data = source.read() # copies from the source

with open("copy.jpg", "wb") as destination:
    destination.write(data) # saves as a copy in the destination

print("Image copied successfully")
# This demonstrates how files are copied into the computer

# os module:
# The built-in Python os module provides a portable way to interact with your underlying operating system.
# It is highly useful for directory management, file system navigation, and reading environment variables.

import os
# current working directory
# print(os.getcwd()) # gives current working directory
print(os.listdir()) # shows files of the current working directory
print(os.listdir("/Users/mac/Ajit/IT/coding/courses/newapraiclass/04newjunepyclass")) # displays files of given directory

# os.mkdir("day3") # creates directory
# os.mkdirs("Day2/Day3/Day4") # creates multiple directories
# os.rename("notes.txt", "python_notes.txt")  # renames notes.txt to python_notes.txt

size = os.path.getsize("/Users/mac/Ajit/IT/coding/courses/newapraiclass/04newjunepyclass/classdetails.py")
print(size)
