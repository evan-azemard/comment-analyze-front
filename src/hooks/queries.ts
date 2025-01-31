import { useQuery } from "@tanstack/react-query";
import { fetchYoutubeComments, fetchYoutubeVideoDetails, fetchYoutubeVideos } from "@api/fetchYoutubeVideosApi";
import { fetchUserInfo } from "@api/fetchUserInfoApi";

export function useFetchYoutubeVideos(token: string) {
    return useQuery({
        queryKey: ["getYoutubeVideos", token],
        queryFn: () => fetchYoutubeVideos(token),
        enabled: !!token,
    });
}
export function useFetchUserInfo(token: string) {
    return useQuery({
        queryKey: ["getUserInfos", token],
        queryFn: () => fetchUserInfo(token),
        enabled: !!token,
    })
}

export function useFetchYoutubeVideoById(videoId: string) {
    return useQuery({
        queryKey: ["getYoutubeVideoById", videoId],
        queryFn: () => fetchYoutubeVideoDetails(videoId),
        enabled: !!videoId,
    })
}

export function useFetchYoutubeCommentVideo(videoId: string) {
    return useQuery({
        queryKey: ["getYoutubeCommentVideo", videoId],
        queryFn: () => fetchYoutubeComments(videoId),
        enabled: !!videoId,
        staleTime: 0,
    })
}

