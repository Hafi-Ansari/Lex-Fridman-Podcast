from youtube_transcript_api import YouTubeTranscriptApi

video_id = "L_Guz73e6fw"

transcript = YouTubeTranscriptApi.get_transcript(video_id)

# Extract the text from each dictionary in the transcript list
text_list = [item["text"] for item in transcript]

# Join the extracted text into a single string
transcript_text = " ".join(text_list)

with open("podcast.txt", "w") as file:
    # Write the text to the file
    file.write(transcript_text)