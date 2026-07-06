# 28th june, 2026
# Learned Functional Programming (.pptx), map()

from math import factorial
# functional programming
# Learning .ppt

# In python, everything is object which are associated with some class

# First Class Functions: that are created during run time

# Try to understand the flow of the following code
print("Program started")

def greet():
    print("Hello")

print("Function is created")
print(greet())

# Try to understand the flow of the following code
square = lambda x: x**2
print(square)
print(square((5)))

# Pure Function: that doesn't have any side effects

# Higher Order Function:
# function as a parameter -> some_function is another function
def func_a(some_function):
    result = some_function(arg1, arg2)
    return result

# Try to understand the flow of the following code
def add(a, b):
    return a + b

# here, operation will be equal to add when 'calculate(add, 5, 3)' is called
# here, operation is a parameter which takes another function add as an argument
def calculate(operation, x, y):
    return operation(x, y)

result = calculate(add, 5, 3) # This ultimately returns the value of add(5,3)
print(result)

# Try to understand the flow of the following code
def greet(name):
    return "Hello" + name

def welcome(function, person):
    print(function, person)

welcome(greet, "Shyam")

#
def multiplier(n):
    def multiply(x):
        return x * n
    return multiply

time5 = multiplier(5)
print(time5(10))

print("***** Map *****")

# Some common Higher Order Function
# Map:
# map(function, iterable)

# example: map function to compute factorial of each element in a list
def function(n):
    return 1 if n < 2 else n * factorial(n-1)
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mapped_items = map(factorial, numbers)
print(mapped_items)

# More examples on Map
def square(x):
    return x * x
numbers = [1, 2, 3, 4, 5]
result = list(map(square, numbers))
print(result)

# Changing all the strings to uppercase
names = ["ram", "hari", "sandesh"]
result = list(map(str.upper, names))
print(result)

# checking odd or even in list
numbers = [1, 2, 3, 4, 5]
result = list(map(lambda x: "Even" if x % 2 == 0 else "Odd", numbers))
print(result)