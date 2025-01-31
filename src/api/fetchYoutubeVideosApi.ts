import axios from "axios";
import { IYoutubeVideo } from "types/YouTubeVideo.interface";

export const fetchYoutubeVideos = async (token: string): Promise<IYoutubeVideo[]> => {
  if (!token) throw new Error("Aucun token fourni");
  const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      forMine: true,
      type: "video",
      maxResults: 10,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return response.data.items;
};


export const fetchYoutubeVideoDetailsAndComments = async (videoId: string): Promise<any> => {

  const videoDetailsResponse = await axios.get(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/videos`, {
    params: {
      part: "snippet",
      id: videoId,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
  });

  const commentsResponse = await axios.get(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/commentThreads`, {
    params: {
      part: "snippet",
      videoId: videoId,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      maxResults: 10,
      order: "time",
      textFormat: "plainText",
    },
  });
  return {
    videoDetails: videoDetailsResponse.data.items[0],
    comments: commentsResponse.data.items,
  }

}