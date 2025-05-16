"use client"

import { useState, useEffect } from "react"

const VideoPlaylist = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Better video initialization and updates handling
  useEffect(() => {
    const firstVideo = videos?.[0]
    if (firstVideo && !currentVideo) {
      setCurrentVideo(firstVideo)
    }
  }, [videos, currentVideo])

  // Safer video filtering with null checks
  const filteredVideos = videos?.filter((video) => video?.title?.toLowerCase().includes(searchTerm.toLowerCase())) || []

  // Handle video selection with URL validation
  const handleVideoSelect = (video) => {
    if (video?.url) {
      setCurrentVideo(video)
    }
  }

  // Extract YouTube video ID more reliably
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url?.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // Fallback thumbnail URL
  const getThumbnailUrl = (url) => {
    const videoId = getYouTubeId(url)
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/placeholder-video-thumbnail.jpg"
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 min-h-[500px]">
      {/* Video Player Section */}
      <div className="flex-1 bg-blue-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-900/30 shadow-xl">
        {currentVideo ? (
          <div className="relative">
            <div className="aspect-video w-full">
              <iframe
                key={currentVideo.url} // Force re-render on video change
                src={currentVideo.url}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 border-t border-blue-900/30">
              <h2 className="text-lg sm:text-xl font-bold text-white">{currentVideo.title}</h2>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-white/50 p-12">
            {videos.length === 0 ? "No videos available" : "Select a video"}
          </div>
        )}
      </div>

      {/* Playlist Section */}
      <div className="w-full lg:w-1/3 bg-blue-950/30 backdrop-blur-sm rounded-xl p-6 border border-blue-900/30 shadow-xl flex flex-col">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-4">Course Playlist</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full pl-10 pr-4 py-2 bg-blue-900/30 border-blue-900/50 text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2.5 text-blue-400"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
          {filteredVideos.length > 0 ? (
            <ul className="space-y-3">
              {filteredVideos.map((video) => (
                <li
                  key={video.url}
                  className={`cursor-pointer flex items-center gap-3 rounded-lg transition-all duration-300 ${
                    currentVideo?.url === video.url
                      ? "bg-blue-600/20 border-l-4 border-blue-600 pl-3"
                      : "hover:bg-blue-900/30 pl-4"
                  }`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="w-20 h-12 bg-blue-950/50 rounded overflow-hidden shadow-sm flex-shrink-0">
                    <img
                      src={getThumbnailUrl(video.url) || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-video-thumbnail.jpg"
                      }}
                    />
                  </div>
                  <h4 className="text-sm font-medium text-white line-clamp-2">{video.title}</h4>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center p-6 text-white/50">
              {videos.length === 0 ? "No videos added yet" : "No matches found"}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoPlaylist

