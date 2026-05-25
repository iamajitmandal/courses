# Multiplication Table Generator

# n = int(input("Enter the number to see its multiplication table."))
#
# for  i in range(1, 11):
#     print(f"{n} * {i} = {n * i}")

# Here are progressive tasks you can implement to turn into a logic-building playground:
# 🔹 1. Custom Range (User Control)
# Instead of always printing till 10:
# Ask user for start and end range

# n = int(input("Enter the number to see its multiplication table."))
# start = int(input("Enter the start range "))
# stop = int(input("Enter the end range "))
#
# for  i in range(start, stop + 1):
#     print(f"{n} * {i} = {n * i}")

# 🔹 2. Reverse Table
# Print table in reverse order (10 → 1)

# n = int(input("Enter the number to see its multiplication table."))
# stop = int(input("Enter the end range "))
# start = int(input("Enter the start range "))
#
# for  i in range(stop, start - 1, -1):
#     print(f"{n} * {i} = {n * i}")

# 🔹 3. Multiple Tables at Once
# Ask user for how many tables (e.g., 2 to 5)
# Use nested loops
#
# 👉 This builds strong loop logic.

# no_of_tables = int(input("Enter how many tables you want to generate: "))
# for i in range(1, no_of_tables + 1):
#     n = int(input("Enter the number to see its multiplication table: "))
#     start = int(input("Enter the start range: "))
#     stop = int(input("Enter the end range: "))
#
#     for i in range(start, stop):
#         print(f"{n} * {i} = {n * i}")

# 🔹 4. Even/Odd Table Filter
# Print only even multiples OR only odd multiples

# 🔹 5. Store in List Instead of Printing
# Save results in a list first, then print
#
# 👉 Helps you understand data storage + iteration

# no_of_tables = int(input("Enter how many tables you want to generate: "))
# for i in range(1, no_of_tables + 1):
#     n = int(input("Enter the number to see its multiplication table: "))
#     choice = input("Enter which multiples you want: (odd or even)")
#     start = int(input("Enter the start range: "))
#     stop = int(input("Enter the end range: "))
#     odd = []
#     even = []
#
#     for i in range(start, stop + 1):
#         multiple = n * i
#         even.append(multiple) if i % 2 == 0 else odd.append(multiple)
#
#     if choice.lower() == "even":
#         for x in even:
#             print(x)
#     else:
#         for x in odd:
#             print(x)

# 🔹 6. Input Validation
#
# Handle wrong inputs:
#
# What if user enters text?
# What if number is negative?

no_of_tables = int(input("Enter how many tables you want to generate: "))
for i in range(1, no_of_tables + 1):
    n = int(input("Enter the number to see its multiplication table: "))
    choice = input("Enter which multiples you want: (odd or even)")
    start = int(input("Enter the start range: "))
    stop = int(input("Enter the end range: "))
    odd = []
    even = []

    if start > stop:
        print("Start should be less than the stop ")

    for i in range(start, stop + 1):
        multiple = n * i
        even.append(multiple) if i % 2 == 0 else odd.append(multiple)

    if choice.lower() == "even":
        for x in even:
            print(x)
    else:
        for x in odd:
            print(x)


