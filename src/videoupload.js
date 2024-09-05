import React, { useState } from 'react';

const VideoUpload = () => {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    const selectedVideo = e.target.files[0];
    setVideo(selectedVideo);
  };

  const handleUpload = () => {
    // Here you can implement the code to upload the video to your server
    console.log('Uploading video:', video);
    // You can use fetch or any other library to make an API call to your server
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload}>Upload</button>

      {video && (
        <div>
          <h2>Preview</h2>
          <video width="500" height="250" controls>
            <source src={URL.createObjectURL(video)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;