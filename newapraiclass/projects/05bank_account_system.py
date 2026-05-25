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

    12. Test invalid cases:

        negative deposit
        negative withdrawal
        withdrawal greater than balance

        Additional Challenge

            Add:
                transaction history
                account number
                password protection
                transfer money method

        using single inheritance only.
'''

print("***** Bank Account System *****")

class User():
    def __init__(self, account_holder):
        self.account_holder = account_holder

    def show_user(self):
        return f'Account Holder: {self.account_holder}'

class BankAccount(User):
    def __init__(self, account_holder, __balance):
        super().__init__(account_holder)
        self.__balance = __balance

    def deposit(self, amount):
        if amount <= 0:
            return "Deposit amount must be positive!"

        self.__balance += amount

        return f"New Balance: {self.__balance}"

    def withdraw(self, amount):
        if amount <= 0:
            return "Withdrawal amount must be positive!"

        if amount > self.__balance:
            return "Insufficient balance!"

        self.__balance -= amount
        return f"New Balance: {self.__balance}"

    def get_balance(self):
        return f"Your Current Balance: {self.__balance}"

acc1 = BankAccount("Ram", 5000)
print(acc1.show_user())
print(acc1.deposit(2000))
print(acc1.withdraw(10000))
print(acc1.get_balance())






