import React, { useState, useEffect } from "react";

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Better video initialization and updates handling
  useEffect(() => {
    const firstVideo = videos?.[0];
    if (firstVideo && !currentVideo) {
      setCurrentVideo(firstVideo);
    }
  }, [videos, currentVideo]);

  // Safer video filtering with null checks
  const filteredVideos = videos?.filter(video => 
    video?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Handle video selection with URL validation
  const handleVideoSelect = (video) => {
    if (video?.url) {
      setCurrentVideo(video);
    }
  };

  // Extract YouTube video ID more reliably
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Fallback thumbnail URL
  const getThumbnailUrl = (url) => {
    const videoId = getYouTubeId(url);
    return videoId 
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : '/placeholder-video-thumbnail.jpg';
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 lg:p-4 min-h-[500px]">
      {/* Video Player Section */}
      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        {currentVideo ? (
          <div className="relative aspect-video w-full">
            <iframe
              key={currentVideo.url} // Force re-render on video change
              src={currentVideo.url}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-t-lg"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {currentVideo.title}
              </h2>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            {videos.length === 0 ? "No videos available" : "Select a video"}
          </div>
        )}
      </div>

      {/* Playlist Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4 flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Playlist</h3>
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
          {filteredVideos.length > 0 ? (
            <ul className="space-y-2">
              {filteredVideos.map((video) => (
                <li
                  key={video.url}
                  className={`cursor-pointer p-2 flex items-center gap-3 rounded-lg transition-all duration-300 ${
                    currentVideo?.url === video.url
                      ? "bg-blue-50 border-l-4 border-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="w-20 h-12 bg-gray-100 rounded overflow-hidden shadow-sm flex-shrink-0">
                    <img
                      src={getThumbnailUrl(video.url)}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/placeholder-video-thumbnail.jpg';
                      }}
                    />
                  </div>
                  <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {video.title}
                  </h4>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center p-4 text-gray-500">
              {videos.length === 0 ? "No videos added yet" : "No matches found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;