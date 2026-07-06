# Inheritance Concept
# Single Inheritance
class Parent():
    a = 10
    b = 11

class Child(Parent): # now Child can use a of Parent
    b = 100
    c = 10

obj = Child() # making child object, which inherits the Parent class
print(obj.b) # displays own 'b' but if it doesn't have own then inherits from the parent class
print(obj.a) # displays own 'a' but if it doesn't have then inherits from the parent class

print("**********")

class Parent():
    a = 10
    b = 11

    def add(self):
        return self.a + self.b

class Child(Parent):

    def result(self):
        return {
            "add": self.add(),
            "a": self.a,
            "b": self.b
        }

obj = Child()
print(obj.add())
print(obj.result())

print("**********")

class Parent():
    a = 10
    b = 11
    def __init__(self):
        print("Parent class constructor")

    def add(self):
        return self.a + self.b

class Child(Parent):
    def __init__(self):
        print("Child Class Constructor")
        Parent.__init__(self) # calls parent class constructor

    def result(self):
        return {
            "add": self.add(),
            "a": self.a,
            "b": self.b
        }

obj = Child() # calls own class constructor
print(obj.add())
print(obj.result())

# alternative of above is super class()
print("**********")

class Parent():
    a = 10
    b = 11
    def __init__(self):
        print("Parent class constructor")

    def add(self):
        return self.a + self.b

class Child(Parent):
    def __init__(self):
        print("Child Class Constructor")
        # Parent.__init__()
        super().__init__() # calls constructor of Parent Class

    def result(self):
        return {
            "add": self.add(),
            "a": self.a,
            "b": self.b
        }

obj = Child() # calls own class constructor
print(obj.add())
print(obj.result())

# Interview Questions:
# If child and parent class both have constructor, which will run first? --> child class obj calls child class constructor

# How do you call parent class constructor?
# Parent class constructor can be called manually using Parent.__init__() or super().__init__()

# provide practice qn about single inheritance no overloading use constructor. dont provide any ans...level 3

# Employee and Manager
# Create a base class Employee with:
#     Data members: employee ID, employee name, basic salary
#     Constructor to initialize all values
#     Method to display employee details

# Create a derived class Manager with:
#     Extra data member: bonus
#     Constructor using base class constructor
#     Method to display total salary

class Employee():
    def __init__(self, emp_id, emp_name, basic_salary):
        self.emp_id = emp_id
        self.emp_name = emp_name
        self.basic_salary = basic_salary

    def display_details(self):
        return f"Employee ID: {self.emp_id}, Employee Name: {self.emp_name} and Basic Salary: {self.basic_salary}"

class Manager(Employee):
    def __init__(self, emp_id, emp_name, basic_salary, bonus):
        super().__init__(emp_id, emp_name, basic_salary)
        self.bonus = bonus

    def display_total_salary(self):
        return self.basic_salary + self.bonus

emp1 = Manager(20, 'Ajit', 15000, 3000)
print(emp1.display_details())
print(emp1.display_total_salary())

# Interview Question:
# __mro__
print(Manager.__mro__) # shows order in which inheritance data flows




