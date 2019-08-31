import json
import requests

# data = {"booking":{"name": "yoav", "email": "yoav@gomail.com", "date": '04.10.1994', "text": "looking for an info about facial python"}}

data = {"booking":{"name": "yoav", "date": '04.10.1994'}}

json_data = json.dumps(data)

print(json_data)

r =requests.post('http://localhost:3000/bookings', json=data)
