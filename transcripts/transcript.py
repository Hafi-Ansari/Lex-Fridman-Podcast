import os
from pymongo import MongoClient
from dotenv import load_dotenv
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled
import requests
from datetime import datetime

#Lex-Fridman-Podcast.Clips

load_dotenv()

connection_string = os.getenv("MONGO_URL")
client = MongoClient(connection_string)
db = client['Lex-Fridman-Podcast']
collection = db['Podcasts']

response = requests.get('http://localhost:3000/getVideos')
videos_data = response.json()

for video in videos_data:
    video_id = video['id']
    title = video['title']
    published_at = video['publishedAt']
    date = datetime.fromisoformat(published_at.replace("Z", "+00:00")).strftime('%B %d, %Y')

    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        # Extract the text from each dictionary in the transcript list
        text_list = [item["text"] for item in transcript]
        # Join the extracted text into a single string
        transcript_text = " ".join(text_list)

        # Create a new document with the video title, date, and transcript
        document = {"title": title, "date": date, "transcript": transcript_text}
        
        # Insert the document into the collection
        collection.insert_one(document)

    except TranscriptsDisabled:
        print(f"Transcript is not available for video: {title}")
