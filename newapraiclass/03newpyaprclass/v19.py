# 12th May, 2026
# Learning about Access Modifier, Polymorphism, File Handling

# Access Modifier
# public modifier
# private modifier
# protected modifier

class Person():
    a = 10
    lname = "Shah"
    __name = "arjun" # this is private modifier

    def _display(self):
        return self.__name + self.lname # self.__name can be used here

class Child(Person):
    def full_name(self):
        #return self.__name # cannot be used here
        return "H"

obj = Child()
print(obj.a)
# print(obj.full_name())

'''

    In Python, access modifiers are naming conventions used to suggest the intended visibility of class members 
    (attributes and methods). Unlike languages like Java or C++, Python does not strictly enforce these restrictions 
    at runtime; it relies on the "we are all consenting adults here" philosophy, trusting developers to respect these signals.
    
    1. Public Access Modifier
        Syntax: No prefix (e.g., self.name).
        Visibility: Accessible from anywhere—inside the class, in subclasses, and from outside the class.
        Default: By default, all members in a Python class are public.
    
    2. Protected Access Modifier
        Syntax: Single underscore prefix (e.g., self._name).
        Visibility: Intended to be accessed only within the class and its subclasses.
        Behavior: It is purely a convention. Python does not prevent you from accessing obj._name from outside the class, 
            but doing so is considered poor practice
            
    3. Private Access Modifier
        Syntax: Double underscore prefix (e.g., self.__name).
        Visibility: Intended to be accessible only within the class where it is defined.
        Name Mangling: Python enforces this by internally renaming the attribute to _ClassName__attributeName. 
            While this makes it harder to access from outside, it is still possible via the mangled name (e.g., obj._MyClass__name)
            
        Example:
            class Employee:
                def __init__(self, name, salary, project):
                    self.name = name              # Public
                    self._project = project        # Protected
                    self.__salary = salary        # Private
            
            emp = Employee("Alice", 50000, "Apollo")
            
            print(emp.name)                 # Works: "Alice"
            print(emp._project)             # Works, but discouraged: "Apollo"
            # print(emp.__salary)           # Raises AttributeError
            print(emp._Employee__salary)    # Works via Name Mangling: 50000

'''

# polymorphism
# in below code, len(a) has same name but does different works
a = "test"
print(len(a))

a = [1, 2, 3, 4, 5, 6]
print(len(a))

a = {
    "name": "arun",
    "address": "nepal"
}

print(len(a))

# Let's learn about File Handling in Python
print("***** File Handling *****")
f = open('/Users/mac/IT/practice/newapraiclass/practice.py', 'r')
print(f.read())
f.close()

# f = open('git.txt', 'w') # opens new file, if there is existing file then removes all its content
# f.write("This is a new file")
# f.close()

f = open('git.txt', 'a') # opens file in the append mode
f.write("This is added line")
f.close()

# in below code, file closes by itself, and is not assigned in any variable so saves space
with open('/Users/mac/IT/practice/newapraiclass/practice.py', 'r') as f:
    print(f.read())


'''
            Mode                Description

        ‘r’	                Read-only. Raises I/O error if file doesn't exist.
        ‘r+’	            Read and write. Raises I/O error if the file does not exist.
        ‘w’	                Write-only. Overwrites file if it exists, else creates a new one.
        ‘w+’	            Read and write. Overwrites file or creates new one.
        ‘a’	                Append-only. Adds data to end. Creates file if it doesn't exist.
        ‘a+’	            Read and append. Pointer at end. Creates file if it doesn't exist.
        ‘rb’	            Read in binary mode. File must exist.
        ‘rb+’	            Read and write in binary mode. File must exist.
        ‘wb’	            Write in binary. Overwrites or creates new.
        ‘wb+’	            Read and write in binary. Overwrites or creates new.
        ‘ab’	            Append in binary. Creates file if not exist.
        ‘ab+’	            Read and append in binary. Creates file if it does not exist.
'''