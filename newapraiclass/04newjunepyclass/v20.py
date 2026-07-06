# 30th June, 2025
# Learned Iterator & Generator

# iterable

for x in "abcd":
    print(x)

# iterator: something that actually produces values one at a time. It has both iter and next
# iterable: something you can get an iterator from. It has an iter method

fruits = ["Apple", "Banana", "Mango"]
for fruit in fruits:
    print(fruit)

# Python provides the iter() function
fruits = ["Apple", "Banana", "Mango"]
fruit_iterator = iter(fruits)
print(fruit_iterator) # prints iterator object
print(next(fruit_iterator))
print(next(fruit_iterator))
print(next(fruit_iterator))
# print(next(fruit_iterator)) # gives error because iteration is finished 'StopIteration'

numbers = [10, 20, 30, 40]
it = iter(numbers)
print(next(it)) # 10
print(next(it)) # 20
print(next(it)) # 30
print(next(it)) # 40
# print(next(it)) # gives error because iteration is finished 'StopIteration'

# string iterator
text = "Python"
it = iter(text)
print(next(it))
print(next(it))
print(next(it))

# tuple iterator
data = (10, 20, 30, 40, 50)
it = iter(data)

for _ in range(4):
    print(next(it))

# Custom Iterator Class:
class Count:
    def __init__(self, start, end):
        self.current = start
        self.end = end

    def __iter__(self): # if this part is commented, then it gives some error
        return self

    def __next__(self):
        if self.current > self.end:
            raise StopIteration

        value = self.current
        self.current += 1
        return value

Counter = Count(1,10)
for i in Counter:
    print(i)

# Try to understand each part above, and comment and run some part to understand their importance

# raise -> manually force a specified extension to occur

# Fibonacci Iterator: generates numbers sequentially where each number is sum of two preceding ones
class Fibonacci:
    def __init__(self, n):
        self.n = n
        self.count = 0
        self.a = 0
        self.b = 1
        # self.a, self.b = 0, 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.count >= self.n:
            raise StopIteration

        value = self.a
        self.a, self.b = self.b, self.a + self.b
        self.count += 1
        return value

fib = Fibonacci(8)
for i in fib:
    print(i)

'''
Importance of Python Iterators:
Python iterators are important because they enable lazy evaluation, allowing code to process massive datasets 
or infinite data streams one element at a time without loading the entire collection into memory.
'''

''' Generator:
A generator function is a special type of function that returns an iterator object. Instead of using return to send 
back a single value, generator functions use yield to produce a series of results over time. The function pauses 
its execution after yield, maintaining its state between iterations.
'''

# Difference between return and yield in python:
# The primary difference is that return exits a function entirely and sends back a final value, while yield pauses
# the function and sends back an intermediate value, allowing the function to resume exactly where it left off.

# generator example:
def fun(max):
    cnt = 1
    while cnt <= max:
        yield cnt
        cnt += 1

ctr = fun(5)
for n in ctr:
    print(n)
