import React, { useState,useEffect } from 'react';

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]); // Initialize as null
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    if (videos.length > 0 && !currentVideo) {
      setCurrentVideo(videos[0]); // Set the first video as the current video
    }
  }, [videos,currentVideo]); // Only runs when the videos array changes

  // Filter videos based on search term
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6 bg-gray-50 min-h-screen">
      {/* Current Video Section */}
      <div className="flex-1">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl">
          <div className="aspect-video relative">
            <iframe
              src={currentVideo.url}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {currentVideo.title}
            </h2>
          </div>
        </div>
      </div>

      {/* Playlist Section */}
      <div
        className={`w-full lg:w-1/3`}
      >
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Playlist</h3>
          </div>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
            <ul className="space-y-4">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer p-4 rounded-lg transition-transform duration-300 ease-in-out ${
                      currentVideo.url === video.url
                        ? 'bg-blue-50 border-l-4 border-blue-500 scale-105 shadow-sm'
                        : 'hover:bg-gray-100 hover:shadow-md'
                    }`}
                    onClick={() => setCurrentVideo(video)}
                  >
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {video.title}
                    </h4>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No videos found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
