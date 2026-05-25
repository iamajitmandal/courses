# 21st April, 2026
# Learning about Dictionary

boy = {
    "firstName" : 'Ajit',
    "lastName" : 'Mandal',
    "Age" : 25,
    "City" :["Pokhara", "Kathmandu"],
    "Religion" : "Hindu",
    "Height" : 6,
    "Weight" : 60
}

print(boy)
print(type(boy))

print(len(boy))

print(boy.keys())
print(boy.values())
print(boy["City"])
print(boy["City"][0])
print(boy["City"][1])

# updating dictionary

user_info = {
    "id" : 1,
    "name" : "Rohan",
    "city" : "Kathmandu"
}

# method 1
# user_info['city'] = "Dharan"
# print(user_info)
# user_info['number'] = 900
# user_info['address'] = "Koteshwor"
# print(user_info)

# method 2: using update()

user_info.update({
    "city" : "Dharan",
    "name" : "Ajit",
    "number" : 900
})
print(user_info)

# removing data
# del
# pop
# popitem
# clear

# del
user = {
    "firstName" : 'Ajit',
    "lastName" : 'Mandal',
    "Age" : 25,
    "City" :["Pokhara", "Kathmandu"],
    "Religion" : "Hindu",
    "Height" : 6,
    "Weight" : 60
}
del user['Age']
print(user)
# del user # remnoves entire dictionary
# print(user)

# pop
user.pop('City')
print(user)
# user.pop() # gives error because one key must be passed

# popitem: removes the last item, here key is not require
user.popitem()
print(user)
user.popitem()
user.popitem()
user.popitem()
user.popitem()
print(user) # here dictionary becomes empty
# user.popitem() # gives error, becase you cannot work on empty dict and error is 'popitem(): dictionary is empty'

user1 = {
    "firstName" : 'Ajit',
    "lastName" : 'Mandal',
    "Age" : 25,
    "City" :["Pokhara", "Kathmandu"],
    "Religion" : "Hindu",
    "Height" : 6,
    "Weight" : 60
}
# print(user1['cities']) # gives error as 'KeyError: 'cities'
print((user1.get('cities'))) # gives none if key not found
print((user1.get('cities', 'not found'))) # gives 'not found' if key not found

data = {
    "name" : "Hari",
    "phone" : [
        {
            "type" : "NTC",
            "num" : 9844
        },
        {
            "type" : "Ncell",
            "num" : 980
        }
    ]
}

print(f"{data['name']} {data['phone'][0]['type']} is {data['phone'][0]['num']}")
print(f"{data['name']} {data['phone'][1]['type']} is {data['phone'][1]['num']}")

user_info = {
    "name":"hari",
    "address":{
        "temp":"dharan",
        "per":{
            "current":"imadole",
            "old":"balkumari"
        }
    }
}
print(user_info.keys())
print(user_info.values())
print(user_info['address']['per']['current'])
print(user_info['address']['per']['old'])

# loop
print("********** Loop **********")
'''
    for <variable> in <loop-data>:
        code block
'''

for i in [1,2,3,4,5]:
    print(i)

for i in "Nepal":
    print(i)

user2 = {
    "firstName": 'Ajit',
    "lastName": 'Mandal',
    "Age": 25,
    "City": ["Pokhara", "Kathmandu"],
    "Religion": "Hindu",
    "Height": 6,
    "Weight": 60
}

for i in user2:
    print(i, user2[i])

for i in user2.items():
    print(i)

