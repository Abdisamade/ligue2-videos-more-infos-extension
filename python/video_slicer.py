from __future__ import unicode_literals
import youtube_dl
from moviepy.video.io.VideoFileClip import VideoFileClip

# URL of the YouTube video
video_url = 'https://www.youtube.com/watch?v=qGRBeHEN3js'

ydl_opts = {
    "simulate": True,
    "verbose": True
}
with youtube_dl.YoutubeDL(ydl_opts) as ydl:
    ydl.download([video_url])


# # Desired timestamp to capture (in seconds)
# timestamp = 0  # Change this to your desired timestamp

# video_stream = yt.streams.filter(progressive=True, file_extension='mp4').first()
# temp_filename = './out/temp_video.mp4'
# video_stream.download(filename=temp_filename, skip_existing=False)
# video_clip = VideoFileClip(temp_filename)

# while timestamp in range(60):
#     # Extract a frame at the specified timestamp using moviepy
#     frame = video_clip.get_frame(timestamp)

#     # Save the captured frame as an image
#     frame.save_frame(f"out/captured_frame_{timestamp}.jpg")

# # Delete the temporary video file
# video_clip.reader.close()
# video_clip.audio.reader.close_proc()
# video_clip.close()
# import os
# os.remove(temp_filename)