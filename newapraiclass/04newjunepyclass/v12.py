# 15th June 2026
# Learned function annotation, lambda function, recursion, local, global variable

# Discussing function slides

# Function Annotation:
# are used to indicate the expected data types of parameters and return values. They improve code readability and help
# tools like IDEs and type checkers.
# def function_name(parameter: data _type) -> return_type: pass

# example:
def add(a:int, b:int) -> int:
    return a + b

result = add(10, 20)
print(result)

# example:
def greet(name: str) -> str:
    return f'Hello, {name}'

print(greet('Ram'))

# example
def student_info(name: str, age: int, cgpa: float) -> str:
    return f'{name} is {age} years old and has CGPA {cgpa}'
print(student_info("Ram", 20, 2.75))

# Lambda Function: Anonymous function, nameless function
# A lambda function is a small anonymous (nameless) function that can have any number of arguments but only one expression

# Example:
add = lambda a, b: a + b
print(add(3, 4))

# Example:
square = lambda x: x**2
print(square(4))

# Find the maximum of two numbers using lambda function
max = lambda a, b: a if a > b else b
print(max(3, 9))

#
is_even = lambda n: "even" if n % 2 == 0 else "odd"
print(is_even(5))
print(is_even(2))

#
is_even = lambda n: n % 2 == 0
print(is_even(5))
print(is_even(2))

# Recursion:
# calling the function again and again
# Recursion is a technique where a function calls itself to solve a smaller version of the same problem.
# 1. Base Case -> Stops the recursion
# 2. Recursive Case -> Function calls itself

# Example:
# print numbers from 1 to n
def print_numbers(n):
    if n == 0: # base case
        return
    print_numbers(n-1) # recursive call
    print(n)
print_numbers(5)

# Factorial: n! = n x (n-1)! x (n-2)! ......
# 0! = 1
# 1! = 1
# 5 ! = 5 x 4 x 3 x 2 x 1
def factorial(n):
    if n ==0 or n == 1: # base case
        return 1
    return n * factorial(n-1) # recursive case

print(factorial(5))

# scope of variable: region of the program where variables are available

# Local Scope: variables declared inside the function and only accessible inside that function
# Example:
def greet():
    name = 'Ajit' # name is local variable
    print(name)
greet()
# print(name) # cannot access here, gives error says 'NameError: name 'name' is not defined'

# Global Scope: variables declared outside the function and can be accessed from anywhere
name = 'Sandesh' # global variable
def greet():
    print(name) # can be accessed here

greet()
print(name) # can be accessed here also




