import React, { useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // Play the audio when the component mounts
        audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default MusicPlayer;
