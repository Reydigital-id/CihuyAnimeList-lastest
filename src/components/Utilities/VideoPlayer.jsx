"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "350",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleCloseButton}
          className="tombol text-primary float-right bg-secondary"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert('Video Trailer tidak tersedia')}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleCloseButton}
        className="trailerWatch fixed bottom-5 right-5 width-32 bg-primary text-dark rounded text-xl shadow-xl hover:bg-accent transition-all"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
