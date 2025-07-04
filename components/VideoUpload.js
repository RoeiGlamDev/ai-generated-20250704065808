import { useState } from 'react';

const VideoUpload = ({ onUpload }) => {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (e) => {
    e.preventDefault();
    setUploading(true);
    const videoFile = e.target.files[0];
    const videoUrl = URL.createObjectURL(videoFile);
    setVideo(videoUrl);
    onUpload(videoUrl);
    setUploading(false);
  };

  return (
    <form onSubmit={handleUpload}>
      <input
        type="file"
        accept="video/mp4"
        onChange={handleUpload}
        disabled={uploading}
      />
      {uploading ? (
        <p>Uploading...</p>
      ) : (
        <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Upload Video
        </button>
      )}
    </form>
  );
};

export default VideoUpload;