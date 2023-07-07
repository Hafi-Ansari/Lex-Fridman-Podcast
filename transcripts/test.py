import requests

response = requests.get('http://localhost:3000/phraseSearch?q=the')
data = response.json()

print(data)