# 3rd June 2026
# Learned about lists

# Variables: data storing elements (temporarily)

# variable Binding: binding variable name with object
# x = 10: 10 is integer object, x is variable name and python binds 10 to x

# Data Structures: wat data is stored in a memory
# 5 data structures: List, Tuple, Dictionary, Range, Set
# List: A list contains a sequence of items

# List are mutuable
# In Python, a mutable object is an object whose internal state or data can be modified after it is created.
# This means you can add, remove, or change its contents directly in place without changing the object's unique memory ID (id()).

# 10, 20, 30, 40, 50, 60, .....
# syntax: x = [1, 2, 3, 4, 5, 6]

items = [1, 2, 3, 4, 5]
print(items)
print(type(items))

# list can contain any collection of data types
fruit = ['apple', 'mango', 'banana']
print(fruit)

l1 = [1, 2, 3, 4.0, 5.5, True, 'Litchi', [1, 5, 10]]
print(l1)
print(type(l1))

# indexing
# positive indexing
fruit = ['apple', 'mango', 'banana']
print(fruit[0])

# negative indexing
fruit = ['apple', 'mango', 'banana']
print(fruit[-1])

# slicing: cutting part of something
# syntax: L(start: stop: step] where, 'start' is inclusive, 'stop' is exclusive and 'step' value is 1 by default

L = [0, 1, 2, 3, 4, 5, 6]
print(L[:3])
print(L[4:])
print(L[:])

cars = ['Tata', 'BYD', 'Deepal', 'Toyota']
print(cars[1:]) # or print(cars[1:4])
# print(cars[-1:]) # negative indexing normally doesn't support in slicing

# slicing real use case:
youtubeviews = [120, 150, 180, 210, 300, 450, 500]
last_3_days = youtubeviews[-3:]
print(last_3_days)

# learning 'step' value in slicing
views = [120, 150, 180, 210, 300, 450, 500]
print(views[0:6:1])
print(views[0:6:2])
print(views[0:6:3])
print(views[0:6:4])
print(views[1::2])

print("**********")

# Some Tasks:

cities = ['ktm', 'pkr', 'jkr', 'brt', 'brg']
# 1. print pkr & brg
print(cities[1::3])

# 2. print ktm & brt
print(cities[::3])

# 3. print pkr, jkr, brt
print(cities[1:4])

# Nested List - list inside a list
students = [
    ["Ram", 20, "Kathmandu"],
    ["Shyam", 22, "Pokhara"],
    ["Hari", 21, "Butwal"]
]
print(students[0])
print(students[0][1])
print(students[1][2])
print(students[2][2])

