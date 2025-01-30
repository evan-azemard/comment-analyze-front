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

  console.log("fetchYoutubeVideo => ", response.data);

  return response.data.items;
};

