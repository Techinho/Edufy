import React, { useState } from 'react';

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Course Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={currentVideo.url}
              title={currentVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <h4 className="text-lg font-medium text-gray-900 mt-2">{currentVideo.title}</h4>
          <p className="text-sm text-gray-500">{currentVideo.description}</p>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-md font-medium text-gray-900 mb-2">Video List</h4>
          <ul className="space-y-2 overflow-y-auto max-h-96">
            {videos.map((video, index) => (
              <li
                key={index}
                className={`p-2 rounded-md cursor-pointer ${
                  currentVideo.url === video.url ? 'bg-indigo-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => setCurrentVideo(video)}
              >
                <p className="text-sm font-medium text-gray-900">{video.title}</p>
                <p className="text-xs text-gray-500">{video.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaylist;

