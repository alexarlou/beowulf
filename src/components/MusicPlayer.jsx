import React, { useState, useEffect, useRef } from 'react';
import stop from '/stop.svg'
import play from '/play.svg'

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Effect to manage cleanup
  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("https://strm112.1.fm/chilloutlounge_mobile_mp3?aw_0_req.gdpr=true");

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null; // Ensure the audio is stopped and the reference is cleaned up
      }
    };
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => console.error("Error attempting to play audio:", error));
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='player'>
      <div className='player-btn'>
        <button onClick={togglePlayPause}>
          {isPlaying ? 
          <img src={stop} alt="" /> 
          : 
          <img src={play} alt="" />
          }
        </button>
      </div>
      <div className='player-info'>
        <p>Now Playing</p>
        <p>Chill Out Lounge</p>
      </div>
    </div>
  );
};

export default MusicPlayer;