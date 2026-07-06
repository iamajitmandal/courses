# 8th June 2026
# Revising tuple, dictionary

# Dictionary
# key:value pairs

# accessing values using keys
# updating the existing values
# removing the items

# getting all keys & values
student = {
    'name': 'Ram',
    'age': 20,
    'address': 'Kathmandu',
    'country': 'Nepal',
    'marks': 90,
    '24': '20'
}
print(student.keys())
print(student.values())
# for key:value pari
print(student.items())

# Revising 'dictionary' upto here that we learned the previous day

'''
    Data Types Learned
    1. List
    2. Tuple
    3. Range
    4. Dictionary
    5. Sets (Now)
'''

# Sets Data Type
# Sets: collections of well-defined distinct items (distinct means unique, cannot be repeated)
# Items are unordered
# Items are immutable (unchangeable)

s = {'a', 'b', 'a', 'c'}
print(s) # prints 'a' only once in set, as items cannot be repeated in 'Set'
print(len(s)) # also gives 3

# indexing in set
# print(s[0]) # indexing is not possible in set, for this we need to convert it into list or tuple
b = list(s)
print(b[0])

# modifying a set
fruits = {'apple', 'mango', 'orange'}
fruits.add('grapes') # 'grapes' will be added at the end
print(fruits)

fruits.remove('mango') # 'banana' will be removed from the set
print(fruits)

# Set operations
# 1. Union 2. Intersection 3. Difference 4. Symmetric Difference

a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8, 9}

result = a.union(b)
print(result)

result = a.intersection(b)
print(result)

result = a.difference(b)
print(result)

result = a.symmetric_difference(b) # removes the intersection part
print(result)

# let's try these set operations on 'List' data types
a = [1, 2, 3, 4, 5]
b = [4, 5, 6, 7, 8, 9]
result = a.union(b) # gives error says 'AttributeError: 'list' object has no attribute 'union''
print(result)

# Revision of what we have learned so far
'''
1. Variables & Basic Data Types
    variable = data storing element
    
    Data types: Numeric, String, Boolean, None
    
    Operators: Arithmetic(+, -, *, /), Logical (AND, OR, NOT), Comparison (<, >, >=, <=)
    
2. Data Structures: How we store the data?

    1. List: sequence of any data-type [................]
        accessing list elements: indexing (positive & negative) - [start, stop, step]
        fundamental properties of list: 
            1. mutuable(changeable)
                A = [1, 2, 3, ....]
                A[0] = 5
                 Now A will be: [0, 2, 3..... 
                 
            2. Dynamic in nature: once defined, list can grow
                .extend() -> grows list
                .remove() -> 
                .reverse()
                .pop() 
    2. Tuple: 
        X = (1, 2, 3)
        X = (1) # not tuple just 'int'
        to make this tuple
        
        X = (1, ) # this is singleton tuple
        
        properties of tuple:
            immutable
            
            packing/unpacking in tuple
            
            x = ('Ram', 80)
            
            # below operations are not possible in tuple:
                x(1) = 80
                x.remove()
                x.add()
                
            # some functions....
             .count()
             .index()
    3. Range:
        Range(start, stop, step)
        
    4. Dictionary:
        key:value pair
        
        access using keys...
        
        .keys()
        .values()
        .items()
        len()
    
    5. Sets:
        collection of well-define objects
        
        cannot be accessed, must be converted into list or tuple
        set operations

'''




