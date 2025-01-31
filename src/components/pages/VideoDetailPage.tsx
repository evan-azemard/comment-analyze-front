import { useParams } from "react-router-dom";
import { useFetchYoutubeCommentVideo, useFetchYoutubeVideoById } from "@hooks/queries";
import { Button, Container, Typography } from "@mui/material";
import { VideoDetails } from "@molecules/VideoDetails";
import { CommentSection } from "@organisms/CommentSection";

export const VideoDetailPage: React.FC = () => {
    const { id } = useParams();

    const {
        data: comments,
        isLoading: isLoadingComments,
        isError: isErrorComments,
        refetch: refetchComment,
    } = useFetchYoutubeCommentVideo(id ?? "");

    const {
        data: videoDetails,
        isLoading: isLoadingVideoDetails,
        isError: isErrorVideoDetails,
        refetch: refetchVideoDetails,
    } = useFetchYoutubeVideoById(id ?? "");

    if (isLoadingVideoDetails || isLoadingComments) {
        return <div>Chargement...</div>;
    }

    if (isErrorVideoDetails || isErrorComments || !videoDetails) {
        return <div>Une erreur est survenue</div>;
    }

    const handleRefetch = () => {
        refetchComment();
        refetchVideoDetails();
    };

    return (

        <Container sx={{ mt: 4 }}>
            <Button onClick={handleRefetch}>Rafraîchir</Button>
            <Typography variant="h4" gutterBottom>
                Détails de la vidéo
            </Typography>

            <VideoDetails
                title={videoDetails.snippet.title}
                description={videoDetails.snippet.description}
                videoId={id!}
            />
            <CommentSection comments={comments} videoId={id} />
        </Container>
    );
};
