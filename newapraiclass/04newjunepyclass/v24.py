# 6th July,2026
# Learned Errors & Exception Handling

# Error Handling
# Types of Error:
# 1. Syntax Error: due to mistakes in the syntax
# 2. Logical Error/Exception: due to illegal operations that are not allowed

# Information in error message:
# 1. File Name
# 2. The line Number
# 3. The proximate location
# 4. Error Type

# Built in Exceptions:
# ArithmeticError
# KeyError
# MemoryError: eg. big = [0]*(10**20) 'says cannot fit 'int' into an index-sized integer
# StopIteration
# TabError

# Examples of all above exceptions:

# Syntax of Exception Handling:
# try:
#     # code that may cause an exception
#  except ExceptionTYpe:
#      # code to handle the expression

# Example:
# try:
#     number = int(input("Enter a number"))
#     print(100/number)
#
# except ZeroDivisionError:
#     print("You cannot divide a number by zero")

# Example:
# try:
#     number = int(input("Enter a number "))
#     print(100/number)
# except ValueError:
#     print("Please enter only valid numbers")
# except ZeroDivisionError:
#     print("You cannot divide a number by zero")

# As a programmer, think what kind of exception can occur and you need to handle the exceptions accordingly

# finally: This block always runs

# Example:
balance = 100
try:
    amount = int(input("Enter withdrawal amount: "))
    if amount > balance:
        raise ValueError("Insufficient Balance")

    balance -= amount
    print("Remaining balance: ", balance)

except ValueError as e:
    print("Transaction failed", e)

finally: # This block will always run even if some exception occurs or not
    print("Thank You for using our ATM")

# run above code by input: 50, 200, abcd type of values for amount

#
import json
file = None
try:
    print("Opening Configuration File")
    file = open("config.json", "r")
    config = json.load(file)
    model = config["model"]
    temperature = config["Temperature"]
except FileNotFoundError:
    print("Configuration File Not Found.")
except json.JSONDecodeError:
    print("Error: Invalid JSON Format.")
except KeyError as e:
    print(f"Missing configuration key: {e}")
else: # else block of error handling
    print(f"\nConfiguration Loaded Successfully")
    print(f"Model: {model}")
    print(f"Temperature: {temperature}")
finally:
    if file:
        file.close()
        print("\nConfiguration File Closed.")

# search : else block in error handling

