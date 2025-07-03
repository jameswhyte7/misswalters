import React from "react";

const SpotifyPlaylist = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto my-4">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/1ijbX3NQ0pa5yKroqWG4MM?v=2"
        width="100%"
        height="500"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;

// https://soundcloud.com/linda-m-walters?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing
