# 29th June, 2026
# Learned filter(), reduce(), list comprehension, dict comprehension(), lambda()

# factorial -> already done by me in previous class

# filter function:
# filter(function, iterable)

# filter even numbers:
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = list(filter(is_even, numbers))
print(result)

# using lambda
numbers = [10, 15, 20, 25, 30]
result = list(filter(lambda x: x>20, numbers))
print(result)

# filter names longer than 4 characters
names = ["Ram", "Alexander", "Ramesh", "Sam"]
result = list(filter(lambda name: len(name) > 4, names))
print(result)

# filter vowels
letters = ['a', 'b', 'e', 'f', 'i', 'o', 'u']
vowels = list(filter(lambda ch: ch in "aeiou", letters))
print(vowels)

# difference between map and filter
# reduce: reduces into a single value
# reduce(function, iterable)

# sum of numbers
from functools import reduce
numbers = [1,2,3,4,5]
result = reduce(lambda x, y: x + y, numbers)
print(result)

# product of numbers
from functools import reduce
numbers = [1,2,3,4,5]
result = reduce(lambda x, y: x * y, numbers)
print(result)

#
from functools import reduce
numbers = [12, 45, 3, 98, 56]
maximum = reduce(lambda x,y: x if x > y else y, numbers)
print(maximum)

# add only even numbers
from functools import reduce
numbers = [1, 2, 3, 4, 5, 6]
even_sum = reduce(lambda x, y: x + y, filter(lambda n: n % 2 == 0, numbers))
print(even_sum)

# find minimum using reduce
from functools import reduce
numbers = [12, 45, 3, 98, 56]
minimum = reduce(lambda x,y: x if x < y else y, numbers)
print(minimum)

print("***** List Comprehension *****")

# list comprehension: concise way of creating a list from an existing iterable (list, tuple, set)

# creating list of square numbers without list comprehension
numbers = [1, 2, 3, 4, 5]
squares = []

for num in numbers:
    squares.append(num**2)

print(squares)

# creating list of square numbers with list comprehension
# new_list = [expression for item in iterable]
numbers = [1, 2, 3, 4, 5]
squares = [num ** 2 for num in numbers]
print(squares)

# More Examples:
numbers = [1, 2, 3, 4, 5]
doubles = [i*2 for i in numbers]
print(doubles)

# convert to uppercase - upper()
names = ['ram', 'shyam', 'ravi']
upper_names = [i.upper() for i in names]
print(upper_names)

# replace -ve numbers with zero
numbers = [-5, -2, -3, 8, -1, 3]
new_numbers = [0 if i < 0 else i for i in numbers]
print(new_numbers)

# dictionary comprehension: concise way to create dictionary
# example
numbers = [1, 2, 3, 4, 5]
square_dict = {num: num**2 for num in numbers}
print(square_dict)

# example
numbers = range(1, 6)
result = {num: "Even" if num % 2 == 0 else "Odd" for num in numbers}
print(result)

# example
words = ["Python", "AI", "Machine", "Learning"]
result = {words: len(words) for words in words}
print(result)


