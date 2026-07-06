# 16th June, 2026 -> learning about OOP
# Discussing Slides-Object Oriented Programming.pptx

# Objects: Real world entities like car, aeroplane
# Classes: Blueprint of Objects
# Attributes: features/characteristics of objects like color, speed
# Behavior: Methods/Actions what objects can do like accelerate, apply brakes, blow horn

# Central OOP Idea: combines both data and functions that operate on that data into a single unit (object)

# Class - blueprint of object
# Object - instance of the class

# Class: A user-defined blueprint that specifies the attributes and methods of objects
# Object: An instance of a class that contains the actual data and can perform the behaviors defined by the class

# creating a class called student
class Student: # class
    pass

s1 = Student() # object
s2 = Student() # object

class Student:
    name = 'John'
    marks = 91

o1 = Student()
print(o1.name)
print(o1.marks)

print("***** init constructor *****")
# Constructor: It is a special function that is initialized whenever we create an object. In python, init() function acts
# as a constructor. Everytime we create an object, it is automatically initialized.

class Student:
    def __init__(self, name, age): # init -> initialization/constructor which runs automatically when new object is created
        self.name = name # name is attribute
        self.age = age # age is attribute

s1 = Student("Sandesh", 51)
s2 = Student("Rahul", 26)

print(s1.name)
print(s2.age)

# Example:
class Car:
    def __init__(self, color, speed):
        self.color = color
        self.speed = speed

car1 = Car('black', 120)
car2 = Car('white', 200)

print(car1.color)
print(car2.speed)

# Example:
class Mobile:
    def __init__(self, brand, price):
        self.brand = brand
        self.price = price

m1 = Mobile("Samsung", 50000)
m2 = Mobile("Apple", 80000)
print(m1.brand)
print(m2.price)

print("****** Methods/Behavior *****")

# behavior/methods
class Student:
    def __init__(self, name):
        self.name = name

    def study(self):
        print(self.name, "is studying")
        # print(f'{self.name} is studying')

s1 = Student("Shyam")
s1.study()

# Example
class BankAccount:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

acc1 = BankAccount("Sandesh", 5000)
acc1.deposit(1000)
print(acc1.balance)


