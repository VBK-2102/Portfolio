import React, { useRef, useEffect, useState } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        audioRef.current.loop = true; // Ensure audio loops
    }, []);

    return (
        <div>
            <audio ref={audioRef}>
                <source src="/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default MusicPlayer;
