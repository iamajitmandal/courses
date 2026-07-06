# 4th June 2026
# Learned some list methods and tuple starting

# Revising what we learned till now (because of some new students)
# Python String/text: print("Hello")
# variables: x = 10
# data types
# operators
# list

# Continuing list
# Lists are mutable.
# List are dynamic - list can grow or shrink in size while program is running.

fruits = ["apple", "banana"] # list has 2 elements
fruits.append("mango")
print(fruits)

# Push vs Pop
# push - inserting something and pop - extracting or removing something

# Some list methods: remove, extend, reverse, pop
x = [1, 2, 3, 4, 'a', 5.5, 6]

x.remove('a')
print(x)

x.extend(["peanut", "bean"])
print(x)

x.reverse()
print(x)

x.pop()
print(x)

# Tuple
x = (1, 2, 3, 4)
print(type(x))
print(x)

# indexing and slicing is same as list

# how to define single element in a tuple
print("***** Singleton Tuple *****")
x = (1) # defines 'int' data type
print(type(x))

x = (1, ) # defines singleton tuple
y = 1, # defines singleton tuple
print(type(x))
print(type(y))
print(x)
print(y)




