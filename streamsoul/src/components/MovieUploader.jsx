// src/components/MovieUploader.jsx
import { useState } from 'react';

const MovieUploader = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="uploader">
      <h2>Upload a Movie</h2>
      <div 
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {file ? <p>{file.name}</p> : <p>Drag and drop a movie file here</p>}
      </div>
    </div>
  );
};

export default MovieUploader;
