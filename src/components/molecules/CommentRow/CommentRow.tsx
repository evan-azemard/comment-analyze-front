import { Avatar, TableRow, TableCell, Typography, Button, TextField } from "@mui/material";
import { ICommentRowProps } from "./CommentRow.props";
import { useDeleteComment, useEditComment } from "@hooks/mutations";
import { useAuthStore } from "@store/useAuthStore";
import { useState } from "react";

export const CommentRow: React.FC<ICommentRowProps> = ({ comment }) => {
    const { token } = useAuthStore();
    const commentData = comment.snippet.topLevelComment.snippet;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newCommentText, setNewCommentText] = useState<string>(commentData.textDisplay);


    const { mutate: deleteComment } = useDeleteComment();
    const { mutate: editComment } = useEditComment();

    const handleEditComment = () => {
        if (newCommentText !== commentData.textDisplay && token) {
            editComment({
                commentId: comment.snippet.topLevelComment.id,
                newText: newCommentText,
                videoId: comment.snippet.videoId,
                token: token,
            });
            setIsEditing(false);
        }
    }
    return (
        <TableRow>
            <TableCell>
                <Avatar alt={commentData.authorDisplayName} src={commentData.authorProfileImageUrl} sx={{ mr: 2 }} />
                <Typography variant="body1">{commentData.authorDisplayName}</Typography>
            </TableCell>
            <TableCell>
                {isEditing ? (
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        value={newCommentText}
                        onChange={(e) => setNewCommentText(e.target.value)}
                    />
                ) : (
                    <Typography variant="body2">{comment.snippet.topLevelComment.snippet.textDisplay}</Typography>
                )}
            </TableCell>
            <TableCell>
                {isEditing ? (
                    <Button onClick={handleEditComment} variant="contained" color="primary">Enregistrer</Button>
                ) : (
                    <Button onClick={() => setIsEditing(true)} variant="contained" color="secondary">Modifier</Button>
                )}
                <Button
                    sx={{ margin: 1 }} variant="contained"
                    color="error"
                    onClick={() =>
                        deleteComment({
                            commentId: comment.snippet.topLevelComment.id,
                            videoId: comment.snippet.videoId,
                            token,
                        })
                    }
                >Supprimer</Button>
            </TableCell>
        </TableRow>
    );
};
