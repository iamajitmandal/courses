# 26th April, 2026
# Learning about functions

# parameter pass through function

# def check_even_num():
#     n = 10
#     if n % 2 == 0:
#         return "even"
#     else:
#         return "odd"
#
# print(check_even_num())

# using parameter pass

def check_even_num(n):
    if n % 2 == 0:
        return "even"
    else:
        return "odd"

print(check_even_num(50))

def user_info(fname, lname):
    return f"my name is {fname} {lname}"

print(user_info("Ajit", "Mandal"))
# print(user_info("Ajit")) # gives error says 'TypeError: user_info() missing 1 required positional argument: 'lname'
# print(user_info("Ajit", "Mandal", "Kumar")) # gives error says 'TypeError: user_info() takes 2 positional arguments but 3 were given'

# keyword argument
print(user_info(lname="Ram", fname="Karki"))
# print(user_info(Lname="Ram", fname="Karki")) # gives error says 'TypeError: user_info() got an unexpected keyword argument 'Lname'. Did you mean 'lname'?
# print(user_info(lname="Ram", fname="Karki", age=25)) # gives error says 'TypeError: user_info() got an unexpected keyword argument 'age''
# print(user_info(lname="Ram", fname="Karki", age=25)) # gives error says 'TypeError: user_info() got an unexpected keyword argument 'age''

# question for practice
def calculate_salary(base_salary, bonus, deductions, tax_percent):
    total_salary = base_salary + bonus
    tax = (total_salary * tax_percent) / 100
    final_salary = total_salary - tax - deductions

    return final_salary

#print(calculate_salary(5000, 300, 500, 13))
print(calculate_salary(base_salary=5000, deductions=500, bonus=300, tax_percent=13))

# default argument
def calc_area(r, pie = 3.14):
    return pie * r * r

print(calc_area(7))
print(calc_area(7, 5.18))

# def calc_area(pie = 3.14, r): # after default argument, we cannot add any argument
#     return pie * r * r

def calc_area():
    global ar # ar is global, so a can be used globally now
# print(ar) # gives error says 'NameError: name 'ar' is not defined' because ar will not be defined until that func is called

# arbitrary positional arguments
def add_number(a, b, c, d, e):
    return a + b + c + d + e

add_number(2, 3, 4, 5, 6) # works
# add_number(1, 2, 3) # doesnot works
# add_number() # doesnot works
# add_number(1, 2, 3, 4, 5, 6, 7, 8, 9) # doesnot works

# for above scenarios to work, we use arbitrary positional arguments

def add_number(*data):
    return data

print(add_number(2, 3, 4, 5, 6)) # works
print(add_number(1, 2, 3)) # works
print(add_number()) # works
print(add_number(1, 2, 3, 4, 5, 6, 7, 8, 9)) # works

# in above cases, why do you see the output in tuple form? Think

# def add_number(*data): # same like def add_number(*args):
#     sum = 0
#     for x in data:
#         sum += x
#
#     return sum
#
# print(add_number(1, 2, 3, 4, 5, 6, 7, 8, 9))

# use total variable, not sum variable

# total = 0
def add_number(*data):
    total = 0
    for i in data:
        total += i

    print(f"{data} -----> total -----> {total}")
    return total

print(add_number(1, 2, 3, 4, 5, 6, 7, 8, 9))



