import { useQuery } from "@tanstack/react-query";
import { fetchYoutubeVideos } from "@api/fetchYoutubeVideosApi";
import { fetchUserInfo } from "@api/fetchUserInfoApi";

export function useFetchYoutubeVideos(token: string) {
    return useQuery({
      queryKey: ["youtubeVideos", token],  
      queryFn: () => fetchYoutubeVideos(token),
      enabled: !!token,
    });
}
export function useFetchUserInfo(token: string){
    return useQuery({
        queryKey: ["userInfos", token],
        queryFn: () => fetchUserInfo(token),
        enabled: !!token,
    })
}