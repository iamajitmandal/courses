# 3rd July 2026
# Learned CSV files, JSON, Parsing JSON Strings

# CSV Files: comma separated values is one of the most common used file formats for storing tabular data. It is widely
# used in Python because it is simple and can be opened in Excel, Google Sheets and databases.

# We will use the csv file named 'Salary_Data.csv'

# Reading csv file
# import csv
# with open("Salary_Data.csv", "r") as file:
#     reader = csv.reader(file)
#
#     next(reader) # skip the first row
#     for row in reader:
#         print(row)

# displaying the first row
import csv
with open("Salary_Data.csv", "r") as file:
    reader = csv.reader(file)

    next(reader)
    first_row = next(reader)
    print(first_row)

# displaying the first row, first value
import csv
with open("Salary_Data.csv", "r") as file:
    reader = csv.reader(file)

    next(reader)
    first_row = next(reader)
    print(first_row[0])

# Creating new CSV File
# import csv
# data = [
#     ["Name", "Age", "Course"],
#     ["Ram", 20, "Python"],
#     ["Sita", 22, "AI"],
#     ["Hari", 21, "ML"]
# ]
#
# with open("student.csv", "w", newline="") as file:
#     writer = csv.writer(file)
#     writer.writerows(data)

# append mode for CSV File
# with open("student.csv", "a", newline="") as file:
#     writer = csv.writer(file)
#     writer.writerow(['Gita', 23, 'CyberSecurity'])

# Reading the csv file in the dictionary form
# import csv
# with open("student.csv", "r") as file:
#     reader = csv.DictReader(file)
#
#     for row in reader:
#         print(row)

# To access particular values by column
import csv
with open("student.csv", "r") as file:
    reader = csv.DictReader(file)

    for row in reader:
        print(row["Name"])
        print(row["Age"])
        print(row["Age"])
        print(row["Course"])


# Creating csv file using dictionary method
# import csv
# with open("employee.csv", "w", newline="") as file:
#     fields = ["Name", "Age", "Department"]
#     writer = csv.DictWriter(file, fieldnames=fields)
#     writer.writeheader()
#
#     writer.writerow({
#         "Name":"Shyam",
#         "Age": 20,
#         "Department": "HR"
#     })

# JSON: JavaScript Object Notation
# JSON: lightweight format for storing and transporting data, used when we need to send some data to server
# Examples:
# {
#     "name": "Ram",
#     "age": 32,
#     "course": "Python"
# }
#
# {
#     "student": {
#         "name": "Ram",
#         "age": 22
#     }
# }

# reading json file
import json
with open("student.json", "r") as file:
    data = json.load(file) # read the json file

print(data)

print("Name", data["name"]) # Accessing each values
print("Age", data["age"])

# Writing to json file
# json.dump: used for writing into a json file
# import json
#
# student = {
#     "name": "ram",
#     "age": 22,
#     "course": "Python"
# }
# # Writing 'student' data to a json file named 'student1.json'
# with open("student1.json", "w") as file:
#     json.dump(student, file)

# Parsing JSON Strings:
# parsing: converting json string to python dictionary
# sometimes, we need to parse the json strings coming from APIS
import json
json_string = '''
{
    "name": "ram",
    "age": 22,
    "course": "Python"
}
'''
student = json.loads(json_string)
print(student)
print(student["name"])
