import axios from "axios";

export const fetchYoutubeVideos = async (token: string) => {
  try {
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
        Accept: "application/json",
      },
    });

    return response.data.items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erreur API YouTube :", error.response?.data);
      throw new Error(`Erreur récupération vidéos : ${error.response?.data?.error?.message || error.message}`);
    }
    throw error;
  }
};
