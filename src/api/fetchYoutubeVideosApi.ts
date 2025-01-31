import axios from "axios";
import { IYoutubeVideo } from "types/YouTubeVideo.interface";

export const fetchYoutubeVideos = async (token: string): Promise<IYoutubeVideo[]> => {
  if (!token) throw new Error("Aucun token fourni");
  const response = await axios.get(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/search`, {
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


export const fetchYoutubeVideoDetails = async (videoId: string): Promise<any> => {

  const response = await axios.get(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/videos`, {
    params: {
      part: "snippet",
      id: videoId,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
  });

  return response.data.items[0];

}

export const fetchYoutubeComments = async (videoId: string): Promise<any> => {
  const response = await axios.get(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/commentThreads`, {
    params: {
      part: "snippet",
      videoId: videoId,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      order: "time",
      textFormat: "plainText",
    },
  });

  return response.data.items;
}

export const addComment = async (videoId: string, commentText: string, token: string): Promise<any> => {
  const response = await axios.post(
    `${import.meta.env.VITE_YOUTUBE_BASE_URL}/commentThreads`,{
      snippet: {
        videoId: videoId,
        topLevelComment: {
          snippet: {
            textOriginal: commentText,
          },
        },
      },
    },
    {
      params: {
        part: "snippet", 
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const editComment = async (commentId: string, newText: string, token: string): Promise<any> => {
  const response = await axios.put(`${import.meta.env.VITE_YOUTUBE_BASE_URL}/comments`,{
      id: commentId,
      snippet: {
        textOriginal: newText,
      },
    },
    {
      params: {
        part: "snippet",
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteComment = async (commentId: string, token: string): Promise<any> => {
  const response = await axios.delete( `${import.meta.env.VITE_YOUTUBE_BASE_URL}/comments`,{
      params: {
        id: commentId,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const replyToComment = async (parentId: string, replyText: string, token: string): Promise<any> => {
  const response = await axios.post( `${import.meta.env.VITE_YOUTUBE_BASE_URL}/comments`,{
      snippet: {
        parentId: parentId,
        textOriginal: replyText,
      },
    },
    {
      params: {
        part: "snippet", 
        key: import.meta.env.VITE_YOUTUBE_API_KEY, 
      },
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    }
  );
  return response.data;
};