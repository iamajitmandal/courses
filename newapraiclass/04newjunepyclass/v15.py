# 18th june, 2026
# Learned Encapsulation & Inheritance

'''
    4 principles/core conecpts/pilalrs of OOP:
    1. Encapsulation:
    2. Inheritance
    3. Abstraction
    4. Polymorphism
'''

# Encapsulation: means binding/wrapping data(variables) and behavior(methods/functions)
# together into a single unit (a class) and restricting direct access to some data to protect it from accidental modification.

# Think of it like a bank account
#   - You cannot directly change your bank balance. (restricting direct access)
#   - You use methods like deposit() and withdraw() to modify it.

# class BankAccount:
#     def __init__(self, balance):
#         self.balance = balance
#
#     def deposit(self, amount):
#         self.balance += amount
#
#     def get_balance(self):
#         return self.balance
#
# acc = BankAccount(10000)
# acc.get_balance()

# in the above code, balance code must be made private, for that write : __balance

# class BankAccount:
#     def __init__(self, balance):
#         self.__balance = balance
#
#     def deposit(self, amount):
#         self.balance += amount
#
#     def get_balance(self):
#         return self.balance
#
# acc = BankAccount(10000)
# acc.get_balance()
# the above code gives error - says '    'BankAccount' object has no attribute 'balance'    '

# now the balance can be changed only when someone deposits some amount to the account, so here, balance cannot be
# changed directly and it cannot be accessed directly outside the class (example of encapsulation - restricting direct access to some data)
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance # private variable

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount(10000)
acc.deposit(10000)
print(acc.get_balance())

# Why encapsulation?
# prevents data from being changed accidentally, provides security and can control how datas can be accessed and modified

print("***** ATM Machine *****")
# ATM Machine:
class ATM:
    def __init__(self, pin, balance):
        self.__pin = pin
        self.__balance = balance

    # encapsulation -> attributes(pin, balance) and methods (check_balance) are wrapped inside single class 'ATM'
    # __pin -> private modifier
    def check_balance(self, entered_pin):
        if entered_pin == self.__pin:
            return self.__balance
        else:
            return "Wrong Pin"

atm = ATM(1234, 5000)
print(atm.check_balance(12345))

print("***** Inheritance *****")
# Inheritance:
'''
    parent to offspring
    Some inherited properties:
        genetic qualities
        traits, behavior
        surname
        possessions
'''

# inheritance:
# Single Inheritance: One child class inherits from one parent class

class Animal: # parent class
    def eat(self):
        print("Animal is eating")

class Dog(Animal):
    def bark(self):
        print("Dog is Barking")

d = Dog()
d.eat() # prints "Animal is eating" because Dog inherits properties of Animal Class
d.bark()

# Multi-level inheritance: A class inherits from a class that itself inherits from another class
class Animal(): # parent class
    def eat(self):
        print("Animal is eating")

class Dog(Animal): # child class
    def bark(self):
        print("Dog is barking")

class Puppy(Dog): # grand child class/sub child class
    def weep(self):
        print("Puppy is weeping")

p = Puppy() # now p inherits all the properties of Dog and Animal
p.weep()
p.bark()
p.eat()

# Multiple Inheritance: A child class inherits from multiple parent classes.
class Father:
    def skill1(self):
        print("Learned Driving from Father")

class Mother:
    def skill2(self):
        print("Learned Cooking from Mother")

class Child(Father, Mother): # inherits from both Father & Mother
    pass

c = Child()
c.skill2()
c.skill1()

# Hierarchical Inheritance: Multiple child inherits from a single parent class
class Animal(): # parent class
    def eat(self):
        print("Animal is eating")

class Dog(Animal): # child class
    def bark(self):
        print("Dog is barking")

class Cat(Animal): # grand child class/sub child class
    def meow(self):
        print("Cat is meowing")

d = Dog()
c = Cat()

d.eat()
d.bark()

c.eat()
c.meow()

