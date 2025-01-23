import React, { createContext, useState } from 'react';
import { courses,faqs,books } from '../assets/assets';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoading,setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const fetchVideosFromPlaylist = async (playlistId) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
          params: {
            part: "snippet",
            playlistId: playlistId,
            key: "AIzaSyAwZnyy5arkw1D9InRU4G0H-iehW11CZWw",
            maxResults: 100,
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
  

  const value = {
    courses,
    videos, // Allow global access to fetched videos
    fetchVideosFromPlaylist,
    faqs ,isLoading,books// Provide the fetch function
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
