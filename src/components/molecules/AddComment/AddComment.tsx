import { useState } from "react";
import { IAddComment } from "./AddComment.props";
import { Button, TextField } from "@mui/material";
import { useAuthStore } from "@store/useAuthStore";
import { useAddComment } from "@hooks/mutations";

export const AddComment: React.FC<IAddComment> = ({videoId}) => {
    const { token } = useAuthStore();

    const [commentText, setCommentText] = useState<string>("");
    const { mutateAsync, isPending, isError } = useAddComment();

    const handleAddComment = async () => {
        if (!commentText.trim() || !token ) return;

        try {
            await mutateAsync({ commentText, videoId, token  });
            setCommentText("");
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };


    return (
        <div>
            <TextField
                label="Ajouter un commentaire"
                fullWidth
                multiline
                rows={4}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                disabled={isPending}
            />
            <Button onClick={handleAddComment} disabled={isPending} variant="contained">
                {isPending ? "Chargement..." : "Ajouter un commentaire"}
            </Button>
            {isError && <p>Une erreur est survenue lors de l'ajout du commentaire.</p>}
        </div>
    );


}