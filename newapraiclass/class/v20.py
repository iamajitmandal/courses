# 13th May, 2026
# Learning about Access Modifier, Polymorphism, File Handling

# name, age, role
# ajit, 20, admin
# ram, 24, staff

# import csv
# with open('data.csv', 'r') as f:
#     data = csv.reader(f)
#     for i in data:
#         print(i[0])
#     print(data)

# import csv
#
# data = [["name", "age", "role"], ["Ram", 25, "Staff"]]
#
# with open("data.csv", "a", newline="") as file:
#     writer = csv.writer(file)
#     writer.writerows(data)

# working with json
# import json
#
# with open("data.json", "r") as f:
#     data = json.load(f)
#     print(type(data))
#     print(data['Name'])
#
# data = {
#     "Name": "Ali",
#     "Age": 21,
#     "Height": 6,
#     "Weight": 70,
#     "City": ["Ktm", "Ith"]
#
# }
#
# with open("data2.json", "w") as file:
#     json.dump(data, file, indent=4)

# download xampp

# Error Handling
print("***** File Handling *****")

# try:
#     print(a)
# except:
#     print("Something went wrong")

# try:
#     a = 1
#     print(a/0)
# except NameError:
#     print("name error")
# except ZeroDivisionError:
#     print("Division Error")
# except:
#     print("Something went wrong")

# displaying error messages by default
try:
    a = 1
    print(a + "rr")
except NameError as e:
    print(e)
except ZeroDivisionError as e:
    print(e)
except Exception as e:
    print(e)



