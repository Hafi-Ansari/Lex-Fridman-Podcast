import requests

response = requests.get('http://localhost:3000/getVideos')

# The response from the server will be a JSON string.
# We can convert this to a Python list with the .json() method.
video_ids = response.json()

print(video_ids)
