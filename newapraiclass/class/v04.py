# 16th April, 2026

'''
if(condition):
  comp
  logical
'''

if(2==2):
  print("this is true condition")
  print("this is also inside true")
else:
  print("this is else condition")

'''
if(2==2):
print("this is true condition") # this is indentation error
'''

# odd even program
n = 11
if(n%2==0):
  print("Even")
else:
  print("odd")

marks = 100
if marks > 100 or marks <=0:
  print("Wrong input")
elif marks >=90:
  if marks == 100:
    print("perfect 100")
  print("A")
elif marks >= 80:
  print("B")
elif marks >= 70:
  print("C")
else:
  if marks == 1: # here, start with if clause not with else like else marks ==1: is wrong
    print("Very Poor")
  print("Fail")

print("Nepal".lower())
print("nepal".title())

age = 20
country = "nepal"
if age > 18:
  if country == "nepal".lower():
    print("Eligible for license")
  else:
    print("Not Eligible for license")
else:
  print("Minor")

is_raining = False
if not is_raining:
  print("Today will not rain")
else:
  print("Today will rain")


gender = "M"
if gender == "M":
  print("Male")
else:
  print("Female")

data = "Male" if gender == "M" else "Female"
print(data)

num = -10
if num>0:
  if num%2 == 0:
    print("Even")
  else:
    print("Odd")
else:
  print("Invalid Number")

# ATM system challenge
# originalPIN = 5555
# balance = 1000
# PIN = int(input("Enter your pin"))
# if PIN == originalPIN:
#   if(balance>500):
#     print("Balance is sufficient for withdraw")
# else:
#   print("PIN is not match")


# lists
number = [1,2,3,4,5]
print(type(number))
a = []
b = [2, 3, "Hello", 66, None, True]
# print(b[12]) # gives error because if element of list doesnot exist then also error occurs
print(b[2])
print(len(b))
print(len(b)-1)