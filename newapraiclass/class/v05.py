# 17th April, 2026
# Learning about Lists

'''
    List:
        lists are ordered collection of data items (can have mixed data items like string, no, boolean)
        they store multiple items in a single variable
        list items are separated by commas and enclosed within square brackets [].
        list are changeable (mutable) meaning we can alter them after creation
'''
# Examples:
a = [2, 4, 6, 8, 10]
print(type(a))
print(a[0]) # index starts from 0
# print(a[9]) # gives error, says 'list index out of range'
print(len(a)) # counts no of elements in list
print(a[-3]) # -ve values counts from backside
print(a[-1]) # gives last element

# in other PL, there are arrays, here is LIST
a = [1, 2, 3, 4, 5]
b = ["1", "Hello", "Hi"]
c = [1, "Rohan", True, 11.5]

# slicing
print("\n***** slicing")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Shyam']
# Ram is 0th index, Sohan is 1st index, Mohan is 2nd index
print(name[1:4]) # starts from 2nd index and goes upto (4-1) = 3rd index only
print(name[1:]) # starts from 1st index and extracts all values upto last
print(name[:4]) # starts from 1st index and goes upto 3rd index
print(name[:]) # starts from 1st and goes to last

# lists are MUTABLE, so its data items can be changed

'''
TO ADD ITEMS TO A LIST:
    append
    insert
    extend
    concat
    
    append: adds the element to the last index
    insert: add the element to the 0th index
    extend: adds new list to the existing list
    concat: adds two list and makes new list
'''
# append
print("\n***** append")
name.append('Krish') # add only element at a time
name.append('Saroj')
# name.append("Ram", "Hari") # gives error says 'list.append() takes exactly one argument (2 given)'
name.append([1,2,3]) # entire new list can also be added to the list
print(name)

# insert
print("\n***** insert")
name.insert(2, "Gopal")
print(name)
name.insert(20, "Firoj") # must be error, because index 20 is no there, but if index ism't there, add to last
print(name)
print("*****")

# extend
print("\n***** extend")
a = [1, 2, 3]
b = [4, 5, 6]
a.extend(b) # b is added to the existing value of a
print(a) # a changes
print(b) # b remains unchanged

# concat
print("\n***** concat")
a = [1,2]
b = [3,4]
c = a + b # here '+' works as concat
print(c)

'''
    TO REMOVE ELEMENTS IN LIST
    del
    remove
    pop
    clear
    
    del: removes entire list
    remove : removes certain values
    pop: removes last element, removes 
    clear: removes all elements of the element and makes the list empty
'''

# del
print("\n***** del")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Shyam']
# del name # removes entire list
# del name[1] # removes entire list
# print(name) # gives error says 'name 'name' is not defined' since list 'name' is deleted in above line
# print(name) # gives error says 'name 'name' is not defined' since list 'name' is deleted in above line

# pop
print("\n***** Pop")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Shyam']
name.pop()
print(name)
name.pop(2)
print(name)
deleted_name = name.pop() # gives the data which was popped
print(deleted_name)

# remove
print("\n***** Remove")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Mohan', 'Shyam']
name.remove("Mohan") # removes the first element which it finds
print(name)

# clear
print("\n***** Clear")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Mohan', 'Shyam']
name.clear()
print(name)

# Some other methods
'''
    count: counts the no of elements in the list
    index: returns positive occurence of the first element in the list
    reverse: reverses the list
'''

# Sort the list alphabetically
print("\n***** Sorting")
# The sort() method sorts the list ascending by default
teachers = ['Nasir', 'Irfan', 'Haris', 'Sheraz', 'Farhan', 'Khalil','Haris', 'Ihsan']
teachers.sort()
print(teachers)

# Sorts the list in descending
teachers = ['Nasir', 'Irfan', 'Haris', 'Sheraz', 'Farhan', 'Khalil','Haris', 'Ihsan']
teachers.sort(reverse = True) # reverse = True, sorts in tne descending order
print(teachers)

# Nested List:
print("\n***** Nested List")
name = ['Ram', 'Sohan', 'Mohan', 'Ishan', 'Rohan', 'Shyam', [1,2,3]]
print(name[6][0])
print(name[6][1])

# Some questions
print("\n***** Practice Questions")
# max and min value in the list
myList = [2, 5, 1, 7, 10, 14]
# print(max(myList))
# print(min(myList))
# print(sum(myList)) # for sum
# without min and max method, find the min and max value
myList.sort()
print(myList[0])
print((myList[-1]))

# Membership Operator:
# in, not in
print("\n***** Membership Operator")
myList = [2, 5, 1, 7, 10, 14]
print(2 in myList)
print(3 in myList)
print(2 not in myList)
print(3 not in myList)


# Task for Next Class
# Make account on github.com
# Install git
# to check git: git --version



