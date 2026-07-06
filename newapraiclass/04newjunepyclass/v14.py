# 17th june, 2026
# Learned Instance, Class and Static Methods

# Bank Account with deposit and withdraw
class BankAccount:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount

acc1 = BankAccount('Rahul', 10000)
print(acc1.balance)

acc1.deposit(10000)
acc1.withdraw(5000)
print(acc1.balance)

# OOP: slide discussion
'''
In OOP, there are 3 main types of methods:
    1. Instance method
        works with object data
        takes self as the first parameter
        can access and modify instance variables
    
    2. Class method
        works with classes
        takes cls as the first parameter
        decorated with @classmethod
    
    3. Static method
        independent of both object and class
        dont use self or cls
        decorated with @staticmethod
'''
# example: Instance method
class Student:
    def __init__(self, name): # instance method
        self.name = name

    def display(self): # instance method
        print('Name: ', self.name)

s1 = Student("Shyam")
s1.display()

# example: class method
class Student:
    school = "TU" # class variable

    @classmethod            #decorator ->
    def show_school(cls):
        print(("School: ", cls.school))

Student.show_school()

# example: static method
class Calculator:
    @staticmethod
    def add(a, b):
        return a + b

Calculator.add(3, 6)

# complete example
class Bank:
    bank_name = "SBI"

    def __init__(self, customer, balance):
        self.customer = customer
        self.balance = balance

    # instance method
    def deposit(self, amount):
        self.balance += amount
        print('New Balance', self.balance)

    # class method
    @classmethod
    def change_bank_name(cls, name):
        cls.bank_name = name

    # static method
    @staticmethod
    def interest_rate():
        print('Current interest rate: 7%')

acc1 = Bank("Ram", 1000)
acc1.deposit(5000)
print(acc1.balance)

Bank.change_bank_name("Nepal SBI")
print(Bank.bank_name)
print(acc1.bank_name)

