import { useQuery } from "@tanstack/react-query";
import { fetchYoutubeVideoDetailsAndComments, fetchYoutubeVideos } from "@api/fetchYoutubeVideosApi";
import { fetchUserInfo } from "@api/fetchUserInfoApi";

export function useFetchYoutubeVideos(token: string) {
    return useQuery({
        queryKey: ["youtubeVideos", token],
        queryFn: () => fetchYoutubeVideos(token),
        enabled: !!token,
    });
}
export function useFetchUserInfo(token: string) {
    return useQuery({
        queryKey: ["userInfos", token],
        queryFn: () => fetchUserInfo(token),
        enabled: !!token,
    })
}

export function useFetchYoutubeVideoById(videoId: string) {
    return useQuery({
        queryKey: ["youtubeVideoById", videoId],
        queryFn: () => fetchYoutubeVideoDetailsAndComments(videoId),
        enabled: !!videoId,
    })
}