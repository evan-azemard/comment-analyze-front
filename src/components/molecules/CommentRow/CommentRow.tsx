import { Avatar, TableRow, TableCell, Typography, Button } from "@mui/material";
import { ICommentRowProps } from "./CommentRow.props";

export const CommentRow: React.FC<ICommentRowProps> = ({ comment }) => {
    const commentData = comment.snippet.topLevelComment.snippet;

    return (
        <TableRow>
            <TableCell>
                <Avatar alt={commentData.authorDisplayName} src={commentData.authorProfileImageUrl} sx={{ mr: 2 }} />
                <Typography variant="body1">{commentData.authorDisplayName}</Typography>
            </TableCell>
            <TableCell>{commentData.textDisplay}</TableCell>
            <TableCell>
                <Button>Supprimer</Button>
            </TableCell>
        </TableRow>
    );
};
