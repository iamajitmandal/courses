# learning api project

import requests
import mysql.connector

db = mysql.connector.connect(
    user = "root",
    host = "localhost",
    #password = "" # if password, then add
    database = "apiproject"
)

terminal = db.cursor()

def insert_data(data):
    query = f'INSERT INTO course (id, title, duration, overview, benefits, price, image_url, level) VALUES {data}'
    terminal.execute(query)
    db.commit()

base_url = "https://api-backend.silversoftlearn.com"
url = f'{base_url}/api/courses'

r = requests.get(url = url)
print(r.status_code)
if r.status_code == 200:
    print("Save this to the database")
    result = r.json()['data']
    for i in result:
        # print(i)
        print(i.keys())
        data = (i['id'], i['title'], i['duration'], i['overview'], i['benefits'], i['price'], i['image_url'], i['level'])
        print(data)
        insert_data(data)
else:
    print("Failure")