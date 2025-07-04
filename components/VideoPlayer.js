import { useState, useEffect } from 'react';

const VideoPlayer = ({ url }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setVideo(url);
  }, [url]);

  return (
    <div className="video-player">
      <video
        src={video}
        controls
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;