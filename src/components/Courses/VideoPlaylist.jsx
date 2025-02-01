import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setCurrentVideo(null); // Réinitialiser avant de charger la nouvelle playlist
  }, [id]);

  useEffect(() => {
    if (videos.length > 0) {
      setCurrentVideo(videos[0]); // Sélectionner la première vidéo une fois la liste prête
    }
  }, [videos]);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 lg:p-4 ">
      {/* Video Player */}
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        {currentVideo ? (
          <>
            <div className="relative aspect-video w-full">
              <iframe
                src={currentVideo.url}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-t-lg"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">{currentVideo.title}</h2>
            </div>
          </>
        ) : (
          <div className="p-4 text-center text-gray-500">Chargement de la vidéo...</div>
        )}
      </div>

      {/* Playlist */}
      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Playlist</h3>
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="overflow-y-auto max-h-[50vh] custom-scrollbar pr-2">
          {filteredVideos.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredVideos.map((video, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 flex items-center gap-3 rounded-lg transition-transform duration-300 ease-in-out shadow-sm ${
                    currentVideo && currentVideo.url === video.url
                      ? "bg-blue-100 border-l-4 border-blue-600 scale-105"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setCurrentVideo(video)}
                >
                  <div className="w-20 h-12 bg-gray-300 rounded overflow-hidden shadow-md border border-gray-200 flex-shrink-0">
                    <img
                      src={`https://img.youtube.com/vi/${video.url.split("/").pop()}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{video.title}</h4>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No videos found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
