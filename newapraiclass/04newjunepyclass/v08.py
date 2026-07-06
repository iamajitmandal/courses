# 10th June 2026
#

# while...loop
# repeats a block of code as long as a condition is True.

# print numbers from 1 to 5
i = 1
while i <= 5:
    print(i)
    i = i  + 1

# countdown example
count = 10
while count > 0:
    print(count)
    count -= 1
print("Time Over")

# sum of first 5 numbers
i = 1
sum = 0
while i <= 5:
    sum += i
    i += 1
print("sum is ", sum)

# user input until correct password
# password = ""
# while password != "python 123":
#     password = input("Enter password: ")
# print("Access granted")

# atm transaction pin
# correct_pin = "1234"
# pin = ""
#
# while pin != correct_pin: -- left
#     pin = input("Enter pin")

# break & continue
# break is used to immediately exit the loop, even if the loop condition is still True

# for i in range(1, 11):
#     if i == 5:
#         break
#     print(i)

count = 1
while True:
    print(count)
    if count == 50:
        break
    count += 1

# continue : skips the certain criteria
for i in range(1, 11):
    if i == 5:
        continue
    print(i)

# print only odd numbers - left
# for i in range(1, 11):
#     if i%2 == 0

# searching a product
products = ["Laptop", "Mouse", "Keyboard", "Monitor"]
for product in products:
    if product == "Keyboard":
        print("Found !")
        break

students = ["Ram", "Shyam", "Absent", "Hari"]
for student in students:
    if student == "Absent":
        continue
    print("Present: ", student)

# pass statement
age = 18
if age >= 18:
    pass

# combine two lists
# zip: is used to combine two iterable
names = ["Ram", "Shyam", "Hari"]
marks = [80, 90, 100]

for name, marks in zip(names, marks):
    print(f'{name} has scored {marks}')

# print(list(zip(names, marks)))

# enumerate: is used when we need both the index and the value while looping
fruits = ["Apple", "Banana", "Mango"]
for index, fruit in enumerate(fruits):
    print(index, fruit)

# if you need the index to start from 1
fruits = ["Apple", "Banana", "Mango"]
for index, fruit in enumerate(fruits, start = 1):
    print(index, fruit)

# student ranking system
students = ["Ram", "Shyam", "Mango"]
for rank, student in enumerate(students, start = 1):
    print(f'')




