# 26th june 2026
# Learned Polymorphism & Project on Bank System

# Method Overriding
class Animal():
    def speak(self):
        print("Animal makes a sound")

class Dog(Animal):
    def speak(self):
        print("Dog says woof")

class Cat(Animal):
    def speak(self):
        print("Cat says meoew")

dog = Dog()
cat = Cat()

dog.speak() # dog also has speak() method, but perform different actions
cat.speak() # cat also has speak() method, but perform different actions

# Example: len() has same name but performs different actions on string, int, list, tuple, etc
x = "Hello"
print(len(x))
y = 57
# print(len(y)) # cannot be used of int -> says error 'TypeError: object of type 'int' has no len()'
list = [1, 2, 3, 4, 5, 6, 7]
print(len(list))

# Project on Bank Management System
'''
    Features:
        Two Accounts: Saving & Current
        Deposit Money
        Withdraw Money
        Check Balance
        Different Withdrawal Rules
        Interest Calculation
        Transaction History
'''

from abc import ABC, abstractmethod

class BankAccount(ABC):
    def __init__(self, account_no, owner, balance, pin):
        self.account_no = account_no
        self.owner = owner
        self._balance = balance # protected variable
        self.__pin = pin # private variable
        self.transactions = []

    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            self.transactions.append(f"Deposited Rs. {amount}")
            print(f"Rs. {amount} deposited successfully")
        else:
            print("Invalid Amount")

    def show_balance(self):
        print(f"Current Balance: Rs: {self._balance}")

    # Encapsulation:
    def change_pin(self, old_pin, new_pin):
        if old_pin == self.__pin:
            self.pin = new_pin
            print("PIN changed successfully")
        else:
            print("Incorrect Old Pin")

    def verify_pin(self, pin):
        return pin == self.__pin

    def show_transactions(self):
        print("\nTransactions History")
        print("______________________")
        if not self.transactions:
            print("No Transactions Found")
        else:
            for t in self.transactions:
                print(t)

    @abstractmethod
    def withdraw(self, amount):
        pass

# Saving Account
class SavingsAccount(BankAccount):
    def withdraw(self, amount):
        if amount <= self._balance:
            self._balance -= amount
            self.transactions.append(f"Withdrawn Rs. {amount}")
            print("Withdrawal Successfully")
        else:
            print("Insufficient Balance")

    def add_interest(self):
        interest = self._balance * 0.5
        self._balance += interest
        self.transactions.append(f"Interest added Rs. {interest}")
        print(f"Interest of Rs. {interest: .2f} added")

# Current Account
class CurrentAccount(BankAccount):
    overdraft_limit = 5000 # Overdraft(OD) - even if no balance in my account, I can withdraw some amount

    def withdraw(self, amount):
        if amount <= self._balance + self.overdraft_limit:
            self._balance -= amount
            self.transactions.append(f"Withdrawn Rs. {amount}")
            print("Withdrawal Successfully")
        else:
            print("Overdraft Limit Exceeded")

# creating objects
acc1 = SavingsAccount(account_no=101, owner="Ajit", balance=10000, pin="1234")
acc2 = CurrentAccount(account_no=102, owner="Ram", balance=5000, pin="5678")

accounts = [acc1, acc2]
print("="*50)
print("Polymorphism Demo")
print("="*50)

for account in accounts:
    print(f'\n Account Holder: {account.owner}')
    account.withdraw(7000)
    account.show_balance()

# Saving Account Demo
print("\n" + "=" * 50)
print("Savings Account Demo")
print("=" * 50)

acc1.deposit(3000)
acc1.withdraw(4000)
acc1.add_interest()
acc1.show_balance()

# Encapsulation Demo
print("\n" + "=" * 50)
print("Encapsulation Demo")
print("=" * 50)

print("Changing PIN...")
acc1.change_pin("1234", "9999")
print("PIN Verification:", acc1.verify_pin("9999"))

# Checking Transaction History
print("\n" + "=" * 50)
print("Transaction History")
print("=" * 50)

acc1.show_transactions()
print()
acc2.show_transactions()


