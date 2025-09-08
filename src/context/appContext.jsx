import React, { createContext, useState } from 'react';
import { courses,faqs,books,quizzes } from '../assets/assets';
import axios from 'axios';

export const AppContext = createContext();


const AppContextProvider = (props) => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const [isLoading,setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const fetchVideosFromPlaylist = async (playlistId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params : {
            part: "snippet",
            playlistId: playlistId,
            key: API_KEY,
            maxResults: 50,
          },
        }
      );
  
      const data = response.data;
  
      const formattedVideos = data.items.map((item) => ({
        title: item.snippet?.title || "Untitled",
        url: item.snippet?.resourceId?.videoId
          ? `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`
          : "",
        description: item.snippet?.description || "No description available",
      }));

  
      setVideos(formattedVideos);
      setIsLoading(false);

       // Update state with fetched videos
      console.log("Fetched data:", data);
      return formattedVideos;
    } catch (error) {
      console.error("Error fetching playlist videos:", error);
      setVideos([]); // Reset to an empty array on error
      return [];
    }
  };
  
  // Professional category icons
  const getCategoryIcon = (category) => {
    const icons = {
      'Web Development': '👨💻',
      'Programming': '⌨️',
      'Computer Science': '🧠',
      'Data Science': '📊',
      'Cybersecurity': '🛡️',
      'Cloud Computing': '☁️',
      'Operating Systems': '🖥️',
      'Mobile Development': '📱',
      'Artificial Intelligence': '🤖',
      'Frontend': '🖼️',
      'Backend': '⚙️',
      'Algorithms': '🔢',
      'Machine Learning': '🤖',
      'Databases': '🗄️',
      'Network Security': '🔒',
      'Infrastructure': '🌐',
      'Linux': '🐧'
    };
    return icons[category] || '📚'; // Default book icon
  };

  const value = {
    courses,
    videos, // Allow global access to fetched videos
    fetchVideosFromPlaylist,
    faqs ,isLoading,books,getCategoryIcon,quizzes// Provide the fetch function
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
