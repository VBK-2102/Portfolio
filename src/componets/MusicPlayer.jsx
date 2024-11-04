import React, { useRef, useEffect, useState } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = async () => {
    try {
      audioRef.current.volume = 1.0; // Set volume to 100%
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Autoplay failed, user interaction may be required:", error);
    }
  };

  useEffect(() => {
    // Attempt to play audio on component mount
    playAudio();

    // Cleanup function to pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // Reset audio to start
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-4"> {/* Center the audio player */}
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!isPlaying && (
        <button onClick={playAudio} className="mt-2">Play Music</button> // Button styled with margin
      )}
    </div>
  );
};

export default MusicPlayer;
