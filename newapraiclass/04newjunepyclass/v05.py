# 5th june, 2026
# Learned tuple, range, dictionary data type

# discussing from slide

# Tuple: non-mutable/immutable
# x = ('mango', 1992, 3.14, True, [1,2], (1,1,(3,2)))
#

# difference between list and tuple -> list are changeable but tuple are non-changeable

# Tuple packing and Unpacking
x = ('Ram', 29, 'Engineer') # tuple packing
name, age, occupation = x # tuple unpacking
print(name) # 'Ram'
print(age) # 29
print(occupation) # 'Engineer'

# Tuples are immutable
fruits = ("apple", "banana", "mango")
# fruits[1] = "orange" # gives error says 'TypeError: 'tuple' object does not support item assignment'
# print(fruits)
# del fruits[1] # gives error says 'TypeError: 'tuple' object does not support item assignment'
temp = list(fruits)
print(temp)
temp.remove("apple") # now can be removed after changing into list or after typecasting

# tuples are immutable, so they are used to store the static values like database records, fixed configuration values that
#        should not be changed like db records, location co-ordinates, etc

# range:
# range(stop)
# range(start, stop)
# range(start, stop, step)

print("***** Range *****")
print(range(5)) # gives range(0,5)
print(list(range(5))) # so convert to list and gives [0, 1, 2, 3, 4]
print(list(range(1, 11))) # prints 5 to 10
print(list(range(2, 11, 2))) # prints [2, 4, 6, 8, 10]

# print odd numbers from 1 to 10
print(list(range(1, 11, 2)))


print("***** Dictionary *****")
# Dictionary: It stores data in the form of key-value pair
student = {
    'name': 'Shyam',
    'age': 27,
    'country': 'Nepal'
}
print(student)

# Accessing values - use the key or we can use get also
print(student['name'])
print(student['country'])
print(student.get('age')) # using get

# adding key:value to dictionary
cars = {
    'model': 'Electric'
}
cars['price'] = 25000
print(cars)

# removing key:value (using pop or del)
student = {
    'name': 'Shyam',
    'age': 27,
    'country': 'Nepal'
}
student.pop('country') # or,
del student['age']
print(student)

# dictionary length
student = {
    'name': 'Shyam',
    'age': 27,
    'country': 'Nepal',
    'marks': 90
}
print(len(student))

# getting all keys
student = {
    'name': 'Shyam',
    'age': 27,
    'country': 'Nepal',
    'marks': 90
}
print(student.keys())
print(student.values())
print(student.items())


