import React from "react";

const YouTubeIframe = ({ src }) => {
  return (
    <iframe
      className="w-full h-full bg-white rounded-lg shadow-md mb-28"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
  );
};

export default YouTubeIframe;
