import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { ICommentsTableProps, IComment } from "./CommentTable.props";
import { CommentRow } from "@molecules/CommentRow";

export const CommentsTable: React.FC<ICommentsTableProps> = ({ comments }) => {
    return (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Auteur</TableCell>
                        <TableCell>Commentaire</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {comments.map((comment: IComment) => (
                        <CommentRow key={comment.id} comment={comment} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
