import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addComment, deleteComment, editComment, replyToComment } from "@api/fetchYoutubeVideosApi";

export function useAddComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ videoId, commentText, token }: { videoId: string; commentText: string; token: string }) =>
            addComment(videoId, commentText, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo"] });
        },
    }); 
}

export function useEditComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, newText, token }: { commentId: string; newText: string;  token: string }) =>
            editComment(commentId, newText, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo"] });
        },
    });
}

export function useDeleteComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ commentId, token }: { commentId: string;  token: string }) =>
            deleteComment(commentId, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo"] });
        },
    });
}

export function useReplyToComment() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ parentId, replyText, token }: { parentId: string; replyText: string, token: string }) =>
            replyToComment(parentId, replyText, token),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getYoutubeCommentVideo"] });
        },
    });
}
