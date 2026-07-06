# 21st june 2026
# Learned super function, Abstract method & abstraction

# super function: used to call methods or constructors from the parent class. It is mostly used with inheritance

class Person:
    def __init__(self, name):
        self.name = name

# class Student(Person):
#     def __init__(self, name, roll):
#         Person.__init__(self, name):

class Student(Person):
    def __init__(self, name, roll):
        super().__init__(name) # calling parent constructor
        self.roll = roll

s1 = Student("Ram", 101)

print(s1.name)
print(s1.roll)

# Example:
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

m1 = Manager("Jay", 50000, "AI")
print(f"{m1.name} works in {m1.department} and has a monthly salary of {m1.salary}")

# abstraction: hiding internal implementation details and exposing only the essential features to the user
# Why Abstraction: 1. Hides Implementation 2. Improves Security 3. Makes code easier to use 4. Reduces code complexity
# Python provides the abc(Abstract Base Class) module

# ABC - Abstract Base Module: This is the method that must be implemented by child classes

# Example:

from abc import ABC, abstractmethod

class Shape(ABC): # this makes Shape as abstract class
    @abstractmethod
    def area(self):
        pass
    # above code explains that every 'Shape' class must have a method named 'area' but doesnot defines the area
    # i.e. it hides the implementation of method 'area' to the child classes

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # if you don't implement the below 'area' method then, error occurs and says 'TypeError: Can't instantiate abstract class Circle without an implementation for abstract method 'area''
    def area(self): # implemented the abstract method
        return 3.14 * self.radius ** 2

c1 = Circle(5)
c1.area()

# Some Tasks:
'''
Problem: Employee Salary
Create a class Employee.
Attributes: name, salary
Method: bonus(amount) -> increases salary, display()
'''

class Employee():
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def bonus(self, amount):
        self.amount = amount
        self.salary += self.amount

    def display(self):
        print(f"Salary is {self.salary}")

e1 = Employee("Ram", 50000)
e1.bonus(1000)
e1.display()

'''
Create a parent class Person.
Attributes: name
Method:
    display_name()
    
Create a child class Student that inherits from Person.
Additional Attribute
roll_no
Method
display_details()
'''

class Person():
    def __init__(self, name):
        self.name = name

    def display_name(self):
        print(f"Name is {self.name}")

class Student(Person):
    def __init__(self, name, roll_no):
        super().__init__(name)
        self.roll_no = roll_no

    def display_details(self):
        print(f"Name is {self.name} and roll number is {self.roll_no}")

s1 = Student("Shyam", 15)
s1.display_details()

