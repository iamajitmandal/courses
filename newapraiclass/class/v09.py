# 22nd April, 2026
# Learning

# range()
# range() value is always int
# range(1,10,1) # starts from 1, goes upto 9 and increment by 1
range(10,30) # starts from 10, goes upto 29
range(15) # starts from 0, goes upto 14

for i in range(1,10,1):
    print(i)

print("*****")

for i in range(1, 10, 2):
    print(i)

print("*****")

for i in range(10,1,-1):
    print(i)

print("*****")

# even no between 1 to 100
for i in range(2, 100, 2):
    print(i)

print("*****")

# or,
for i in range(1, 100, 1):
    if i % 2 == 0:
        print(i)

print("*****")

# display even no in list
new_lst = []
for i in range(1, 11):
    if i % 2 == 0:
        new_lst.append(i)
print(new_lst)

print("*****")

# add even no in even list and odd no in odd list
even_lst = []
odd_lst = []
for i in range(1, 11):
    if i % 2 == 0:
        even_lst.append(i)
    else:
        odd_lst.append(i)
print(even_lst)
print(odd_lst)

print("***** Nested Loop *****")

# nested for loop
for i in [1,2,3]:
    for j in [4,5,6,7]:
        print(i, j)

print("***** Break Statement *****")

# continue statement and break statement
# continue -> skip an iteration
# break -> to break out of loop

for i in range(1, 10, 1):
    if i == 5:
        break
    print(i)

print("***** Continue Statement *****")

for i in range(1, 10, 1):
    if i == 5:
        continue
    print(i)

print("***** *****")

# from given list, filter out only numbers:
# Method 2 and Method 3 are preferable...
# Method 1
# my_list= [ 1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, "f", 7, "g", 8, "h", 9, "i", 10, "j"]
# for i in my_list:
#     if type(i) == int:
#         print(i)

# Method 2
my_list = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, "f", 7, "g", 8, "h", 9, "i", 10, "j"]
for i in my_list:
    if isinstance(i, int):
        print(i)

# Method 3
my_list = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, "f", 7, "g", 8, "h", 9, "i", 10, "j"]
for i in my_list:
    if not isinstance(i, int):
        continue
    print(i)

print("***** for else loop *****")
# else part runs after the completion of loop
for i in [1,2,3]:
    print(i)
else:
    print("Loop Completed")

# pass: for loops with not loop body, use 'pass'
for i in range(1, 10, 1):
    pass

# or,

for i in range(1, 10, 1):
    ...

print("***** While Loop *****")
# while loop
# for loop -> finite loop, while loop -> infinite loop
# below loop runs infinitely
# while(True):
#     print("This is true")

# print 1 to 1 using while loop
i = 1
while i <= 10:
    print(i)
    i += 1

print("***** Time *****")

import time
print(time)

# print by delaying
i = 1
while i <= 5:
    print(i)
    time.sleep(2)
    i += 1

print("***** Random Numbers *****")
# generate random numbers

# One Question
# Is git pull done in main branch or own branch?




