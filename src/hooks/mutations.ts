import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment, deleteComment, editComment, replyToComment } from "@api/fetchYoutubeVideosApi";

export function useAddComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ videoId, commentText, token }: { videoId: string; commentText: string; token: string }) =>
            addComment(videoId, commentText, token),
        onSuccess: (_, { videoId }) => {
            console.log("Invalidating query for videoId:", videoId);
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo", videoId] });
        },
    }); 
}

export function useEditComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, newText, videoId, token }: { commentId: string; newText: string; videoId:string, token: string }) =>
            editComment(commentId, newText, token),
        onSuccess: (_, { videoId }) => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo", videoId] });
        },
    });
}

export function useDeleteComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, videoId, token }: { commentId: string; videoId: string, token: string }) =>
            deleteComment(commentId, token),
        onSuccess: (_, { videoId }) => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo", videoId] });
        },
    });
}

export function useReplyToComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ parentId, replyText, videoId, token }: { parentId: string; replyText: string, videoId: string, token: string }) =>
            replyToComment(parentId, replyText, token),
        onSuccess: (_, { videoId }) => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo", videoId] });
        },
    });
}
