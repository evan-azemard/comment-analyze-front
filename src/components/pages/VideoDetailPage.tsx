import { useParams } from "react-router-dom";
import { useFetchYoutubeVideoById } from "@hooks/queries";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { VideoDetails } from "@molecules/VideoDetails";
import { CommentsTable } from "@molecules/CommentsTable";

export const VideoDetailPage: React.FC = () => {
    const { id } = useParams();

    const { data: video, isLoading, isError } = useFetchYoutubeVideoById(id ?? "");

    if (isLoading) return <p>Chargement des détails...</p>;
    if (isError || !video) return <p>Erreur ou vidéo introuvable.</p>;

    const { videoDetails, comments } = video;

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Détails de la vidéo
            </Typography>

            <VideoDetails
                title={videoDetails.snippet.title}
                description={videoDetails.snippet.description}
                videoId={id!}
            />

            <CommentsTable comments={comments} />
        </Container>
    );
};
