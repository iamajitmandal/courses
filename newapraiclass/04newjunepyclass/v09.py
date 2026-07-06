# 11th june, 2026
# Learned Functions and Program Practice

# Functions: reusable block of code that performs specific task
#            can be called as many times as you want,

# Built-in function e.g. print(), input(), len()
# User defined function
# Example:
def greet():
    print('Hello World')

greet() # function call using function name

# function with parameters
def greet(name): # name is parameter
    print('Hello' + name + '!')

greet('John') # John is argument

# Parameter: A variable listed in the function definition that receives a value when the function is called.
#            (variables in the function definition or 'def' keyword statement)
# Argument: The actual value passed to the function when calling it. (variable in function call statement)

# Create a function to add two numbers
def add(a, b): # a and b are parameters
    print(a+b)

add(3,4) # 3 and 4 are arguments
add(4,4) # 4 and 4 are arguments

# function with return
def add(a, b):
    return a + b

add(5, 5) # prints no result
print(add(6, 5)) # prints 11

# None
def add(a, b):
    print(a+b)
add(4, 2) # prints 6
print(add(4, 1)) # prints 5 and also give None also, because every function should have return but if no return is
#                         there in the function, then it returns None

# Golder Rule: Use 'return' in the function, but when you need to print something you can use 'print'

# Write a function to check whether the given number is odd or even
def check_even_odd(num):
    if num % 2 == 0:
        print(num, 'is even')
    else:
        print(num, 'is odd')

check_even_odd(5)
check_even_odd(8)

# function to find the largest among two numbers
def largest(a, b):
    if a > b:
        # return a
        print(a)
    else:
        # return b
        print(b)
largest(4, 6) # prints 6 only
print(largest(4,5)) # prints 5 and then None

# function to check positive, negative or zero
def check_pos_neg_zero(num):
    if num > 0:
        print(num, 'is positive')
    elif num < 0:
        print(num, 'is negative')
    else:
        print(num, 'is zero')
check_pos_neg_zero(5)
check_pos_neg_zero(-1)
check_pos_neg_zero(0)

# function to check Prime Number
# Prime No -> a whole number greater than 1 whose only divisors are 1 and itself
# Method I:
def is_prime(n):
    if n <= 1:
        print(n, 'is not prime')
    else:
        for i in range(2, n):
            if n % i == 0:
                print(n, 'is not a prime number')
                break
            else:
                print(n, 'is a prime number')
                break
is_prime(3)
is_prime(5)
is_prime(11)
is_prime(13)
is_prime(17)
is_prime(19)
is_prime(16)

# Method II:
def is_prime(n):
    if n <= 1:
        return False # this terminates the function

    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(is_prime(3))
print(is_prime(11))
print(is_prime(12))

# function to reverse a string
# class - ssalc
# To reverse a list : L[::-1] -> also valid for string
# l.reverse() - to reverse a list but not valid on string

def reverse_string(text):
    return text[::-1]
print(reverse_string('class'))
print(reverse_string('hello'))

# function to count vowels
def count_vowels(text):
    count = 0
    for ch in text.lower():
        if ch in 'aeiou':
            count += 1
    # print('number of vowels are', count)
    return count
count_vowels('Hello')
print(count_vowels('Nepal'))

# function to find the sum of digits
def sum_of_digits(num):
    total = 0
    while num > 0:
        total += num % 10 # gives last digit
        num //= 10 # removes last digit
    return total

print(sum_of_digits(5))
print(sum_of_digits(10))





