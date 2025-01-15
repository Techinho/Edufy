import React, { useState } from 'react';

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  console.log(videos)

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Current Video Section */}
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all hover:shadow-2xl">
          <div className="aspect-video">
            <iframe
              src={currentVideo.url}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{currentVideo.title}</h2>
           
          </div>
        </div>
      </div>

      {/* Playlist Section */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Playlist</h3>
          <div className="overflow-y-auto max-h-[calc(100vh-250px)] pr-2 ">
            <ul className="space-y-4">
              {videos.map((video, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-4 rounded-lg transition-transform duration-200 ease-in-out ${
                    currentVideo.url === video.url
                      ? 'bg-blue-100 border-l-4 border-blue-500 scale-105'
                      : 'hover:bg-gray-100 hover:shadow-md'
                  }`}
                  onClick={() => setCurrentVideo(video)}
                >
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">{video.title}</h4>
                
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;
