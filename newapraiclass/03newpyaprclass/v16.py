# class Math():
#     a = 100
#     b = 56
#
#     def add(): # gives error without self
#         return a + b
#
# obj = Math()
# obj.add()

# class Math():
#     a = 100
#     b = 56
#
#     def add(self):
#         return a + b # again gives error says ... name 'a' is not defined
#
# obj = Math()
# obj.add()

class Math():
    a = 100
    b = 56

    def add(self):
        return self.a + self.b

obj = Math()
print(obj.add())

print("*****")

class Math():
    a = 100
    b = 56

    def add(self):
        return self.a + self.b

    def sub(self):
        return self.a - self.b

    def result(self):
        print(self.a)
        print(self.add())
        print(self.sub())

obj = Math()
obj.result()

print("*****")

class Math():
    a = 100
    b = 56

    def add(self):
        return self.a + self.b

    def sub(self):
        return self.a - self.b

    def result(self):
        self.c = "This is attrs from method" # this wont appear until result() function is called
        print(self.a)
        print(self.add())
        print(self.sub())

obj = Math()
obj.result() # now 'c' can be used by all methods
print(obj.c)

# passing dynamic data to the class
# constructor

class Math():
    def __init__(self): # this function runs automatically when an object of this class is created
        print("I am a constructor")

obj = Math()

class Math():
    def __init__(self, a, b):
        print("I am a constructor")
        print(a, b) # a and b cannot be used by other methods, so for that we add self.a = a and self.b = b
        self.a = a
        self.b = b

    def add(self):
        return self.a + self.b

obj = Math(45, 55)
print(obj.add())

# Student Grade System
# Create a class Student with:
#     constructor to initialize name, roll_no, and marks
#     method to calculate average
#     method to display grade base on average
# Create objects for at least 3 students

class Student():
    def __init__(self, name, roll_no, marks):
        self.name = name
        self.roll_no = roll_no
        self.marks = marks

    def calculate_average(self):
        return sum(self.marks) / len(self.marks)

    def display_grade(self):
        avg = self.calculate_average()

        if avg >= 90:
            grade = "A"
        elif avg >= 75:
            grade = "B"
        elif avg >= 60:
            grade = "C"
        elif avg >= 40:
            grade = "D"
        else:
            grade = "F"

        print(f"Name: {self.name}, Roll No: {self.roll_no}")
        print(f"Average: {avg:.2f}, Grade: {grade}")
        print("-" * 40)

# Creating objects for 3 students
s1 = Student("Ajit", 1, [85, 90, 88])
s2 = Student("Ravi", 2, [70, 75, 72])
s3 = Student("Sita", 3, [50, 60, 55])

# Display results
s1.display_grade()
s2.display_grade()
s3.display_grade()

# Create a class BankAccount with:
#     constructor for initializing account_holder, balance
#         methods:
#             deposit(amount)
#             withdraw(amount)
#             display_balance()
#
#     Prevent withdrawal if balance is sufficient





