from youtube_transcript_api import YouTubeTranscriptApi
import requests

response = requests.get('http://localhost:3000/getVideos')
video_ids = response.json()

for video in video_ids:
    transcript = YouTubeTranscriptApi.get_transcript(video)
    # Extract the text from each dictionary in the transcript list
    text_list = [item["text"] for item in transcript]
    # Join the extracted text into a single string
    transcript_text = " ".join(text_list)

    with open("podcast.txt", "a") as file:
        # Write the text to the file, followed by three newlines
        file.write(transcript_text + "\n\n\n")
