# 14th June, 2023
# Learned about types of arguments (arbitrary, keyword, arbitrary keyword, default arguments)

# Advantages/Features of Function:
# 1. Reusability
# 2. Encapsulation/Abstraction
# 3. Procedural Decomposition

# Argument Types:
# 1. Arbitrary Arguments            *arg
# 2. Keyword Arguments              key: value pair
# 3. Arbitrary Keyword Arguments    **args
# 4. Default Arguments              default value triggers if func is called without arguments

# 1. Arbitrary Argument: used when we don't know how many positional arguments will be passed
def add(a, b):
    return a + b
# add(3, 4, 5) # gives error - says 'TypeError: add() takes 2 positional arguments but 3 were given'
               # no of arguments should be equal to the number of parameters

# above code can be written as:
def add(*numbers): # * refers to arbitrary arguments
    print(numbers)
    print('sum = ', sum(numbers))
add(1, 2, 3, 4, 5)

# 2. Keyword Arguments: values can be passed using parameter names
def student(name, age):
    print("Name: ", name)
    print("Age: ", age)
student("Ram", "25") # logical order of the arguments and parameter must match
student(20, "Ram")
student(name="Ram", age=30)

# 3. Arbitrary Keyword Argument (**kwargs) : used when you don't know how many keyword arguments will be passed
def student(**kwargs):
    print(kwargs)
student(name = 'Ram', age = 40, occupation = 'Engineer')

#4. Default Argument:
def greet(name = "Guest"): # name = "Guest" is the default argument
    print("Hello", name)
greet("Ajit")
greet()
