# 15th May, 2026
# Learning db using mysql and python

# apache -> web server
# mysql -> sql server

# learning to create database from phpMyAdmin

# if you update db data without 'WHERE' clause, then all data will be updated
# by chance, if db datas are changed, you cannot revert it back until you don't have backup

# to run sql commands in python,
# first install : pip install mysql-connector-python, but for sqlite, not need to install anything

import mysql.connector
print(mysql.connector)
# above code is to check if there is mysql.connector or not

# db = mysql.connector.connect(
#     user = "root",
#     host = "localhost",
#     # port="", #only if you have changed the port
# )
# print(db)
# one object will be created here

# lets connect to db
conn = mysql.connector.connect(
    user = "root",
    host = "localhost",
    # port="", #only if you have changed the port
    database = "pythonmay15"
)

cursor = conn.cursor()

# SELECT QUERY
# sql = 'SELECT * FROM student'
# cursor.execute(sql)
# conn.commit() # not needed for SELECT, needed only when there is some changes in database like insert, update, delete

# SELECT QUERY
# sql = 'INSERT INTO `student` (`id`, `name`, `address`, `dob`) VALUES (NULL, "sohan", "brt", "2005-06-08")'
# cursor.execute(sql)
# conn.commit()

# UPDATE QUERY
# sql = 'UPDATE student set name = "AjitM" WHERE id = 7 '
# cursor.execute(sql)
# conn.commit()

# DELETE QUERY
# sql = 'DELETE from student WHERE id = 7'
# cursor.execute(sql)
# conn.commit()

# FETCH DATA (SELECT QUERY)
sql = 'SELECT name, address FROM student'
cursor.execute(sql)
# conn.commit() # not needed here, so we will see the results here in the terminal
result = cursor.fetchall()
print(result)

# Next class, we will learn 'REQUEST LIBRARY'