import React, { useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playAudio = async () => {
            try {
                // Attempt to play the audio
                await audioRef.current.play();
            } catch (error) {
                console.error("Error playing audio:", error);
            }
        };

        // Set loop to true
        audioRef.current.loop = true;

        // Play audio when the component mounts
        playAudio();

        // Clean up function to pause the audio if the component unmounts
        return () => {
            audioRef.current.pause();
        };
    }, []);

    return (
        <div>
            <audio ref={audioRef}>
                <source src="/song.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default MusicPlayer;
