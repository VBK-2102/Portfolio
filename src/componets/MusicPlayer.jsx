const MusicPlayer = () => {
  return (
    <div className="my-8">
      <iframe 
        src="https://open.spotify.com/embed/track/5RBffvydmhyFFxNZDVv3OF?utm_source=generator" 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
      </iframe>
    </div>
  );
};

export default MusicPlayer;
