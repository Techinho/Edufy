import React, { createContext, useState } from 'react';
import { courses } from '../assets/assets';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [videos, setVideos] = useState([]);

  const fetchVideosFromPlaylist = async (playlistId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyDgqSa3Qw45lDbGJ5FcpyAkJsHGYIldrKE&maxResults=10`
      );
      const data = await response.json();
      const formattedVideos = data.items.map((item) => ({
        title: item.snippet.title,
        url: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        description: item.snippet.description,
      }));
      setVideos(formattedVideos);
      console.log(data)
      return formattedVideos;
    } catch (error) {
      console.error('Error fetching playlist videos:', error);
      return [];
    }
  };

  const value = {
    courses,
    videos, // Allow global access to fetched videos
    fetchVideosFromPlaylist, // Provide the fetch function
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
