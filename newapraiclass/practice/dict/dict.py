# some rough code while learning
mydict = {
    "first_name": "Ajit",
    "last_name": "Mandal"
}

if "age" in mydict:
    print("Yes, age is present")
else:
    print("No, age is not present")

mydict = {
    "first_name": "Ajit",
    "last_name": "Mandal",
    "age": 25
}

for x in mydict:
    print(x)

for x in mydict.keys():
    print(x)

for x in mydict:
    print(mydict[x])

for x in mydict.values():
    print(x)

# loop through both keys and values using items
for x,y in mydict.items():
    print(x,y)

for x,y in mydict.items():
    print(f"key is {x} and value is {y}")

mydict = {
    "first_name": "Ajit",
    "last_name": "Mandal",
    "age": 25
}
thisdict = mydict.fromkeys(x,y)
print(thisdict)


