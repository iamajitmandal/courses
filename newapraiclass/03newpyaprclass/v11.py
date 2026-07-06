# 24th April, 2026
# Learning about tuples, set, function

# Tuples
# defined with ()
a = [1, 2, 3, 4, 5]
a[0] = 100
print(a)
b = (1, 2, 3, 4, 5)
# b[0] = 100 # gives error 'TypeError: 'tuple' object does not support item assignment'
print(b)

# set
# defined with {}
a = {1, 2, 3, "nepal", "ktm"}
print(a)
c = {1, 2, 3, "test", "nepal", 1, 1, 2, 2, "test"}
print(len(c))
print(c)
print(list(c))

#
d = list(c)
d.append("python")
print(d)

# difference between set and tuple

print("***** Function *****")
# Function

def test():
    print("This is inside function ")
    print("Hello World")

# to run this function, we need to call it
test() # function call

def check_even_num():
    n = 10
    if n % 2 == 0:
        print("Even")
    else:
        print("Odd")
print(check_even_num())

# dont't use print() inside the function, instead use return

def check_even_num():
    n = 10
    if n % 2 == 0:
        return "even"
    else:
        return "odd"
print(check_even_num())



