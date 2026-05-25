# Multiple Inheritance

class A():
    a = 10

class B():
    b = 100

# class C(A, B):
#     d = 1000

class C(B, A):
    d = 1000

print(C.__mro__)

'''
    Practice Question — Single Inheritance + Access Modifiers
    Bank Account System
    
    Create a program using Single Inheritance.

    Class Structure
    
    Parent Class: User
    
    Public Members
        accountHolder
        
    Constructor
    Initialize account holder name
    
    Method
    showUser() → displays account holder name
    
    Child Class: BankAccount

    Inherit from User
    
    Private Members
        __balance
    
    Methods
        deposit(amount)
        withdraw(amount)
        getBalance()
        
    Detailed Tasks
    1. Create a User parent class.
    
        Requirements:
            store account holder name
            create method to display user information
    
    2. Create a child class BankAccount.
    
        Requirements:
            inherit from User
            create private variable __balance
            initialize balance using constructor
    
    3. Create method deposit(amount)
    
    Requirements:
        add amount to balance
        print updated balance
        reject negative deposits
        
    4. Create method withdraw(amount)
    
        Requirements:
            subtract amount from balance
            prevent:
            negative withdrawal
            withdrawal greater than balance
            display remaining balance
    
    5. Create method getBalance()
    
        Requirements:
            safely return private balance
            use this method instead of direct access
'''