# 15th April, 2026

# type check
a = 100
print(type(a))

# type validation
# true/false
a = 1
data = isinstance(a,int)
print(data)

# arithmetic: +,-,*,/,%,**,//
# comparison
# logical

# arithmetic: +,-,*,/,%,**,//
a = 10
b = 2
print(a/b) # division is always in decimal -> gives 5.0
print(a//b) # gives integer division (divide and changes into lowest whole number)

# arithmetic operators in string: only add and multiply is poosible
# add: string + string = valid and gives string
a = "Nepal"
b = "Nepal"
print(a+b) # works like concatenation

# multiply: string * string = invalid, string * int = valid
print(a*3)

# typecasting
a = "10"
b = "12"
print(a+b) # gives 1012 so here we need to do typecasting
print(int(a) + int(b)) # but a and b must be numeric, only numeric string can be converted to int using int function

# typecasting, type validation, type checking -> interview questions
x = "hello"
y = "team"
z = 1
# print(x+y+z) #gives error, says cannot concatenate string with number
print(str(x)+str(y)+str(z))

# string formatting
name = "hari"
age = 13
address = "nepal"
box_no = 3123
# name = "hari" and age = 13 and address is "Nepal"
print("name=",name,"and age = ", age, 'and address is ', address)
output = f'name = {name} and age = {age} and address is {address}'
print(output)

#  Comparison
print(1=="1") # checks type also and value also
print("hari"=="Hari")

# learning AND, OR and NOT operator
a = True
b = True
print(a and b)
print(1==2 and "test"!="hello")
print(1==2 or "test"!="hello")
print(not(a))

# input function
# print
a = 10
b = 11
a = int(input("Enter any value"))
a = float(input("Enter any value"))
print("user entered", a)

# Task:
# Download git and github