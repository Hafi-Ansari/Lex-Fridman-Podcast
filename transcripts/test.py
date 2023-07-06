from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled
import requests
import textwrap
from datetime import datetime

response = requests.get('http://localhost:3000/getVideos')
videos_data = response.json()

for video in videos_data:
    video_id = video['id']
    title = video['title']
    published_at = video['publishedAt']

    # convert the date to a more human readable format
    date = datetime.fromisoformat(published_at.replace("Z", "+00:00")).strftime('%B %d, %Y')

    try:
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        # Extract the text from each dictionary in the transcript list
        text_list = [item["text"] for item in transcript]
        # Join the extracted text into a single string
        transcript_text = " ".join(text_list)

        with open("podcast.txt", "a") as file:
            # Write the title, date, and formatted text to the file, followed by three newlines
            file.write(f'"{title}" ({date}): "{transcript_text}"\n\n\n')
    except TranscriptsDisabled:
        print(f"Transcript is not available for video: {title}")
