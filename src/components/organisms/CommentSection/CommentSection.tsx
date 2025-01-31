import { AddComment } from "@molecules/AddComment"
import { CommentsTable, ICommentsTableProps } from "@molecules/CommentsTable"

export const CommentSection: React.FC<ICommentsTableProps> = ({ comments, videoId }) => {

    return (
        <>
            <AddComment videoId={videoId!} />
            <CommentsTable comments={comments} />
        </>
    )
}