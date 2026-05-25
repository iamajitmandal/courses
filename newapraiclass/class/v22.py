# 17th May, 2026
# Learning python request library
import requests

# Python Requests Library
# To install: pip install requests

# import requests
# url = "https://jsonplaceholder.typicode.com/posts/1"
# r = requests.get(url = url)
# # print(r)
# print(r.text)
# if r.status_code == 200:
#     print("success")
# else:
#     print("Failure")

# import requests
# url = "https://jsonplaceholder.typicode.com/posts/1"
# r = requests.get(url = url)
# if r.status_code == 200:
#     # data = r.text
#     data = r.json() # json is understood by all programming language
#     print(data.get("userId"))
#     print(data.get("title"))
# else:
#     print("Failure")


'''
API Base Url
https://www.nrb.org.np/api/forex/v1/

Endpoints

GET /rates
Returns Foreign Exchange Rates for a given range
Parameters

page
Current Page
per_page
Number of items to show per page
from
Starting date (In Y-m-d format)
to
Endingdate (In Y-m-d format)

Example Response
{"status":{"code":400},"errors":{"validation":{"per_page":["Per Page is required","Per Page must be an integer",
"Per Page must be at least 1","Per Page must be no more than 100"],"page":["Page is required","Page must be an integer"],
"from":["From is required","From must be date with format 'Y-m-d'","From must be date with format 'Y-m-d'"],
"to":["To is required"]}},"params":{"from":"","to":"","per_page":"","page":""},"data":{"payload":null},
"pagination":{"page":null,"pages":null,"per_page":null,"total":null,"links":{"prev":null,"next":null}}}
'''
# practicing nrb api
#url = "https://www.nrb.org.np/api/forex/v1/"

url = "https://www.nrb.org.np/api/forex/v1/rates"
params = {"from": "2026-05-01", "to": "2026-05-15", "per_page": "10", "page": "1"}

r = requests.get(url = url, params = params)
# print("URL:", r.url)  # debug
if r.status_code == 200:
    data = r.json()
    # print(data)
    print(type(data))
    print(data.keys())
    result = data['data']
    print(type(result))
    print(result.keys())
    final_result = result['payload']
    for i in final_result:
        print("\n **********")
        date = i['date']
        print(date)
        for j in i['rates']:
            print(f'iso = {j['currency']['iso3']}')
            print(f'name = {j['currency']['name']}')
            print(f'buy = {j['buy']}')
            print(f'sell = {j['sell']}')
            print("----------")
