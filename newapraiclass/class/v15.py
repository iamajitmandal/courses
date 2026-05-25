# lambda function
# single one line function: cannot be used for long function body

data = lambda a, b : a + b
print(data(1, 2))

data = lambda *args: args
print(data(2, 3, 4, 5, 6))

# calculate square of all parameters passed without lambda function
def data1(*args):
    result = []
    for i in args:
        result.append(i**2)
    return tuple(result)


print(data1(1, 2, 3, 4))

# list comprehension
# calculate square of all parameters passed using lambda function and list comprehension
data = lambda *args: tuple([i**2 for i in args])
print(data(5, 6, 7, 8, 9))

print("***** OOP Concept *****")

# OOP Concept
class Person():
    a = 10
    b = 11

obj = Person()
print(obj.a)
# print(obj.c) # gives error

obj1 = Person()
obj1.a = 70
print(obj1.a)
print(obj.a)
obj1.c = 100 # now obj1 has attribute 'c' but other objects won't have this
print(obj1.c)

obj2 = Person()
print(obj2.a)