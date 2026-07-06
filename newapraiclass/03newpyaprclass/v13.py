# 27th April, 2026
# Learning about functions in depth

# arbitrary keywords argument
# example of simple keyword argument
def user_info(fname, lname, age, salary, num):
    print(fname, lname, age)

print(user_info(fname="Ajit", lname="Mandal", age=25, salary=20000, num=123))

# print(user_info(name="Ajit", lname="Mandal")) # gives error
# print(user_info(name="Ajit", lname="Mandal", age=25, salary=20000)) # gives error
# print(user_info()) # gives error
# for these all to work, we need arbitrary keyword argument

def user_info(**info): # same like def user_info(**kwargs):
    print(info.get('salary')) # stores data in form of dictionary

print(user_info(name="Ajit", lname="Mandal")) # works
print(user_info(name="Ajit", lname="Mandal", age=25, salary=20000)) # works
print(user_info()) # works

data = {'fname': 'suman', 'lname':'sharma', 'age':'12', 'salary': 12, 'num': 123}
print(data.keys())
print(data.values())
print(data.items())

# a, b = 1, 2
# b, a = 1, 2

# using arbitrary keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name = 'Ajit', age = 25, city = "kathmandu")

print("****************")
# using arbitrary positional argument
def print_tuple_info(*args):
    for index, i in enumerate(args):
        print(index, i)

print_tuple_info("Hello", "test", "Class", 1, 2, 3)

def print_tuple_info(*args):
    for index, i in enumerate(args):
        print(index + 1, i)

print_tuple_info("Hello", "test", "Class", 1, 2, 3)
'''
    The enumerate() function in Python adds a counter to an iterable (such as a list, tuple, or string) and 
    returns it as an enumerate object. This allows you to loop through a collection while simultaneously 
    accessing both the index and the value of each item without manually managing a counter variable. 
    
    Syntax and Parameters:
    The basic syntax for the function is:
        enumerate(iterable, start=0)
         
    iterable: Any object that supports iteration, such as a list, string, or dictionary.
    start (optional): The number from which the counter begins. It defaults to 0 if not specified.
'''

# both positional and keyword argument in same function
def student_info(*args, **kwargs):
    print(args)
    print(kwargs)

student_info(1, 2, 3, 4, 5, 6, name = "Ajit", age = 25, city = "Kathmandu")
# student_info(1, 2, 3, 4, 5, 6, name = "Ajit", age = 25, city = "Kathmandu", 8, 9) # here 9, 9 won't be mapped

def student_info(*args, **kwargs):
    percentage = sum(args)/len(args)
    print(percentage)

    total = 0
    for i in args:
        total += i
    print(total/len(args))

student_info(1, 2, 3, 4, 5, 6, name = "Ajit", age = 25, city = "Kathmandu")

def student_info(*args, **kwargs):
    percentage = sum(args)/len(args)

    name = kwargs.get("name")
    grade = kwargs.get("grade")
    return f"Student name is {name} and grade is {grade} and obtained percentage is {percentage}"

print(student_info(1, 2, 3, 4, 5, 6, name = "Ajit", age = 25, city = "Kathmandu", grade = 9))

# simple question practice
# level 2 pactice problem on args and kwargs in python for 'flexible calculator with overrides'

# 🔷 Problem: Flexible Calculator with Overrides
# 🎯 Goal
#
# Create a function that can:
#
# Accept any number of positional arguments (*args)
# Accept optional keyword arguments (**kwargs) to modify behavior
# 📌 Requirements
#
# Write a function:
#
# def flexible_calc(*args, **kwargs):
#     pass
# 🔹 Core Behavior
# By default, the function should add all numbers in args.
# 🔹 Keyword Overrides (kwargs)
#
# Support the following optional arguments:
#
# Key	Type	Description
# operation	str	"add", "mul", "sub"
# start	int/float	initial value (default = 0 for add, 1 for mul)
# ignore_negatives	bool	if True, skip negative numbers
# 🔹 Operation Rules
# 1. operation="add" (default)
# Add all numbers
# 2. operation="mul"
# Multiply all numbers
# 3. operation="sub"
# Subtract all numbers from the first number
# 🔹 Extra Logic
# If ignore_negatives=True, skip negative numbers
# If no args → return "No numbers provided"
# 🧪 Example Calls
# flexible_calc(1, 2, 3)
# # Output: 6
#
# flexible_calc(1, 2, 3, operation="mul")
# # Output: 6
#
# flexible_calc(10, 2, 3, operation="sub")
# # Output: 5  (10 - 2 - 3)
#
# flexible_calc(1, -2, 3, ignore_negatives=True)
# # Output: 4
#
# flexible_calc(2, 3, start=10)
# # Output: 15  (10 + 2 + 3)