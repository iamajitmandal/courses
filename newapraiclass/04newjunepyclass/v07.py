# 9th June 2026
# Control flow statement in python (pptx is also there)

# if statement
age = 25
if age > 18:
    print("You are eligible for voting")

# if-else statement
age = 10
if age > 18:
    print("You can enter")
    print("Enjoy the party")
else:
    print("Move on")

# if-elif-else statement
# student grade example
# marks = int(input("Enter your marks: "))
# if marks >= 90:
#     print('Grade A')
# elif marks >= 80:
#     print('Grade B')
# elif marks >= 70:
#     print('Grade C')
# else:
#     print("You did not qualify the entrance test")

# class task
# Write a code using if-elif-else, take age from user, and split into category
# age < 13 - child, age < 20 - teenager, age < 60 - adult, age > 60 - senior citizen

# age = int(input("Enter your age "))
# if age < 13:
#     print("You are child")
# elif age < 20:
#     print("You are teenager")
# elif age < 60:
#     print("You are adult")
# else:
#     print("You are senior citizen")

# ternary operator
# short way of writing .... if...else statement
# syntax:
#   value_if_true if condition else value_if_false

num = 8
result = "even" if num % 2 == 0 else "odd"
print(result)

# find the larger number
a = 10
b = 20
largest = a if a > b else b
print(largest)

# python loops: for and while loop
# for loop can be used in sequence data types: like range, list, string
# main principle of for...loop -> until last item is reached, for loop keeps repeating, once last item then stops

for i in range(1, 6):
    print(i)
print("Loop has stopped")

# iterate through list
fruits = ['apple', 'banana', 'orange']
for fruit in fruits:
    print(fruit)

for i in 'sequence':
    print(i)

# calculate sum of numbers
total = 0
for i in range(1, 6):
    total += i
print('Sum = ', total)

# print the multiplication table of 5
for i in range(1, 11):
    print(f'5 * {i} = {5 * i}')

# loop through dictionary
person = {
    "name" : "Ajit",
    "age" : 20
}
for key, value in person.items():
    print(key, value)

# find even numbers
for i in range(1, 11):
    if i % 2 == 0:
        print(i)

# find odd numbers
for i in range(1, 11):
    if i % 2 != 0:
        print(i)

# nested loop - loop inside a loop
for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)